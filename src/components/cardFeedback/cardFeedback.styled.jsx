import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.div`
   width: 100%;
   margin-bottom: 30px;
`;

export const ContainerGlobal = styled.div`
    position; relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100px;
    background: ${colors.black2};
    padding: 20px;
    border: 2px ${colors.gold} dotted;
    border-radius: 10px;
`;

export const Svg = styled.svg`
   width: 50px;
   height: 50px;
   fill: ${colors.gold};
`;

export const Delete = styled(Svg)`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const Input = styled.input`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const ContainerFeedback = styled.div`
    margin: 10px 0;
`;

export const ContainerContributorGeneral = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;

export const ContainerContributorIdentify = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        margin-top: 30px;
       }
`;

export const ContainerContributor = styled.div`
   display: flex;
   margin-bottom: 6px;

   @media (max-width: 650px) {
    justify-content: center;
   }
`;

export const TextFeedback = styled.p`
   color: ${colors.white};
   margin: 10px 0;
   text-align: justify;

   @media (max-width: 650px) {
    font-size: 14px;
    text-align: center;
   }
`;

export const NameContributor = styled.p`
    color: ${colors.gold};
    text-align: center;

    &:nth-child(1) {
        margin-right: 6px;
        text-transform: capitalize;
    }

    &:nth-child(2) {
        text-transform: uppercase;
    }

    @media (max-width: 650px) {
        font-size: 14px;
    }
`;

export const PositionContributor = styled.p`
    color: ${colors.white};
    text-align: center;

    @media (max-width: 650px) {
        font-size: 14px;
    }
`;