import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2 as Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form >
        <Grid container spacing={2} >
          <Grid size={{ xs: 12 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12}}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <Button variant="contained" fullWidth>Login</Button>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <Button variant="contained" fullWidth>
              <Google />
                <Typography ml={1}>Google</Typography>
            </Button>
          </Grid>

          <Grid container size={{ xs: 12 }} justifyContent="end">
            <Link component={RouterLink} to="/auth/register">Crear una cuenta</Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
