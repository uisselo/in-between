import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Instructions />}/>
          <Route path="/game" element={<Game />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
