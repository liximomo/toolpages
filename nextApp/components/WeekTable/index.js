import Row from './Row';

const tableStyle = {
  borderCollapse: 'collapse',
};

export default class WeekTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.curWeek = [{
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

  colDefinition() {
    return (
      <colgroup>
        {this.props.columns.map(column =>
          <col width="200"/>
        )}
      </colgroup>
    );
  }

  render() {
    const curWeek = this.curWeek;
    const {
      title,
      columns
    } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          style={tableStyle}
        >
          {this.colDefinition()}
          <tbody>
            {curWeek.map(eventEntry =>
              <Row {...eventEntry} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
};
