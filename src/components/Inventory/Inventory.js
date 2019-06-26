import React from 'react';
import fishData from '../../helpers/data/fishData';

import './Inventory.scss';

class Inventory extends React.Component {
  state = {
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('No fishes', err));
  }

  render() {
    return (
      <div className="Invetory">
        <h2>Inventory</h2>
      </div>
    );
  }
}

export default Inventory;
