import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/config";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = ()=>{
    
    const { status } = useSelector(state => state.auth);
    const dispath = useDispatch();

    useEffect(() => {

        onAuthStateChanged(firebaseAuth, async (user) => {
            
            if (!user) return dispath(logout());
            
            const { uid, email, displayName, photoURL } = user;
            dispath(login({ uid, email, displayName, photoURL }))
            dispath(startLoadingNotes());
        });

    }, []);

    return status
}