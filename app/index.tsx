import * as React from 'react';
import {render} from 'react-dom';

import {Hello} from './components/hello';

class App extends React.Component<{}, {}> {

  render() {
    return <Hello />;
  }
}

render(<App />, document.getElementById('app'));
