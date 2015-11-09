import * as React from 'react';
import {Card} from './card';

const styles = Object.freeze({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    borderBottom: 'solid 2px gray',
  },
});

export class Column extends React.Component<{name: string}, {}> {

  render() {
    return <div style={styles.container}>
      <header style={styles.header}><h2>{this.props.name}</h2></header>
      <div>
        <Card>
          <h1>Mat</h1>
          <h1>Dryck</h1>
        </Card>
      </div>
    </div>;
  }
}
