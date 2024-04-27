import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  get,
  getDatabase,
  onValue,
  ref,
  remove,
  update,
} from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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

const dbRB = getDatabase(app);

export const createRef = (path) => ref(dbRB, path);

const db = getFirestore(app);

export const getTeachers = async () => {
  const snapshot = await getDocs(collection(db, "teachers"));
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const subscribeFavoriteKeys = (userId, setKeys) => {
  const ref = createRef(`/favorites/${userId}`);

  return onValue(ref, (snapshot) => {
    const keys = snapshot.val();
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

  const ref = createRef(`/favorites/${userId}`);

  return onValue(ref, async (snapshot) => {
    try {
      const keys = snapshot.val();
      if (!keys) return setItems(null);

      const itemsPromises = Object.keys(keys).map((itemId) => {
        return get(createRef(`/teachers/${itemId}`));
      });
      const snapshots = await Promise.all(itemsPromises);

      const items = {};
      snapshots.forEach((snapshot) => (items[snapshot.key] = snapshot.val()));

      const nextItems = items && Object.entries(items);
      setItems(nextItems);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  });
};

export const addToFavorites = (userId, teacherId) => {
  return update(ref(dbRB, `/favorites/${userId}`), {
    [teacherId]: true,
  });
};

export const removeFromFavorites = (userId, teacherId) => {
  return remove(ref(dbRB, `/favorites/${userId}/${teacherId}`));
};
