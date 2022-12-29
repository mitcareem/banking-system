import { withDrawAmount } from "../../store/bankSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { toast } from "react-toastify";

const Withdraw = () => {
    const currentBalance = useSelector(state => state.bank.amount)

    const [amount, setAmount] = useState("");
    const amt = Number(amount)
    const dispatch = useDispatch()

    const showToastMessage = () => {
        toast.success("Money Withdraw Successful !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const showToastMessageNotEnoughBalance = () => {
        toast.error("You Do Not Have Enough Balance !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    function handler(e) {
        e.preventDefault();
        if (amt <= currentBalance) {
            dispatch(withDrawAmount(amt))
            showToastMessage()
            setAmount("")
        } else {
            showToastMessageNotEnoughBalance()
        }

    }
    return (
        <form className="container" onSubmit={handler}>
            <input id="input-add-amount" type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)} />
            <button id='submit-add-amount' type="submit">Withdraw Amount</button>
        </form>

    )
}

export default Withdraw;
