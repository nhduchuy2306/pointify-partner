import React, { useEffect, useState } from "react";
import "./Login.css";
import { GoogleOutlined } from "@ant-design/icons";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Configs/FirebaseConfig";
import { Navigate } from "react-router-dom";

function Login() {
  const [value, setValue] = useState("");

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setValue(result.user.email);
        console.log(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("user"));
  }, []);

  return (
    <>
      {value !== "" ? (
        <Navigate to="/" replace={true} />
      ) : (
        <div id="loginform">
          <h2 id="headerTitle">Login</h2>
          <div>
            <div class="row">
              <label>Username</label>
              <input type={"text"} placeholder={"Enter your username"} />
            </div>

            <div class="row">
              <label>Password</label>
              <input type={"password"} placeholder={"Enter your password"} />
            </div>
            <div id="button" class="row">
              <button>Log in</button>
            </div>
          </div>
          <div id="alternativeLogin">
            <label>Or sign in with:</label>
            <div id="iconGroup">
              <GoogleOutlined
                style={{
                  fontSize: "50px",
                  color: "red",
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={handleGoogleLogin}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
