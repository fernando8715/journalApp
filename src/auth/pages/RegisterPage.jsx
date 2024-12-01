import { useMemo, useState } from 'react';

import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Button, Grid2 as Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth';


const formData = {
  displayName: '',
  email: '',
  password: ''
};

const formValidations = {
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
  email: [(value) => value.includes('@'), 'ingrese un correo valido'],
  password: [(value) => value.length >= 6, 'El password debe contener minimo 6 caracteres'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAutentication = useMemo(() => status === 'checking', [status]);


  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);


  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true)

    if (!isFormValid) return
    dispatch(startCreatingUserWithEmailAndPassword(formState))
  }

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2} >
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!displayName && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!email && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!password && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid
            size={{ xs: 12 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity='error' >{errorMessage}</Alert>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              disabled={isCheckingAutentication}
              variant="contained"
              fullWidth
              type='submit'
            >Login</Button>
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
