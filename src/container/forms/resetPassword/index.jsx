import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import apiRequest from "../../../utils/apiRequest";
import routes from "../../../router/routes";

import { ContentPassword, Form, TitlePassword, InputLogin, 
    ContainerError, Error, Button, Notification } from '../forms.styled';

export default function ResetPassword() {
    const [notification, setNotification] = useState({ message: '', type: '' });
    const navigate = useNavigate()
    const {userId, token} = useParams()

    const { handleSubmit: handleSubmitResetPassword, reset: resetResetPassword, register: registerResetPassword, formState: { errors: errorsLogin } } = useForm();
    
    const onSubmitResetPassword = async (data) => {
        try {
            await apiRequest.post(`/auth/ResetPassword/${userId}/${token}`, data);
                setNotification({ message: "Votre mot de passe a été réinitialisé avec succès.", type: 'success' });
                resetResetPassword();
                setTimeout(() => {
                    navigate(routes.home);
                }, 2000);
        } catch (error) {
            setNotification({message: 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.', type : ''});
            console.log(' Erreur lors de la réinitialisation du mot de passe:', error);
        }
    };

    return (
        <ContentPassword>
            <TitlePassword>Nouveau mot de passe</TitlePassword>
            {notification && (
                <Notification type={notification.type}>{notification.message}</Notification>
            )}
            <Form onSubmit={handleSubmitResetPassword(onSubmitResetPassword)}>
                <InputLogin type="password" autoComplete="none" placeholder="Mot de passe"
                    {...registerResetPassword('password',
                        { required: true, 
                        minLength: {value: 8},
                        pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/},
                        onChange: () => setNotification({ message: "", type: "" })
                    })}
                />
                    <ContainerError>
                        {errorsLogin.password && 
                            <Error>Le mot de passe doit contenir: (8 caractères, 1 lettre majuscule, 1 lettre minuscule, 1 chiffre)</Error>
                        }
                    </ContainerError>
                <Button type="submit">Valider</Button>
            </Form>
        </ContentPassword>
    );
};