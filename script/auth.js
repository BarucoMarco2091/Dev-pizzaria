// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Configuração do Firebase (substitua com seus dados)
const firebaseConfig = {
    apiKey: "AIzaSyDpIECUU5lwKF2M6Zz_RZ89xDGX0ypQ1ys",
    authDomain: "devpizzaria-b6e5c.firebaseapp.com",
    projectId: "devpizzaria-b6e5c",
    storageBucket: "devpizzaria-b6e5c.appspot.com",
    messagingSenderId: "383683014245",
    appId: "1:383683014245:web:fc17363cd89bbfac06208c"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Função de Login
export const loginAdmin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user; // Retorna o usuário autenticado
    } catch (error) {
        console.error("Erro no login:", error);
        throw error;
    }
};

// Função de Logout
export const logoutAdmin = () => {
    return signOut(auth);
};