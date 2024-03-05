import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { SERVER_URL } from "./index";

const firebaseConfig = {
    apiKey: "AIzaSyAx-XrgbP-iWgI9OvR-80xHl0SOd0-r72U",
    authDomain: "hanseek.firebaseapp.com",
    projectId: "hanseek",
    storageBucket: "hanseek.appspot.com",
    messagingSenderId: "345330119340",
    appId: "1:345330119340:web:386006d7c2a6bca8caa509",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const signInWithGoogle = async () => {
    try {
        const { user } = await signInWithPopup(auth, provider);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const token = user.accessToken as string;

        // send token to server
        const url = `${SERVER_URL}/auth/firebase/google`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export { signInWithGoogle };
