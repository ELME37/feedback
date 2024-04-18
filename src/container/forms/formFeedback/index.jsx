import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, ContainerError, InputLogin, InputArea, Error, Button } from '../forms.styled';

export default function FormFeedback () {
  const { handleSubmit: handleSubmitFeedback, register: registerFeedback, formState: { errors: errorsFeedback } } = useForm();
    const onSubmitFeedback = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmitFeedback(onSubmitFeedback)}>
      <InputLogin type="text" autoComplete="none" placeholder="Prénom" {...registerFeedback('prénom', { required: true})}/>
        <ContainerError>
          {errorsFeedback.prénom && <Error>Le prénom doit être renseigné</Error>}
        </ContainerError> 
      <InputLogin type="text" autoComplete="none" placeholder="Nom"{...registerFeedback('nom', { required: true})}/>
        <ContainerError>
          {errorsFeedback.nom && <Error>Le nom doit être renseigné</Error>}
        </ContainerError>
      <InputLogin type="text" autoComplete="none" placeholder="Poste occupé"{...registerFeedback('poste', { required: true})}/>
        <ContainerError>
          {errorsFeedback.poste && <Error>Le poste doit être renseigné</Error>}
        </ContainerError>
      <InputLogin type="text" autoComplete="none" placeholder="Entreprise"{...registerFeedback('entreprise', { required: true})}/>
        <ContainerError>
          {errorsFeedback.entreprise && <Error>Le nom de l'entreprise doit être renseigné</Error>}
        </ContainerError>
      <InputLogin type="text" autoComplete="none" placeholder="Relation avec le membre recommandé"{...registerFeedback('relation', { required: true})}/>
        <ContainerError>
          {errorsFeedback.relation && <Error>La relation doit être renseignée</Error>}
        </ContainerError>
      <InputArea type="textarea" autoComplete="none" placeholder="Recommandation (Compétences professionnelles, Aptitudes techniques, Qualités personnelles, Points forts)"{...registerFeedback('recommandation', { required: true})}/>
        <ContainerError>
          {errorsFeedback.recommandation && <Error>La recommandation doit être renseignée</Error>}
        </ContainerError>
       
      <Button type="submit">Soumettre ma recommandation</Button>
    </Form>
  );
};