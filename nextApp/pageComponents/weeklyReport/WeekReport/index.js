import WeekTable from './WeekTable';
import { monday, friday }from '../../../utils/date';

function toMonthDay(moment) {
  return moment.format('YYYY/MM/DD');
}

function weekSpan(offset = 0) {
 return [monday(offset * 7), friday(offset * 7)].map(toMonthDay).join('-');
}

export default class WeekReport extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.curWeekTitle = weekSpan();
    this.nextWeekTitle = weekSpan(1);

    this.curWeek = [{
      id: '1',
      department: 'test', // 责任部门
      event: 'test', // 涉及事项
      priority: 'test', // 象限
      descripe: 'test', // 描述
      currentState: 'test', // 当前状态
      nextState: 'test', // 下一个目标
      expectState: 'test', // 目标状态
      expectDate: 'test', // 目标时间
      person: 'test', // 责任人
      relation: 'test', // 第三方/协助方
      obstacle: 'test', // 疑问/难点/关键点
    }, {
      id: '2',
      department: 'test1', // 责任部门
      event: 'test1', // 涉及事项
      priority: 'test1', // 象限
      descripe: 'test1', // 描述
      currentState: 'test1', // 当前状态
      nextState: 'test1', // 下一个目标
      expectState: 'test1', // 目标状态
      expectDate: 'test1', // 目标时间
      person: 'test1', // 责任人
      relation: 'test1', // 第三方/协助方
      obstacle: 'test1', // 疑问/难点/关键点
    }];
  }

  title() {
    return ''
  }

  render() {
    const curWeek = this.curWeek;
    const {
      title,
      columns
    } = this.props;
    return (
      <div>
        <WeekTable title={this.curWeekTitle} cols={this.props.columns} data={this.curWeek} />
        <WeekTable title={this.nextWeekTitle} cols={this.props.columns} data={this.curWeek} />
      </div>
    );
  }
};
