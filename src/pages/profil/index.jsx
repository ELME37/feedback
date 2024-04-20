import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../router/routes';
import { useParams } from 'react-router-dom';

import apiRequest from '../../utils/apiRequest';
import { AuthContext } from '../../context/authContext';

import LayoutDefault from '../../container/layoutDefault';
import Lign from '../../components/lign';

import { Root, Introduction, TextTitle, Text } from './profil.styled';

export default function Profil () {
    const navigate = useNavigate()
    const { userId } = useParams();

    const { updateUser, currentUser } = useContext(AuthContext);

    const goToFeedbackPage = (userId) => {
        navigate(routes.feedback(userId));
    };

    const handleLogout = async () => {
        try {
            const response = await apiRequest.post('/auth/logout');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            console.log(response.data.message);
            updateUser(null);
            navigate("/");
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la déconnexion :', error);
        }
    };

    return (
        <LayoutDefault>
            <Root>
            <Introduction>
                <TextTitle>Cher Utilisateur,</TextTitle>
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
            <p>{currentUser.firstName}</p>
            <p>{currentUser.lastName}</p>
            <button>Télécharger au format json</button>
            <button>Télécharger au format pdf</button>
            <button onClick={handleLogout}>Se déconnecter</button>
            <button onClick={() => goToFeedbackPage(userId)}>Voir formulaire feedback</button>
            <Link to={routes.home}><button>Retour page d'accueil</button></Link>
            </Root>
        </LayoutDefault>
    );
};
