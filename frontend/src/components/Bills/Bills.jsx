import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div>
      <h2>Danh sách đơn hàng</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order.name} - {order.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
