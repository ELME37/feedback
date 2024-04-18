import React, { useState } from 'react';

import LayoutDefault from '../../container/layoutDefault';
import Header from '../../components/header';
import Lign from '../../components/lign';
import Carousel from '../../container/carousel';
import FormConnexion from '../../container/forms/formConnexion';

import { Root, ContainerGlobal, ContainerUtilisateur, ContainerContributeur, Text, TextUtilisateur, TextContributeur, Overlay} from './home.styled';
import Footer from '../../components/footer';

const feedbackData = [
    {
      name: "Jean Dupont",
      position: "Développeur Web",
      feedback: [
        "Excellent collaborateur, toujours prêt à partager ses connaissances. ",
        "Travaille dur pour atteindre les objectifs fixés. ",
        "Capable de résoudre les problèmes complexes avec facilité. ",
        "Fiable et ponctuel, il est un atout pour l'équipe. ",
        "Ses compétences en programmation sont remarquables. ",
        "Un plaisir de travailler avec lui, toujours de bonne humeur. "
      ]
    },
    {
      name: "Marie Martin",
      position: "Chef de Projet",
      feedback: [
        "Leadership exceptionnel, elle sait motiver son équipe. ",
        "Organisée et méthodique, elle gère les projets avec efficacité. ",
        "Excellente communicatrice, elle sait transmettre sa vision. ",
        "Très professionnelle dans toutes ses interactions. ",
        "Capable de prendre des décisions difficiles avec assurance. ",
        "Un modèle pour les autres membres de l'équipe. "
      ]
    },
    {
      name: "Pierre Dubois",
      position: "Directeur Technique",
      feedback: [
        "Visionnaire, il anticipe les tendances technologiques. ",
        "Son expertise technique est inestimable pour l'entreprise. ",
        "Gère les projets complexes avec brio. ",
        "Capable de résoudre les problèmes rapidement et efficacement. ",
        "Un leader inspirant, respecté par ses pairs. ",
        "Toujours disponible pour aider et soutenir son équipe. "
      ]
    },
    {
      name: "Émilie Leroux",
      position: "Graphiste",
      feedback: [
        "Créative et talentueuse, elle produit des designs exceptionnels. ",
        "Sait comprendre les besoins des clients et y répondre efficacement. ",
        "Travaille bien sous pression, même avec des délais serrés. ",
        "Ses compétences en design sont remarquables. ",
        "Apporte une touche d'originalité à chaque projet. ",
        "Un véritable atout pour l'équipe, toujours prête à relever de nouveaux défis. "
      ]
    },
    {
      name: "Thomas Garcia",
      position: "Responsable Marketing",
      feedback: [
        "Stratégique et visionnaire, il sait identifier les opportunités de croissance. ",
        "Excellente compréhension des tendances du marché. ",
        "Sait créer des campagnes marketing percutantes et efficaces. ",
        "Un leader charismatique, capable de mobiliser son équipe. ",
        "Toujours en quête d'innovation pour différencier l'entreprise de ses concurrents. ",
        "Un plaisir de travailler avec lui, toujours ouvert aux idées nouvelles. "
      ]
    },
    {
      name: "Laura Petit",
      position: "Analyste Financier",
      feedback: [
        "Analytique et précise, elle produit des rapports financiers de haute qualité. ",
        "Capable de résoudre les problèmes complexes liés aux finances de l'entreprise. ",
        "Travaille avec rigueur et souci du détail. ",
        "Ses compétences en analyse financière sont remarquables. ",
        "Un atout essentiel pour l'équipe financière de l'entreprise. ",
        "Toujours professionnelle dans son approche du travail. "
      ]
    }
  ];
  

export default function Home () {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };
    return (
        <LayoutDefault>
            <Root>
            {isFormVisible && <Overlay />}
                <Header onFormToggle={toggleFormVisibility}/>
                {isFormVisible && <FormConnexion close={toggleFormVisibility}/>}
                {!isFormVisible && (
                    <React.Fragment>
                        <ContainerGlobal>
                            <Text>Feedback est bien plus qu'une simple plateforme :</Text>
                            <Lign/>
                            <Text>C'est votre partenaire numérique pour booster votre présence professionnelle et développer votre réseau.</Text>
                            <Lign/>
                            <Text>Que vous soyez à la recherche de témoignages élogieux pour renforcer votre CV, ou que vous souhaitiez rendre hommage à un ancien collègue,</Text>
                            <Lign/>
                            <Text>Feedback est là pour vous.</Text>
                        </ContainerGlobal>
                        <Carousel slides={feedbackData}/>
                        <ContainerGlobal>
                            <ContainerUtilisateur>
                                <TextUtilisateur>Utilisateurs</TextUtilisateur>
                                <TextUtilisateur>Grâce à Feedback, vous pouvez recueillir des témoignages authentiques de vos anciens collègues et employeurs, ajoutant ainsi une touche de crédibilité supplémentaire à votre profil professionnel. Ces témoignages peuvent également contribuer à améliorer votre référencement en ligne, vous aidant à vous démarquer dans un marché du travail de plus en plus compétitif.</TextUtilisateur>
                            </ContainerUtilisateur>
                            <ContainerContributeur>
                                <TextContributeur>Contributeurs</TextContributeur>
                                <TextContributeur>En partageant votre expérience de travail avec vos anciens collègues et employeurs, vous leur offrez une chance unique de se distinguer dans leur parcours professionnel. Vos retours bienveillants peuvent ouvrir des portes et les aider à progresser dans leur carrière, tout en renforçant les liens qui vous unissent.</TextContributeur>
                            </ContainerContributeur>
                        </ContainerGlobal>
                        <Footer/>
                    </React.Fragment>
                )}
            </Root>
        </LayoutDefault>
    );
};