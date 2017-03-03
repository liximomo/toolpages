import React from 'react';
import injectGlobal from '../hoc/global';

import TextField from 'material-ui/TextField';

// async function getInitialProps() {
//   // eslint-disable-next-line no-undef
//   const res = await fetch('https://api.github.com/repos/zeit/next.js');
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// }

class MyPage extends React.Component {

  componentDidMount() {
    console.log('mount');
  }

  render () {
    return (
      <div style={{
        textAlign: 'center',
      }}>
        <h3>Momo</h3>
        <p>Where are you?</p>
        <input style={{
          border: 'none',
          userSelect: 'all',
          WebkitUserSelect: 'all',
        }} id="sel" defaultValue="mf-1234" readOnly
        />
      </div>
    );
  }
}

export default injectGlobal(MyPage);
// export default MyPage;
