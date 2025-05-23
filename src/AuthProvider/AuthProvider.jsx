import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "./../firebase";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [lodding, setLodding] = useState(true);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  // create user
  const crateUser = (email, password) => {
    setLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const LoginUser = (email, password) => {
    setLodding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const LogOutUser = () => {
    return signOut(auth);
  };

  //update User
  const updateUser = (updateInfo) => {
    setLodding(false);
    return updateProfile(auth.currentUser, updateInfo);
  };

  // google login

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLodding(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // set New password

  const setNewPssword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const AuthData = {
    user,
    setUser,
    crateUser,
    LoginUser,
    LogOutUser,
    updateUser,
    setLodding,
    lodding,
    googleLogin,
    setNewPssword,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
}

export default AuthProvider;
