import React, { useState, useContext } from "react";
import {
  AiOutlineBook,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// style import
import "../../styles/login.css";
import { MainContext } from "../index";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({});
  const CTX = useContext(MainContext);
  const [selection, setSelection] = useState("conversion")

  // submit CREATE ACCOUNT form here
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const fetching = await fetch(`${CTX.url}user/account/create-account`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          // full_name
          first_name: inputs.first_name,
          last_name: inputs.last_name,
          email: inputs.email,
          category: selection,
        }),
      });

      const response = await fetching.json();

      console.log("response => ", response);
    } catch (error) {
      console.log("error => ", error);
    }
  };

  return (
    <div className="login-container">
      <form autoComplete="off" onSubmit={formHandler}>
        <input autoComplete="false" style={{ display: "none" }} />
        <center>
          <AiOutlineUser size={90} color="#d3d3d3" />
        </center>
        <h3 style={{ textAlign: "center" }}>Create Account</h3>
        <section>
          <span>
            {" "}
            <AiOutlineUser size={24} />
          </span>
          <input
            autoComplete="new_password"
            placeholder="First name"
            requiredvalue={inputs?.first_name}
            onChange={(e) =>
              setInputs({ ...inputs, first_name: e.target.value })
            }
          />
        </section>
        <section>
          <span>
            {" "}
            <AiOutlineUser size={24} />
          </span>
          <input
            autoComplete="new_password"
            placeholder="Last name"
            requiredvalue={inputs?.last_name}
            onChange={(e) =>
              setInputs({ ...inputs, last_name: e.target.value })
            }
          />
        </section>
        <section>
          <span>
            {" "}
            <AiOutlineMail size={24} />
          </span>
          <input
            type="email"
            autoComplete="new_password"
            placeholder="Email"
            required
            requiredvalue={inputs?.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </section>
        <section className="sectionSelect">
          <span>
            {" "}
            <AiOutlineBook size={24} />
          </span>
          <select onChange={e => setSelection(e.target.value)}>
            <option value="conversion">Convertion</option>
            <option value="promotion">Promotion</option>
          </select>
        </section>
        
        <section>
          <button type={"submit"}>Continue</button>
        </section>
        <a href="#forgot-account">forgotten password?</a>
        <div className="a">
          Already a member? <Link to="/login">Login</Link>
        </div>
        <br />
      </form>
    </div>
  );
}




// seb/prom/2022/fed5