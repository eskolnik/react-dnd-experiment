let intitialState = {
  tabs: [
    { title: "Weird", id: 1 },
    { title: "Not So weird", id: 2 }
  ],
  selectedTabId: 1
}

function tabs(state = intitialState, action) {
  return state;
}

export default tabs
