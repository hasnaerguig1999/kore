import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Preview = () => {
  return (
    <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Preview</IonTitle>
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
       Preview
      </div>
    </IonContent>
  </>
  );
};

export default Preview;
