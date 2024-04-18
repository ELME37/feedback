import React from 'react';
import { LayoutDefaultStyle } from './layout.styled';

export default function LayoutDefault ({ children }) {
    return (
        <LayoutDefaultStyle>
            {children}
        </LayoutDefaultStyle>
    );
};
