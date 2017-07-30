export const MOVE_ITEM = 'MOVE_ITEM'

export const moveItem = (tileId, originIndex, targetIndex) => {
  return {
    type: MOVE_ITEM, tileId, originIndex, targetIndex
  }
}

export const getItemsForTile = function(items, tileId) {
  return items.filter(item => item.tileId === tileId)
}
