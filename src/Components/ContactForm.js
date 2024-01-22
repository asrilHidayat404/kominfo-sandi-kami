const ContactForm = () => {
  return (
    <form>
      <div className="parent judul">
        <label for="judul">Judul</label>
        <input type="text" name="judul" />
      </div>

      <div className="nama-email">
        <div className="parent nama">
          <label for="nama">Nama Lengkap</label>
          <input type="text" name="nama" />
        </div>
        <div className="parent email">
          <label for="email">Alamat Email</label>
          <input type="email" name="email" />
        </div>
      </div>

      <div className="parent divisi">
        <label for="divisi">Divisi</label>
        <select>
          <option></option>
          <option value="persandian">Persandian</option>
          <option value="csirt">CSIRT</option>
        </select>
      </div>

      <div className="parent prioritas">
        <label for="prioritas">Prioritas</label>
        <select>
          <option></option>
          <option value="rendah">Rendah</option>
          <option value="sedang">Sedang</option>
          <option value="tinggi">Tinggi</option>
        </select>
      </div>

      <div className="parent layanan">
        <label for="layanan">Layanan</label>
        <select>
          <option></option>
          <option value="informasi-layanan">Informasi Layanan</option>
          <option value="integrasi-layanan">Integrasi Layanan</option>
          <option value="pendaftaran-akun-TTE">
            Pendaftaran Akun TTE/ E-Sign
          </option>
          <option value="permintaan-data">Permintaan Data</option>
          <option value="secure-data">Secure Data</option>
          <option value="security-assessment">Security Assessment</option>
          <option value="vulnerability-assessment">
            Vulnerability Assessment
          </option>
        </select>
      </div>

      <div className="parent telepon-wa">
        <label for="telepon-wa">Telepon/ WA</label>
        <input
          type="text"
          name="telepon-wa"
          placeholder="Nomor telepon atau WA"
        />
      </div>

      <div className="parent pesan">
        <label for="pesan">Pesan</label>
        <textarea name="pesan"></textarea>
      </div>

      <div className="lampiran">
        <lable for="lampiran">Lampiran</lable>
        <input type="file" />
      </div>

      <div className="submit">
        <input type="submit" value="KIRIM" />
      </div>
    </form>
  );
};

export default ContactForm;
