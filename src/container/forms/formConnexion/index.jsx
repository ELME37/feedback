import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

import { ContainerFormConnexion, ContentLogin, ContentSignUp, Form, TitleLogin, TitleSignUp, InputLogin, InputSignUp, 
    ContainerError, Error, ContainerLinksLogin, ContainerLinksSignUp, LinksLogin, LinksSignUp, TextLinkSignUp, 
    LinkLogin, Button, CloseLogin, CloseSignUp } from '../forms.styled';

export default function FormConnexion ({ close }) {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);
    const [notification, setNotification] = useState({ error: false, message: '' });

    const { handleSubmit: handleSubmitLogin, register: registerLogin, formState: { errors: errorsLogin } } = useForm();
    const onSubmitLogin = (data) => console.log(data);

    const { handleSubmit: handleSubmitSignup, register: registerSignup, formState: { errors: errorsSignup } } = useForm();
    const onSubmitSignup = (data) => {
        axios.post('http://localhost:3000/api/auth/signup', data)
            .then(response => {
                console.log(data)
                if (!response?.data) { // Gestion des erreurs d'inscription
                    console.log('Something went wrong during signing up: ', response);
                    return;
                }
                setNotification({ error: false, message: 'Votre compte a bien été créé, vous pouvez vous connecter' });
            })
            .catch(err => { // Gestion des erreurs
                setNotification({ error: true, message: err.message });
                console.log('Some error occured during signing up: ', err);
            });
    };

    const toggleSignUp = () => {
        setIsSignUpVisible(!isSignUpVisible);
    };

    return (
        <ContainerFormConnexion>
            <ContentLogin $isVisible={!isSignUpVisible}>
                <TitleLogin>Connexion</TitleLogin>
                <Form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                    <InputLogin type="email" autoComplete="none" placeholder="Email" {...registerLogin('email', { required: true})}/>
                    <ContainerError>
                        {errorsLogin.email && <Error>L'email doit être renseigné</Error>}
                    </ContainerError> 
                    <InputLogin type="password" autoComplete="none" placeholder="Mot de passe"{...registerLogin('password', { required: true})}/>
                    <ContainerError>
                        {errorsLogin.password && <Error>Le mot de passe doit être renseigné</Error>}
                    </ContainerError>
                    <ContainerLinksLogin>
                        <LinksLogin href="#">Mot de passe oublié</LinksLogin>
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
                <Form onSubmit={handleSubmitSignup(onSubmitSignup)}>
                    <InputSignUp type="text" autoComplete="none" placeholder="Prénom" {...registerSignup('prénom', { required: true})}/>
                    <ContainerError>
                        {errorsSignup.prenom && <Error>Le prénom doit être renseigné</Error>}
                    </ContainerError>
                    <InputSignUp type="text" autoComplete="none" placeholder="Nom" {...registerSignup('nom', { required: true})}/>
                    <ContainerError>
                        {errorsSignup.nom && <Error>Le nom doit être renseigné</Error>}
                    </ContainerError> 
                    <InputSignUp type="email" autoComplete="none" placeholder="Email" {...registerSignup('email', { required: true, 
                        pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}, })}/>
                    <ContainerError>
                        {errorsSignup.email && <Error>L'adresse email invalide</Error>}
                    </ContainerError> 
                    <InputSignUp type="password" autoComplete="none" placeholder="Mot de passe"{...registerSignup('password', { required: true, 
                        minLength: {value: 8},
                        pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/},
                    })}/>
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