import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  query,
  setDoc,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";

const {
  VITE_FIREBASE_API_KEY: API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN: AUTH_DOMAIN,
  VITE_FIREBASE_DATABASE_URL: DATABASE_URL,
  VITE_FIREBASE_PROJECT_ID: PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET: STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID: MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID: APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export const getTeachers = async (lastKey, filters) => {
  const { language, level, price } = filters;
  const teachersRef = collection(db, "teachers");

  let myQuery = query(teachersRef);
  if (language) {
    myQuery = query(myQuery, where("languages", "array-contains", language));
  }

  if (level) {
    myQuery = query(myQuery, where(`levels.${level}`, "==", true));
  }

  if (price) {
    myQuery = query(myQuery, where("price_per_hour", "<=", price));
  }

  if (lastKey) {
    myQuery = query(myQuery, startAfter(lastKey));
  }

  myQuery = query(myQuery, limit(4));

  const snapshot = await getDocs(myQuery);
  return snapshot.docs;
};

export const subscribeFavoriteKeys = (userId, setKeys) => {
  const ref = doc(db, "favorites", userId);

  return onSnapshot(ref, (snapshot) => {
    const keys = snapshot.data();
    const nextKeys = keys && Object.keys(keys);
    setKeys(nextKeys);
  });
};

export const subscribeFavoriteItems = (
  userId,
  setItems,
  setIsLoading,
  setError
) => {
  setIsLoading(true);
  setError(null);

  const ref = doc(db, "favorites", userId);

  return onSnapshot(ref, async (snapshot) => {
    try {
      const keys = Object.keys(snapshot.data());

      const isEmpty = keys.length === 0;
      if (isEmpty) return setItems(null);

      const itemsPromises = keys.map((itemId) =>
        getDoc(doc(db, "teachers", itemId))
      );
      const snapshots = await Promise.all(itemsPromises);

      const nextItems = snapshots.map((snapshot) => ({
        ...snapshot.data(),
        id: snapshot.id,
      }));

      setItems(nextItems);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  });
};

export const addToFavorites = (userId, teacherId) => {
  return setDoc(
    doc(db, "favorites", userId),
    {
      [teacherId]: true,
    },
    { merge: true }
  );
};

export const removeFromFavorites = (userId, teacherId) => {
  return updateDoc(doc(db, "favorites", userId), {
    [teacherId]: deleteField(),
  });
};
