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