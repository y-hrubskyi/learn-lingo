import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  get,
  getDatabase,
  limitToFirst,
  onValue,
  orderByKey,
  query,
  ref,
  remove,
  startAfter,
  update,
} from "firebase/database";

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

const db = getDatabase(app);

export const createRef = (path) => ref(db, path);

export const getTeachers = async (lastKey) => {
  const teachersRef = createRef("/teachers");

  let myQuery = query(teachersRef, orderByKey(), limitToFirst(4));
  if (lastKey) {
    myQuery = query(myQuery, startAfter(lastKey));
  }

  const snapshot = await get(myQuery);
  return snapshot.val();
};

export const subscribeFavoriteKeys = (userId, setKeys) => {
  const ref = createRef(`/favorites/${userId}`);

  return onValue(ref, (snapshot) => {
    const items = snapshot.val();
    const nextItems = items && Object.keys(items);
    setKeys(nextItems);
  });
};

export const subscribeFavoriteItems = (userId, setItems) => {
  const ref = createRef(`/favorites/${userId}`);

  return onValue(ref, async (snapshot) => {
    const items = snapshot.val();
    if (!items) return setItems(null);

    const promises = Object.keys(items).map((itemId) => {
      return get(createRef(`/teachers/${itemId}`));
    });
    const snapshots = await Promise.all(promises);

    const itemsData = {};
    snapshots.forEach((snapshot) => (itemsData[snapshot.key] = snapshot.val()));

    const nextItemsData = itemsData && Object.entries(itemsData);
    setItems(nextItemsData);
  });
};

export const addToFavorites = (userId, teacherId) => {
  update(ref(db, `/favorites/${userId}`), {
    [teacherId]: true,
  });
};

export const removeFromFavorites = (userId, teacherId) => {
  remove(ref(db, `/favorites/${userId}/${teacherId}`));
};
