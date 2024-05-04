import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBHhIiNyoPqLhzGLPUVjCI7R47r1CKQaMA",
  authDomain: "gdsc-23-24.firebaseapp.com",
  projectId: "gdsc-23-24",
  storageBucket: "gdsc-23-24.appspot.com",
  messagingSenderId: "256657458247",
  appId: "1:256657458247:web:4397d425736f2239d01d62",
  measurementId: "G-JWE7SZL3LJ"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();