import React from 'react';
import { DropTarget } from 'react-dnd';

import Tile from './Tile';
import { ItemTypes } from './../constants';
import './Tab.css'

const Tab = props => {
  // debugger;
  let tiles = props.tileIds.map(tileId => <Tile key={tileId} id={tileId} />);

  return (
    <div className="Tab">
      <h1>{props.title}</h1>
      <div className="Tiles">
        {tiles}
      </div>
    </div>
  )
}

export default Tab;
