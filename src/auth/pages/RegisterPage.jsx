import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2 as Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  displayName: 'Fernando Ruiz',
  email: 'fernando@email.com',
  password: '123456'
};

const formValidations = {
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
  email: [(value) => value.includes('@'), 'El password debe tener más de 6 caracteres'],
  password: [(value) => value.length >= 6, 'El password debe contene'],
}


export const RegisterPage = () => {

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);
   

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);

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
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
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
