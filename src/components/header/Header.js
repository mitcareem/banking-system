import "./Header.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
    const showToastMessage = () => {
        toast.success("Log Out Success !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const navigate = useNavigate();
    return (
        <div className="Header">
            <div
                className="logo"
                onClick={() => {
                    navigate("/");
                    showToastMessage();
                }}
            >
                Legal Pay
            </div>
            <Button />
        </div>
    );
};

export default Header;
