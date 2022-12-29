import React from "react";
import { Tabs } from "antd";
import BalanceSummary from "./BalanceSummary";
import AddAmount from "./AddAmount";
import Withdraw from "./Withdraw";
import "./Bank.css";

const Bank = () => (
    <Tabs
        defaultActiveKey="1"
        items={[
            {
                label: `Check Balance`,
                key: "1",
                children: <BalanceSummary />,
            },
            {
                label: `Deposit Money`,
                key: "2",
                children: <AddAmount />,
            },
            {
                label: `Withdraw Money`,
                key: "3",
                children: <Withdraw />,
            },
        ]}
    />
);
export default Bank;
