import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../context/authContext';
import routes from '../router/routes';

export default function RequireAuth ({ children }) {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to={routes.home} />;
  }

  return children;
};