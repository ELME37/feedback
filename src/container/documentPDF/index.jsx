import React, { useEffect, useState } from 'react';
import { Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

import apiRequest from '../../utils/apiRequest';
import { colors } from '../../utils/colors';

import icon from '../../assets/images/quote-right-solid.png';
import fontRalewayBold from '../../assets/styles/fonts/Raleway-Bold.ttf';
import fontRalewayRegular from '../../assets/styles/fonts/Raleway-Regular.ttf';

Font.register({ family: 'RalewayBold', src: fontRalewayBold });
Font.register({ family: 'RalewayRegular', src: fontRalewayRegular });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 10,
        paddingTop: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    feedback: {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        minHeight: 100,
        marginBottom: 20,
        padding: 20,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: colors.gold,
        borderRadius: 10,
    },
    image: {
        width: 30,
        height: 30,
        marginBottom: 20,
    },
    containerGeneral: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        width: "100%",
        marginTop: 20,
    },
    containerContributorIdentify: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        fontFamily: 'RalewayBold',
        marginBottom: 20,
        textAlign: 'center',
        color: colors.black2,
    },
    text: {
        fontSize: 12,
        fontFamily: 'RalewayRegular',
        marginBottom: 5,
        color: colors.black2,
    },
    textName: {
        fontSize: 12,
        fontFamily: 'RalewayBold',
        marginBottom: 5,
        color: colors.gold,
    },
});

const DocumentPDF = ({ feedbacks }) => {
    const [isValidUserId, setIsValidUserId] = useState();
    const [userData, setUserData] = useState(null);

    const userId = feedbacks[0].userId;
    
    useEffect(() => {
      const checkUserIdValidity = async () => {
        try {
          const response = await apiRequest.get(`/auth/${userId}`);
          setUserData(response.data);
          setIsValidUserId(true);
        } catch (error) {
          console.error(error);
          setIsValidUserId(false);
        }
      };
  
      checkUserIdValidity();
    }, [userId]);

    if (!isValidUserId) {
        return  (
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.text}>Aucun feedback à afficher.</Text>
                </View>
              </Page>
            </Document>
          );
      }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Feedbacks de {userData.firstName} {userData.lastName}</Text>
          {feedbacks.map((feedback, index) => (
            <View wrap={false} style={styles.feedback} key={index}>
              <Image style={styles.image} src={icon} alt="icon" />
              <Text style={styles.text}>{feedback.recommendation}</Text>
              <View style={styles.containerGeneral}>
                <Text style={styles.text}>Lien avec l'utilisateur: {feedback.relationship}</Text>
                <View style={styles.containerContributorIdentify}>
                    <Text style={styles.textName}>{feedback.firstName} {feedback.lastName.substring(0, 1)}.</Text>
                    <Text style={styles.text}>{feedback.position}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default DocumentPDF;
