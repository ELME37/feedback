import React from 'react';

import LayoutDefault from '../../container/layoutDefault';
import FormFeedback from '../../container/forms/formFeedback';
import Lign from '../../components/lign';
import Footer from '../../components/footer';

import { Root, Introduction, Text, TextTitle, ContainerUser, TextUser } from './feedback.styled';

export default function Feedback () {
    return (
        <LayoutDefault>
            <Root>
                <Introduction>
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
                    <TextUser>M. Dupond</TextUser>
                </ContainerUser>
                <FormFeedback/>
                <Footer/>
            </Root>
        </LayoutDefault>
    );
};
