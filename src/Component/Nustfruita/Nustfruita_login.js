import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/Nustfruita/Nustfruita_login.css";

function Nustfruita_Login() {
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
      setTimeout(() => navigate("/Nustfruita_admin"), 500);
    } else {
      toast.error("Invalid Username or Password");
    }
  };

  // 🔥 Toastify Error Handler
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
    <div className="login_main">
      <div className="login_box">
        <div className="login_left">
          <h2>Login</h2>
          <p className="login_subtitle">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit(onSubmit, handleErrors)}>
            <div className="login_fields">
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

            <div className="login_btn">
              <button className="primary-btn" type="submit">Log In</button>
            </div>
          </form>
        </div>

        <div className="login_right">
          <img
            src="https://img.freepik.com/free-photo/colorful-collage-fruits-texture-close-up_23-2149870290.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Login"
          />
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}

export default Nustfruita_Login;
