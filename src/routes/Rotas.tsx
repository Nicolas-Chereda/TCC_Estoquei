import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Layout from "../components/layout/Layout";
import Principal from "../pages/Principal";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="principal" element={<Layout />}>
                    <Route index element={<Principal />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
