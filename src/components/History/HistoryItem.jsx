import React from 'react';
import {
  AboutItemDiv,
  OrdersImage,
  OrdersItem,
  OrdersPrice,
  OrdersTitle,
} from './HistoryItems.styled';

const HistoryItem = ({ item, date }) => {
  const dateObject = new Date(date);
  const options = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);

  return (
    <OrdersItem key={item.id}>
      <OrdersImage src={item.image} alt={item.title} />
      <AboutItemDiv>
        <OrdersTitle>{item.title}</OrdersTitle>
        <OrdersPrice>
          <OrdersPrice>Price: $</OrdersPrice>
          {item.price * item.quantity}
        </OrdersPrice>

        {date && (
          <OrdersPrice style={{ textAlign: 'center' }}>
            {formattedDate}
          </OrdersPrice>
        )}
      </AboutItemDiv>
    </OrdersItem>
  );
};

export default HistoryItem;
