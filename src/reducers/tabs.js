import { CHANGE_TAB } from '../actions/tabs';

let intitialState = {
  tabs: [
    { title: "Weird", id: 1 },
    { title: "Not So weird", id: 2 }
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
