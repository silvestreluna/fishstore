import React from 'react';
import firebase from 'firebase/app';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';

import orderData from '../../helpers/data/orderData';
import fishData from '../../helpers/data/fishData';


import './Home.scss';

class Home extends React.Component {
  state = {
    orders: [],
    fishes: [],
  }

  getOrders = () => {
    orderData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('No orders', err));
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('No fishes', err));
    this.getOrders();
  }

  deleteOrder = (orderId) => {
    console.error(orderId, 'you clicked a button');
    orderData.deleteOrder(orderId)
      .then(() => this.getOrders())
      .catch(err => console.error(err, 'Did delete'));
  }

  render() {
    const { fishes, orders } = this.state;
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <Inventory fishes={fishes} />
          </div>
          <div className="col">
            <NewOrder />
          </div>
          <div className="col">
            <Orders orders={orders} deleteOrder={this.deleteOrder}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
