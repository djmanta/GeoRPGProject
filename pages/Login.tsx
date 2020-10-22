import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonLoading, IonPage, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './Home.css';
import {loginUser} from '../theme/firebaseConfig'
import { toast } from '../theme/toast';



const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login(){
    setBusy(true)
    const res = await loginUser(username,password)
    if (res) {
      toast('You have logged in!'); 
      
    }
    setBusy(false)
  }
 
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
        <IonContent className="ion-padding">
          <IonInput placeholder="Username"
            onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
          <IonInput type="password" placeholder="Password"
            onIonChange={(e: any)=> setPassword(e.target.value)}></IonInput>
          <IonButton onClick={login}>Login</IonButton>
          <p>New here? <Link to="/register">Register</Link></p>
        </IonContent>
      </IonPage>
    );
  };
export default Login

