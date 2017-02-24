import Row from './Row';
import { format }from '../../../utils/date';

const LENGTH_RATE = 12;
const CELL_MAX_WIDTH = 500;

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
            }}
          >
            {column.text}
          </td>
        )}
      </tr>
    </thead>
  );
}

export default class WeekTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.props.widthMatrix = props.cols.map(col => col.style.minWidth * 16);
  }

  updateColumnLength = (index, length) => {
   const width =  Math.min(CELL_MAX_WIDTH, length * LENGTH_RATE + 40);
    if (width > this.props.widthMatrix[index]) {
      this.props.widthMatrix[index] = width;
    }
  }

  componentDidMount(prevProps, prevState) {
    const tableElem = this.refs.table;
    const headers = tableElem.querySelectorAll('thead td');
    this.props.widthMatrix.forEach((width, index) => {
      if (width < 0) return;
      headers[index].style.minWidth = `${width}px`;
    });
  }

  render () {
    const props = this.props;
    return (
      <div>
        <h4>{props.title}</h4>
        <table
          ref="table"
          style={tableStyle}
        >
          {colDefinition(props.cols)}
          <tbody>
            {props.data.map(eventEntry =>
              <Row
                key={eventEntry.id}
                {...{
                  ...eventEntry,
                  expectDate: eventEntry.expectDate ? format(eventEntry.expectDate, 'YYYY-MM-DD') : ''
                }}
                onRenderCell={this.updateColumnLength}
              />
            )}
          </tbody>
        </table>
      </div>
    );
  }

}

