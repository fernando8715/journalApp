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
    noteUpdated,
} = journalSlice.actions;