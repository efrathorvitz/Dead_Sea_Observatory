import axios from 'axios';
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";

const baseUrl = 'https://committed-delight-2680eb60f9.strapiapp.com';

export const fetchEntities = async (collectionName) => {
  try {
    console.log("fetch  " + collectionName);
    const response = await axios.get(`${baseUrl}/api/${collectionName}?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    throw error;
  }
};

export const fetchEntitiesToFirestore = async (collectionName) => {
  try {
    const email = "d.s.lensky@gmail.com";
    const password = "145438";

    await signInWithEmailAndPassword(auth, email, password);
    console.log("🔐 Logged in successfully");

    console.log(`Fetching and saving ${collectionName} to Firestore`);
    const data = await fetchEntities(collectionName);

    const docRef = doc(db, "sharedData", collectionName);
    await setDoc(docRef, { data });
    console.log(`✅ Data for ${collectionName} saved to Firestore`);
    return data;
  } catch (error) {
    console.error(`❌ Error saving ${collectionName} to Firestore:`, error);
    throw error;
  }
};
