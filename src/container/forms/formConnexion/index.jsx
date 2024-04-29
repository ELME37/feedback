import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import apiRequest from "../../../utils/apiRequest";
import routes from '../../../router/routes';
import { AuthContext } from "../../../context/authContext";

import { ContainerFormConnexion, ContentLogin, ContentSignUp, Form, TitleLogin, TitleSignUp, InputLogin, InputSignUp, 
    ContainerError, Error, ContainerLinksLogin, ContainerLinksSignUp, LinkForgotPassword, LinksSignUp, TextLinkSignUp, 
    LinkLogin, Button, CloseLogin, CloseSignUp, Notification } from '../forms.styled';

export default function FormConnexion ({ close }) {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '' });

    const navigate = useNavigate();
    const { updateUser } = useContext(AuthContext);

    const { handleSubmit: handleSubmitLogin, reset: resetLogin, register: registerLogin, formState: { errors: errorsLogin } } = useForm();
    const onSubmitLogin = async (data) => {
            try {
                const response = await apiRequest.post('/auth/login', data);
                const { token, userId } = response.data;
                localStorage.setItem('token', token);
                setNotification({ message: 'Connexion réussie !', type: 'success' });
                updateUser(response.data);
                navigate(routes.profil(userId));
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setNotification({message : 'La paire identifiant/mot de passe est incorrecte.', type: ''});
                    resetLogin();
                } else {
                    setNotification({message: 'Erreur lors de la connexion', type : ''});
                    console.log('Some error occured during signing in: ', error);
                }
            }
        };

    const { handleSubmit: handleSubmitSignup, reset: resetSignUp, register: registerSignup, formState: { errors: errorsSignup } } = useForm();
    const onSubmitSignup = async (data) => {
        
        try {
            const response = await apiRequest.post('/auth/signup', {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            });
            
            if (!response.data) {
                console.log('Something went wrong during signing up: ', response);
                return;
            }
            setNotification({ message: 'Votre compte a bien été créé, vous pouvez vous connecter', type: 'success' });
            resetSignUp();
            setIsSignUpVisible(!isSignUpVisible);
        } catch (error) {
            setNotification({message : "Erreur lors de l'inscription", type : ''});
            console.log('Some error occured during signing up: ', error);
        }
    };

    const toggleSignUp = () => {
        setIsSignUpVisible(!isSignUpVisible);
    };

    return (
        <ContainerFormConnexion>
            <ContentLogin $isVisible={!isSignUpVisible}>
                <TitleLogin>Connexion</TitleLogin>
                {notification && (
                    <Notification type={notification.type}>{notification.message}</Notification>
                )}
                <Form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                    <InputLogin type="email" autoComplete="none" placeholder="Email" 
                        {...registerLogin('email', {
                            required: true,
                            onChange: () => setNotification({ message: "", type: "" })
                        })}
                    />
                    <ContainerError>
                        {errorsLogin.email && <Error>L'email doit être renseigné</Error>}
                    </ContainerError> 
                    <InputLogin type="password" autoComplete="none" placeholder="Mot de passe"
                        {...registerLogin('password', {
                            required: true,
                            onChange: () => setNotification({ message: "", type: "" })
                        })}
                    />
                    <ContainerError>
                        {errorsLogin.password && <Error>Le mot de passe doit être renseigné</Error>}
                    </ContainerError>
                    <ContainerLinksLogin>
                        <LinkForgotPassword to={`${routes.forgotPassword}/forgot`}>Mot de passe oublié</LinkForgotPassword>
                        <LinkLogin href="#" onClick={toggleSignUp}>Créer un compte</LinkLogin>
                    </ContainerLinksLogin>
                    <Button type="submit">Se connecter</Button>
                </Form>
                <CloseLogin xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={close}>
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                </CloseLogin>
            </ContentLogin>

            <ContentSignUp $isVisible={isSignUpVisible}>
                <TitleSignUp>Inscription</TitleSignUp>
                {notification && (
                    <Notification type={notification.type}>{notification.message}</Notification>
                )}
                <Form onSubmit={handleSubmitSignup(onSubmitSignup)}>
                    <InputSignUp type="text" autoComplete="none" placeholder="Prénom"
                        {...registerSignup('firstName',
                            { required: true,
                            onChange: () => setNotification({ message: "", type: "" })
                        })}
                     />
                    <ContainerError>
                        {errorsSignup.firstName && <Error>Le prénom doit être renseigné</Error>}
                    </ContainerError>
                    <InputSignUp type="text" autoComplete="none" placeholder="Nom"
                        {...registerSignup('lastName',
                            { required: true,
                            onChange: () => setNotification({ message: "", type: "" })
                        })}
                    />
                    <ContainerError>
                        {errorsSignup.lastName && <Error>Le nom doit être renseigné</Error>}
                    </ContainerError> 
                    <InputSignUp type="email" autoComplete="none" placeholder="Email"
                        {...registerSignup('email',
                            { required: true, 
                            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i},
                            onChange: () => setNotification({ message: "", type: "" })
                        })}
                    />
                    <ContainerError>
                        {errorsSignup.email && <Error>L'adresse email invalide</Error>}
                    </ContainerError> 
                    <InputSignUp type="password" autoComplete="none" placeholder="Mot de passe"
                        {...registerSignup('password',
                            { required: true, 
                            minLength: {value: 8},
                            pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/},
                            onChange: () => setNotification({ message: "", type: "" })
                        })}
                    />
                    <ContainerError>
                        {errorsSignup.password && 
                            <Error>Le mot de passe doit contenir: (8 caractères, 1 lettre majuscule, 1 lettre minuscule, 1 chiffre)</Error>
                        }
                    </ContainerError>
                    <Button type="submit">Créer un compte</Button>
                    <ContainerLinksSignUp>
                        <TextLinkSignUp>Vous avez déjà un compte?</TextLinkSignUp>
                        <LinksSignUp href="#" onClick={toggleSignUp}>Se connecter</LinksSignUp>
                    </ContainerLinksSignUp>
                </Form>
                <CloseSignUp xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={close}>
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                </CloseSignUp>
            </ContentSignUp>
        </ContainerFormConnexion>
    );
};