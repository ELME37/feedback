import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/colors";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ContainerFormConnexion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  overflow: hidden;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: conic-gradient(transparent, transparent, transparent, ${colors.gold});
    animation: ${rotate} 8s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 96%;
    height: 96%;
    background-color: white;
    border-radius: 12px;
  }
`;

export const ContentLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 96%;
  height: 96%;
  border-radius: 12px;
  z-index: 1000;
  background: wheat;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.$isVisible ? 'translateX(0)' : 'translateX(-104%)')};
`;

export const ContentSignUp = styled(ContentLogin)`
  background: ${colors.blue};
  transform: ${(props) => (props.$isVisible ? 'translateX(0)' : 'translateX(104%)')};
  `;

export const TitleLogin = styled.h2`
  font-size: 30px;
  font-style: italic;
  color: ${colors.blue};
  margin-bottom: 30px;
`;

export const TitleSignUp = styled(TitleLogin)`
  color: ${colors.gold};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputLogin = styled.input`
  position: relative;
  width: 80%;
  outline: none;
  border: 1px ${colors.blue} solid;
  background: rgba(0,0,0,0.15);
  margin-top: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;

  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`;

export const InputSignUp = styled(InputLogin)`
  border: 1px ${colors.gold} solid;
`;

export const ContainerError = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 80%;
    margin-top: 4px;
`;

export const Error = styled.p`
    font-size: 12px;
    font-style: italic;
    color: red;
    margin: 0;
    padding: 0;
`;

export const ContainerLinksLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px 0;
`;

export const ContainerLinksSignUp = styled(ContainerLinksLogin)`
  justify-content: end;
`;

export const LinkForgotPassword = styled(Link)`
  font-size: 16px;
  font-style: italic;
  color: ${colors.blue};
  font-weight: bold;   
`;

export const TextLinkSignUp = styled.a`
  font-size: 16px;
  font-style: italic;
  color: ${colors.gold}; 
`;

export const LinksSignUp = styled.a`
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
  color: ${colors.gold};  
`;

export const LinkLogin = styled(TextLinkSignUp)`
  text-decoration: underline;
  font-weight: bold;
  color: ${colors.blue};
`;

export const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  background: ${colors.blue};
  margin-top: 30px;
  padding: 8px 20px;
  border: 2px ${colors.gold} solid;
  border-radius: 10px;
  color: ${colors.gold};
`;

export const Root = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px 0;
`;

export const ContainerForm = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const ItemForm = styled.div`
    width: calc(100% / 3  - 30px);
    margin-bottom: 30px;

    @media (max-width: 1000px) {
      width: calc(100% / 2  - 30px);
    }

    @media (max-width: 800px) {
      width: 100%;
    }
`;

export const Select = styled.select`
    width: 100%;
    color: ${colors.white};
    background: transparent;
    border: none;
    border-bottom: 1px ${colors.white} solid;
    font-size: 16px;
    padding: 10px 4px;

    &::placeholder {
        color: ${colors.white};
    }
`

export const Input = styled.input`
    width: 100%;
    color: ${colors.white};
    background: transparent;
    border: none;
    border-bottom: 1px ${colors.white} solid;
    font-size: 16px;
    padding: 10px 4px;

    &::placeholder {
        color: ${colors.white};
    }
`;

export const InputArea = styled.textarea`
  position: relative;
  width: 80%;
  height: 200px;
  outline: none;
  border: 1px ${colors.blue} solid;
  background: rgba(0,0,0,0.15);
  margin-top: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;

  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
  fill: ${colors.gold};
`;

export const Option = styled.option`
    color: ${colors.gray};
`;

export const Span = styled.span`
    color: red;
`;

export const CloseLogin = styled.svg`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    fill: ${colors.blue};
    cursor: pointer;
`;

export const CloseSignUp = styled(CloseLogin)`
    fill: ${colors.gold};
`;

export const Notification = styled.p`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  color: ${({ type }) => (type === 'success' ? 'green' : 'red')};
  margin: 0;
  padding: 0;
`;

export const ContentPassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 100px;
  padding: 20px;
  border-radius: 12px;
  background: ${colors.black2};
  border: 2px ${colors.gold} solid;
`;

export const TitlePassword = styled(TitleLogin)`
  color: ${colors.gold};
`;