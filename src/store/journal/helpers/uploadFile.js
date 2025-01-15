export const uploadFile = async(file) => {
    
    if(!file) throw new Error('No hay archivo para subir');
    
    const cloudinaryURl = 'https://api.cloudinary.com/v1_1/dxdf7mpuf/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        
        const resp = await fetch(cloudinaryURl, {
            method: 'POST',
            body: formData,
        });

        if(!resp.ok) throw new Error('ocurrio un error al subir el archivo');
        const cloudResp = await resp.json();

        return cloudResp.secure_url
         
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }



}