import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
`;

export const ContainerSlide = styled.div`
`;

export const ContainerFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border: 4px ${colors.gold} solid;
  margin-bottom: 30px;
  padding: 30px;
  background: ${colors.white}
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
`;

export const ActiveDot = styled(CustomDot)`
  background-color: ${colors.gold};
  filter: brightness(100%);
`;