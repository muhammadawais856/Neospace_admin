import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/Small_business/Retailer_login.css";

function Retailer_Login() {
  const navigate = useNavigate();

  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "123456";

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.username === VALID_USERNAME && data.password === VALID_PASSWORD) {
      toast.success("Login Successful!");
      setTimeout(() => navigate("/yourcart"), 500);
    } else {
      toast.error("Invalid Username or Password");
    }
  };

  const handleErrors = () => {
    const values = getValues();

    if (!values.username && !values.password) {
      toast.error("All fields are required");
    } else {
      if (errors.username) toast.error(errors.username.message);
      if (errors.password) toast.error(errors.password.message);
    }
  };

  return (
    <div className="retailer_login_main">
      <div className="retailer_login_box">

        <div className="retailer_login_left">
          <h2>Retailer Login</h2>
          <p className="retailer_login_subtitle">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(onSubmit, handleErrors)}>
            <div className="retailer_login_fields">
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />

              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
            </div>

            <div className="retailer_login_btn">
              <button className="primary-btn" type="submit">Log In</button>
            </div>
          </form>
        </div>

        <div className="retailer_login_right">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
            alt="Retailer Login"
          />
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}

export default Retailer_Login;
