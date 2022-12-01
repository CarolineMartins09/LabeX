import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePages"
import ControlAdm from "./AdminHomePage"
import LoginAdm from "./LoginPage"
import FormUsuario from "./ApplicationFormPage"
import FormAdm from "./CreateTripPage"
import DetailsAdm from "./TripDetailsPage"
import ListaViagens from "./ListTripsPage";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/trips/list" element={<ListaViagens />} />
                <Route path="/trips/aplicacao" element={<FormUsuario />} />
                <Route path="/login" element={<LoginAdm />} />
                <Route path="/login/adm" element={<ControlAdm />} />
                <Route path="/admin/trips/create" element={<FormAdm />} />
                <Route path="/admin/trips/list:id" element={<DetailsAdm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;