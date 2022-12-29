import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const Balance = () => {
    const amount = useSelector((state) => state.bank.amount);
    return (
        <div className="container">
            <div style={{ fontSize: "30px" }}>Your Total Balance is $ {amount}</div>
        </div>
    );
};

export default Balance;
