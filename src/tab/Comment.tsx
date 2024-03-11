import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Comment = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>comment</IonTitle>
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
        comment
      </div>
    </IonContent>
  </>
);

export default Comment;