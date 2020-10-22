import { IonButton, IonLoading, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../theme/toast';
import {registerUser}  from '../theme/firebaseConfig';
import * as firebase from 'firebase';
import { userInfo } from 'os';



const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

  
   async function register(){
      //validation
        if(password !== cpassword){
          return toast('Password do not match')
        }
        if(username.trim() === "" || password.trim() === ""){
          return toast('Username and password required')
        }
        const res = await registerUser(username, password)
        if(res){
          saveInDbs();
          return toast('Registration successful');
        } 
         
    }

    const saveInDbs = () =>{
      const user = firebase.auth().currentUser;
      var uid, username;
      const toDbs = firebase.database().ref('karte');
      if(user != null){
        username = user.email;
        uid = user.uid;
      }
      const karte = {
        username,
        uid,
      }

      toDbs.push(karte);
    }

    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Username"
         onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
        <IonInput type="password" placeholder="Password"
        onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
         <IonInput type="password" placeholder="Confrim Password"
        onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
        <IonButton onClick={register}>Register</IonButton>
        <p>Alerady have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
