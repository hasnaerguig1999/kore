import React from 'react';
import { IonContent, IonImg,IonButton,IonRouterLink,IonText } from '@ionic/react';
import '../styles/Bienvenue.css';

const BienvenuePage: React.FC = () => {
  return (
    <IonContent className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
    <div className="mb-8 text-center">
      <IonImg src="/assets/img/logo.png" alt="KORE"  className="logo" />
      <h1 className="text-white" style={{    marginTop: '-181px',fontSize: 'x-large'}}>Bienvenue sur KORE</h1>
      <IonButton className="button-connecter-vous">Connectez-vous !</IonButton>
      <IonButton className="creer-compte">
      Créer un compte
    </IonButton>
    <IonText className="bysigning">
      By signing up you agree to our

      <IonRouterLink className="termsservice">
        terms of service and privacy policy
      </IonRouterLink>
    </IonText>
    </div>
  </IonContent>
  );
};

export default BienvenuePage;