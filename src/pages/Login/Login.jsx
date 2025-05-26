import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css"; // Import the CSS file for styling
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already Have an Account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
