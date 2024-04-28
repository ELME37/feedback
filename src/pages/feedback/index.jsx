import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import apiRequest from '../../utils/apiRequest';

import LayoutDefault from '../../container/layoutDefault';
import FormFeedback from '../../container/forms/formFeedback';
import Lign from '../../components/lign';
import Footer from '../../components/footer';
import Error404 from '../error404';

import { Root, Introduction, H1, Text, TextTitle, ContainerUser, TextUser } from './feedback.styled';

export default function Feedback () {
    const [isValidUserId, setIsValidUserId] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    const { userId } = useParams();
    
    useEffect(() => {
      const checkUserIdValidity = async () => {
        try {
          const response = await apiRequest.get(`/auth/${userId}`);
          setUserData(response.data);
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

    return (
        <LayoutDefault>
            <Root>
                <Introduction>
                    <H1>Bienvenue sur Feedback</H1>
                    <TextTitle>Cher Contributeur,</TextTitle>
                    <Text>Nous vous remercions de consacrer du temps à fournir une recommandation pour un membre précieux de notre communauté. Votre expertise et votre perspective sont des atouts essentiels pour mettre en lumière le potentiel et les compétences de votre ancien collègue.</Text>
                    <Lign/>
                    <Text>Ce formulaire vise à recueillir des informations clés sur l'expérience et les compétences professionnelles du membre que vous recommandez, ainsi que sur ses qualités personnelles. Votre contribution aidera ses futurs employeurs à mieux évaluer sa valeur et son adéquation aux défis et opportunités qui se présentent à lui.</Text>
                    <Lign/>
                    <Text>Nous vous encourageons à répondre avec soin et objectivité aux questions suivantes. Vos observations sont précieuses et auront un impact significatif sur le parcours professionnel et la réussite future de la personne recommandée.</Text>
                    <Lign/>
                    <Text>Nous vous exprimons notre gratitude pour votre engagement envers notre communauté et pour votre contribution à son essor.</Text>
                </Introduction>
                <ContainerUser>
                    <TextUser>Vous contribuez pour :</TextUser>
                    {userData && (
                        <TextUser>{userData.firstName} {userData.lastName}</TextUser>
                    )}
                </ContainerUser>
                <FormFeedback userId={userId}/>
                <Footer/>
            </Root>
        </LayoutDefault>
    );
};
