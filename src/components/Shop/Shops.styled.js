import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  padding: 10px 25px;
  height: 70vh;
  border-radius: 5px;
  border: 1px solid grey;
`;
export const TitleStyled = styled.h2`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  color: #35484f;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  list-style: none;
`;

export const ListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px solid #b4c0c4;
  color: #35484f;
  background-color: #b4c0c4;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;
