import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { autenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('prebas en el authSlice', () => {

    test('debe regresar el estado inicial y llamarse "auth', () => {

        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);

    });

    test('should realizar la autenticación', () => {

        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });

    })

    test('should de regresar el logout sin argumentos', () => {

        const state = authSlice.reducer(autenticatedState, logout({ errorMessage: null }));
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null,
        });

    })

    test('should regresar el logout con argumento el mensaje de error', () => {

        const errorMessage = 'no se logro realizar la operacion'
        const state = authSlice.reducer(autenticatedState, logout({ errorMessage }))

        expect(state).toEqual({
            status: "not-authenticated",
            displayName: null,
            email: null,
            photoURL: null,
            uid: null,
            errorMessage: errorMessage,
        });

    })

    test('should cambiar el status a checking', () => {

        const state = authSlice.reducer(initialState, checkingCredentials());
        expect(state).toEqual({
            status: 'checking',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null
        });

    })
});