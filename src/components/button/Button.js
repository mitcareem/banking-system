import "./Button.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../store/userSlice";

const Button = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            {isLoggedIn ? (
                <button
                    className="header-button"
                    onClick={() => {
                        navigate("/login");
                        dispatch(setUserLoggedIn(false));
                    }}
                >
                    LOG OUT
                </button>
            ) : (
                <button
                    className="header-button"
                    onClick={() => navigate("/create/account")}
                >
                    CREATE AN ACCOUNT
                </button>
            )}
        </>
    );
};

export default Button;
