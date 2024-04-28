import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import apiRequest from "../../../utils/apiRequest";
import routes from "../../../router/routes";

import { ContentPassword, Form, TitlePassword, InputLogin, 
    ContainerError, Error, Button, Notification } from '../forms.styled';

export default function FormForgotPassword() {
    const [notification, setNotification] = useState({ message: '', type: '' });

    const navigate = useNavigate();

    const { handleSubmit: handleSubmitForgotPassword, reset: resetForgotPassword, register: registerForgotPassword, formState: { errors: errorsLogin } } = useForm();
    const onSubmitForgotPassword = async (data) => {
        
        try {
            await apiRequest.post('/auth/forgotPassword', data);
                setNotification({ message: "Un e-mail de réinitialisation a été envoyé à l'adresse indiquée.", type: 'success' });
                resetForgotPassword();
                setTimeout(() => {
                    navigate(routes.home);
                }, 2000);
        } catch (error) {
            if (error.response.status === 401) {
                // Si le token est invalide ou expiré, afficher un message indiquant que le lien n'est plus valide
                setNotification({ message: "Ce lien de réinitialisation n'est plus valide. Veuillez en demander un nouveau.", type : 'error' });
            } else {
                // Si une autre erreur se produit, afficher un message d'erreur générique
                setNotification({ message: "Une erreur s'est produite lors de la réinitialisation du mot de passe.", type : 'error' });
            }
            console.log('Erreur lors de la réinitialisation du mot de passe: ', error);
        }
    };

    return (
        <ContentPassword>
            <TitlePassword>Mot de passe oublié</TitlePassword>
            {notification && (
                <Notification type={notification.type}>{notification.message}</Notification>
            )}
            <Form onSubmit={handleSubmitForgotPassword(onSubmitForgotPassword)}>
                <InputLogin type="email" autoComplete="none" placeholder="Email" 
                    {...registerForgotPassword('email', {
                        required: true,
                        onChange: () => setNotification({ message: "", type: "" })
                    })}
                />
                <ContainerError>
                    {errorsLogin.email && <Error>L'email doit être renseigné</Error>}
                </ContainerError> 
                <Button type="submit">Envoyer</Button>
            </Form>
        </ContentPassword>
    );
};