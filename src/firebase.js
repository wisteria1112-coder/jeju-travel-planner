import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import {
  get,
  getDatabase,
  onValue,
  ref,
  serverTimestamp,
  set
} from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.databaseURL &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
);

let app;
let db;
let auth;

if (hasFirebaseConfig) {
  app = initializeApp(firebaseConfig);
  db = getDatabase(app);
  auth = getAuth(app);
}

function safeTripId(tripId) {
  return (tripId || "jeju-2026").trim().replace(/[.#$[\]/]/g, "_") || "jeju-2026";
}

function tripRef(tripId) {
  return ref(db, `trips/${safeTripId(tripId)}`);
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

  return onValue(
    tripRef(tripId),
    (snapshot) => {
      onData(snapshot.exists() ? snapshot.val() : null);
    },
    onError
  );
}

export async function saveTrip(tripId, payload) {
  if (!hasFirebaseConfig) return;

  const refForTrip = tripRef(tripId);
  const current = await get(refForTrip);
  const currentValue = current.exists() ? current.val() : null;

  await set(refForTrip, {
    ...payload,
    createdAt: currentValue?.createdAt || serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}
