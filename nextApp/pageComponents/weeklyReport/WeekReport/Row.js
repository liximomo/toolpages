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
  let optKeys = [
    'action',
  ];

  const requiredKeys = [
    'department', // 责任部门
    'event', // 涉及事项
    'priority', // 象限
    'person', // 责任人
    'relation', // 第三方/协助方
    'expectDate', // 目标时间
    'expectState', // 目标状态
    'obstacle', // 疑问/难点/关键点
    'descripe', // 描述
    'currentState', // 当前状态
    'nextState', // 下一个目标
  ];

  optKeys = optKeys.filter(key => props.hasOwnProperty(key));
  const keys = optKeys.concat(requiredKeys);

  return (
    <tr>
      {keys.map((key, index) => {
        const cellContent = props[key] || ' ';
        if (typeof cellContent === 'object') {
          props.onRenderCell(index, cellContent.length);
          return <Cell key={index}>{cellContent.content}</Cell>;
        }

        props.onRenderCell(index, cellContent.length);
        return <Cell key={index}>{cellContent}</Cell>;
      })}
    </tr>
  );
};
