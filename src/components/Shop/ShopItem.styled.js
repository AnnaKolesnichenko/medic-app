import styled from 'styled-components';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { TbTriangleFilled } from 'react-icons/tb';
import { MdOutlineMedication } from 'react-icons/md';

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

export const TitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  text-decoration: underline;
  color: #35484f;
`;

export const PriceStyled = styled.h3`
  margin: 0;
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  color: #35484f;
`;

export const ButtonStyled = styled.button`
  //padding: 2px 4px;
  //box-sizing: border-box;
  width: 100px;
  background-color: #b4c0c4;
  border: 0.2px solid #b4c0c4;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  color: #35484f;
`;

export const SortBtnsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const IconStyled = styled(TbTriangleFilled)`
  width: 15px;
  height: 15px;
  color: #35484f;
  margin-left: 5px;
  &:hover {
    color: pink;
  }
`;

export const IconStyledTwo = styled(TbTriangleInvertedFilled)`
  width: 15px;
  height: 15px;
  color: #35484f;
  margin-left: 5px;

  &:hover {
    color: pink;
  }
`;

export const MedicineLikedStyled = styled(MdOutlineMedication)`
  width: 25px;
  height: 25px;
  color: #b4c0c4;
  cursor: pointer;
`;
