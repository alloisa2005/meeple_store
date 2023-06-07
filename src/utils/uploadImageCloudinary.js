export const uploadImageToCloudinary = async (imageUri) => {
  try {
    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg', // Adjust the type if needed
      name: 'image.jpg', // Provide a name for the image
    });

    formData.append('upload_preset', 'gqcz57w2'); // Replace with your Cloudinary upload preset name
    formData.append('folder', 'miFolder'); // Replace with your desired folder name

    const cloud_name = 'dayyupv1u';
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const result = await response.json();
    return result.secure_url;
  } catch (error) {
    return '';
  }
};
