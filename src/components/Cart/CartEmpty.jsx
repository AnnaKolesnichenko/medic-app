import {
  ContainerStyled,
  CartTitle,
  EmptyCartContent,
  LinkStyled,
} from './CartItems.styled';

const textStyle = { color: '#b4c0c4' };

const CartEmpty = () => {
  return (
    <ContainerStyled>
      <EmptyCartContent>
        <div>
          <CartTitle style={textStyle}>
            You did not choose any items yet...
          </CartTitle>
        </div>
        <div>
          <CartTitle style={textStyle}>
            Go to <LinkStyled to="/">Shops</LinkStyled> to pick products
          </CartTitle>
        </div>
        <div>
          <CartTitle style={textStyle}>
            Review your <LinkStyled to="/history">History</LinkStyled> for some
            ideas
          </CartTitle>
        </div>
      </EmptyCartContent>
    </ContainerStyled>
  );
};

export default CartEmpty;
