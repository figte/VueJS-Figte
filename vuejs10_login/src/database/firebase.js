import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCjVm4m57Xkmj82c9dTjwX1SdYuLPVl_Ig",
    authDomain: "myapp-a9c4b.firebaseapp.com",
    databaseURL: "https://myapp-a9c4b.firebaseio.com",
    projectId: "myapp-a9c4b",
    storageBucket: "myapp-a9c4b.appspot.com",
    messagingSenderId: "814232557555",
    appId: "1:814232557555:web:34a91a64e79ae641fba486",
    measurementId: "G-JJPZHZCK7V"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  

  export default firebase