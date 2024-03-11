import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Profil = () => {
  return (
    <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>profil</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Profil content
      </div>
    </IonContent>
  </>
  );
};

export default Profil;
