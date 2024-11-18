import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
    return (
        <>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

                <Grid>
                    <Typography fontSize={39} fontWeight='light'>23 de octubre de 2024</Typography>
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
                    />
                   
                    <TextField
                        type="text"
                        title="Titulo"
                        fullWidth
                        multiline
                        variant="filled"
                        placeholder="¿Que sucedio hoy?"
                        minRows={5}
                        sx={{ border: "none", mb: 1 }}
                    />
                </Grid>
            </Grid>

            <ImageGalery />

        </>
    )
}




