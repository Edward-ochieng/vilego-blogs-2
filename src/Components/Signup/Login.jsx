import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({setUser}) {
  const [signIn, setSignin] = useState(true);
  const [loginUserName, setLoginUserName] = useState(false);
  const [LoginPassword, setLoginPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState(false);
  const [secondName, setSecondName] = useState(false);
  const [userName, setUserName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState(false);
  const navigate = useNavigate()

  const [login, setLogin] = useState({ username: "", password: "" });
  const [signup, setSignup] = useState({
    firstName: "",
    secondName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const apiURL = "https://blog-app-production-e04b.up.railway.app";
  const active = !signIn && "active";
  const login_password = LoginPassword && "error-handle";
  const login_username = loginUserName && "error-handle";
  const first = firstName && "error-handle";
  const second = secondName && "error-handle";
  const user = userName && "error-handle";
  const email_add = email && "error-handle";
  const password_ref = password && "error-handle";
  const password_Confirmation = passwordConfirmation && "error-handle";

  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch(`${apiURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: signup.firstName,
        secondname: signup.secondName,
        username: signup.username,
        email_address: signup.email,
        password: signup.password,
        password_confirmation: signup.passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user)
          setUser(user.user)
          navigate(0)
          
        })
      } else {
        res.json().then((err) => {
          console.log(err);
          setErrors(err);
          err.firstname ? setFirstName(true) : setFirstName(false);
          err.secondname ? setSecondName(true) : setSecondName(false);
          err.username ? setUserName(true) : setUserName(false);
          err.email_address ? setEmail(true) : setEmail(false);
          err.password ? setPassword(true) : setPassword(false);
          err.password_confirmation
            ? setPasswordConfirmation(true)
            : setPasswordConfirmation(false);
        });
      }
    })
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login.username,
        password: login.password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user.jwt)
          setUser(user.user)
          localStorage.setItem("jwt", user.jwt);
          localStorage.setItem("user", `${user.user.id}`);
          navigate("/blogs")
        })
      } else {
        res.json().then((err) => {
          console.log(err);
          err.errors ? setLoginUserName(true) : setLoginUserName(false);
          err.errors ? setLoginPassword(true) : setLoginPassword(false);
        });
      }
    });
  }

  function errorMessages(errors) {
    if (errors.username && errors.username.includes("has already been taken")) {
      return "Username already exists";
    } else if (
      errors.errors &&
      errors.errors.includes("Invalid username or passsword")
    ) {
      return "Invalid username or passsword";
    } else if (
      errors.email_address &&
      errors.email_address.includes("has already been taken")
    ) {
      return "Email already exists";
    } else if (
      errors.password_confirmation &&
      errors.password_confirmation.includes("doesn't match Password")
    ) {
      return "Password doesn't match";
    } else {
      return "Fill required fields";
    }
  }

  return (
    <div className="flex justify-center mt-36">
    <div className="main-login-page-container">
      {/* SIGN UP FORM */}
      <div className={`signup-container ${active}`}>
        <form onSubmit={handleSignupSubmit}>
          <h2>Create Account</h2>
          <input
            className={`${first}`}
            onChange={(e) =>
              setSignup({ ...signup, firstName: e.target.value })
            }
            value={signup.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            className={`${second}`}
            onChange={(e) =>
              setSignup({ ...signup, secondName: e.target.value })
            }
            value={signup.secondName}
            type="text"
            placeholder="Second Name"
          />
          <input
            className={`${user}`}
            onChange={(e) => setSignup({ ...signup, username: e.target.value })}
            value={signup.username}
            type="text"
            placeholder="Username"
          />
          <input
            className={`${email_add}`}
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
            value={signup.email}
            type="email"
            placeholder="Email"
          />
          <input
            className={`${password_ref}`}
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
            value={signup.password}
            type="password"
            placeholder="Password"
          />
          <input
            className={`${password_Confirmation}`}
            onChange={(e) =>
              setSignup({ ...signup, passwordConfirmation: e.target.value })
            }
            value={signup.passwordConfirmation}
            type="password"
            placeholder="Password Confirmation"
          />
          <input type="file" name="photo" accept="image/png, image/jpeg" />
          {Object.keys(errors).length > 0 ? (
            <p className="signup-error-message-handle">
              {errorMessages(errors)}
            </p>
          ) : null}
          <button>Sign Up</button>
        </form>
      </div>
      {/* LOGIN FORM */}
      <div className={`login-container ${active}`}>
        <form onSubmit={handleLoginSubmit}>
          <h2>Sign In</h2>
          <input
            className={`${login_username}`}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            value={login.username}
            type="text"
            placeholder="Username"
          />
          <input
            className={`${login_password}`}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            value={login.password}
            type="password"
            placeholder="Password"
          />
          {Object.keys(errors).length > 0 ? (
            <p className="login-error-message-handle">
              {errorMessages(errors)}
            </p>
          ) : null}
          <a href="#">Forgot password?</a>
          <button type="submit">Login</button>
        </form>
      </div>
      {/* OVERLAY */}
      <div className={`overlay-container ${active}`}>
        <div className={`overlay ${active}`}>
          <div className={`overlay-panel left-overlay-panel ${active}`}>
            <h2>Welcome Back!</h2>
            <p>Log in to continue where you left off.</p>
            <button
              className="overlay-button"
              onClick={() => {
                setSignin(true);
              }}
            >
              Login
            </button>
          </div>
          <div className={`overlay-panel right-overlay-panel ${active}`}>
            <h2>Welcome Aboard!</h2>
            <p>
              By signing up, you'll gain access to all of the features and
              benefits our website has to offer. Let's get started!
            </p>
            <button className="overlay-button" onClick={() => setSignin(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;