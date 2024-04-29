import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  
  @media (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export const ContainerSlide = styled.div`
  display: flex !important;
  justify-content: center !important;
`;

export const ContainerFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  border-radius: 10px;
  border: 4px ${colors.gold} solid;
  margin-bottom: 30px;
  padding: 30px;
  background: ${colors.white};
`;

export const Feedback = styled.p`
  font-family: "Raleway", sans-serif;
  margin-bottom: 6px;
`;

export const Name = styled.span`
  color: ${colors.gold};
  font-size: 22px;
  font-family: "Amatic SC", sans-serif;
`;

export const Position = styled.span`
  font-size: 18px;
  font-family: "Amatic SC", sans-serif;
`;


export const CustomDot = styled.div`
  background-color: ${colors.gold};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  filter: brightness(40%);
  cursor: pointer;

  @media (max-width: 650px) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 500px) {
    width: 12px;
    height: 12px;
  }
`;

export const ActiveDot = styled(CustomDot)`
  background-color: ${colors.gold};
  filter: brightness(100%);
`;