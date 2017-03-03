export default class Love extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    Ucavatar(this.refs.canvas, this.props.name, 300);
  }

  componentDidMount() {
    Ucavatar(this.refs.canvas, this.props.name, 300);
  }

  render () {
    return (
      <div style={{
        margin: '0',
      }}>
        <canvas ref="canvas" height="300" width="300"></canvas>
      </div>
    );
  }
}
