import { useState } from "react";
import "../../Style/Nustfruita/Nustfruita_admin.css";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function Nustfruita_Admin() {
  const [activeTab, setActiveTab] = useState("product");

  const orders = [
    {
      id: "ORD-001",
      items: 2,
      price: 2000,
      orderedBy: "Awais",
      status: "delivered",
      date: "2025-12-16",
      time: "10:30 AM",
    },
    {
      id: "ORD-002",
      items: 1,
      price: 1500,
      orderedBy: "Ali",
      status: "processed",
      date: "2025-12-15",
      time: "04:20 PM",
    },
    {
      id: "ORD-003",
      items: 3,
      price: 75000,
      orderedBy: "Sara",
      status: "delivered",
      date: "2025-12-14",
      time: "01:10 PM",
    },
    {
      id: "ORD-004",
      items: 1,
      price: 4000,
      orderedBy: "Usman",
      status: "processed",
      date: "2025-12-13",
      time: "09:45 AM",
    },
    {
      id: "ORD-005",
      items: 4,
      price: 9000,
      orderedBy: "Hamza",
      status: "delivered",
      date: "2025-12-12",
      time: "06:00 PM",
    },
    {
      id: "ORD-006",
      items: 2,
      price: 5000,
      orderedBy: "Zain",
      status: "processed",
      date: "2025-12-11",
      time: "02:15 PM",
    },
  ];

  return (
    <div className="nust_admin_main">
      <div className="nust_admin_sidebar">
        <button
          className={activeTab === "product" ? "active" : ""}
          onClick={() => setActiveTab("product")}
        >
          Product
        </button>
        <button
          className={activeTab === "order" ? "active" : ""}
          onClick={() => setActiveTab("order")}
        >
          Order
        </button>
      </div>

      <div className="nust_admin_content">
        {activeTab === "product" && <ProductAdmin />}
        {activeTab === "order" && <OrderAdmin orders={orders} />}
      </div>
    </div>
  );
}

export default Nustfruita_Admin;

/* ---------------- PRODUCT ---------------- */

function ProductAdmin() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple",
      price: "120",
      unit: "kg",
      img: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      name: "Banana",
      price: "80",
      unit: "dozen",
      img: "https://images.apollo247.in/pd-cms/cms/2025-05/AdobeStock_299290543.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
    },
    {
      id: 3,
      name: "Mango",
      price: "250",
      unit: "kg",
      img: "https://zarat.kp.gov.pk/assets/uploads/crops/6711419a4bcc8ce8040f15022388d233.jpg",
    },
    {
      id: 4,
      name: "Orange",
      price: "100",
      unit: "kg",
      img: "https://t4.ftcdn.net/jpg/02/20/02/41/360_F_220024121_lvQqND2X6YcINIlgNwTXcwC5Ws6no0RQ.jpg",
    },
    {
      id: 5,
      name: "Grapes",
      price: "200",
      unit: "kg",
      img: "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/grapes_0.jpg.webp?itok=ZiqbgHzZ",
    },
  ]);

  const update = (id, field, val) =>
    setProducts(
      products.map((p) => (p.id === id ? { ...p, [field]: val } : p))
    );

  const handleFile = (id, file) => {
    const reader = new FileReader();
    reader.onload = () => update(id, "img", reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const addRow = () =>
    setProducts([
      ...products,
      { id: Date.now(), name: "", price: "", unit: "kg", img: "" },
    ]);
     const deleteRow = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="nust_admin_product_main">
        <div className="for_scroll">
            {products.map((p) => (
        <div key={p.id} className="nust_admin_product_row">
          <input
            value={p.name}
            placeholder="Product Name"
            onChange={(e) => update(p.id, "name", e.target.value)}
          />
          <input
            value={p.price}
            placeholder="Price"
            onChange={(e) => update(p.id, "price", e.target.value)}
          />
          <select
            value={p.unit}
            onChange={(e) => update(p.id, "unit", e.target.value)}
          >
            <option value="kg">Kg</option>
            <option value="dozen">Dozen</option>
            <option value="items">Items</option>
          </select>
          <div>
            <input
              type="file"
              onChange={(e) => handleFile(p.id, e.target.files[0])}
            />
            {p.img && (
              <img src={p.img} alt={p.name} className="product_img_preview" />
            )}
          </div>
          <div className="delete_icon" onClick={() => deleteRow(p.id)}>
              <MdDelete size={24}  />
            </div>
        </div>
      ))}

        </div>
      
      <div>
        <button className="primary-btn" onClick={addRow}>
          + New
        </button>
      </div>
      <div className="save_btn">
        <button className="primary-btn">Save</button>
      </div>
    </div>
  );
}

/* ---------------- ORDER ---------------- */

function OrderAdmin({ orders }) {
  const navigate = useNavigate();
  return (
    <div className="nust_admin_order_main">
      <table className="nust_admin_order_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Items</th>
            <th>Price</th>
            <th>User</th>
            <th>Status</th>
            <th>Date</th>
            <th>Time</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.items}</td>
              <td>{o.price}</td>
              <td>{o.orderedBy}</td>
              <td className={`status ${o.status}`}>{o.status}</td>
              <td>{o.date}</td>
              <td>{o.time}</td>
              <td>
                <button
                  className="primary-btn"
                  onClick={() => navigate(`/adminorderdetail`)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
