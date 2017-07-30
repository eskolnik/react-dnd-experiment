import React from 'react'
import './TabButton.css'

const TabButton = props => {
  let className = props.active ? "TabButton active" : "TabButton"
  let handleClick = () => props.changeTab(props.id)
  return(
    <div className={className} onClick={handleClick}>{props.title}</div>
  )
}

export default TabButton
