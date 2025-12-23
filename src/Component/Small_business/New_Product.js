import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "../../Style/Small_business/New_Product.css";
import { FaTrash } from "react-icons/fa";
import logo from "../../assets/user2.jpg";

const MAX_IMAGES = 5;

function Newproduct() {
  const navigate = useNavigate();
  const fileInputRef = useRef([]);

  const [images, setImages] = useState(Array(MAX_IMAGES).fill(null));

  const handleImagePick = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  return (
    <div className="newproduct_main">
      <div className="arrow_detail" onClick={() => navigate("/")}>
        <FaArrowLeft />
      </div>

      <div className="newproduct_outer">
        <div className="newproduct_top">
          <h3>New Product</h3>
        </div>

        <div className="newproduct_left_right">
          {/* LEFT IMAGE LIST */}
          <div className="newproduct_left">

            {images.map((img, index) => (
  <div className="image_row" key={index}>
    
    {/* LEFT SIDE: button + preview */}
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      
      {/* Always show Select button */}
      <div className="button_div">
      <button
        className="primary-btn"
        onClick={() => fileInputRef.current[index].click()}
      >
        Select
      </button>
{img && (

      <button
        className="primary-btn3"
        onClick={() => handleDelete(index)}
      >
        Delete
      </button>
       )}
      </div>

      {/* Hidden Input */}
      <input
        type="file"
        accept="image/*"
        ref={(el) => (fileInputRef.current[index] = el)}
        style={{ display: "none" }}
        onChange={(e) => handleImagePick(index, e)}
      />

      {/* Image preview */}
      
    </div>
    <div className="image_preview">
        {img ? <img src={img} alt="user" /> : <img src={logo} alt="logo" />}
      </div>

    {/* Delete Icon always at right */}
  </div>
))}


          </div>

          {/* RIGHT FORM (unchanged) */}
          <div className="newproduct_right">
            <div className="newproduct_name">
              <p className="newproduct_name_text">Name</p>
              <input className="newproduct_name_input" placeholder="Enter Name"/>
            </div>

            <div className="newproduct_description">
              <p className="newproduct_description_text">Description</p>
              <textarea className="newproduct_description_textarea" rows={6}
              placeholder="Enter Description of product" />
            </div>

            <div className="newproduct_price">
              <p className="newproduct_price_text">Price</p>
              <input className="newproduct_price_input" placeholder="Enter price of a product " />
            </div>
          </div>
        </div>

        <div className="save">
          <button className="primary-btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Newproduct;
