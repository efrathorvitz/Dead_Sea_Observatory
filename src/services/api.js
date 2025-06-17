import axios from 'axios';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "./firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";

const baseUrl = 'https://committed-delight-2680eb60f9.strapiapp.com';

async function login() {
  const email = "d.s.lensky@gmail.com";
  const password = "145438";

  if (!auth.currentUser) {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("🔐 Logged in successfully");
  }
}

export const fetchFromFirestore = async (collectionName) => {
  try {
    await login();

    const docRef = doc(db, "sharedData", collectionName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(`📖 Data for ${collectionName} fetched from Firestore`);
      return docSnap.data().data;
    } else {
      console.log(`No data found for ${collectionName} in Firestore`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error fetching ${collectionName} from Firestore:`, error);
    throw error;
  }
};

export const fetchEntitiesToFirestore = async (collectionName) => {
  try {
    await login();

    console.log(`Fetching from API and saving ${collectionName} to Firestore`);
    const response = await axios.get(`${baseUrl}/api/${collectionName}?populate=*`);
    const data = response.data.data;

    const docRef = doc(db, "sharedData", collectionName);
    await setDoc(docRef, { data });

    console.log(`✅ Data for ${collectionName} saved to Firestore`);
    return data;
  } catch (error) {
    console.error(`❌ Error saving ${collectionName} to Firestore:`, error);
    throw error;
  }
};
