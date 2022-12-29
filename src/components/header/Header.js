import "./Header.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="Header">
            <div className="logo" onClick={() => navigate("/")}>
                Legal Pay
            </div>
            <Button />
        </div>
    );
};

export default Header;
