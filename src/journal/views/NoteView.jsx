import { useEffect, useMemo, useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { FileUploadOutlined, SaveOutlined } from "@mui/icons-material"
import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"

import { ImageGalery } from "../components"
import { useForm } from "../../hooks"
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal"

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

    const fileInputRef = useRef();

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files.length === 0) return;

        dispatch(startUploadingFiles(target.files))        
    }

    return (
        <>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

                <Grid>
                    <Typography fontSize={25} fontWeight='light'>{dateString}</Typography>
                </Grid>

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />


                <Grid>
                    <Button
                        disabled={isSaving}
                        onClick={() => fileInputRef.current.click()}
                    >
                        <FileUploadOutlined />
                    </Button>
                   
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
                        sx={{ border: "none", mb: 2 }}
                        name="content"
                        value={content}
                        onChange={onInputChange}
                    />
                </Grid>
            </Grid>

            <ImageGalery images={activeNote.imageUrls}/>

        </>
    )
}




