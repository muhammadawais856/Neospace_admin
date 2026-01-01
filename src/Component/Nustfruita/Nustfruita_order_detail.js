import React from "react";
import "../../Style/Nustfruita/Nustfruita_order_detail.css";
import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";

function Nustfruita_order_detail() {
    const navigate = useNavigate();
  return (
    <div className="order_detail_main">
        <div className="order_detail_admin" onClick={() => navigate('/Nustfruita_admin')}>
        <FaArrowLeft />
        </div>
      <h2>Order Detail</h2>

      <div className="order_info">
        <p><strong>Order ID:</strong> 101</p>
        <p><strong>Ordered By:</strong> John Doe</p>
        <p><strong>Contact:</strong> 0300-1234567</p>
        <p><strong>Delivery Address:</strong> 123 Fruit Street, Cityville</p>
        <p><strong>Payment Method:</strong> Cash on Delivery</p>
        <p><strong>Status:</strong> <span className="status delivered">Delivered</span></p>
        <p><strong>Date:</strong> 2024-10-01</p>
        <p><strong>Time:</strong> 14:30</p>
      </div>    

      <table className="order_items_table">
        <thead> 
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td>Apple</td>
            <td>2 kg</td>
            <td>240</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>1 dozen</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>1.5 kg</td>
            <td>150</td>
          </tr>
          <tr>
            <td>Mango</td>
            <td>3 kg</td>
            <td>450</td>
          </tr>
        </tbody>
      </table>

      <div className="total_price">
        <h3>Total Price: 920</h3>
      </div>

      <div className="order_actions">
        <button className="primary-btn">Send to Delivery</button>
      </div>
    </div>
  );
}

export default Nustfruita_order_detail;
