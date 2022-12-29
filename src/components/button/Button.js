import "./Button.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../store/userSlice";
import { toast } from "react-toastify";

const Button = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showToastMessage = () => {
        toast.success("Log Out Success !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    return (
        <>
            {isLoggedIn ? (
                <button
                    className="header-button"
                    onClick={() => {
                        navigate("/login");
                        dispatch(setUserLoggedIn(false));
                        showToastMessage();
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
