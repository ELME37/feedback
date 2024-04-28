import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.div`
    
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
    font-size: 20px;
`;

export const Strong = styled.strong`
    font-family: "Raleway", sans-serif;
    color: ${colors.gold};
    line-height: 1.6em;
    text-align: justify;
    font-size: 20px;
`;

export const NoneFeedback = styled(Text)`
    text-align: center;
    font-style: italic;
    font-size: 16px;
    color: ${colors.gold};
`;

export const ContainerNoneFeedback = styled.div`
    padding: 20px;
    border: 1px ${colors.white} dotted;
    border-radius: 10px;
`;

export const ContainerFeedback = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ContainerPrint = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    opacity: ${props => props.disabled ? 0.6 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

export const TextPrint = styled.p`
    display: ${props => props.disabled ? 'block' : 'none'};
    text-align: center;
    font-style: italic;
    font-size: 16px;
    color: ${colors.white};
    margin-bottom: 10px;
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    font-weight: bold;
    cursor: pointer;
    background: ${colors.blue};
    padding: 8px 20px;
    border: 2px ${colors.gold} solid;
    border-radius: 10px;
    color: ${colors.gold};

    &:first-child {
        margin-right: 30px;
    }
`;

export const ContainerCopyUrl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CopyUrl = styled.input`
    width: 100%;
    text-align: center;
    font-style: italic;
    font-weight: 700;
    padding: 10px;
    margin: 10px 0;
    border: 2px ${colors.gold} dotted;
    border-radius: 10px;
    background: ${colors.black2};
    color: ${colors.white};
`;

export const CopyText = styled.p`
    text-align: center;
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    color: ${colors.gold};
    margin-top: 50px;
`;

export const ButtonCopyUrl = styled.button`
    font-weight: bold;
    cursor: pointer;
    background: ${colors.blue};
    padding: 8px 20px;
    border: 2px ${colors.gold} solid;
    border-radius: 10px;
    color: ${colors.gold};
`;

export const ContainerFeedbackAll = styled.div`
    margin-bottom: 30px;
`;

export const FeedbackAllInput = styled.input`
    width: 20px;
    height: 20px;
    margin-left: 20px;
    margin-right: 10px;
    cursor: pointer;
`;

export const FeedbackAllLabel = styled.label`
    font-style: italic;
    font-size: 16px;
    color: ${colors.gold};
`;
