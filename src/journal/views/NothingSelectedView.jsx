import { StarBorder } from "@mui/icons-material"
import { Grid2 as Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius:3}}
        >
            <Grid xs={12}>
                <StarBorder sx={{ fontSize:100, color:'white'}}/>
            </Grid>

            <Grid xs={12}>
                <Typography color="white" sx={{p:3}}>Selecciona o crea una entrada </Typography>
                <Typography color="white" sx={{p:3}}>Irure duis veniam in ipsum laborum ipsum ad sint.</Typography>
            </Grid>
        </Grid>
    )
}
