import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 30px 30px;
  margin-left: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 40%;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CartTitle = styled.span`
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  color: #35484f;
  font-weight: 600;
`;
