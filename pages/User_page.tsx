import { IonButton, IonContent, IonHeader, IonToast, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import {logoutUser} from '../theme/firebaseConfig';
import {ShowCard} from '../theme/firebaseConfig';

const User_page: React.FC = () =>{
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>The Game!</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonButton onClick={ShowCard}>Logout</IonButton>
          </IonContent>
        </IonPage>
    
        
      )
    }

export default User_page;