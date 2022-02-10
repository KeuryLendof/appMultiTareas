import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import './Style.css'

export const Inicio: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='perfil'>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFjarcfeZhPiA/profile-displayphoto-shrink_800_800/0/1622213063933?e=1649894400&v=beta&t=zbuecVmVYl7is5_GSgVaXIojDI_9sdYkiGKMjr4I-EY" alt="" />
          <p>Keury Alberto</p>
          <p>Lendof Diaz</p>
          <p>20198871@itla.edu.do</p>
        </div>

      </IonContent>
    </IonPage>
  );
};


export default Inicio;