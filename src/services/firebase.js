import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCxajN0Mh0NN2up-7bOSb_TbZ64ZPhKfVo",
  authDomain: "dead-sea-data.firebaseapp.com",
  projectId: "dead-sea-data",
  storageBucket: "dead-sea-data.firebasestorage.app",
  messagingSenderId: "205624298983",
  appId: "1:205624298983:web:0955b44a566ab73861c142",
  measurementId: "G-Q4M22BW76X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 
