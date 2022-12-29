import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const showToastMessage = () => {
        toast.success("Account is Created !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const userRegisterHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("id", id);
        localStorage.setItem("password", password);
        console.log("account created successfully");
        setId("");
        setPassword("");
        navigate("/login");
    };
    return (
        <form className="form-container" onSubmit={userRegisterHandler}>
            <div className="greeting">Welcome to Legal Pay</div>
            <div>
                <label>CREATE YOUR ID</label>
            </div>
            <input
                className="inputID"
                required={true}
                value={id}
                type="text"
                onChange={(e) => setId(e.target.value)}
            />
            <div>
                <label>CREATE YOUR PASSWORD</label>
            </div>
            <input
                className="inputID"
                value={password}
                type="text"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button id="submit-button" onClick={showToastMessage}>
                SUBMIT
            </button>
        </form>
    );
};

export default Register;
