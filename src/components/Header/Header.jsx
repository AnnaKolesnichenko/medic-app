import { Link } from 'react-router-dom';
import { StyledHeader, StyledNavList } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledNavList>
          <Link to="/">Shop</Link>
          <Link to="/cart">Shopping Cart</Link>
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
