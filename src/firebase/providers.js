import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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

        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile(firebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            uid, photoURL, displayName, email
        }


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorcode: error.code,
            errorMessage: error.message
        }
    }
}