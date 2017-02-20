import { format }from '../../../utils/date';

const normalTdStyle = {
  padding: '10px 12px',
  textAlign: 'center',
  verticalAlign: 'middle',
  border: '1px solid',
};

const Cell = (props) => (
  <td
    style={{
      ...normalTdStyle,
      width: props.width || 'auto',
      fontSize: props.fontSize || '12px',
    }}
  >
    {props.children}
  </td>
);

export default (props) => {
  const {
    department, // 责任部门
    event, // 涉及事项
    priority, // 象限
    descripe, // 描述
    currentState, // 当前状态
    nextState, // 下一个目标
    expectState, // 目标状态
    expectDate, // 目标时间
    person, // 责任人
    relation, // 第三方/协助方
    obstacle, // 疑问/难点/关键点
  } = props;
  return (
    <tr>
      <Cell>{department || ' '}</Cell>
      <Cell>{event || ' '}</Cell>
      <Cell>{priority || ' '}</Cell>
      <Cell>{person || ' '}</Cell>
      <Cell>{relation || ' '}</Cell>
      <Cell>{format(expectDate, 'YYYY-MM-DD') || ' '}</Cell>
      <Cell>{expectState || ' '}</Cell>
      <Cell>{obstacle || ' '}</Cell>
      <Cell>{descripe || ' '}</Cell>
      <Cell>{currentState || ' '}</Cell>
      <Cell>{nextState || ' '}</Cell>
    </tr>
  );
};
