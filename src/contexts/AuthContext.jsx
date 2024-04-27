import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isRefreshing, setIsRefreshing] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUser = async (data) => {
    await updateProfile(auth.currentUser, data);
    setCurrentUser({ ...auth.currentUser });
  };

  useEffect(() => {
    setIsRefreshing(true);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsRefreshing(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isRefreshing,
    signUp,
    logIn,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isRefreshing && children}
    </AuthContext.Provider>
  );
};
