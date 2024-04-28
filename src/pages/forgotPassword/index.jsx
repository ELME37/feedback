import React from 'react';
import { useParams } from 'react-router-dom';

import LayoutDefault from '../../container/layoutDefault';
import FormForgotPassword from '../../container/forms/formForgotPassword';
import ResetPassword from '../../container/forms/resetPassword';

import { Root } from './forgotPassword.styled';

export default function ForgotPassword () {
    const { action } = useParams();
    return (
        <LayoutDefault>
            <Root>
                {action === 'forgot' ? <FormForgotPassword /> : <ResetPassword />}
            </Root>
        </LayoutDefault>
    );
};