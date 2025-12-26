import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCpMGjoy6tfq8WziLw8xvjXHfYF4Rquz2g",
  authDomain: "viral-post-a0687.firebaseapp.com",
  projectId: "viral-post-a0687",
  storageBucket: "viral-post-a0687.firebasestorage.app",
  messagingSenderId: "1093245420616",
  appId: "1:1093245420616:web:e2ca78e74fd12daa30847d"
};


export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
