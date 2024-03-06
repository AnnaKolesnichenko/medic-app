import React from 'react';
import HistoryItem from './HistoryItem';
import { OrdersContainer, OrdersList } from './HistoryItems.styled';

const HistoryItems = ({ historyOrders }) => {
  return (
    <OrdersContainer>
      <OrdersList>
        {historyOrders &&
          historyOrders.map(order => {
            const product = order.cartData;
            return (
              <>
                {product.length === 1 && (
                  <HistoryItem item={product[0]} date={order.date} />
                )}
                {product.length > 1 && (
                  <>
                    {product.map(item => (
                      <HistoryItem item={item} date={order.date} />
                    ))}
                  </>
                )}
              </>
            );
          })}
      </OrdersList>
    </OrdersContainer>
  );
};

export default HistoryItems;
