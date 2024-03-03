import styled from 'styled-components';

export const ItemsStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemStyled = styled.li`
  width: 200px;
  padding: 7px 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const ImageStyled = styled.img`
  width: 200px;
  height: 160px;
  margin-bottom: 10px;
`;

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleStyled = styled.span`
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  text-decoration: underline;
`;

export const PriceStyled = styled.span`
  margin: 0;
  font-size: 12px;
`;

export const ButtonStyled = styled.button`
  //padding: 2px 4px;
  //box-sizing: border-box;
  width: 100px;
  background-color: lightgray;
  border: 0.2px solid lightgrey;
  border-radius: 10px;
`;
