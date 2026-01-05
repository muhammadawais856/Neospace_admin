import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "../../Style/Small_business/View_detail.css";
import logo from "../../assets/user2.jpg";

const MAX_IMAGES = 5;

function Viewdetail() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const [mainImage, setMainImage] = useState(
    "https://5.imimg.com/data5/SELLER/Default/2020/11/CS/FW/VL/15119067/41crkwnji4l.jpg"
  );

  const [images, setImages] = useState([
    "https://5.imimg.com/data5/SELLER/Default/2020/11/CS/FW/VL/15119067/41crkwnji4l.jpg",
    "https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048",
    "https://m.media-amazon.com/images/I/71suqe1khwL._AC_UF1000,1000_QL80_.jpg",
    "https://www.kindpng.com/picc/m/193-1939793_most-popular-smartwatches-samsung-galaxy-watch-hd-png.png",
    null
  ]);

  const fileInputRef = useRef([]);

  const handleImagePick = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
    setMainImage(newImages[index]);
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
    if (mainImage === images[index]) setMainImage(logo);
  };

  return (
    <div className="product_detail_main">
      <div className="arrow_detail" onClick={() => navigate('/yourcart')}>
        <FaArrowLeft />
      </div>

      <div className="product_detail_outer">
        <div className="product_detail_top">
          <div className="product_detail_text">
            <h3>Product Detail</h3>
          </div>
          <FaRegEdit
            style={{ cursor: "pointer" }}
            onClick={() => setIsEditing(!isEditing)}
          />
        </div>

        <div className="product_detail_left_right">
          {/* -------------------- LEFT IMAGES -------------------- */}
          <div className="product_detail_left">
            {images.map((img, index) => (
              <div className="image_row" key={index}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  
                    <div className="button_div">
                      <button
                        className="primary-btn"
                        disabled={!isEditing}
                        onClick={() => fileInputRef.current[index].click()}
                      >Select
                      </button>
                      
                      {img && (<button
                        className="primary-btn3"
                        disabled={!isEditing}
                        onClick={() => handleDelete(index)}
                        >Delete
                      </button>
                      )}
                    </div>
                

                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => (fileInputRef.current[index] = el)}
                    style={{ display: "none" }}
                    onChange={(e) => handleImagePick(index, e)}
                  />
                </div>

                <div className="image_preview">
                  <img src={img || logo} alt={`img-${index}`} onClick={() => setMainImage(img || logo)} />
                </div>
              </div>
            ))}
          </div>

          {/* -------------------- RIGHT DETAILS -------------------- */}
          <div className="product_detail_right">
            <div className="product_detail_name">
              <p className="product_detail_name_text"> Name</p>
              <input
                type="text"
                value="Smart Watches"
                className="product_detail_name_input"
                readOnly={!isEditing}
              />
            </div>
            <div className="product_detail_description">
              <p className="product_detail_description_text">Description</p>
              <textarea
                value="Stay connected and track your health with this sleek smartwatch. Receive notifications, monitor fitness, and control apps right from your wrist."
                rows={6}
                className="product_detail_description_textarea"
                readOnly={!isEditing}
              />
            </div>
            <div className="product_detail_price">
              <p className="product_detail_price_text"> Price</p>
              <input
                type="text"
                value="PKR 1000"
                className="product_detail_price_input"
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="save">
          <button className="primary-btn" onClick={() => setIsEditing(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Viewdetail;
