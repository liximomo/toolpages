import React from 'react';
import injectGlobal from '../hoc/global';
import WeekReport from '../pageComponents/weeklyReport/WeekReport';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionDone from 'material-ui/svg-icons/action/done';
import style from '../theme/normal';

const columns = [1,2,3,4,5,6,7,8,9,10,11];

const headStyle = {
  height: style.titleHeight,
  backgroundColor: style.palette.accent1Color,
};

const titleStyle = {
  fontSize: '3.5em',
  color: 'white',
  fontWeight: 500,
  margin: 0,
  paddingTop: '1.5em',
  textAlign: 'center',
};

const fabStyle = {
  position: 'fixed',
  top: 228,
  right: '10%',
};

const view = {
  INIT: 0,
  ADD: 1,
};

class WeeklyReport extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      curView: view.INIT
    };
  }

  addEvent = () => {
    console.log('add event');
  }

  render() {
    const {
      curView
    } = this.state;

    return (
      <div>
        <div style={headStyle} >
          <h1 style={titleStyle} >周报生成器</h1>
        </div>
        <WeekReport
          title="本周"
          columns={columns}
        />
        <FloatingActionButton
          style={fabStyle}
          onClick={this.addEvent}
        >
          {curView === view.INIT ? <ContentAdd /> : <ActionDone /> }
        </FloatingActionButton>
      </div>
    );
  }
}

export default injectGlobal(WeeklyReport);
