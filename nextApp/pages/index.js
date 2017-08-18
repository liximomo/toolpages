import React from 'react';
import injectGlobal from '../hoc/global';
import Link from 'next/link'

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
      <div style={{ maxWidth: '736px', margin: '0 auto' }}>
        <h2>Momo</h2>
        <section>
          <header><h3>APP</h3></header>
          <section>
            <ul style={{marginTop: '20px'}}>
              <li>
                <Link prefetch href="/weeklyReport"><a>周报生成器</a></Link>
              </li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}

export default injectGlobal(MyPage);
// export default MyPage;
