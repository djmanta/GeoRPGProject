import * as firebase from 'firebase';
import { Children } from 'react';
import { toast } from '../theme/toast';
const config = {
    apiKey: "AIzaSyA5czL5VufaRTIWJsbTL-bU4OqoGlbG0jI",
    authDomain: "thegame-9216c.firebaseapp.com",
    databaseURL: "https://thegame-9216c.firebaseio.com",
    projectId: "thegame-9216c",
    storageBucket: "thegame-9216c.appspot.com",
    messagingSenderId: "802350572094",
    appId: "1:802350572094:web:32faca86caa10e80eb676f",
    measurementId: "G-GHV7NVVJBF"
  }
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
  var database: firebase.database.Database;
  database = firebase.database();

  export function logoutUser(){
    return firebase.auth().signOut()
  }

  export async function loginUser(username:string, password: string) : Promise<any> {
    const email = `${username}@gmail.com`
    try{
    var res = await firebase.auth().signInWithEmailAndPassword(email,password)
    console.log(res);
    return true
    } 
    catch(error){
      toast(error.message)
    return false
    }

    
  }

  export async function registerUser(username:string, password: string) {
    const email = `${username}@gmail.com`

    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log(res)
      return true
    } catch (error){
        toast(error.message)
        return false
    }
    
  }

  export function ShowCard(){
  var ref = database.ref('Ful_cards');
  ref.on('value', gotData, errData);


 function gotData(data: { val: () => any; }){
   var card = data.val();
   var keys = Object.keys(card)
   console.log(keys,card);
   const toDbs = firebase.database().ref('CardId');
        const CardId = {
          keys,
        }
  
        toDbs.push(CardId);
        console.log(CardId);
      }

 
 function errData(err: any){
   console.log('Error!')
   console.log(err);
   
  }
}

 




  



  

  