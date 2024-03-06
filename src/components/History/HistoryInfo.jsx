import React, { useEffect, useState } from 'react';
import { getOrderInfo } from 'services/api-services';

const HistoryInfo = () => {
  const [order, setOrder] = useState(null);
  console.log(order);

  useEffect(() => {
    const order = async () => {
      const info = await getOrderInfo();
      setOrder(info);
    };
    order();
  }, []);
  return <div></div>;
};

export default HistoryInfo;
