import * as React from 'react';
import {DragLayer, DragLayerMonitor} from 'react-dnd';
import {supportsNativeDnd} from '../dnd';
import {Order} from '../entities';
import {OrderReceipt} from './order-receipt';

const styles = Object.freeze({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,

    width: '100%',
    height: '100%',

    pointerEvents: 'none',
  },
});

type Properties = {
  isDragging?: boolean,
  order?: Order,
  offset?: {x: number, y: number},
  width: number,
};

function getItemStyles(props: Properties): Object {
  if (!props.offset) {
    return {
      display: 'none'
    };
  }

  const {x, y} = props.offset;

  return {
    width: props.width,
    transform: `translate(${x}px, ${y}px)`,
  };
}

@DragLayer((monitor: DragLayerMonitor) => ({
  order: monitor.getItem(),
  offset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
}))
export class OrderReceiptPreview extends React.Component<Properties, {}> {

  render() {
    const {order, isDragging} = this.props;
    if (!isDragging || supportsNativeDnd) {
      return null;
    }

    return (
      <div style={styles.container}>
        <div style={getItemStyles(this.props)}>
          <OrderReceipt order={order} />
        </div>
      </div>
    );
  }
}
