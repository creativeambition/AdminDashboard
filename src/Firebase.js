import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //your config files here
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
