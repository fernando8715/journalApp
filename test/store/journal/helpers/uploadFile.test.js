import {v2 as cloudinary} from 'cloudinary';
import { uploadFile } from "../../../../src/store/journal/helpers/uploadFile";

cloudinary.config({
    cloud_name: 'dxdf7mpuf',
    key_name: 'journalApp', 
    api_key: '539447459918541',
    api_secret: 'ZT1SbOU454c8bxaPlrTuNWiEFGM'
})


describe('pruebas un uploadFile', () => {

    test('debe subir el archivo a cloudinary', async() => {
        const imgUrl = 'https://res.cloudinary.com/dxdf7mpuf/image/upload/v1704162182/perfil/udeevvr5q1ff7ppl7oql.jpg';
        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'prueba');

        const url = await uploadFile(file);         

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.jpg', '');
        
        cloudinary.api.delete_resources(['Journal/'+imageId]);
    });

    test('debe retornar null', async() => {
        
        const file = new File([], '');
        const urlImage = await uploadFile(file);

        expect(urlImage).toBe(null);
    });


});
