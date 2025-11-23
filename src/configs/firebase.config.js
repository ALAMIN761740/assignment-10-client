import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDtVtglbm2rp3GwTByAjEraEujrYUuFlwU",
  authDomain: "client-10-d0fc1.firebaseapp.com",
  projectId: "client-10-d0fc1",
  storageBucket: "client-10-d0fc1.firebasestorage.app",
  messagingSenderId: "823724424080",
  appId: "1:823724424080:web:56615f269a223c43639115"
};


const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);