import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2 as Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form >
        <Grid container spacing={2} >
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Nombre completo"
              type="email"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button variant="contained" fullWidth>Login</Button>
          </Grid>

          <Grid container size={{ xs: 12 }} justifyContent="end">
            <Typography>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} to="/auth/login">Ingresar</Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
