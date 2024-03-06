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
import { motion } from 'framer-motion';

const OrderInfo = ({ data, handleClose }) => {
  return (
    <Backdrop>
      <Modal
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
      >
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
