import styled from 'styled-components';

export const ItemsStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ItemStyled = styled.li`
  width: 220px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const ImageStyled = styled.img`
  width: 220px;
  height: 180px;
`;

export const TitleStyled = styled.span`
  margin: 0;
`;

export const PriceStyled = styled.span`
  margin: 0;
`;
