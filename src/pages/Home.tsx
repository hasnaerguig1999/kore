import React from 'react';
import { IonContent, IonImg,IonPage } from '@ionic/react';
import '../pages/Home.css'; 

const Home: React.FC = () => {
  return (
    <IonPage>
    <IonContent style={{ height: '100vh' }} className="ion-background-color">
      <IonImg src="/assets/img/logo.png" alt="KORE" style={{marginTop: '50%'}} />
    </IonContent>
   </IonPage>
  );
};

export default Home;
