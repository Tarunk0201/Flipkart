import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, set, ref as dbRef, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKWjf6b0yUG4P9gh7PW5nKlMf9Frbhu10",
  authDomain: "food-at-door-5783a.firebaseapp.com",
  databaseURL: "https://food-at-door-5783a-default-rtdb.firebaseio.com",
  projectId: "food-at-door-5783a",
  storageBucket: "food-at-door-5783a.appspot.com",
  messagingSenderId: "809904113791",
  appId: "1:809904113791:web:7f0bf5d0e888f59817174a",
};

const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);
const database = getDatabase(firebaseapp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const signOutUser = () => signOut(firebaseAuth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const snapshot = await get(dbRef(database, "users/" + user.uid));
        const userData = snapshot.exists() ? snapshot.val() : {};
        setUser({
          ...user,
          displayName: userData.name || user.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(dbRef(database, key), data);

  return (
    <FirebaseContext.Provider
      value={{
        user,
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        putData,
        signOutUser,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
