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
    // debugger;
    const originIndex = monitor.getItem().index
    const targetIndex = props.index;

    if (originIndex === targetIndex) return;  // Don't replace items with themselves

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();    // Determine rectangle on screen
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Get vertical middle

    const clientOffset = monitor.getClientOffset();  // Determine mouse position
    const hoverClientY = clientOffset.y - hoverBoundingRect.top; // Get pixels to the top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    if (originIndex < targetIndex && hoverClientY < hoverMiddleY)  return;     // Dragging downwards


    if (originIndex > targetIndex && hoverClientY > hoverMiddleY) return; // Dragging upwards

    props.moveItem(props.tileId, originIndex, targetIndex);  // Time to actually perform the action
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
