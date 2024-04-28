import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';
import routes from '../../router/routes';

import { Root, H1, Svg, ContainerIcon, TextIcon, ContainerMenuProfil, MenuProfil, MenuLink, MenuProfilAccueil } from './header.styled';

export default function Header ({ onFormToggle, onLogout }) {
    const { isAuthenticated, currentUser } = useContext(AuthContext);
    const location = useLocation();

    const isProfilePage = location.pathname === routes.profil(currentUser?.userId);

    return (
        <Root>
            <Link to={routes.home}>
                <H1>FeedBack</H1>
            </Link>
           {!isProfilePage && (
                <>
                    {isAuthenticated() && (
                        <ContainerIcon>
                            <MenuLink to={routes.profil(currentUser.userId)}>
                                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/>
                                </Svg>
                                <TextIcon>Profil</TextIcon>
                            </MenuLink>
                        </ContainerIcon>
                    )}
                    {!isAuthenticated() && (
                        <ContainerIcon onClick={onFormToggle}>
                            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/>
                            </Svg>
                            <TextIcon>Connexion</TextIcon>
                        </ContainerIcon>
                    )}
                </>
            )}

            {isProfilePage && (
                <ContainerMenuProfil>
                    <MenuProfilAccueil>
                        <MenuLink to={routes.home}>
                            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M209.4 39.5c-9.1-9.6-24.3-10-33.9-.9L33.8 173.2c-19.9 18.9-19.9 50.7 0 69.6L175.5 377.4c9.6 9.1 24.8 8.7 33.9-.9s8.7-24.8-.9-33.9L66.8 208 208.5 73.4c9.6-9.1 10-24.3 .9-33.9zM352 64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144c-6.7 6.1-10.6 14.7-10.6 23.8s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2V288h32c53 0 96 43 96 96c0 30.4-12.8 47.9-22.2 56.7c-5.5 5.1-9.8 12-9.8 19.5c0 10.9 8.8 19.7 19.7 19.7c2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176H352V64z"/>
                            </Svg>
                            <TextIcon>Accueil</TextIcon>
                        </MenuLink>
                    </MenuProfilAccueil>
                    <MenuProfil onClick={onLogout}>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"/>
                        </Svg>
                        <TextIcon>Déconnexion</TextIcon>
                    </MenuProfil>
                </ContainerMenuProfil>
            )}
        </Root>
    );
};
