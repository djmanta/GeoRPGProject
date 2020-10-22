import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonLoading, IonPage, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './Home.css';
import {loginUser} from '../theme/firebaseConfig'
import { toast } from '../theme/toast';
import { setTokenSourceMapRange } from 'typescript';
import * as firebase from 'firebase';
import { Console } from 'console';

const Cards: React.FC = () =>{

    const [value, setValue] =  useState('');
    const [card_set, setCard_set] =  useState('');
    const [cardName, setCardName] =  useState('');
    const [valueName, setValueName] = useState('');
    const [Rarity, setRarity] =  useState('');
    var ful_card = firebase.database().ref("card_set/1")

    const submitCard = () =>{     
        const toDbs = firebase.database().ref('Ful_cards');
        const karte = {
         cardName,
         card_set,
         Rarity,
         value,
         valueName
        }
  
        toDbs.push(karte);
        console.log(karte);
      }

    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>The Game!</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
          <IonInput placeholder="Card Name" 
            onIonChange={(e: any) => setCardName(e.target.value)}></IonInput>
            <IonInput placeholder="Card set" 
            onIonChange={(e: any) => setCard_set(e.target.value)}></IonInput>
            <IonInput placeholder="Rarity"
            onIonChange={(e:any) => setRarity(e.target.value)}></IonInput>
            <IonInput placeholder="value" 
            onIonChange={(e: any) => setValue(e.target.value)}></IonInput>
            <IonInput placeholder="valueName" 
            onIonChange={(e: any) => setValueName(e.target.value)}></IonInput>
          </IonContent>
          <IonButton onClick={submitCard}>Submit card</IonButton>
          
          

        </IonPage>
    )
};

export default Cards;