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
            state.activeNote = action.payload;
            state.messageSaved = '';
        },

        setNotes: (state, action) => {
            state.notes = action.payload;
        },

        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
            // TODO: mensaje de error
        },

        noteUpdated: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    return action.payload
                }
                return note     
            })
            // TODO: mostrar mensaje de actualizacion
            state.messageSaved = 'Nota actualizada correctamente'
        },

        setImagesToActiveNote: (state, action)=> {
          state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload]
          state.isSaving = false; 
        },

        deleteNoteByID: (state, action) => {
            state
        },

        clearNotesLogout: (state) => {
            state.isSaving = false,
            state.messageSaved = '',
            state.notes = [],
            state.activeNote = null
        },

    },
})
//Action creators are generated for each case reducer function//
export const {
    addNewNote,
    clearNotesLogout,
    deleteNoteByID,
    noteUpdated,
    savingNewNote,
    setActiveNote,
    setImagesToActiveNote,
    setNotes,
    setSaving,
} = journalSlice.actions;