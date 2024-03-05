import { NavLinkStyled, StyledHeader, StyledNavList } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledNavList>
          <NavLinkStyled
            to="/"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            Shop
          </NavLinkStyled>
          <NavLinkStyled
            to="/cart"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            Shopping Cart
          </NavLinkStyled>
          <NavLinkStyled
            to="/history"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            History
          </NavLinkStyled>
          <NavLinkStyled
            to="/coupones"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            Coupones
          </NavLinkStyled>
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
