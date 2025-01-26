import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { autenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('prebas en el authSlice', () => {

    test('debe regresar el estado inicial y llamarse "auth', () => {

        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
    });

    test('debe de realizar el login', () => {

        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual({
            status: 'authenticated',
            uid: '1234fer',
            email: 'correo@correo.co',
            displayName: 'prueba user',
            photoURL: 'http://prueba.jpg',
            errorMessage: null,
        });
    });

    test('debe realizar el logout sin argumentos', () => {

        const state = authSlice.reducer(autenticatedState, logout());
        
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });    
    });
    
    
    test('debe realizar el logout con argumentos', () => {
        
        const errorMessage = 'credenciales no son correctas';
        const state = authSlice.reducer(autenticatedState, logout({errorMessage}));

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        });
    });

    test('debe cambiar el estado a checking', () => {
        
        const state = authSlice.reducer(autenticatedState, checkingCredentials());
        
        expect(state.status).toBe('checking');     
    });
});