import React from 'react'
import { connect } from 'react-redux'

import Tab from './Tab'
import { getSelectedTab } from './../actions/tabs'

class TabView extends React.Component {
  render() {
    let { tab } = this.props;
    return(
      <div>
        <Tab {...tab} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    tab: getSelectedTab(state)
  }
}

export default connect(
  mapStateToProps,
  null
)(TabView)
