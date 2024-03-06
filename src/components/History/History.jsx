import { Fragment, useEffect, useRef, useState } from 'react';
import {
  HistoryContainer,
  DivStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  HistoryTitle,
  ButtonStyled,
} from './History.styled';
import { getOrderInfo } from 'services/api-services';
import HistoryItems from './HistoryItems';

const History = () => {
  const [order, setOrder] = useState(null);
  const [historyOrders, setHistoryOrders] = useState([]);
  const emailRef = useRef();
  const phoneRef = useRef();
  const idRef = useRef();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const info = await getOrderInfo();
        setOrder(info);
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };
    fetchOrder();
  }, []);

  let orders = [];
  for (const i in order) {
    const orderItem = order[i];
    orders.push(orderItem);
  }

  const handleUserInput = e => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const eneteredId = idRef.current.value;
    const foundOrders = [];

    for (const item of orders) {
      if (
        (item.userData &&
          item.userData.email === enteredEmail &&
          item.userData.phone === enteredPhone) ||
        item.id === eneteredId
      ) {
        foundOrders.push(item);
      }
    }

    setHistoryOrders(foundOrders);
    emailRef.current.value = '';
    phoneRef.current.value = '';
    idRef.current.value = '';
  };
  return (
    <HistoryContainer>
      <div>
        <HistoryTitle>
          Enter your email and phone number or your order Id
        </HistoryTitle>
        <FormStyled onSubmit={handleUserInput}>
          <DivStyled>
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InputStyled type="text" id="email" ref={emailRef} />
          </DivStyled>
          <DivStyled>
            <LabelStyled htmlFor="phone">Phone</LabelStyled>
            <InputStyled type="number" id="phone" ref={phoneRef} />
          </DivStyled>
          <span style={{ marginBottom: '-5px' }}>OR</span>
          <DivStyled>
            <LabelStyled htmlFor="order-id">order id</LabelStyled>
            <InputStyled type="text" id="order-id" ref={idRef} />
          </DivStyled>
          <ButtonStyled type="submit">Find Order</ButtonStyled>
        </FormStyled>
      </div>
      <div>
        <HistoryItems historyOrders={historyOrders} />
      </div>
    </HistoryContainer>
  );
};

export default History;
