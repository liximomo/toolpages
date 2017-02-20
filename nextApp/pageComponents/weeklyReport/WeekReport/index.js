import WeekTable from './WeekTable';
import { monday, friday }from '../../../utils/date';

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

export default class WeekReport extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.curWeekTitle = `本周：${weekSpan()}`;
    this.nextWeekTitle = `下周：${weekSpan(1)}`;
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
      <div name={name} >
        <WeekTable title={this.curWeekTitle} cols={this.props.columns} data={curWeek.length ? curWeek : demo} />
        <WeekTable title={this.nextWeekTitle} cols={this.props.columns} data={nextWeek} />
      </div>
    );
  }
};
