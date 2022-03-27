import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import Finish from "./components/Finish";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Instructions />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </Layout>
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
    </Router>
  );
}

export default App;
