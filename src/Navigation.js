import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import AdminAddPage from "./pages/AdminAddPage";
import AdminEditPage from "./pages/AdminEditPage";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";

function Navigation() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add" element={<AdminAddPage />} />/
          <Route path="/admin/edit/:id" element={<AdminEditPage />} />/
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default Navigation;
