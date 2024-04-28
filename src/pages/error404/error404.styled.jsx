import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../utils/colors';

export const Error404Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.gold};
`;

export const Error404Logo = styled.p`
    font-size: 100px;
    margin-top: 110px;
`;

export const Error404Text = styled.p`
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    margin-top: 120px;
    margin-bottom: 0;
    text-align: center;
`;

export const BackToHome = styled(Link)`
    text-align: center;
    color: ${colors.gold};
    margin: 140px 0;
`;
