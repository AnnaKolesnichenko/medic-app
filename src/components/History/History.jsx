import {
  HistoryContainer,
  DivStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  HistoryTitle,
} from './History.styled';

const History = () => {
  return (
    <HistoryContainer>
      <div>
        <HistoryTitle>
          Enter your email and phone number or your order Id
        </HistoryTitle>
        <FormStyled>
          <div>
            <DivStyled>
              <LabelStyled htmlFor="email">Email</LabelStyled>
              <InputStyled
                type="text"
                id="email"
                style={{ marginBottom: '10px' }}
              />
            </DivStyled>
            <DivStyled>
              <LabelStyled htmlFor="phone">Phone</LabelStyled>
              <InputStyled type="number" />
            </DivStyled>
          </div>
          <DivStyled>
            <LabelStyled htmlFor="order-id">order id</LabelStyled>
            <InputStyled type="number" id="order-id" />
          </DivStyled>
        </FormStyled>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </HistoryContainer>
  );
};

export default History;
