import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Location = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Location</IonTitle>
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
        Location
      </div>
    </IonContent>
  </>
);

export default Location;