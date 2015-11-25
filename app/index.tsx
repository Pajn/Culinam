import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import {render} from 'react-dom';
import {Link, IndexRedirect, Router, Route} from 'react-router';

import {dndBackend} from './dnd';
import {Cashier} from './components/cashier';
import {Kitchen} from './components/kitchen';
import {Drinks} from './components/drinks';
import {Dishes} from './components/dishes';

if (window.document) {
  require('offline-plugin/runtime').install();
}

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
    backgroundColor: 'rgb(33, 37, 43)',
  },
  link: {
    display: 'block',
    color: 'white',
  },
  main: {
    flex: 1,
    color: 'whitesmoke',
    backgroundColor: 'rgb(40, 44, 52)',
  },
});

@DragDropContext(dndBackend())
class App extends React.Component<{children: JSX.Element}, {}> {

  render() {
    return (
      <div style={styles.container}>
        <nav style={styles.nav}>
          <Link style={styles.link} to='/cashier'>Kassa</Link>
          <Link style={styles.link} to='/kitchen'>Kök</Link>
        </nav>
        <main style={styles.main}>{this.props.children}</main>
      </div>
    );
  }
}

export function routes() {
  return (
    <Route path='/' component={App}>
      <IndexRedirect to='/kitchen' />
      <Route path='cashier' component={Cashier}>
        <Route path='dishes' component={Dishes} />
        <Route path='drinks' component={Drinks} />
      </Route>
      <Route path='kitchen' component={Kitchen} />
      <Route path='shell' />
    </Route>
  );
}

if (window.document) {
  render(<Router>{routes()}</Router>, document.getElementById('app'));
}
