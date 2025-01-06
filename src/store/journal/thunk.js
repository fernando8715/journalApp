import { collection, addDoc } from 'firebase/firestore/lite'
import { firebaseDB } from '../../firebase/config';
import { addNewNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';
import { loadNotes } from './helpers/loadNotes';


export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            content: '',
            date: new Date().getTime(),
        };

        try {
            const newDoc = await addDoc(collection(firebaseDB, `${uid}/journal/notes`), newNote);
            newNote.id = newDoc.id;
            console.log(`nota ingresada con el id ${newDoc.id}`);

        } catch (error) {
            console.log(`error agregando nota: ${error}`);

        }
        dispatch(addNewNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe')

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

