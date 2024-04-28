import React from 'react';

import { Root, Content } from './modal.styled';

export default function Modal ({ isOpen, children }) {
    if (!isOpen) return null;

    return (
        <Root>
            <Content>
                {children}
            </Content>
        </Root>
    );
};