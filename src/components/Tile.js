import React from 'react';
import { connect } from 'react-redux'

import Item from './Item';
import { moveItem, getItemsForTile } from './../actions/items';
import './Tile.css'

const Tile = props => {
  let { items, moveItem } = props
  let itemComps = items.map(item => {

    return <Item {...item} key={item.id} moveItem={moveItem} />
  })

  return (
    <div className="Tile">
      {itemComps}
    </div>
  )
}



function mapStateToProps(state, ownProps) {
  return {
    items: getItemsForTile(state.items, ownProps.id)
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    moveItem: function moveItem(itemId, dragIndex, targetIndex) {
      dispatch(moveItem(itemId, dragIndex, targetIndex))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Tile);
