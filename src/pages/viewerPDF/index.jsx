import React from 'react';
import { useLocation } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';

import Header from '../../components/header';
import LayoutDefault from '../../container/layoutDefault';
import DocumentPDF from '../../container/documentPDF';

export default function ViewerPDF() {
    const location = useLocation();
    const { state } = location;
    const feedbacks = state ? state.feedbacks : [];
    
    return (
        <LayoutDefault>
        <div style={{ width: '100%', height: '100vh' }}>
            <Header/>
            <PDFViewer style={{ width: '100%', height: '100%' }}>
                <DocumentPDF feedbacks={feedbacks} />
            </PDFViewer>
        </div>
        </LayoutDefault>
    );
};
