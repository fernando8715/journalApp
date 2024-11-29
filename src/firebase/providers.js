import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}


export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {

    try {
        console.log({ email, password });

        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);

        // TODO: actualizar el usuario en firebase

        return {
            ok: true,
            uid, photoURL, displayName, email
        }


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorcode: error.code,
            errorMessage: error.errorMessage
        }
    }
}