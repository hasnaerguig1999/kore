import React from 'react';
import { IonContent, IonButton, IonImg, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Bienvenue.css';

const BienvenuePage: React.FC = () => {
  return (
    <IonContent className="ion-padding flex flex-col items-center justify-center bg-black text-white">
      <div className="mb-8">
        <IonImg src="/assets/img/logo.png" alt="KORE" className="w-40 h-40" />
      </div>
      <IonTitle className="mb-4 text-3xl font-bold">Bienvenue sur KORE</IonTitle> 
      <IonButton className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mb-4 w-64 rounded bg-custom-yellow py-2 px-4 text-lg font-semibold text-black">        Connectez-vous !
      </IonButton>
      <IonButton className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 mb-8 w-64 rounded border border-yellow-600 py-2 px-4 text-lg font-semibold">
        Créer un compte
      </IonButton>
      <IonText className="text-xs">
        By signing up you agree to our{" "}
        <a href="#" className="underline">
          terms of service
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          privacy policy
        </a>
      </IonText>
    </IonContent>
  );
};

export default BienvenuePage;