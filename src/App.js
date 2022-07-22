import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";

function App() {
  return (
      <>
        <Header />
        <Login />
      </>
  )
}

export default App