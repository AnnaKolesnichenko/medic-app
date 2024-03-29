import { NavLinkStyled } from 'components/Header/Header.styled';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 30px 30px;
  margin-left: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 50%;
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

export const EmptyCartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const LinkStyled = styled(NavLinkStyled)`
  text-decoration: none;
  color: #35484f;

  &:hover {
    color: purple;
  }
`;
