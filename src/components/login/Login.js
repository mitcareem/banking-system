import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../store/userSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showToastMessage = () => {
    toast.success("Success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastMessageError = () => {
    toast.error("Your id or password did not match !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const userLogInHandler = (e) => {
    e.preventDefault();
    const inputId = localStorage.getItem("id");
    const inputPassword = localStorage.getItem("password");
    if (inputId === id && inputPassword === password) {
      console.log("login success");
      dispatch(setUserLoggedIn(true));
      showToastMessage();
      navigate("/bank");
    } else {
      console.log("id or password not matched");
      showToastMessageError();
    }
    setId("");
    setPassword("");
  };
  return (
    <form className="form-container" onSubmit={userLogInHandler}>
      <div>
        <label>ENTER YOUR ID</label>
      </div>
      <input
        className="inputID"
        required={true}
        value={id}
        type="text"
        onChange={(e) => setId(e.target.value)}
      />
      <div>
        <label>ENTER YOUR PASSWORD</label>
      </div>
      <input
        className="inputID"
        value={password}
        type="text"
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button id="submit-button">SIGN IN</button>
    </form>
  );
};

export default Register;
