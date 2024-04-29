// Import des librairies React
import React, { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import apiRequest from "./utils/apiRequest";
import { AuthContext } from "./context/authContext";
import routes from "./router/routes";

import Router from './router';

export default function App() {
    const navigate = useNavigate()
    const { updateUser, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            const checkAuthentication = async () => {
                try {
                    await apiRequest.get(`/auth`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                    });
                } catch (error) {
                    console.error('Erreur lors de la vérification de l\'authentification:', error);
                    if (error.response && error.response.status === 401) {
                        // Si le token est expiré ou invalide, supprime le token côté client
                        localStorage.removeItem('token');
                        localStorage.removeItem('userId');
                        updateUser(null);
                        navigate(routes.home);
                        setTimeout(() => {
                            alert("Votre session a expiré.");
                        }, 2000); // Durée en millisecondes avant de fermer l'alerte
                    }
                }
            };
        
            checkAuthentication();
        }
    }, [navigate, updateUser, isAuthenticated]);

  return (
    <>
        <Router />
    </>
  );
}