import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import apiRequest from "../../../utils/apiRequest";
import routes from "../../../router/routes";

import Modal from "../../modal";
import Lign from "../../../components/lign";

import { Form, ContainerError, InputLogin, InputArea, Error, Button, Notification } from '../forms.styled';
import { TitleModal, TextModal, BouttonModal } from "../../modal/modal.styled";

export default function FormFeedback ({ userId }) {
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const closeModalAndRedirect = () => {
    closeModal();
    navigateToHome();
  };

  const navigateToHome = () => {
    navigate(routes.home);
    window.scrollTo(0, 0);
  };

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
        setIsModalOpen(true);
    } catch (error) {
        setNotification({message : "Erreur lors de la soummission du Feedback", type : ''});
        console.log('An error occurred during feedback submission: ', error);
    }
};

  return (
      <Form onSubmit={handleSubmitFeedback(onSubmitFeedback)}>
        <InputLogin type="text" autoComplete="none" placeholder="Prénom"
          {...registerFeedback('firstName',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errorsFeedback.firstName && <Error>Le prénom doit être renseigné</Error>}
          </ContainerError> 
        <InputLogin type="text" autoComplete="none" placeholder="Nom"
          {...registerFeedback('lastName',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errorsFeedback.lastName && <Error>Le nom doit être renseigné</Error>}
          </ContainerError>
        <InputLogin type="text" autoComplete="none" placeholder="Poste occupé"
          {...registerFeedback('position',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
            })}
        />
          <ContainerError>
            {errorsFeedback.position && <Error>Le poste doit être renseigné</Error>}
          </ContainerError>
        <InputLogin type="text" autoComplete="none" placeholder="Entreprise"
          {...registerFeedback('company',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errorsFeedback.company && <Error>Le nom de l'entreprise doit être renseigné</Error>}
          </ContainerError>
        <InputLogin type="text" autoComplete="none" placeholder="Relation avec le membre recommandé (responsable, collègue etc.)"
          {...registerFeedback('relationship',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
            })}
        />
          <ContainerError>
            {errorsFeedback.relationship && <Error>La relation doit être renseignée</Error>}
          </ContainerError>
        <InputArea type="textarea" autoComplete="none" placeholder="Recommandation (Compétences professionnelles, Aptitudes techniques, Qualités personnelles, Points forts)"
          {...registerFeedback('recommendation',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errorsFeedback.recommendation && <Error>La recommandation doit être renseignée</Error>}
          </ContainerError>
        
        <Button type="submit">Soumettre ma recommandation</Button>
        {notification && (
            <Notification type={notification.type}>{notification.message}</Notification>
        )}

        {isModalOpen && (
          <Modal isOpen={openModal}>
              <TitleModal>Votre feedback a bien été envoyé !</TitleModal>
              <TextModal>Votre contribution est précieuse !</TextModal>
              <Lign/>
              <TextModal>Chaque feedback, est une occasion d'enrichir le parcours professionnel de nos utilisateurs.</TextModal>
              <Lign/>
              <TextModal>Votre point de vue précieux contribue à enrichir le parcours professionnel de l'utilisateur, lui ouvrant ainsi de nouvelles perspectives.</TextModal>
              <Lign/>
              <TextModal>Merci pour votre temps et votre engagement envers l'amélioration continue de nos membres !</TextModal>
              <BouttonModal onClick={closeModalAndRedirect}>Fermer</BouttonModal>
          </Modal>
        )}
      </Form>
  );
};