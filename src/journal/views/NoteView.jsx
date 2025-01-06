import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { useMemo } from "react"

export const NoteView = () => {

    const { activeNote } = useSelector(state => state.journal);
    const { title, content, date, onInputChange, formState } = useForm(activeNote)
    // const { id, title, content, date, imageUrls } = activeNote;

    const dateString = useMemo(() => {
        const newDate = new Date(date).toUTCString();
        return newDate;
    }, [date]);   

    return (
        <>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

                <Grid>
                    <Typography fontSize={30} fontWeight='light'>{dateString}</Typography>
                </Grid>

                <Grid>
                    <Button color="success" sx={{ p: 3 }}>
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




