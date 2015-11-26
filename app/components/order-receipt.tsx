import * as React from 'react';
import {DragSource} from 'react-dnd';
import {Order} from '../entities';
import {Card} from './card';

type Properties = {
  order: Order,
  key?,
  connectDragPreview?,
  connectDragSource?,
  isDragging?: boolean,
};

export const dragType = 'order';
const events = {beginDrag: (props: Properties) => props.order};

@DragSource(dragType, events, (connect, monitor) => ({
  connectDragPreview: connect.dragPreview(),
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export class OrderReceipt extends React.Component<Properties, {}> {

  render() {
    const {connectDragPreview, connectDragSource, isDragging, order} = this.props;

    return connectDragPreview(connectDragSource(
      <div style={isDragging ? {opacity: 0} : {}}>
        <Card>
          <ul>
            {order.items.map(dish => <h2 key={dish.id}>{dish.name}</h2>)}
          </ul>
        </Card>
      </div>
    ));
  };
}
