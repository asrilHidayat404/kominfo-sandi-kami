const Contact = () => {
  return (
    <section id="contact">
      <div className="section contact">
        <header>
          <h1>Kontak</h1>
          <p className="text">Kontak kami untuk keterangan lebih lanjut</p>
          <button className="contactMore">Lebih Lanjut</button>
        </header>
        <div className="listContact">
          <div className="cardContact">
            <header>
              <h1>Dinas Komunikasi dan Informatika</h1>
            </header>
            <p className="jalan">
              Jl. Tegar Beriman No.1, Pakansari, Kec. Cibinong,
            </p>
            <p className="kabupaten">Kabupaten Bogor, Jawa Barat 16914</p>
            <p className="email">diskominfo@bogorkab.go.id</p>
            <p className="telp">+62 21 8758605</p>
          </div>
          <div className="cardContact">
            <header>
              <h1>Bidang Persandian dan Statistik</h1>
            </header>
            <p className="gedung">Gedung Diskominfo Lantai 2</p>
            <p className="jalan">
              Jl. Tegar Beriman No.1, Pakansari, Kec. Cibinong,
            </p>
            <p className="kabupaten">Kabupaten Bogor, Jawa Barat 16914</p>
            <p className="email">diskominfo@bogorkab.go.id</p>
            <p className="telp">+62 21 8758605</p>
          </div>
          <div className="cardContact">
            <header>
              <h1>Seksi Persandian</h1>
            </header>
            <p className="gedung">Gedung Diskominfo Lantai 2</p>
            <p className="jalan">
              Jl. Tegar Beriman No.1, Pakansari, Kec. Cibinong,
            </p>
            <p className="kabupaten">Kabupaten Bogor, Jawa Barat 16914</p>
            <p className="email">diskominfo@bogorkab.go.id</p>
            <p className="telp">+62 21 8758605</p>
          </div>
        </div>
      </div>
      <svg
        className="bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,96L48,101.3C96,107,192,117,288,144C384,171,480,213,576,208C672,203,768,149,864,106.7C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Contact;
