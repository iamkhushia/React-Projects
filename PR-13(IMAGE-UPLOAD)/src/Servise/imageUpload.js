
import axios from "axios";

const uploadImage = async(file) => {
    let data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "product");
        data.append("cloud_name", " drqzwn1ey");

        let result = await axios.post('https://api.cloudinary.com/v1_1/drqzwn1ey/image/upload', data)
        // console.log(result);
        return result.data.url;
}

export default uploadImage;