export const initialState = {
    status: 'checking', //'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const autenticatedState = {
    status: 'authenticated', 
    uid: '1234',
    email: 'correo@correo.co',
    displayName: 'prueba user',
    photoURL: 'http://prueba.jpg',
    errorMessage: null,
}

export const notAutenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: '',
}

export const demoUser = {
    uid: '1234fer',
    email: 'correo@correo.co',
    displayName: 'prueba user',
    photoURL: 'http://prueba.jpg',
}