import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ContainerGlobal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 20px);
    margin-top: 100px;

    &:nth-child(3) {
        margin-bottom: 100px;
    }
`;

export const ContainerUtilisateur = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &:nth-child(1) {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 20px;
            height: 20px;
            border-left: 5px ${colors.gold} solid;
            border-top: 5px ${colors.gold} solid;
          }
    
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
            height: 20px;
            border-top: 5px ${colors.gold} solid;
            border-right: 5px ${colors.gold} solid;
        }
    }

    &:nth-child(2) {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 20px;
            height: 20px;
            border-left: 5px ${colors.gold} solid;
            border-bottom: 5px ${colors.gold} solid;
          }
    
        &::after {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            width: 20px;
            height: 20px;
            border-right: 5px ${colors.gold} solid;
            border-bottom: 5px ${colors.gold} solid;
        }
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;

export const ContainerContributeur = styled(ContainerUtilisateur)`
    flex-direction: row-reverse;

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;

export const Text = styled.p`
    font-family: "Raleway", sans-serif;
    font-size: 22px;
    color: ${colors.white};
    text-align: center;

    @media (max-width: 650px) {
        font-size: 18px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const TextUtilisateur = styled(Text)`
    font-size: 20px;
    padding : 30px;

    &:nth-child(1) {
        font-family: "Satisfy", sans-serif;
        color: ${colors.gold};
        font-weight: bold;
        font-size: 26px;

        @media (max-width: 650px) {
            font-size: 24px;
        }
    
        @media (max-width: 500px) {
            font-size: 22px;
        }
    }

    &:nth-child(2) {
        text-align: end;

        @media (max-width: 650px) {
            text-align: center;
        }
    }

    @media (max-width: 650px) {
        padding: 20px;
        font-size: 18px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
    }
    
`;

export const TextContributeur = styled(TextUtilisateur)`
    font-size: 20px;
    padding : 30px;

    &:nth-child(2) {
        text-align: start;

        @media (max-width: 650px) {
            text-align: center;
        }
    }

    @media (max-width: 650px) {
        padding: 20px;
        font-size: 18px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Couleur semi-transparente */
    z-index: 1000;
`;