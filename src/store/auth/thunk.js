import { checkingCredentials, login, logout } from '.'
import { firebaseAuth } from '../../firebase/config';
import { registerUserWithEmailAndPassword, signInWithEmailPassword, signInWithGoogle } from '../../firebase/providers';


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const starGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingAuthentication());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {

    return async (dispatch) => {
        dispatch(checkingAuthentication());

        const result = await registerUserWithEmailAndPassword({ email, password, displayName });

        if (!result.ok) return dispatch(logout(result))

        dispatch(login(result));
    }
}

export const startSignInWithEmailPassword = ({ email, password }) => {

    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout(result))
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch) => {

        await firebaseAuth.signOut();
        dispatch( logout({}) );        
    }
}