import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 0;
`;

export const H1 = styled.h1`
    font-size: 50px;
    color: ${colors.gold};
    font-family: "Amatic SC", sans-serif;
`;

export const Svg = styled.svg`
    width: 40px;
    height: 40px;
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
    font-size: 20px;
    color: ${colors.gold};
    font-family: "Amatic SC", sans-serif;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    
`;