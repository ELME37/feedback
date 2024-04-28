import React, { useState } from 'react';

import apiRequest from '../../utils/apiRequest';

import Modal from '../../container/modal';

import { Root, ContainerGlobal, Svg, ContainerFeedback, ContainerContributorGeneral, ContainerContributorIdentify, ContainerContributor, TextFeedback, NameContributor, PositionContributor, Delete, Input } from './cardFeedback.styled';
import { TitleModal, ContainerButtons, BouttonModal } from '../../container/modal/modal.styled';

export default function CardFeedback ({ id, text, firstName, lastName, position, relationship, onDelete, handleClick, isChecked }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDelete = async () => {
        try {
            // Envoyer une requête API DELETE pour supprimer le feedback
          const response = await apiRequest.delete(`/feedback/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            // Vérifier si la réponse est un statut 204 (suppression réussie)
            if (response.status === 204) {
                console.log("Feedback supprimé avec succès !");
                // Appeler la fonction onDelete pour mettre à jour l'interface utilisateur
                onDelete(id);
                closeModal();
            } else {
                console.log("La suppression du feedback a échoué !");
                // Afficher un message ou effectuer d'autres actions en cas d'échec de la suppression
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression du feedback :', error);
        }
    };
    return (
        <Root>
            <ContainerGlobal>
                <Delete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={openModal}>
                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
                </Delete>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/>
                </Svg>
                <Input id={id} type="checkbox" checked={isChecked} onChange={handleClick} />
                <ContainerFeedback>
                    <TextFeedback>{text}</TextFeedback>
                </ContainerFeedback>
                <ContainerContributorGeneral>
                    <PositionContributor>Lien avec l'utilisateur: {relationship}</PositionContributor>
                    <ContainerContributorIdentify>
                        <ContainerContributor>
                            <NameContributor>{firstName}</NameContributor>
                            <NameContributor>{lastName}</NameContributor>
                        </ContainerContributor>
                        <PositionContributor>{position}</PositionContributor>
                    </ContainerContributorIdentify>
                </ContainerContributorGeneral>
            </ContainerGlobal>
            {isModalOpen && (
                <Modal isOpen={openModal}>
                <TitleModal>Confirmez vous la suppression du feedback ?</TitleModal>
                <ContainerButtons>
                    <BouttonModal onClick={handleDelete}>Oui</BouttonModal>
                    <BouttonModal onClick={closeModal}>Non</BouttonModal>
                </ContainerButtons>
                </Modal>
            )}
        </Root>
    );
};