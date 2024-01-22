import ListFormInputTTE from "./ListFormInputTTE";

const FormPendaftaranTTE = () => {
  return (
    <main className="pendaftaranTTE">
      <header>
        <img
          src="https://sandikami.bogorkab.go.id/helpdesk/uploads/company/63cf1f3c1e78c6fb698a8dcfeada82a5.png"
          alt=""
        />
        <h1>Formulir Pengajuan Tanda Tangan Elektronik</h1>
      </header>
      <form>
        <p>Isilah form berikut dengan benar!</p>
        <ListFormInputTTE />
      </form>
    </main>
  );
};

export default FormPendaftaranTTE;
