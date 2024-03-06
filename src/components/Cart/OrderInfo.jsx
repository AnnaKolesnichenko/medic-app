import React from 'react';
import {
  Backdrop,
  IdStyled,
  ItemsUlStyled,
  OrderContainer,
  TitleStyled,
  ListItemStyled,
  ItemTitle,
  ItemQuantity,
  CloseCrossStyled,
  TickIconeStyled,
  Modal,
} from './OrderInfo.styled';

const OrderInfo = ({ data, handleClose }) => {
  console.log(data.id, data.cartData);
  return (
    <Backdrop>
      <Modal>
        <OrderContainer>
          <CloseCrossStyled onClick={handleClose} />
          <TitleStyled>
            <TickIconeStyled />
            Congrats! Your order was accepted.{' '}
          </TitleStyled>
          <TitleStyled>
            Your order Id is <IdStyled>{data.id}</IdStyled>
          </TitleStyled>
          <div>
            <TitleStyled>Items ordered:</TitleStyled>
            <ItemsUlStyled>
              {data.cartData.map(item => (
                <ListItemStyled key={item.id}>
                  <ItemTitle>{item.title}: </ItemTitle>
                  <ItemQuantity>{item.quantity}</ItemQuantity>
                </ListItemStyled>
              ))}
            </ItemsUlStyled>
          </div>
        </OrderContainer>
      </Modal>
    </Backdrop>
  );
};

export default OrderInfo;
