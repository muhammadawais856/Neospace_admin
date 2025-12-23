import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "../../Style/Small_business/Order_detail.css"
import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
function Orderdetail(){
    const navigate = useNavigate();
    return(
        <>
        <div className="cart_main">
            <div className="cart_home_icon" onClick={() => navigate('/')}>
                
                <FaArrowLeft />
            </div>
            <div cart_outer>
                
                <div className="Cart_Card">
                    <Cart_card></Cart_card>
                    
                </div>
                <hr class="divider" />
                <div className="cart_bottom">
                    <div className="cart_item">
                        <div>Total items</div>
                        <h3>10</h3>
                         
                    </div>
                    <div className="cart_price">
                        <div>Total Amount</div>
                        <h3>15000</h3>
                         
                    </div>
                    
                    

                </div>

            </div>

        </div>
        </>

    );
}

export default Orderdetail;

function Cart_card(){
    const [quantity, setQuantity] = useState(1);
    
      const increment = () => setQuantity((prev) => prev + 1);
      const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    return(
        <>
        <div className="cart_card_main">
            <div className="cart_card_detail_row">
                {/* col1 */}
                <div className="cart_card_img">
                    <img src="https://media.istockphoto.com/id/1372906882/photo/modern-blue-wireless-headphones-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0k-2JFElEQ0QTvXsgtLx3i2JotQo_Eb8aEwyN-BOZjA="></img>
                </div>
                {/* col2 */}
                <div className="cart_card_product&quantity">
                    <h3 className="cart_card_product_name">Wireless headphones</h3>
                    <p className="cart_card_description">
                        A sleek wireless handfree designed for crystal-clear calls and immersive sound, featuring comfortable earbuds and long-lasting battery life. Perfect for on-the-go listening and hands-free convenience.</p>

                </div>
                {/* col 3 */}
                <div className="cart_card_col3">
                    {/* row 1 */}
                    <div className="cart_card_row1">
                        <h3 className="Quantity">items</h3>
                        <h3 class="Quantity_value">3</h3>

                    </div>
                    {/* row 2 */}
                    <div className="cart_card_row2">
                      <h3 className="cart_card_PKR">PKR</h3>
                      <h3 className="cart_card_price1">1000</h3>
                    
                    </div>

                </div>

            </div>
            
            <hr class="divider" />

            <div className="cart_card_item">
                <div>Total items</div>
                <h3>3</h3>
                         
            </div>
            <div className="cart_card_price">
                <div>Total Amount</div>
                <h3>1000</h3>
                         
            </div>


        </div>
        </>
    );
}