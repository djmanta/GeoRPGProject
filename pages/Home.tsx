import { IonButton, IonContent, IonHeader, IonToast, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import * as firebase from 'firebase';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Game!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register" color="secondary">Register</IonButton>
      </IonContent>
    </IonPage>

    
  );
};


export default Home;
