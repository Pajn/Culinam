import * as React from 'react';
import {render} from 'react-dom';
import {Link, Router, Route} from 'react-router';

import {Cashier} from './components/cashier';
import {Kitchen} from './components/kitchen';

const styles = Object.freeze({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  nav: {
    width: 64,
    backgroundColor: 'rgb(33, 37, 43);',
  },
  link: {
    display: 'block',
    color: 'white',
  },
  main: {
    flex: 1,
    color: 'whitesmoke',
    backgroundColor: 'rgb(40, 44, 52)',
  }
});

class App extends React.Component<{children: JSX.Element}, {}> {

  render() {
    return <div style={styles.container}>
      <nav style={styles.nav}>
        <Link style={styles.link} to='/cachier'>cachier</Link>
        <Link style={styles.link} to='/kitchen'>kitchen</Link>
      </nav>
      <main style={styles.main}>{this.props.children}</main>
    </div>;
  }
}

render(
  (
    <Router>
      <Route path='/' component={App}>
        <Route path='cachier' component={Cashier} />
        <Route path='kitchen' component={Kitchen} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
