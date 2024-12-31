import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // active: {
        //     id: 12345,
        //     title: '',
        //     content: '',
        //     date: 12345,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },

        addNewNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },

        setActiveNote: (state, action) => {
            state.activeNote = action.payload
        },

        setNotes: (state, action) => {

        },

        setSaving: (state) => {

        },

        updateNote: (state, action) => {

        },

        deleteNoteByID: (state, action) => {
            state
        }

    },
})
//Action creators are generated for each case reducer function//
export const {
    addNewNote,
    deleteNoteByID,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
} = journalSlice.actions;