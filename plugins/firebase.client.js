// plugins/firebase.client.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Для автентифікації
import { getFirestore } from 'firebase/firestore'; // Якщо знадобиться база даних
import { getStorage } from 'firebase/storage'; // Для завантаження фотографій

// Ваші конфігураційні дані Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAzFJ7HycctZW6qIhZSVgNSxklWYl_OmYU",
  authDomain: "bookswap-cd40c.firebaseapp.com",
  projectId: "bookswap-cd40c",
  storageBucket: "bookswap-cd40c.firebasestorage.app",
  messagingSenderId: "332394300571",
  appId: "1:332394300571:web:8b7fcd093bdfc52970723e"
};


// Ініціалізація Firebase App
const app = initializeApp(firebaseConfig);

// Отримання сервісів Firebase
const auth = getAuth(app);
const db = getFirestore(app); // Додано для майбутнього використання
const storage = getStorage(app); // Додано для майбутнього використання

export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebaseApp: app,
      auth: auth,
      db: db,
      storage: storage
    }
  };
});