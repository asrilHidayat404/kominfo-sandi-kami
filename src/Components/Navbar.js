import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section id="navbar">
      <nav className="section nav">
        <div className="logo">
          <img
            src="https://sandikami.bogorkab.go.id/assets/images/logo.png"
            alt=""
            width="80px"
          />
        </div>
        <ul>
          <li>
            <a onClick={() => navigate("/")}>Beranda</a>
          </li>
          <li>
            <a onClick={() => navigate("/tentang")}>Tentang</a>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Layanan
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a onClick={() => navigate("/Pendaftaran-TTE-(E-Sign)")}>
                  Pendaftaran TTE (E-Sign)
                </a>
                <a
                  onClick={() =>
                    navigate("/Pengajuan-Vulnerability-Assessment")
                  }
                >
                  Pengajuan Vulnerability Assessment (VA)/ Pentest
                </a>
                <a onClick={() => navigate("/Pengajuan-Mail-Bogorkab")}>
                  Pengajuan Mail Bogorkab
                </a>
                <a onClick={() => navigate("/Pengajuan-Integrasi-API-TTE")}>
                  Pengajuan Integrasi API-TTE
                </a>
              </div>
            </div>
          </li>
          <li>
            <a onClick={() => navigate("/Contact")}>Contact</a>
          </li>
          <li>
            <a href="#e-sign">E-Sign</a>
          </li>
          <li>
            <a href="cisrt">CISRT</a>
          </li>
          <li>
            <div className="pengaduan">
              <button id="pengaduan">Tiket & Pengaduan</button>
            </div>
          </li>
        </ul>
        <div className="menuToggle">
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
