import React from 'react';

import Tile from './Tile';

const Tab = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="Tiles">
        <Tile id={1} />
        <Tile id ={2} />
      </div>
    </div>
  )
}

export default Tab;
