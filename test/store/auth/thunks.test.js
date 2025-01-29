import { checkingCredentials } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunk";

jest.mock('../../../src/firebase/providers');

describe('pruebas en AuthThunks', () => {

    const dispatch = jest.fn();
    beforeEach( ()=> jest.clearAllMocks() );

    test('debe llamar la funcion CheckingCredencial', async() => {
        
        await checkingAuthentication()(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });
});