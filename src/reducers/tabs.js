import { CHANGE_TAB } from '../actions/tabs';

let intitialState = {
  tabs: [
    { title: "Weird", id: 1, tileIds: [1, 2] },
    { title: "Not So Weird", id: 2, tileIds: [3, 4] }
  ],
  selectedTabId: 1
}

function tabs(state = intitialState, action) {
  switch(action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, { selectedTabId: action.newTabId })
    default:
      return state;
  }
}

export default tabs
