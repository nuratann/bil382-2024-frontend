export async function uploadFile(file, productId) {
    const uploadUrl = `http://localhost:8081/api/v1/media/upload/${productId}`;
    const formData = new FormData();
    formData.append('file', file);

    const options = {
        method: 'POST',
        body: formData
    };
    let fileUrl = ''
    await fetch(uploadUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to upload file');
            }
            return response.json();
        })
        .then(data => {
            console.log('File uploaded successfully:', data);            
            fileUrl = data.fileUrl
            console.log(fileUrl)
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });

    return fileUrl
}