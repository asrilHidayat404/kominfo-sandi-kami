import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';

const Step6Form = ({ onSubmit, onPrev, data }) => {
  const [fileImg, setFileImg] = useState('');
  const [warn, setWarn] = useState('');

  const handleFileChange = (e) => {
    // Mendapatkan hanya nama file (tanpa path)
    const file = e.target.files[0] || '';
    console.log(e.target.files[0]);
    setFileImg(file);
  };
  
  const handleSubmit = () => {
    return !fileImg ? setWarn("Field harus diisi") : onSubmit({ fileImg, ...data });
  };

  return (
    <div className='form'>
      <h2 style={{color: 'red', fontWeight: "normal"}}>Unggah Formulir Permohonan</h2>
      <small>Formulir yang sudah ditandatangani oleh Kepala OPD</small>
      <div>
        <Input
          type='file'
          label="file"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={handleFileChange}
          className='inputFile'
          name='fileImg'
        />
      </div>
      <div className="btnNavigate">
        <Button onClick={onPrev} variant="contained" color="secondary">
          Kembali
        </Button>
        <div className="alert" style={{color:"#eaeaea", backgroundColor: "#dc2626", padding: "0", borderRadius: "5px"}}>{warn}</div>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step6Form;
