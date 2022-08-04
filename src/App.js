import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
// import {Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
// import storage from './lib/storage';

function App() {

  return (
      <>
        <Header />
        <Login />
      </>
  )
}

export default App