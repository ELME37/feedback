import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Root = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    background: ${colors.blue};
    padding: 30px;
    border-radius: 10px;
`;

export const TitleModal = styled.p`
    text-align: center;
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    color: ${colors.gold};
    margin-bottom: 30px;
`;

export const TextModal = styled.p`
    text-align: center;
    font-size: 16px;
    line-height: 1.6em;
    color: ${colors.white};
`;

export const ContainerButtons = styled.div`
    display: flex;
`;

export const BouttonModal = styled.button`
    font-weight: bold;
    cursor: pointer;
    background: ${colors.blue};
    margin-top: 30px;
    padding: 8px 20px;
    border: 2px ${colors.gold} solid;
    border-radius: 10px;
    color: ${colors.gold};

    &:last-child {
        margin-left: 30px;
    }
`;