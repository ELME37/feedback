import React, { useState } from "react"
import { useForm } from 'react-hook-form';

import apiRequest from "../../../utils/apiRequest";

import { Form, ContainerError, InputLogin, InputArea, Error, Button, Notification } from '../forms.styled';

export default function FormFeedback ({ userId }) {
  const [notification, setNotification] = useState({ message: '', type: '' });

  const { handleSubmit: handleSubmitFeedback, reset: resetFeedback, register: registerFeedback, formState: { errors: errorsFeedback } } = useForm();
  const onSubmitFeedback = async (data) => {
    const feedback = {
      userId: userId,
      ...data
    };

    try {
        const response = await apiRequest.post('/feedback/' + userId, feedback);
        
        if (!response.data) {
            console.log('Something went wrong during feedback submission: ', response);
            return;
        }
        setNotification({ message: 'Feedback envoyé avec succès, merci de votre contribution', type: 'success' });
        resetFeedback();
    } catch (error) {
        setNotification({message : "Erreur lors de la soummission du Feedback", type : ''});
        console.log('An error occurred during feedback submission: ', error);
    }
};

  return (
    <Form onSubmit={handleSubmitFeedback(onSubmitFeedback)}>
      <InputLogin type="text" autoComplete="none" placeholder="Prénom" {...registerFeedback('firstName', { required: true})}/>
        <ContainerError>
          {errorsFeedback.firstName && <Error>Le prénom doit être renseigné</Error>}
        </ContainerError> 
      <InputLogin type="text" autoComplete="none" placeholder="Nom"{...registerFeedback('lastName', { required: true})}/>
        <ContainerError>
          {errorsFeedback.lastName && <Error>Le nom doit être renseigné</Error>}
        </ContainerError>
      <InputLogin type="text" autoComplete="none" placeholder="Poste occupé"{...registerFeedback('position', { required: true})}/>
        <ContainerError>
          {errorsFeedback.position && <Error>Le poste doit être renseigné</Error>}
        </ContainerError>
      <InputLogin type="text" autoComplete="none" placeholder="Entreprise"{...registerFeedback('company', { required: true})}/>
        <ContainerError>
          {errorsFeedback.company && <Error>Le nom de l'entreprise doit être renseigné</Error>}
        </ContainerError>
      <InputLogin type="text" autoComplete="none" placeholder="Relation avec le membre recommandé"{...registerFeedback('relationship', { required: true})}/>
        <ContainerError>
          {errorsFeedback.relationship && <Error>La relation doit être renseignée</Error>}
        </ContainerError>
      <InputArea type="textarea" autoComplete="none" placeholder="Recommandation (Compétences professionnelles, Aptitudes techniques, Qualités personnelles, Points forts)"{...registerFeedback('recommendation', { required: true})}/>
        <ContainerError>
          {errorsFeedback.recommendation && <Error>La recommandation doit être renseignée</Error>}
        </ContainerError>
      
      <Button type="submit">Soumettre ma recommandation</Button>
      {notification && (
          <Notification type={notification.type}>{notification.message}</Notification>
      )}
    </Form>
  );
};