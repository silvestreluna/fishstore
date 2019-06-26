import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import orderData from '../../helpers/data/orderData';

import './Orders.scss';


class Orders extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    orderData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('No orders', err));
  }

  render() {
    return (
      <div className="Orders">
        <h2>Orders</h2>
      </div>
    );
  }
}

export default Orders;
