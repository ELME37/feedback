import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import apiRequest from '../../utils/apiRequest';
import { AuthContext } from '../../context/authContext';
import routes from '../../router/routes';

import LayoutDefault from '../../container/layoutDefault';
import Header from '../../components/header';
import Lign from '../../components/lign';
import CardFeedback from '../../components/cardFeedback';
import Error404 from '../error404';
import Footer from '../../components/footer';

import { Root, Introduction, TextTitle, Strong, Text, NoneFeedback, ContainerNoneFeedback, ContainerFeedback,
    ContainerPrint, TextPrint, ContainerButtons, Button, ContainerCopyUrl, CopyUrl, CopyText, ButtonCopyUrl,
    ContainerFeedbackAll, FeedbackAllInput, FeedbackAllLabel } from './profil.styled';

export default function Profil () {
    const [isValidUserId, setIsValidUserId] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [feedbacks, setFeedbacks] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [selectedFeedbacks, setSelectedFeedbacks] = useState([]);
    const [isUrlCopied, setIsUrlCopied] = useState(false);

    const navigate = useNavigate()
    const { userId } = useParams();
    const { updateUser, currentUser } = useContext(AuthContext);

    useEffect(() => {
        const displayFeedbacks = async () => {
            try {
                const response = await apiRequest.get(`/feedback/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des feedbacks :', error);
            }
        };
    
        displayFeedbacks();
    }, [userId]);

    useEffect(() => {
        const checkUserIdValidity = async () => {
          try {
            await apiRequest.get(`/auth/${userId}`);
            setIsValidUserId(true);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
            setIsValidUserId(false);
            setIsLoading(false);
          }
        };
    
        checkUserIdValidity();
    }, [userId]);

    if (isLoading) {
        return <p>Chargement en cours</p>;
    }

    if (!isValidUserId) {
        return <Error404 />;
    }

    const handleLogout = async () => {
        try {
            await apiRequest.post('/auth/logout');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            updateUser(null);
            navigate(routes.home);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la déconnexion :', error);
        }
    };

    const handleDeleteFeedback = async (deletedFeedbackId) => {
        setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback._id !== deletedFeedbackId));
    };

    const handleSelectFeedbackAll = e => {
        setIsCheckAll(!isCheckAll);
        setSelectedFeedbacks(feedbacks.map(feedback => feedback._id)); 
        if (isCheckAll) {
            setSelectedFeedbacks([]);
        }
      };

      const handleClick = e => {
        const { id, checked } = e.target;
        setSelectedFeedbacks([...selectedFeedbacks, id]);
        console.log(`Feedback sélectionné : ${id}`);
        if (!checked) {
          setSelectedFeedbacks(selectedFeedbacks.filter(feedbackId => feedbackId !== id));
          console.log(`Feedback désélectionné : ${id}`);
        }
      };

    const generateJsonFile = () => {
        const selectedFeedbackDetails = feedbacks.filter(feedback => selectedFeedbacks.includes(feedback._id));

        const jsonContent = JSON.stringify(selectedFeedbackDetails, null, 2);

        const blob = new Blob([jsonContent], { type: 'application/json' });

        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'feedbacks.json';
        downloadLink.click();
    };

    const generatePdfFile = () => {
        if (selectedFeedbacks.length > 0) {
            // Créez un tableau pour stocker les détails des feedbacks sélectionnés
            const selectedFeedbacksDetails = [];
    
            // Parcourez chaque ID de feedback sélectionné
            selectedFeedbacks.forEach((feedbackId) => {
                // Trouvez le feedback correspondant dans le tableau des feedbacks complets
                const feedback = feedbacks.find((feedback) => feedback._id === feedbackId);
    
                // Si un feedback correspondant est trouvé, ajoutez-le au tableau des détails des feedbacks sélectionnés
                if (feedback) {
                    selectedFeedbacksDetails.push(feedback);
                }
            });
    
            // Naviguez vers la page viewerPDF en passant les détails des feedbacks sélectionnés
            navigate(routes.viewerPDF, { state: { feedbacks: selectedFeedbacksDetails } });
        } else {
            console.log("Aucun feedback sélectionné");
        }
    };

    const copyFeedbackPageUrl = () => {
        const feedbackPageUrl = `${window.location.origin}/feedback/${userId}`;
        navigator.clipboard.writeText(feedbackPageUrl);
        setIsUrlCopied(true);
        setTimeout(() => {
            setIsUrlCopied(false);
        }, 2000);
    };
    

    return (
        <LayoutDefault>
            <Root>
                <Header onLogout={handleLogout} />
                <Introduction>
                    <TextTitle>Bienvenue <Strong>{currentUser.firstName} {currentUser.lastName}</Strong>,</TextTitle>
                    <Text>Nous sommes ravis de vous accueillir sur la plateforme de recommandations professionnelles. Ici, vous pourrez découvrir les retours et les recommandations que vos collègues, supérieurs ou collaborateurs ont partagés à votre sujet.</Text>
                    <Lign/>
                    <Text>Ces recommandations reflètent les impressions et les expériences professionnelles de ceux qui ont travaillé avec vous. Elles peuvent mettre en lumière vos forces, vos compétences et les qualités qui vous distinguent dans votre parcours professionnel.</Text>
                    <Lign/>
                    <Text>Nous espérons que ces retours vous seront utiles pour évaluer votre contribution, identifier vos points forts et envisager de nouvelles opportunités d'amélioration et de développement professionnel.</Text>
                    <Lign/>
                    <Text>De plus, vous aurez la possibilité de partager ces recommandations avec de futurs employeurs, les aidant ainsi à mieux évaluer votre profil et votre valeur ajoutée au sein de leur organisation.</Text>
                    <Lign/>
                    <Text>Nous vous encourageons à explorer les recommandations avec ouverture et objectivité, et à en tirer le meilleur parti pour enrichir votre parcours et atteindre vos objectifs professionnels.</Text>
                </Introduction>
                <ContainerFeedback>
                    {feedbacks.length === 0 ? (
                        <ContainerNoneFeedback>
                            <NoneFeedback>Vous n'avez pas encore de feedback.</NoneFeedback>
                            <NoneFeedback>Copier et partager votre lien feedback avec vos anciens collègues / responsables.</NoneFeedback>
                        </ContainerNoneFeedback>
                    ) : (
                        feedbacks.map((feedback, index) => (
                            <CardFeedback
                                key={index}
                                id={feedback._id}
                                text={feedback.recommendation}
                                relationship={feedback.relationship}
                                firstName={feedback.firstName}
                                lastName={feedback.lastName ? feedback.lastName.charAt(0) + '.' : ''}
                                position={feedback.position}
                                onDelete={() => handleDeleteFeedback(feedback._id)}
                                handleClick={handleClick}
                                isChecked={selectedFeedbacks.includes(feedback._id)}
                            />
                        ))
                    )}
                </ContainerFeedback>
                {feedbacks.length > 0 && (
                    <>
                        <ContainerFeedbackAll>
                            <FeedbackAllInput type="checkbox" name="selectAll" id="selectAll" onChange={handleSelectFeedbackAll} checked={isCheckAll}/>
                            <FeedbackAllLabel htmlFor="selectAll">
                                {isCheckAll ? "Tout désélectionner" : "Tout sélectionner"}
                            </FeedbackAllLabel>
                        </ContainerFeedbackAll>
                        <ContainerPrint disabled={selectedFeedbacks.length === 0}>
                            <TextPrint disabled={selectedFeedbacks.length === 0}>Veuillez sélectionner au moins un feedback.</TextPrint>
                            <ContainerButtons>
                                <Button onClick={selectedFeedbacks.length ? generateJsonFile : null}>Télécharger au format json</Button>
                                <Button onClick={selectedFeedbacks.length ? generatePdfFile : null}>Télécharger au format pdf</Button>
                            </ContainerButtons>
                        </ContainerPrint>
                    </>
                )}
                <ContainerCopyUrl>
                    <CopyText>Copier et partager cette Url à vos contacts pour obtenir vos feedbacks</CopyText>
                    <CopyUrl type="text" value={`${window.location.origin}/feedback/${userId}`} readOnly />
                    <ContainerButtons>
                        <ButtonCopyUrl onClick={copyFeedbackPageUrl}>{isUrlCopied ? 'URL Copiée' : 'Copier URL'}</ButtonCopyUrl>
                    </ContainerButtons>
                </ContainerCopyUrl>
                <Footer/>
            </Root>
        </LayoutDefault>
    );
};