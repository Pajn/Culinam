import * as React from 'react';

const styles = Object.freeze({
  container: {
    flex: 1,
    margin: 16,
    padding: 8,
    color: 'black',
    backgroundColor: 'white',
  },
});

export class Card extends React.Component<{children?: JSX.Element[]}, {}> {

  render() {
    return <div style={styles.container}>
      {this.props.children}
    </div>;
  };
}
