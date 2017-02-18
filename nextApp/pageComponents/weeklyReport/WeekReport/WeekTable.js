import Row from './Row';

const tableStyle = {
  borderCollapse: 'collapse',
};

const colDefinition = (columns) => {
  return (
    <colgroup>
      {columns.map((column, index) =>
        <col key={index} width="200"/>
      )}
    </colgroup>
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
