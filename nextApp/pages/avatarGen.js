import React from 'react';
import injectGlobal from '../hoc/global';
import RaisedButton from 'material-ui/RaisedButton';
// import { Ucavatar } from 'ucavatar';
import TextField from 'material-ui/TextField';

// Ucavatar.js
// Unique avatars generator
//
// Version: 1.0.1
// Author:  Ivan Bogachev <sfi0zy@gmail.com>, 2017
// License: MIT


function strangeHash(str) {
    var hash = 0;
    
    if (str.length === 0) {
        return hash;
    }
    
    for (var i = 0, len = str.length; i < len; i++) {
        var chr = str.charCodeAt(i);

        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    
    return (new Array(9).join('1') + Math.abs(hash)).slice(-8).replace(/0/g, '1');
};


function Ucavatar(canvas, str, size) {
    if (typeof canvas === 'string') {
        canvas = document.querySelector(canvas);
    }

    if (!canvas || !document.body.contains(canvas)) {
        throw new Error('Ucavatar: canvas does not exists');
    }

    if (!size) {
        size = 64;
    }

    canvas.height = size;
    canvas.width = size;

    var ctx  = canvas.getContext('2d'),
        h    = strangeHash(str);
    
    ctx.translate(size/2, size/2);
    ctx.rotate(Math.PI / 4);
    
    for (var i = 0; i < 8; i++) {
        var r = h[0] * 100 % 255,
            g = h[i] * 100 % 255,
            b = h[8 - i] * 100 % 255,
            a = h[i] / 20;
       
        ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

        var c1 = h[i]*h[i] % 8,
            c2 = h[i]*h[7] % 8,
            c3 = Math.min(10, h[i]*h[0] % 24),
            c4 = Math.min(10, h[i]*h[0] % 24);
        
            c1 *= -0.7;
            c2 *= 1.3;
            c3 *= 0.7;
            c4 *= 1.1;
        
        c1 = c1 * size / 32 / 2;
        c2 = c2 * size / 32 / 2;
        c3 = c3 * size / 32 / 2;
        c4 = c4 * size / 32 / 2;
      
        var s = h[7] % 2 + 2;
        for (var j = 0; j < 2 * s; j++) {
            ctx.fillRect(c1, c2, c3, c4);
            ctx.rotate(Math.PI / s);
        }
    }
};


import '../components/tab_events';

class Avatar extends React.Component {

  constructor(props) {
    super(props)
  }

  handleDownlaod = () => {
    const event = document.createEvent('MouseEvents');
    const link = document.createElement('a');
    link.download = this.props.name;
    link.href = this.refs.canvas.toDataURL();
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    link.dispatchEvent(event);
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em 0',
      }}>
        <canvas ref="canvas" height="300" width="300"></canvas>
        <RaisedButton
          primary
          label="下载"
          disableTouchRipple
          onClick={this.handleDownlaod}
        />
      </div>
    );
  }
}

class MyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'liximomo',
    };
  }

  handleNameChange = (event, name) => {
    this.setState({
      name: name,
    });
    console.log(this)
  }

  render () {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
        maxWidth: 640,
        textAlign: 'center',
      }}>
        <h3>头像生成器</h3>
        <TextField
          hintText="输入姓名"
          floatingLabelText="名字"
          onChange={this.handleNameChange}
        />
        <Avatar name={this.state.name} />
      </div>
    );
  }
}

export default injectGlobal(MyPage);
// export default MyPage;
