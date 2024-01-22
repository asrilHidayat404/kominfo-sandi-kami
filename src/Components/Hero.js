const Hero = () => {
  return (
    <section id="hero">
      <div className="section hero">
        <div className="intro">
          <h1>Persandian Bogorkab</h1>
          <p>
            Layanan Persandian Terpadu satu atap CISRT - ESIGN / TTE -
            Vulnerability Assessment - Pentest - PHKS / JKS - Secure Chat / Mail
            - SSL - INDEKS KAMI
          </p>
          <div className="more">
            <button id="more">Lebih Lanjut</button>
          </div>
        </div>
        <div className="poster">
          <img
            src="https://sandikami.bogorkab.go.id/canva/img_header.png"
            alt=""
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,256L30,245.3C60,235,120,213,180,218.7C240,224,300,256,360,256C420,256,480,224,540,181.3C600,139,660,85,720,64C780,43,840,53,900,58.7C960,64,1020,64,1080,74.7C1140,85,1200,107,1260,128C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
