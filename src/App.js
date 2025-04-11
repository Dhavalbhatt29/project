// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Endroutes from "./Routes/endroutes";
import Adminroute from "./Routes/adminroute";
import axios from "axios";
function App() {
  const [imgprv, setimgprv] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    

    const imagepreviews = fileArray.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve({
            src: reader.result,
            name: file.name,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagepreviews).then((images) => {
      setimgprv(images);
      setSelectedFiles(fileArray);
    });
  };

  const handleUpload = async () => {
    const formdata = new FormData();

    formdata.append("folder", "profile/dhaval");
    selectedFiles.forEach((file) => {
      formdata.append("image", file);
    });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/upload",
        formdata,
        config
      );
      if (res.data.status) {
        console.log(res.data.data.message, res.data);
      }
    } catch (error) {
      console.error("Error in uploading file", error);
    }
  };

  return (
    <>
      <Endroutes />
    <Adminroute />

      {/* <div>
        {imgprv.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={img.name}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{img.name}</p>
          </div>
        ))}

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <button className="btn btn-primary" onClick={handleUpload}>
          Upload
        </button>
      </div> */}
    </>
  );
}

export default App;
