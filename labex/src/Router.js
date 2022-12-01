import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePages"
import ControlAdm from "./pages/AdminHomePage"
import LoginAdm from "./pages/LoginPage"
import FormUser from "./pages/ApplicationFormPage"
import FormAdm from "./pages/CreateTripPage"
import DetailsAdm from "./pages/TripDetailsPage"
import ListaViagens from "./pages/ListTripsPage";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/trips/list" element={<ListaViagens />} />
                <Route path="/trips/aplicacao" element={<FormUser />} />
                <Route path="/login" element={<LoginAdm />} />
                <Route path="/login/adm" element={<ControlAdm />} />
                <Route path="/admin/trips/create" element={<FormAdm />} />
                <Route path="/admin/trips/list:id" element={<DetailsAdm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;