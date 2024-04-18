import styled, { keyframes } from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-top: 100px;
    padding: 30px;
    background: ${colors.gold};
    border-radius: 4px 4px 0 0;
`;

export const LogoMTU = styled.img`
    width: 120px;
`;

export const LogoMalt = styled.img`
    width: 20px;
`;

export const Lien = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    width: 120px;
    &:nth-child(2) {
        margin: 0 10px;
    }
`;

export const ContainerLiens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextLiens = styled.p`
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-wrap: nowrap;
    flex-grow: 1;
    line-height: 1.8em;
    margin-right: 10px;
    color: ${colors.darkbrown};
`;

export const Svg = styled.svg`
    width: 20px;
    height: 20px;
`;

export const Linkedin = styled(Svg)`
    fill : rgb(0, 119, 181);
`;

const animationPorfolio = keyframes`
  0%, 25% {
    opacity: 0;
  }
  50%, 70% {
    opacity: 1;
  }
  80%, 100% {
    opacity: 0;
  }
`;

export const Porfolio = styled.div `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110%;
    height: 110%;
    font-family: "Amatic SC", sans-serif;
    background: ${colors.gold};
    text-align: center;
    color: ${colors.darkbrown};
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border: 2px ${colors.darkbrown} solid;
    border-radius: 4px;
    z-index: 1;
    animation: ${animationPorfolio} 30s ease-in-out infinite;
`;