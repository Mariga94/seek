
const uploadImage = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "u1gzsxs1");
        const response = await fetch("https://api.cloudinary.com/v1_1/dfqgrdik0/image/upload", {
            method: "POST",
            body: formData,
        });
        if (!response.ok) {
            throw new Error("Image upload failed")
        }

        const responseData = await response.json();
        
        return responseData.secure_url
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
};
export default uploadImage