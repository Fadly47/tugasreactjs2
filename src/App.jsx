import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Home />} />

          {/* Halaman Informasi */}
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback jika route tidak ditemukan */}
          <Route path="*" element={<h2>404 - Halaman tidak ditemukan</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
