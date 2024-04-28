import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
`;

export const H1 = styled.h1`
    font-size: 50px;
    color: ${colors.gold};
    font-family: "Amatic SC", sans-serif;
`;

export const Svg = styled.svg`
    width: 30px;
    height: 30px;
    fill: ${colors.gold};
    cursor: pointer;
`;

export const ContainerIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextIcon = styled.p`
    font-family: "Raleway", sans-serif;
    color: ${colors.white};
    font-size: 14px;
    line-height: 1.6em;
    margin-top: 4px;
    text-align: center;
`;

export const ContainerMenuProfil = styled.div`
    display: flex;
`;

export const MenuProfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const MenuLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const MenuProfilAccueil = styled(MenuProfil)`
    margin-right: 20px;
`;