import { useState } from "react";
import "./Home.css";
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    let errors = {};
    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Check this box if you want to proceed";
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    else {
      alert("Form submitted successfully");
      localStorage.setItem("userData", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/selection")
    }
  };

  // console.log(data);
  return (
    <div>
      {/* for main login container */}
       <div className="row">
        <div className="column">
          <img src={"./src/assets/image 13.png"}></img>
          <div className="bottom-left">
            Discover new things on
            <br />
            <span style={{ marginRight: "150px" }}>Superapp</span>
          </div>
        </div>
        <div className="column" style={{ backgroundColor: "black" }}>
          <h3>Super app</h3>
          <p>Create your new account</p>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "20vw",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <input
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Name"
              value={data.name}
            />
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginRight: "160px",
                marginTop: "-5px",
              }}
            >
              {errors.name}
            </span>
            <input
              type="text"
              name="username"
              onChange={handleInput}
              placeholder="UserName"
              value={data.username}
            />
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginRight: "140px",
                marginTop: "-5px",
              }}
            >
              {errors.username}
            </span>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="Email"
              value={data.email}
            />
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginRight: "160px",
                marginTop: "-5px",
              }}
            >
              {errors.email}
            </span>
            <input
              type="tel"
              name="mobile"
              onChange={handleInput}
              placeholder="Mobile"
              value={data.mobile}
            />
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginRight: "150px",
                marginTop: "-5px",
              }}
            >
              {errors.mobile}
            </span>
            <div style={{ marginTop: "-10px", display: "flex" }}>
              <input
                type="checkbox"
                name="checkbox"
                onChange={handleInput}
                id="checkbox"
                checked={data.checkbox}
              />
              <label
                htmlFor="checkbox"
                style={{
                  color: "white",
                  fontSize: "12px",
                  marginTop: "2.5px",
                  marginLeft: "5px",
                }}
              >
                Share my registration data with Superapp
              </label>
            </div>
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginLeft: "-45px",
                marginTop: "-10px",
              }}
            >
              {errors.checkbox}
            </span>
            <button type="submit">
              <text>SIGN UP</text>
            </button>
            <p className="para1">
              By clicking on Sign up. you agree to Superapp{" "}
              <span className="parastyle" style={{ color: "green" }}>
                Terms and Conditions of Use
              </span>
            </p>
            <p
              className="para1"
             
            
            >
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span className="parastyle" style={{ color: "green" }}>
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </div> 

{/* Without styling */}
      {/* <form onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection:'column',
        gap:"20px",
        width: "40vw",
        marginLeft: "auto",
        marginRight: "auto",

      }}>
        <h2>Super app</h2>
       <h3>Create your account</h3>
        <input type="text" name="name" onChange={handleInput} placeholder="name" value={data.name}/>
        <span style={{color: "red"}}>{errors.name}</span>
        <input type="text" name= "username" onChange={handleInput} placeholder="username" value={data.username} />
        <span style={{color: "red"}}>{errors.username}</span>
        <input type="email" name="email" onChange={handleInput} placeholder="email" value={data.email} />
        <span style={{color: "red"}}>{errors.email}</span>
        <input type="tel" name="mobile" onChange={handleInput}placeholder="mobile" value={data.mobile}/>
        <span style={{color: "red"}}>{errors.mobile}</span>
        <div>
          <input type="checkbox" name="checkbox" onChange={handleInput} id="checkbox" checked={data.checkbox}/>
          <label htmlFor="checkbox">
            Share my registration data with Superapp
          </label>
        </div>
        <span style={{color: "red"}}>{errors.checkbox}</span>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}
