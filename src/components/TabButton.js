import React from 'react'
import './TabButton.css'

import { DropTarget } from 'react-dnd';
import ItemTypes from './../constants';

const TabButton = props => {
  let className = props.active ? "TabButton active" : "TabButton"
  let handleClick = () => props.changeTab(props.id)
  let { connectDropTarget } = props

  return(
    connectDropTarget(
      <div className={className} onClick={handleClick}>
        <div className="title">
          {props.title}
        </div>
        {props.active && <div className="TabButton-mask" />}
      </div>
    )
  )
}

const TabButtonSpec = {
  hover(props, monitor, component) {
    if(!props.active) {
      setTimeout(() => {
        props.changeTab(props.id)
      }, 1000)
    }
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
})

export default DropTarget(ItemTypes.Item, TabButtonSpec, collect)(TabButton)
