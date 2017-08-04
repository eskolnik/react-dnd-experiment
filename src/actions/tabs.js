export const CHANGE_TAB = "CHANGE_TAB"

export const changeTab = newTabId => ({
  type: CHANGE_TAB,
  newTabId
});

export function getSelectedTab(state) {
  return state.tabs.tabs.find(tab => tab.id === state.tabs.selectedTabId);
}
