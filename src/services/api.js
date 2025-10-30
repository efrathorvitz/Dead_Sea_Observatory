// src/services/api.js
import axios from 'axios';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const baseUrl = 'https://committed-delight-2680eb60f9.strapiapp.com';
const email = 'd.s.lensky@gmail.com';
const password = '145438';

async function login() {
  if (!auth.currentUser) {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('🔐 Logged in successfully');
  }
}

export const fetchEntitiesToFirestore = async (collectionName) => {
  try {
    await login();
    console.log(`📥 Fetching ${collectionName} from API`);

    let allData = [];
    let page = 1;
    let pageCount = 1;

    do {
      const response = await axios.get(`${baseUrl}/api/${collectionName}`, {
        params: {
          populate: '*',
          'pagination[page]': page,
          'pagination[pageSize]': 100
        }
      });
      console.log('API Response:', response);
      const dataFromStrapi = response.data.data;
      allData.push(...dataFromStrapi);

      pageCount = response.data.meta.pagination.pageCount;
      page++;
    } while (page <= pageCount);

    // המרה ל-JSON כדי לשמור nested objects בצורה תקינה
    const preparedData = allData.map(entry => {
      const orderedKeys = Object.keys(entry);
      const values = JSON.parse(JSON.stringify(entry));
console.log('Prepared Entry:', { orderedKeys, values });
      return {
        orderedFields: orderedKeys,
        values: values
      };
    });

    const docRef = doc(db, 'sharedData', collectionName);
    await setDoc(docRef, { data: preparedData });

    console.log(`✅ Saved ${collectionName} to Firestore with ordered fields`);
    return preparedData;

  } catch (error) {
    console.error(`❌ Error saving ${collectionName} to Firestore:`, error);
    throw error;
  }
};

export const fetchFromFirestore = async (collectionName) => {
  try {
    await login();

    const docRef = doc(db, 'sharedData', collectionName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(`📖 Fetched ${collectionName} from Firestore`);
      return docSnap.data().data;
    } else {
      console.warn(`⚠️ No data found for ${collectionName}`);
      return null;
    }

  } catch (error) {
    console.error(`❌ Error fetching ${collectionName} from Firestore:`, error);
    throw error;
  }
};

export const reconstructObjectInOrder = (entry) => {
  const { orderedFields, values } = entry;
  const orderedObject = {};

  orderedFields.forEach(key => {
    orderedObject[key] = values[key];
  });

  return orderedObject;
};
