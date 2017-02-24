import CopyToClipboard from 'react-copy-to-clipboard';
import RaisedButton from 'material-ui/RaisedButton';

import WeekTable from './WeekTable';
import { monday, friday }from '../../../utils/date';

const LENGTH_RATE = 12;
const CELL_MAX_WIDTH = 500;


function toMonthDay(moment) {
  return moment.format('YYYY/MM/DD');
}

function weekSpan(offset = 0) {
 return [monday(offset * 7), friday(offset * 7)].map(toMonthDay).join('-');
}

const demo = [{
  id: '@demo',
  department: '示例', // 责任部门1
  event: '示例', // 涉及事项1
  priority: '示例', // 象限1
  descripe: '示例', // 描述
  currentState: '示例', // 当前状态
  nextState: '示例', // 下一个目标
  expectState: '示例', // 目标状态
  expectDate: new Date(2017, 0, 8), // 目标时间1
  person: '示例', // 责任人1
  relation: '示例', // 第三方/协助方1
  obstacle: '示例', // 疑问/难点/关键点
}];

const style = {
  btn: {
    height: 24,
    minWidth: 60,
    width: 60,
    // padding: '4px 6px',
  },
  btnLabel: {
    fontSize: 12,
  }
};

export default class WeekReport extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.curWeekTitle = `本周：${weekSpan()}`;
    this.nextWeekTitle = `下周：${weekSpan(1)}`;
    
    this.columnMaxLength = props.columns.map(col => col.style.minWidth * 16);
  }
  
  render() {
    const {
      title,
      columns,
      curWeek,
      nextWeek,
      name,
    } = this.props;
    return (
      <div>
        <div>
          <div style={{
            position: 'relative',
            right: 0
          }}>
            <h4 style={{ textAlign: 'center', marginRight: 10 }} >主题： xx-{weekSpan()}工作周报</h4>
            <CopyToClipboard text={`xx-${weekSpan()}工作周报`}>
              <RaisedButton
                labelStyle={style.btnLabel}
                style={{
                  ...style.btn,
                  position: 'absolute',
                  right: 30,
                  top: 0,
                }}
                secondary
                label="复制"
              />
            </CopyToClipboard>
          </div>
          <div
            style={{
              fontSize: 12,
            }}
          >
            <div
              style={{
                marginBottom: 12,
              }}
            >
              <span style={{ marginRight: 10 }} >收件人：lanyi-tech-list@mufengcm.com</span>
              <CopyToClipboard text={'lanyi-tech-list@mufengcm.com'}>
                <RaisedButton
                  labelStyle={style.btnLabel}
                  style={{
                    ...style.btn,
                  }}
                  secondary
                  label="复制"
                />
              </CopyToClipboard>
            </div>
            
            <div>
              <span style={{ marginRight: 10 }} >抄送：chenbin@mufengcm.com</span>
              <CopyToClipboard text={'chenbin@mufengcm.com'}>
                <RaisedButton
                  labelStyle={style.btnLabel}
                  style={{
                    ...style.btn,
                  }}
                  secondary
                  label="复制"
                />
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div name={name} >
          <WeekTable widthMatrix={this.columnMaxLength} title={this.curWeekTitle} cols={this.props.columns} data={curWeek.length ? curWeek : demo} />
          <WeekTable widthMatrix={this.columnMaxLength} title={this.nextWeekTitle} cols={this.props.columns} data={nextWeek} />
        </div>
      </div>
    );
  }
};
