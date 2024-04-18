// Import des librairies React
import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Feedback from '../pages/feedback';
import User from '../pages/user';
import Error404 from '../pages/error404';
import routes from './routes';

export default function Router () {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.feedback} element={<Feedback />} />
            <Route path={routes.user} element={<User />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};