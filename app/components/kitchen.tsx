import * as React from 'react';
import {Column} from './column';

const styles = Object.freeze({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  }
});

export class Kitchen extends React.Component<{}, {}> {
  render() {
    return <div style={styles.container}>
      <Column name='Todo' />
      <Column name='Kan hämtas' />
      <Column name='Uthämtade' />
    </div>;
  }
}
