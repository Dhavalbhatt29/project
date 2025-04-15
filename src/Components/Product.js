import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const [imgprv, setimgprv] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle multiple images for preview
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

  // Upload multiple images to server
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select images to upload.");
      return;
    }

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
        alert("Images uploaded successfully!");
        setSelectedFiles([]);
        setimgprv([]);
      }
    } catch (error) {
      console.error("Error in uploading file", error);
      alert("Error uploading images!");
    }
  };

  // Handle product form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !price || !category || !image) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);

    console.log('Product submitted:', {
      productName,
      price,
      category,
      imageName: image.name
    });

    setProductName('');
    setPrice('');
    setCategory('');
    setImage(null);
    alert('Product added successfully!');
  };

  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Product</button>
      </form>

      <hr />  
    </div>
  );
}

export default AddProduct;
