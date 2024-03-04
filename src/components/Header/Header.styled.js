import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 20px 30px;
`;

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: grey;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;

  &:hover {
    color: #e37f19;
    border-bottom-color: purple;
  }

  &.active {
    color: #35484f;
    border-bottom: 2px solid #35484f;
  }
`;
