import styled from 'styled-components';
import { TbTriangleFilled } from 'react-icons/tb';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { FaTrashArrowUp } from 'react-icons/fa6';

export const CartLi = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
`;

export const CartImage = styled.img`
  width: 140px;
  height: 100px;
`;

export const AboutItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const CartTitle = styled.span`
  margin: 0;
  margin-bottom: 5px;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
`;

export const CartPrice = styled.span`
  margin: 0;
  margin-bottom: 15px;
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
`;

export const CartItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
`;

export const QuantitySpan = styled.span`
  border: 1px solid lightgray;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
`;

export const IconStyled = styled(TbTriangleFilled)`
  width: 15px;
  height: 15px;
  color: #b4c0c4;
  border: 1px solid #b4c0c4;
  border-top-right-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #35484f;
  }
`;

export const IconStyledTwo = styled(TbTriangleInvertedFilled)`
  width: 15px;
  height: 15px;
  color: #b4c0c4;
  border: 1px solid #b4c0c4;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #35484f;
  }
`;

export const TrashIconStyled = styled(FaTrashArrowUp)`
  width: 20px;
  height: 20px;
  color: #b4c0c4;

  cursor: pointer;
  &:hover {
    color: purple;
  }
`;

export const TrashContainerStyled = styled.div`
  position: absolute;
  bottom: 15px;
  right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
