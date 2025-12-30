import { useState } from "react";
import "../../Style/Small_business/Your_Cart.css"
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: "2990",
    img: "https://media.istockphoto.com/id/1372906882/photo/modern-blue-wireless-headphones-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0k-2JFElEQ0QTvXsgtLx3i2JotQo_Eb8aEwyN-BOZjA="
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications with this sleek smart watch.",
    price: "4490",
    img: "https://5.imimg.com/data5/SELLER/Default/2020/11/CS/FW/VL/15119067/41crkwnji4l.jpg"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    price: "1590",
    img: "https://jasminesmarthomes.com/img/shop-single-img/product1553-item-01.jpg"
  },
  {
    id: 4,
    name: "Digital Camera",
    description: "Compact digital camera with high-resolution image capture.",
    price: "29900",
    img: "https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
  },
  {
    id: 5,
    name: "Laptop Backpack",
    description: "Durable and stylish backpack for laptops up to 15 inches.",
    price: "4900",
    img: "https://image.made-in-china.com/318f0j00aEkfrCMlRLzp/QdADU9bBvwlpplk9Y6q-260159120191-hd-hq-mp4.webp"
  }
];

const orders = [
  {
    id: "ORD-001",
    items: 2,
    price:2000,
    orderedBy: "Awais",
    status: "delivered",
    date: "2025-12-16",
    time: "10:30 AM"
  },
  {
    id: "ORD-002",
    items: 1,
    price:1500,
    orderedBy: "Ali",
    status: "processed",
    date: "2025-12-15",
    time: "04:20 PM"
  },
  {
    id: "ORD-003",
    items: 3,
    price:75000,
    orderedBy: "Sara",
    status: "delivered",
    date: "2025-12-14",
    time: "01:10 PM"
  },
  {
    id: "ORD-004",
    items: 1,
    price:4000,
    orderedBy: "Usman",
    status: "processed",
    date: "2025-12-13",
    time: "09:45 AM"
  },
  {
    id: "ORD-005",
    items: 4,
    price:9000,
    orderedBy: "Hamza",
    status: "delivered",
    date: "2025-12-12",
    time: "06:00 PM"
  }
];




function YourCart() {
  const [activeTab, setActiveTab] = useState("product");
  const navigate = useNavigate();

  return (
    <div className="cart_main">
        <div className="cart_outer">
            <div className="product_btn">
                <button onClick={() => navigate("/Newproduct")} className="primary-btn2">New Product</button>
            </div>
            <div className="sidebar">
                <button className={`tab-btn ${activeTab === "product" ? "active" : ""}`}
                    onClick={() => setActiveTab("product")}> Product
                </button>
                <button className={`tab-btn ${activeTab === "order" ? "active" : ""}`}
                    onClick={() => setActiveTab("order")}> Order
                </button>
                
            </div>
            <div className="main-content">
                {activeTab === "product" && <Product />}
                {activeTab === "order" && <Order orders={orders} />}
                
            </div>
        </div>
    </div>
  );
}

export default YourCart;

function Product() {
    const navigate = useNavigate();
    return (
      <div className="product_main">
        <div className="product_card_components">
          {products.map((product) => (
            <div key={product.id} className="product_card">
              <img src={product.img} alt={product.name} className="product_card_img" />
              <div className="product_card_detail">
                <div className="product_card_name">{product.name}</div>
                <div className="product_card_description">{product.description}</div>
                <div className="product_card_prices">
                  <div className="product_card_PKR">PKR</div>
                  <div className="product_card_price">{product.price}</div>
                </div>
              </div>
              <div className="product_detail">
                  <button  onClick={() => navigate("/viewdetail")}
                  className="primary-btn">View Detail</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

function Order({ orders }) {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchId, setSearchId] = useState("");

  const filteredOrders = orders.filter((order) => {
    if (statusFilter !== "all" && order.status !== statusFilter) return false;
    if (selectedDate && order.date !== selectedDate) return false;
    if (searchId && !order.id.toString().includes(searchId)) return false;
    return true;
  });

  return (
    <div className="order_main">
      <div className="order_filter_row">
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="delivered">Delivered</option>
          <option value="processed">Processed</option>
        </select>

        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

        <input type="text" placeholder="Search by Order ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      </div>

      <table className="order_table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Ordered By</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Time</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.items}</td>
              <td>{order.price}</td>
              <td>{order.orderedBy}</td>
              <td className={`status-badge ${order.status}`}>{order.status}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
              <td>
                <button className="primary-btn" onClick={() => navigate(`/orderdetail`)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}







