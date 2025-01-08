import { useEffect, useMemo } from "react"

import { useDispatch, useSelector } from "react-redux"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"

import { ImageGalery } from "../components"
import { useForm } from "../../hooks"
import { setActiveNote, startSaveNote } from "../../store/journal"

export const NoteView = () => {

    const dispatch = useDispatch();
    const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal);
    const { title, content, date, onInputChange, formState } = useForm(activeNote)

    const dateString = useMemo(() => {
        const newDate = new Date(date).toUTCString();
        return newDate;
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Success', messageSaved, 'success');
        }
    }, [messageSaved]);



    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    return (
        <>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

                <Grid>
                    <Typography fontSize={30} fontWeight='light'>{dateString}</Typography>
                </Grid>

                <Grid>
                    <Button
                        disabled={isSaving}
                        onClick={onSaveNote}
                        color="success"
                        sx={{ p: 3 }}
                    >
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid>
            </Grid>

            <Grid container direction='row'>
                <Grid size={12}>
                    <TextField
                        type="text"
                        title="Titulo"
                        variant="filled"
                        placeholder="ingrese un titulo"
                        label="Titulo"
                        sx={{ border: "none", mb: 1 }}
                        fullWidth
                        name="title"
                        value={title}
                        onChange={onInputChange}
                    />

                    <TextField
                        type="text"
                        title="content"
                        fullWidth
                        multiline
                        variant="filled"
                        placeholder="¿Que sucedio hoy?"
                        minRows={5}
                        sx={{ border: "none", mb: 1 }}
                        name="content"
                        value={content}
                        onChange={onInputChange}
                    />
                </Grid>
            </Grid>

            <ImageGalery />

        </>
    )
}




