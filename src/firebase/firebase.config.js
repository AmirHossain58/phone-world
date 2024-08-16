import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_appId,
  storageBucket: import.meta.env.VITE_projectId,
  messagingSenderId: import.meta.env.VITE_storageBucket,
  appId: import.meta.env.VITE_messagingSenderId
};

export const app = initializeApp(firebaseConfig)
