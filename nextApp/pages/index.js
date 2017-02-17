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
  render () {
    return (
      <div>
        <h3>添加事项</h3>
        <div>
          <TextField
            hintText="Message Field"
            floatingLabelText="MultiLine and FloatingLabel"
          />
        </div>
      </div>
    );
  }
}

export default injectGlobal(MyPage);
// export default MyPage;
