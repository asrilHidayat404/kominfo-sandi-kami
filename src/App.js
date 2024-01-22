import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Tentang from "./Pages/Tentang";
import PendaftaranTTE from "./Pages/PendaftaranTTE";
import PengajuanVulAssess from "./Pages/PengajuanVulAssess";
import PengajuanMail from "./Pages/PengajuanMail";
import PengajuanIntegrasiAPITTE from "./Pages/PengajuanIntegrasiAPITTE";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route
            path="/Pendaftaran-TTE-(E-Sign)"
            element={<PendaftaranTTE />}
          />
          <Route
            path="/Pengajuan-Vulnerability-Assessment"
            element={<PengajuanVulAssess />}
          />
          <Route path="/Pengajuan-Mail-Bogorkab" element={<PengajuanMail />} />
          <Route
            path="/Pengajuan-Integrasi-API-TTE"
            element={<PengajuanIntegrasiAPITTE />}
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
