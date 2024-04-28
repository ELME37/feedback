import React from 'react';

import routes from '../../router/routes';

import { Error404Container, Error404Logo, Error404Text, BackToHome } from './error404.styled';

export default function Error404 () {
    return (
        <Error404Container>
            <Error404Logo>Error 404</Error404Logo>
            <Error404Text>Oups! La page que vous demandez n'existe pas.</Error404Text>
            <BackToHome to={routes.home}>Retourner sur la page d'accueil</BackToHome>
        </Error404Container>
    );
};
