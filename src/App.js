import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Bank from "./components/bank/Bank";
import Main from "./components/header/Main";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const user = useSelector((state) => state.user.isLoggedIn);
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Header />
          {!user && <Main />}
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/create/account" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bank" element={<Bank />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
