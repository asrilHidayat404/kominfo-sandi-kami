const ListFormInputTTE = () => {
  return (
    <>
      <div className="nama">
        <label for="nama">Nama Lengkap (Sesuai KTP)</label>
        <input
          type="text"
          name="nama"
          placeholder="Pastikan nama sesuai dengan KTP"
        />
      </div>

      <div className="nik">
        <label for="nik">NIK</label>
        <input
          type="text"
          name="nik"
          placeholder="Pastikan NIK sesuai dengan KTP"
        />
      </div>

      <div className="nip">
        <label for="nip">NIP</label>
        <input type="text" name="nip" placeholder="Untuk Non ASN Isikan 0" />
      </div>

      <div className="jabatan">
        <label for="jabatan">Jabatan</label>
        <input
          type="text"
          name="jabatan"
          placeholder="Kadis/ Camat/ Kabid/ Kasi/ Sub-Koordinator/ Staff/ Pelaksana"
        />
      </div>

      <div className="pangkat-golongan-eselon">
        <label for="pangkat-golongan-eselon">Pangkat/ Golongan/ Eselon</label>
        <select>
          <option></option>
          <option value="Juru-Muda.I/a">Juru Juda.A/a</option>
        </select>
      </div>

      <div className="dinas-unit-kerja">
        <label for="dinas-unit-kerja">Dinas/ Unit Kerja</label>
        <select>
          <option></option>
          <option value="dinas-kesehatan">Dinas Kesehatan</option>
        </select>
      </div>

      <div className="instansi">
        <label for="instansi">Instansi</label>
        <select>
          <option></option>
          <option value="pemerintah-kabupaten-pamekasan">
            Pemerintah Kabupaten Pamekasan
          </option>
        </select>
      </div>

      <div className="emailDinas">
        <label for="emailDinas">Email Dinas pamekasanKab.go.id Pemohon</label>
        <input
          type="enail"
          name="emailDinas"
          placeholder="yang belum memiliki isi dengan email lainnya. contoh: gmail"
        />
      </div>

      <div className="telepon-wa">
        <label for="telepon-wa">Telepon/ WA</label>
        <input
          type="text"
          name="telepon-wa"
          placeholder="Nomor telepon atau WA"
        />
      </div>

      <div className="alamat">
        <label for="alamat">Alamat</label>
        <textarea
          name="alamat"
          placeholder="Alamat Pemohon Sesuai KTP"
        ></textarea>
      </div>

      <div className="upload-surat">
        <lable for="upload-surat">
          Upload surat permohonan TTE (dalam bentuk PDF/JPG/PNG,ZIP maks 4MB)
        </lable>
        <input type="file" />
      </div>

      <div className="submit">
        <input type="submit" value="KIRIM DATA" />
      </div>
    </>
  );
};

export default ListFormInputTTE;
