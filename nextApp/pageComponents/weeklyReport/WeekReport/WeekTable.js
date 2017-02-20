import Row from './Row';

const tableStyle = {
  borderCollapse: 'collapse',
};

const colDefinition = (columns) => {
  return (
    <thead>
      <tr
        style={{
          backgroundColor: 'silver'
        }}
      >
        {columns.map(column =>
          <td
            key={column.name}
            style={{
              border: '1px solid',
              padding: '10px 12px',
              textAlign: 'center',
              verticalAlign: 'middle',
              ...(column.style || {})
            }}
          >
            {column.text}
          </td>
        )}
      </tr>
    </thead>
  );
}

const WeekTable = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <table
        style={tableStyle}
      >
        {colDefinition(props.cols)}
        <tbody>
          {props.data.map(eventEntry =>
            <Row key={eventEntry.id} {...eventEntry} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WeekTable;
