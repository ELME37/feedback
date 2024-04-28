// Import des librairies React
import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Feedback from '../pages/feedback';
import Profil from '../pages/profil';
import ViewerPDF from '../pages/viewerPDF';
import ForgotPassword from '../pages/forgotPassword';
import Error404 from '../pages/error404';
import routes from './routes';
import RequireAuth from '../auth/requireAuth';

export default function Router () {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={`${routes.forgotPassword}/:action`} element={<ForgotPassword />} />
            <Route path={routes.resetPassword} element={<ForgotPassword />} />
            <Route path={routes.feedback()} element={<Feedback />} />
            <Route path={routes.profil()} element={<RequireAuth><Profil /></RequireAuth>} />
            <Route path={routes.viewerPDF} element={<RequireAuth><ViewerPDF /></RequireAuth>} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};