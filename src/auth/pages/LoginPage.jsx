import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Button, Grid2 as Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"
import { DisplaySettings, Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, starGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'fernando@email.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    dispatch(starGoogleSignIn())
  }


  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2} >
          <Grid size={{ xs: 12 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name='password'
              value={password}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <Button type='submit' variant="contained" fullWidth>Login</Button>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => onGoogleSignIn()}
            >
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
