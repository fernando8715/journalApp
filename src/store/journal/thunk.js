import { collection, addDoc, doc, setDoc } from 'firebase/firestore/lite'
import { firebaseDB } from '../../firebase/config';

import { addNewNote, noteUpdated, savingNewNote, setActiveNote, setImagesToActiveNote, setNotes, setSaving } from './journalSlice';
import { loadNotes, uploadFile } from './helpers';


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

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());
        const { uid } = getState().auth;
        const { activeNote } = getState().journal;
        const newNote = { ...activeNote };
        delete newNote.id;

        const refDoc = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await setDoc(refDoc, newNote, { merge: true });

        dispatch(noteUpdated(activeNote));

    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {

        dispatch(setSaving())

        const uploadFilesPromises = [];
        for (const file of files) {
            uploadFilesPromises.push(uploadFile(file));
        }

        const photoUrls = await Promise.all(uploadFilesPromises);
        dispatch(setImagesToActiveNote(photoUrls)); 

    }
}

