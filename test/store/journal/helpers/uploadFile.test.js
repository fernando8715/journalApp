import { uploadFile } from "../../../../src/store/journal/helpers/uploadFile";

describe('pruebas un uploadFile', () => {

    test('debe subir el archivo a cloudinary', async() => {
        const imgUrl = 'https://res-console.cloudinary.com/dxdf7mpuf/thumbnails/v1/image/upload/v1736901294/am91cm5hbC9qNnFnZWtyanpremdzc3RlbGdraA==/drilldown';
        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'prueba');

        const url = await uploadFile(file);
        console.log(url);
               

        expect(typeof url).toBe('string')
    });
});
