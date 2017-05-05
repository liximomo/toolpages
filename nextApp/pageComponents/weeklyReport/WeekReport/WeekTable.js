import IconButton from 'material-ui/IconButton';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
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

const actionColDefinition = {
  name: 'action',
  text: '操作',
  style: {
    minWidth: 2
  },
};

export default class WeekTable extends React.PureComponent {
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
    const {
      editable,
      onDelEvent,
      onEditEvent,
      widthMatrix,
    } = props;
  
    let {
      cols,
      data,
    } = props;

    const createEditAction = item => (
      <IconButton 
        style={{
          padding: 0,
          width: '16px',
          height: '16px',
          marginRight: '10px',
        }}
        disableTouchRipple
        tooltip="编辑此条目"
        tooltipPosition="top-center"
        onClick={event => onEditEvent(item.id)}
      ><IconEdit /></IconButton>
    );
    const createDelAction = item => (
      <IconButton 
        style={{
          padding: 0,
          width: '16px',
          height: '16px',
        }}
        disableTouchRipple
        tooltip="删除此条目"
        tooltipPosition="top-center"
        onClick={event => onDelEvent(item.id)}
      ><IconDelete /></IconButton>
    );

    if (editable) {
      cols = [actionColDefinition].concat(props.cols);
      data = data.map(item => ({
        ...item,
        action: {
          content: (
            <div>
              {createEditAction(item)}
              {createDelAction(item)}
            </div>
          ),
          length: 1,
        },
      }));
    }

    return (
      <div>
        <h4>{props.title}</h4>
        <table
          ref="table"
          style={tableStyle}
        >
          {colDefinition(cols)}
          <tbody>
            {data.map(eventEntry =>
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

