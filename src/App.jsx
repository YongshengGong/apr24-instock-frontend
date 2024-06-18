import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage";

function App() {
  const port = import.meta.env.VITE_PORT || "http://localhost:8080";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditInventoryItemPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
