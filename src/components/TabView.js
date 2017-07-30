import React from 'react'
import { connect } from 'react-redux'
import Tab from './Tab'

class TabView extends React.Component {
  render() {
    return(
      <div>
        hello I am a Tab view!
        <Tab tab={this.props.tab} />
      </div>
    )
  }
}

function getSelectedTab(state) {
  return state.tabs.tabs.find(tab => tab.id === state.tabs.selectedTabId);
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
