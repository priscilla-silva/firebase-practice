import { initializeApp } from "firebase/app";
import { getFirestore  } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6TUHAHJpbGjH7zZ47d3f7vsPTd8qnb_A",
  authDomain: "fir-pract-3c429.firebaseapp.com",
  projectId: "fir-pract-3c429",
  storageBucket: "fir-pract-3c429.appspot.com",
  messagingSenderId: "668399045091",
  appId: "1:668399045091:web:e5a8ab1cf273442ebb78d6"
};

const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);