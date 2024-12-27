import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { Alert, Button, Grid2 as Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks'
import { starGoogleSignIn, startSignInWithEmailPassword } from '../../store/auth'


const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch(); 

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password });
    dispatch(startSignInWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    dispatch(starGoogleSignIn())
  }


  return (
    <AuthLayout title='Login'>
      <form 
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'  
      >
        <Grid container spacing={2} >
          <Grid size={{ xs: 12 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
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
              onChange={onInputChange}
            />
          </Grid>

          <Grid 
            size={{ xs: 12 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity='error'>{ errorMessage }</Alert>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <Button
              disabled={isAuthenticating}
              type='submit'
              variant="contained"
              fullWidth
            >Login
            </Button>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <Button
              disabled={isAuthenticating}
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
