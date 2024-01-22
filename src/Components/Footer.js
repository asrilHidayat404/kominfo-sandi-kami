const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <div className="top">
          <div className="logo">
            <img
              src="https://sandikami.bogorkab.go.id/images/footer-logo.png"
              alt=""
            />
          </div>
          <ul>
            <li>
              <a href="#beranda">Beranda</a>
            </li>
            <li>
              <a href="#tentang">Tentang</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="others">
            <ul>
              <li>
                <a href="">Terms & condition</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Policy</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="conSos">
            <div className="con">
              <p className="telp">+62 21 8758605</p>
              <p className="situs">diskominfo@bogorkab.go.id</p>
              <p className="jalan">
                Jl. Tegar Beriman No.1, Pakansari, Kec. Cibinong
              </p>
              <p className="kab">Kabupaten Bogor, Jawa Barat 16914</p>
            </div>
            <div className="sos">
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>© 2022 , All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
