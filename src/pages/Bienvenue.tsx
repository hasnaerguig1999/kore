import React from 'react';
import { IonContent, IonButton, IonRouterLink, IonImg, IonTitle, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Bienvenue.css';

const BienvenuePage: React.FC = () => {
  return (
    <IonContent className="ion-padding flex flex-col items-center justify-center bg-black text-white">
      <div className="mb-8">
        <IonImg src="/assets/img/logo.png" alt="KORE" style={{ marginTop: '44%' }} className="w-40 h-40" />
      </div>
      <IonTitle className="text-bienvenue">Bienvenue sur KORE</IonTitle>
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
    </IonContent>
  );
};

export default BienvenuePage;