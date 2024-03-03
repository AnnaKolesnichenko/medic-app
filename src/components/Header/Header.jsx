import { NavLinkStyled, StyledHeader, StyledNavList } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledNavList>
          <NavLinkStyled to="/">Shop</NavLinkStyled>
          <NavLinkStyled to="/cart">Shopping Cart</NavLinkStyled>
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
