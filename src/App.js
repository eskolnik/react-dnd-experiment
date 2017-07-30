import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


import TabView from './components/TabView';
import TabSwitcher from './components/TabSwitcher';
import store from './store/configureStore'
import './App.css';

// import Board from './Board'
// <Board knightPosition={this.props.knightPosition} />

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Darg and Dorp</h2>
          </div>
          <div className="Body">            
            <TabSwitcher />
            <TabView />
          </div>
        </div>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
