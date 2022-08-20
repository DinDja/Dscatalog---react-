import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";

const Rotas = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Catalog />} />
            <Route path="/Admin" element={<Admin />} />
        </Routes>
    </BrowserRouter>
);


export default Rotas;