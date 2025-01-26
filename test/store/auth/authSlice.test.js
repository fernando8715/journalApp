import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe('prebas en el authSlice', () => {

    test('debe regresar el estado inicial y llamarse "auth', () => {
        
        const state = authSlice.reducer(initialState, {});
        console.log(state);
        
        


        // expect(receive).fn(expect)
    });
});