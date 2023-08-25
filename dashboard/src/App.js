import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Dash from "./pages/dash/Dash";
import Properties from "./pages/properties/Properties";
import Update from "./pages/properties/update/Update";

export const AuthContext = createContext();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}>
          Login
        </Route>
        <Route path="/dash" element={<Dash />}>
          Dash
        </Route>
        <Route path="/create" element={<Properties />}>
          Create
        </Route>
        <Route path="/update/:id" element={<Update />}>
          Update
        </Route>
      </Routes>
    </div>
  );
}

export default App;
