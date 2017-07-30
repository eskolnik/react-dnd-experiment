import React from 'react'
import { connect } from 'react-redux'

import TabButton from './TabButton'
import { changeTab } from './../actions/tabs'

class TabSwitcher extends React.Component {
  render() {
    let { tabs, selectedTabId, changeTab } = this.props
    let tabButtons = tabs.map(tab => {
      let active = tab.id === selectedTabId
      return (
        <TabButton
          {...tab}
          key={tab.id}
          active={active}
          changeTab={changeTab}
        />
      );
    })

    return(
      <div>
        {tabButtons}
      </div>
    )
  }
}
function mapsStateToProps(state) {
  return {
    tabs: state.tabs.tabs,
    selectedTabId: state.tabs.selectedTabId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (newTabId) => dispatch(changeTab(newTabId))
  }
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(TabSwitcher)
