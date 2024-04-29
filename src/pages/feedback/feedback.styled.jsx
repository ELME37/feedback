import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Introduction = styled.div`
    margin: 30px 0;
    padding: 30px;
    border-radius: 20px;
    border: 6px ${colors.gold} solid;

    @media (max-width: 650px) {
        width: calc(100% - 20px);
    }
`;

export const H1 = styled.h1`
    font-family: "Raleway", sans-serif;
    color: ${colors.gold};
    line-height: 1.8em;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 650px) {
        font-size: 24px;
    }
`;

export const Text = styled.p`
    font-family: "Raleway", sans-serif;
    color: ${colors.white};
    line-height: 1.6em;
    text-align: justify;

    @media (max-width: 650px) {
        font-size: 14px;
        text-align: center;
    }
`;

export const TextTitle = styled(Text)`
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 650px) {
        font-size: 18px;
    }
`;

export const ContainerUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 4px;
    border-bottom: 2px ${colors.gold} solid;
`;

export const TextUser = styled.p`
    font-family: "Raleway", sans-serif;
    color: ${colors.gold};
    font-style: italic;
    text-align: center;

    &:nth-child(1) {
        margin-right: 10px;
        color: ${colors.white};
        filter: brightness(60%);
    }
`;