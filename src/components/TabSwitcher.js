import React from 'react'
import { connect } from 'react-redux'

import TabButton from './TabButton'

class TabSwitcher extends React.Component {
  render() {
    let tabButtons = this.props.tabs.map(tab => {
      return <TabButton {...tab} key={tab.id} />
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
    tabs: state.tabs.tabs
  }
}

export default connect(
  mapsStateToProps,
  null
)(TabSwitcher)
