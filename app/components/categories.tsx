import * as React from 'react';

const styles = Object.freeze({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '70%',
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
