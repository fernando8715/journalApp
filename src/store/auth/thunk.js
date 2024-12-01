import { checkingCredentials, login, logout } from '.'
import { registerUserWithEmailAndPassword, signInWithGoogle } from '../../firebase/providers';


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const starGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingAuthentication());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {

    return async (dispatch) => {
        dispatch(checkingAuthentication());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailAndPassword({ email, password, displayName });

        if( !ok ) return dispatch(logout( {errorMessage} ))
        
        dispatch(login(uid, photoURL, email, displayName));
    }
}