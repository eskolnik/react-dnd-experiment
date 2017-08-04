import React from 'react';
import { findDOMNode } from 'react-dom';

import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './../constants';
import './Item.css';

class Item extends React.Component {
  render() {
    const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(connectDropTarget(
      <div className="Item">
        {this.props.text}
      </div>
    ))
  }
}

const cardTarget = {
  drop(props, monitor, component) {
    const originIndex = monitor.getItem().index
    const targetIndex = props.index;

    props.moveItem(props.tileId, originIndex, targetIndex);
  },
};

Item = DropTarget(ItemTypes.Item, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(Item)

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

export default DragSource(ItemTypes.Item, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Item);
