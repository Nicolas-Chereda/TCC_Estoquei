import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Layout from "../components/layout/Layout";
import Principal from "../pages/Principal";
import Dashboard from "../pages/Dashboard";
import Relatorios from "../pages/Relatorios";
import Historico from "../pages/Historico";
import Registrar from "../pages/Registrarmovimento";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="principal" element={<Layout />}>
                    <Route index element={<Principal />} />
                    <Route path='dashboard' index element={<Dashboard />} />
                    <Route path='relatorio' index element={<Relatorios />} />
                    <Route path='dashboard/principal/historico' index element={<Historico />} />
                    <Route path='dashboard/principal/historico/principal/registrar' index element={<Registrar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
