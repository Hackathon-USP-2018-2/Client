import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyDw4Bcjgn3Q4Yz1TJu09tbyRRoHGvmkr4M',
  authDomain: 'hackathon-usp-2018-2.firebaseapp.com',
  databaseURL: 'https://hackathon-usp-2018-2.firebaseio.com',
  projectId: 'hackathon-usp-2018-2',
  storageBucket: 'hackathon-usp-2018-2.appspot.com',
  messagingSenderId: '59566917710',
};

export function initialize() {
  firebase.initializeApp(config);
}
