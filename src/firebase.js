import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
  serverTimestamp
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

let app;
let db;
let auth;

if (hasFirebaseConfig) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

export async function ensureAnonUser() {
  if (!hasFirebaseConfig) return null;

  return new Promise((resolve, reject) => {
    const stop = onAuthStateChanged(auth, async (user) => {
      if (user) {
        stop();
        resolve(user);
        return;
      }

      try {
        const credential = await signInAnonymously(auth);
        stop();
        resolve(credential.user);
      } catch (error) {
        stop();
        reject(error);
      }
    });
  });
}

export function subscribeTrip(tripId, onData, onError) {
  if (!hasFirebaseConfig) return () => {};
  const ref = doc(db, "trips", tripId);
  return onSnapshot(ref, (snap) => {
    onData(snap.exists() ? snap.data() : null);
  }, onError);
}

export async function saveTrip(tripId, payload) {
  if (!hasFirebaseConfig) return;
  const ref = doc(db, "trips", tripId);
  const current = await getDoc(ref);

  await setDoc(ref, {
    ...payload,
    createdAt: current.exists() ? current.data().createdAt : serverTimestamp(),
    updatedAt: serverTimestamp()
  }, { merge: true });
}
