import React from 'react';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {  
  FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
  FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete
} from 'formsy-material-ui/lib';

const DEPARTMENTS = [
  '总经办',
  '人事',
  '财务',
  '营销中心',
  '策划中心',
  '运营部',
  '直播部',
  '新媒体',
  '福州公司',
  '合规部',
];

const CONTACTS = [
  '陈彬',

  '钟姚洁',

  '杨海斌',
  '伍远强',

  '庞小龙',
  '范旭',
  '魏海龙',
  '孙建国',
  '付信军',

  '吴奇东',
  '徐琰璋',
  '黄波',
  '胡日猛',
  '刘欢',
  '涂凤朝',

  '李玺',
  '徐阳红',
  '季娜',
  '丁薛',

  '岳颂杰',
  '赵丽忠',

  '殷逸伦',
  '黄宇微',

  '李凯华',
  '李腾',

  '徐鑫',
  '黄毓鸣',
];

const styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20,
  },
  row: {
    display: 'block',
    margin: '0.8em 0',
  },
  formControll: {
    margin: '0 1.2em',
  },
  formControllInline: {
    display: 'inline-block',
    margin: '0 1.2em',
  }
};

const Row = (props) => (
  <div style={styles.row}>
    {props.children}
  </div>
);

const FormControll = (props) => (
  <div style={styles.formControll}>
    {props.children}
  </div>
);

const FormControllInline = (props) => (
  <div style={styles.formControllInline}>
    {props.children}
  </div>
);

export default class EventForm extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      more: false,
    };
  }

  showMore = () => {
    this.setState({
      more: true,
    });
  }

  handleValid = () => {
    this.props.onValid();
  }

  handleInValid = () => {
    this.props.onInValid();
  }

  submit() {
    this.props.onSubmit({
      id: this.props.id,
      ...this.refs.form.getModel(),
      isNext: this.isNext,
    });
  }

  handleWeekChange = (event, isNext) => {
    this.isNext = isNext;
  }

  more() {
    const props = this.props;
    return (
      <Paper style={{ padding: '2em 0' }} zDepth={1}>
        <p
          style={{
            margin: '-0.8em 1.4em 0',
            color: this.context.muiTheme.palette.accent1Color
          }}>补充内容
        </p> 
        <Row>
          <FormControllInline>
            <FormsyDate
              name="expectDate"
              floatingLabelText="目标时间"
              hintText="事项的目标终止时间"
              defaultDate={props.expectDate}
            />
          </FormControllInline>

          <FormControllInline>
            <FormsyText
              name="relation"
              floatingLabelText="第三方/协助方"
              hintText="事项相关协方（人，部门）"
              defaultValue={props.relation}
            />
          </FormControllInline>
        </Row>

        <Row>
          <FormControll>
            <FormsyText
              name="descripe"
              floatingLabelFixed
              multiLine
              floatingLabelText="事项描述"
              hintText="详细描述事项内容"
              style={{
                width: '100%'
              }}
              defaultValue={props.descripe}
            />
          </FormControll>
        </Row>
        <Row>
          <FormControll>
            <FormsyText
              name="currentState"
              floatingLabelFixed
              multiLine
              floatingLabelText="当前状态"
              hintText="描述事项当前的进展，处于什么状态"
              style={{
                width: '100%'
              }}
              defaultValue={props.currentState}
            />
          </FormControll>
        </Row>
        <Row>
          <FormControll>
            <FormsyText
              name="nextState"
              floatingLabelFixed
              multiLine
              floatingLabelText="下一步打算"
              hintText="描述事项接下来的进展，要完成的目标"
              style={{
                width: '100%'
              }}
              defaultValue={props.nextState}
            />
          </FormControll>
        </Row>
        <Row>
          <FormControll>
            <FormsyText
              name="expectState"
              floatingLabelFixed
              multiLine
              floatingLabelText="目标状态"
              hintText="描述事项完成时应达到的状态"
              style={{
                width: '100%'
              }}
              defaultValue={props.expectState}
            />
          </FormControll>
        </Row>
        <Row>
          <FormControll>
            <FormsyText
              name="obstacle"
              floatingLabelFixed
              multiLine
              floatingLabelText="阻碍"
              hintText="描述事项要达到目标状态会遇到或可能存在的疑问、难点、关键点"
              style={{
                width: '100%'
              }}
              defaultValue={props.obstacle}
            />
          </FormControll>
        </Row>
      </Paper>
    );
  }

  render() {
    this.isNext = this.props.isNext || false;

    const props = this.props;
    return (
      <Formsy.Form
        ref="form"
        onValid={this.handleValid}
        onInvalid={this.handleInValid}
      > 
        <Row>
          <FormControll>
            <Toggle
              onToggle={this.handleWeekChange}
              label="下周事项？"
              name="isNext"
              labelStyle={{
                color: 'red',
              }}
              thumbStyle={{
                backgroundColor: '#ffcccc',
              }}
              defaultToggled={props.isNext}
            />
          </FormControll>
        </Row>
        
        <Row>
          <FormControll>
            <FormsyText
              name="event"
              required
              floatingLabelText="事项"
              hintText="事项简述"
              defaultValue={props.event}
            />
          </FormControll>
        </Row>

        <Row>
          <FormControll>
            <FormsySelect
              name="priority"
              floatingLabelText="优先级象限"
              value={props.priority || 'p3'}
            >
              <MenuItem value={'p0'} primaryText="紧急且重要" />
              <MenuItem value={'p1'} primaryText="重要但不紧急" />
              <MenuItem value={'p2'} primaryText="紧急但不重要" />
              <MenuItem value={'p3'} primaryText="不重要不紧急" />
            </FormsySelect>
          </FormControll>
        </Row>

        <Row>
          <FormControllInline>
            <FormsyText
              name="department"
              required
              floatingLabelText="责任部门"
              defaultValue={props.department || '新媒体'}
            />
          </FormControllInline>
          <FormControllInline>
            <FormsyText
              name="person"
              required
              floatingLabelText="责任人"
              hintText="事项负责人"
              defaultValue={props.person}
            />
          </FormControllInline>
        </Row>

        { !this.state.more
          ? <FlatButton
              style={{
                left: -8,
                top: 10
              }}
              label="更多"
              secondary={true}
              onClick={this.showMore}
            />
          : this.more()
        }
      </Formsy.Form>
    )
  }
}

EventForm.contextTypes = {
  muiTheme: React.PropTypes.object,
};
