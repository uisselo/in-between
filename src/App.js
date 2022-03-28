import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import Finish from "./components/Finish";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer, Zoom } from "react-toastify";
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
      <ToastContainer
        draggable={false}
        position={toast.POSITION.TOP_CENTER}
        transition={Zoom}
        autoClose={6000}
      />
    </Router>
  );
}

export default App;
