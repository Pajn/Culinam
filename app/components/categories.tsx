import * as React from 'react';

const styles = Object.freeze({
  link: {
    display: 'block',
    color: 'white',
  },
  wrapper: {
    display: 'flex',
    flex: 1,
  },
});

export class Categories extends React.Component<{categories?: JSX.Element}, {}> {

  render() {
    return (
      <div style={styles.wrapper}>
        {this.props.categories}
      </div>
    );
  }
}
