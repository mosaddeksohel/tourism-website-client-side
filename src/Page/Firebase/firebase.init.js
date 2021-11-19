import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.confing'

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);



};

export default initializeAuthentication;

