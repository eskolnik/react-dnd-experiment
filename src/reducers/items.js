import { MOVE_ITEM } from './../actions/items'

let intitialState = [
  { id: 45, text: "Death From Above 1979", tileId: 1, index: 0  },
  { id: 8, text: "Talking Heads", tileId: 1, index: 1  },
  { id: 24, text: "Alt-J", tileId: 1, index: 2  },
  { id: 44, text: "Gary Newman", tileId: 1, index: 3  },
  { id: 78, text: "Pixies", tileId: 2, index: 4  },
  { id: 2, text: "The Smiths", tileId: 2, index: 5  },
  { id: 101, text: "B-B-Bowie", tileId: 2, index: 6  },
  { id: 7, text: "The Flaming Lips", tileId: 2, index: 7 , }
]


function items(state = intitialState, action) {
  switch(action.type) {
    case MOVE_ITEM:
      let updatedState = updateItem(state, action)
      let orderedItems = move(updatedState, action.originIndex, action.targetIndex);
      // debugger;
      return orderedItems.map((item, index) => Object.assign({}, item, {index: index }))
    default:
      return state;
  }
}

function updateItem(state, action) {
  let newItem = Object.assign({}, state[action.originIndex], {
    tileId: action.tileId
  })
  return state.map((item, index) => {
    return index === action.originIndex ? newItem : item
  })
}

function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
   return arr;
}


export default items
