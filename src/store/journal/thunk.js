import { collection, addDoc } from 'firebase/firestore/lite'
import { firebaseDB } from '../../firebase/config';
import { addNewNote, savingNewNote, setActiveNote } from './journalSlice';


export const startNewNote = () => {
    return async (dispatch, getstate) => {
        
        dispatch( savingNewNote());
        
        const { uid } = getstate().auth;

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
        //! dispatch
        dispatch( addNewNote(newNote) );
        dispatch( setActiveNote(newNote) );
        // dispatch(ActiveNote)
    }
}
