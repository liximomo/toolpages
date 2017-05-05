import React from 'react';

import injectGlobal from '../hoc/global';

import uuid from 'uuid/v4';
import mousetrap from 'mousetrap';

import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionHelp from 'material-ui/svg-icons/action/help';

import style from '../theme/normal';

import { copyElement } from '../utils/dom';
import WeekReport from '../pageComponents/weeklyReport/WeekReport';
import EventForm from '../pageComponents/weeklyReport/EventForm';
import MailSender from '../pageComponents/weeklyReport/MailSender';
import fetch from '../helper/fetch';

import '../components/tab_events';

const SECRET_KEY_SEQUENCE = [].join.call('liximomo', ' ');

const styles = {
  headStyle: {
    position: 'relative',
    height: style.titleHeight,
    backgroundColor: style.palette.accent1Color,
  },
  titleStyle: {
    fontSize: '3.5em',
    color: 'white',
    fontWeight: 500,
    margin: 0,
    paddingTop: '1.5em',
    textAlign: 'center',
  },
  fabStyle: {
    position: 'absolute',
    top: 228,
    right: '10%',
  },
  content: {
    margin: '0 auto',
    padding: '2em',
    width: '80%',
    maxWidth: 900,
  }
};

const view = {
  INIT: 0,
  ADD: 1,
};

const weekTableColumns = [{
  name: 'department',
  text: '责任部门',
  style: {
    minWidth: 5
  },
}, {
  name: 'event',
  text: '涉及事项',
  style: {
    minWidth: 5
  },
}, {
  name: 'priority',
  text: '象限',
  style: {
    minWidth: 3
  },
}, {
  name: 'person',
  text: '责任人',
  style: {
    minWidth: 3
  },
}, {
  name: 'relation',
  text: '第三方/协助方',
  style: {
    minWidth: 7
  },
}, {
  name: 'expectDate',
  text: '目标时间',
  style: {
    minWidth: 5
  },
}, {
  name: 'expectState',
  text: '目标状态',
  style: {
    minWidth: 5
  },
}, {
  name: 'obstacle',
  text: '疑问/难点/关键点',
  style: {
    minWidth: 10
  },
}, {
  name: 'descripe',
  text: '描述',
  style: {
    minWidth: 3
  },
}, {
  name: 'currentState',
  text: '当前状态',
  style: {
    minWidth: 5
  },
}, {
  name: 'nextState',
  text: '跟进事项/状态',
  style: {
    minWidth: 8
  },
}];

class WeeklyReport extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showSender: false,
      snackBar: {
        open: false,
        message: null,
      },
      fabEnable: true,
      curView: view.INIT,
      events: [],
      curEdit: null,
    };
    if (typeof window !== 'undefined') {
      window.notify = this.notify;
    } 
  }

  componentDidMount() {
    mousetrap.bind(SECRET_KEY_SEQUENCE, (e) => {
      this.setState({
        showSender: true,
      }, () => {
       Mousetrap.unbind(SECRET_KEY_SEQUENCE);
      });
    });
  }

  bindBackKey = () => {
    mousetrap.bind('esc', (e) => {
      this.setState({
        fabEnable: true,
        curView: view.INIT,
        curEdit: null,
      });
    });
  }

  editEvent = (id) => {
    this.setState({
      curView: view.ADD,
      curEdit: this.state.events.find(item => item.id === id),
    }, this.bindBackKey);
  }

  deleteEvent = (id) => {
    this.setState({
      events: this.state.events.filter(item => item.id !== id),
    });
  }

  formValid = () => {
    this.setState({
      fabEnable: true,
    });
  }

  formInValid = () => {
    this.setState({
      fabEnable: false,
    });
  }

  submitForm = () => {
    this.refs.eventForm.submit();
  }

  handleFormSubmit = (value) => {
    const { id } = value;
    let events = this.state.events;
    if (id) {
      events = events.map(event => event.id === id ? value : event);
    } else {
      events = events.concat({
        ...value,
        id: uuid(),
      });
    }
    this.setState({
      curView: view.INIT,
      fabEnable: true,
      curEdit: null,
      events,
    }, () => {
      mousetrap.unbind('esc');
    });
  }

  handleFabClick = () => {
    if (this.state.curView === view.INIT) {
      this.setState({
        fabEnable: false,
        curView: view.ADD
      }, this.bindBackKey);
    } else {
      this.submitForm();
    }
  }

  notify = (msg) => {
    this.setState({
      snackBar: {
        open: true,
        message: msg,
      },
    });
  }

  handleRequestClose = () => {
    this.setState({
      snackBar: {
        open: false
      },
    });
  };

  copyTable = () => {
    copyElement(document.querySelector('[name="WeekReportRable"]'));
    this.notify('复制成功！');
  }

  tablePreview() {
    const {
      curWeek,
      nextWeek,
    } = this;

    return (
      <div
      >
        <WeekReport
          name="WeekReportRable"
          onDelEvent={this.deleteEvent}
          onEditEvent={this.editEvent}
          columns={weekTableColumns}
          curWeek={curWeek}
          nextWeek={nextWeek}
        />
      </div>
    );
  }

  render() {
    const {
      curView,
      fabEnable,
      snackBar,
      showSender,
      curEdit,
      events,
    } = this.state;

    this.curWeek = [];
    this.nextWeek = [];

    events.forEach(event => {
      if (event.isNext) {
        this.nextWeek.push(event);
      } else {
        this.curWeek.push(event);
      }
    });

    return (
      <div>
        <div style={styles.headStyle} >
          <h1 style={styles.titleStyle} >周报生成器</h1>
          <FloatingActionButton
            disabled={!fabEnable}
            style={styles.fabStyle}
            onClick={this.handleFabClick}
          >
            {curView === view.INIT ? <ContentAdd /> : <ActionDone /> }
          </FloatingActionButton>
        </div>
        <div style={styles.content}>
          {curView === view.INIT
            ? this.tablePreview()
            : <EventForm
                ref="eventForm"
                onValid={this.formValid}
                onInValid={this.formInValid}
                onSubmit={this.handleFormSubmit}
                {...(curEdit || {})}
              />
          }
          <div
            style={{
              display: curView === view.INIT ? 'block' : 'none',
            }}
          >
            <div
              style={{
                margin: '1.2em 0',
                textAlign: 'right'
              }}
            >
              <IconButton
                disableTouchRipple
                tooltip="复制后直接在邮箱编辑框内执行粘贴操作即可将表格完整输出"
                tooltipPosition="top-center"
              >
                <ActionHelp color={this.context.muiTheme.palette.accent3Color} />
              </IconButton>
              <RaisedButton
                secondary
                label="复制"
                onClick={this.copyTable}
              />
            </div>
            {showSender ? <MailSender /> : null}
          </div>
        </div>

        <Snackbar
          open={snackBar.open}
          message={snackBar.message || 'null'}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

WeeklyReport.contextTypes = {
  muiTheme: React.PropTypes.object,
};

export default injectGlobal(WeeklyReport);
