import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <header>
        <h1>Emerytura czy to już?</h1>
        <h1>Wersja dev - Test 1</h1>
      </header>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
