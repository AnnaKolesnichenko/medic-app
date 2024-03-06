import styled from 'styled-components';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TiTickOutline } from 'react-icons/ti';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  opacity: 1;
  background: rgba(46, 47, 66, 0.6);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`;

export const Modal = styled.div`
  position: absolute;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */

  width: 70%;
  background: #fff;
  display: flex;
  flex-direction: column;
  //padding: 20px 30px;
  border-radius: 4px;
  z-index: 100;
  //transition: opacity 250ms ease-in-out;
`;

export const OrderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;

  padding: 30px 60px;
`;

export const TitleStyled = styled.p`
  position: relative;
  margin: 0;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  color: #35484f;
  font-weight: 600;
`;

export const IdStyled = styled.span`
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  color: purple;
  font-weight: 600;
`;

export const ItemsUlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemTitle = styled.h3`
  margin: 0;

  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  color: #35484f;
  font-weight: 600;
`;
export const ItemQuantity = styled.span`
  margin: 0;
  margin-left: 10px;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  color: #35484f;
  font-weight: 600;
`;

export const CloseCrossStyled = styled(IoCloseCircleOutline)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: purple;
    scale: 1.2;
  }
`;

export const TickIconeStyled = styled(TiTickOutline)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -20px;
  left: -40px;
  color: green;
`;
