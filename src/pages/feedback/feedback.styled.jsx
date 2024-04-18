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
`;

export const Text = styled.p`
    font-family: "Raleway", sans-serif;
    color: ${colors.white};
    line-height: 1.6em;
    text-align: justify;
`;

export const TextTitle = styled(Text)`
    text-align: center;
    margin-bottom: 30px;
`;

export const ContainerUser = styled.div`
    display: flex;
    padding-bottom: 4px;
    border-bottom: 2px ${colors.gold} solid;
`;

export const TextUser = styled.p`
    font-family: "Raleway", sans-serif;
    color: ${colors.white};
    font-style: italic;
    filter: brightness(60%);

    &:nth-child(1) {
        margin-right: 10px;
    }
`;