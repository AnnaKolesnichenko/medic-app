import styled from 'styled-components';

export const OrdersContainer = styled.div`
  padding: 20px 20px;
`;

export const OrdersList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const OrdersItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 30%;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
`;

export const OrdersImage = styled.img`
  width: 150px;
  height: 120px;
  border-right: 0.5px solid lightgrey;
`;

export const AboutItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const OrdersTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
`;

export const OrdersPrice = styled.span`
  margin: 0;
  margin-bottom: 15px;
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
`;
