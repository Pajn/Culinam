import * as React from 'react';
import {Link} from 'react-router';

const styles = Object.freeze({
  link: {
    display: 'block',
    color: 'white',
  },
  wrapper: {
    display: 'flex'
  },
});

export class CategoryMenu extends React.Component<{}, {}> {

  render() {
    return(
      <div>
        <Link style={styles.link} to='cashier/dishes'>Maträtter</Link>
        <Link style={styles.link} to='cashier/drinks'>Bar</Link>
      </div>
    );
  }
}
