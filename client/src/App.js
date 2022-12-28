import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Competition from "./pages/competition/Competition";
import Forum from "./pages/forum/Forum";
import Store from "./pages/store/Store";
import Livestream from "./pages/livestream/Livestream";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Player from "./pages/player/Player"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/store" element={<Store />} />
        <Route path="/livestream" element={<Livestream />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
