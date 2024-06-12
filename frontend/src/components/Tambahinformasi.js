
import Nav from 'react-bootstrap/Nav';
import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TambahInformasi() {
  const [values, setValues] = useState({
    judul: '',
    deskripsi: '',
    konten_informasi: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/tambah_informasi', values)
      .then(res => {
        navigate('/Admininformasi');
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='frameadmin'>
      <div className='sidebar'>
        <h2 className='judul-sidebar'>Bumiku.com</h2>
        <p className='page-sidebar'>AdminPage</p>
        <br />
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/Admininformasi" style={{ color: 'white' }}>Informasi</Nav.Link>
          <Nav.Link href="/Adminkursus" style={{ color: 'white' }}>Kursus</Nav.Link>
          <Nav.Link href="/Admindonasi" style={{ color: 'white' }}>Donasi</Nav.Link>
        </Nav>  
      </div>

      <div className='containersss'>
        <h1 className='judul'>Menambahkan Informasi</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label className='texttambah'>
            Judul Informasi:
            <br />
            <input
              className='inputtambah'
              type="text"
              value={values.judul}
              onChange={e => setValues({ ...values, judul: e.target.value })}
            />
          </label>
          <br />
          <br />
          <label className='texttambah'>
            Deskripsi: 
            <br />
            <input
              className='inputtambah'
              type="text"
              value={values.deskripsi}
              onChange={e => setValues({ ...values, deskripsi: e.target.value })}
            />
          </label>
          <br />
          <br />
          <label className='texttambah'>
            Konten Informasi: 
            <br />
            <input
              className='konten'
              type="text"
              value={values.konten_informasi}
              onChange={e => setValues({ ...values, konten_informasi: e.target.value })}
            />
          </label>
          <p className='uploudgambar'><a className='uploudgambar' href=''>Upload File Gambar</a></p>
          <button className='buttonn' type="submit">Tambahkan</button>
        </form>
      </div>
    </div>
  );
}

export default TambahInformasi;
