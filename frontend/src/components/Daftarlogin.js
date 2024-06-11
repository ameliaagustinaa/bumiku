import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Daftarlogin() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' // Tambahkan state untuk konfirmasi kata sandi
  });

  const navigate = useNavigate();

  // Ganti URL endpoint sesuai dengan kebutuhan
  const baseURL = 'http://localhost:5000';

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Periksa apakah kata sandi dan konfirmasi kata sandi cocok
    if (values.password !== values.confirmPassword) {
      alert("Kata sandi dan konfirmasi kata sandi tidak cocok");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/users`, {
        name: values.name,
        email: values.email,
        password: values.password
      });
      if (response.status === 201) {
        alert("Pendaftaran berhasil");
        // Navigasi ke halaman login setelah pendaftaran berhasil
        navigate('/login');
      } else {
        alert("Gagal mendaftar");
      }
    } catch (error) {
      console.error("Error:", error);
      // Tambahkan penanganan kesalahan di sini
      alert("Gagal mendaftar. Terjadi kesalahan.");
    }
  };

  return (
    <div className="App-daftarlogin">
      <div className='containerss'>
        <h1 className='judulbumiku'>Bumiku.com</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email: <br />
            <input
              className='inputlogin'
              type="text"
              name="email"
              placeholder='Enter Email'
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </label>
          <br />
          <label>
            Nama: <br />
            <input
              className='inputlogin'
              type="text"
              name="name"
              placeholder='Enter Name'
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Kata Sandi: <br />
            <input
              className='inputlogin'
              type="password"
              name="password"
              placeholder='Enter Password'
              value={values.password}
              onChange={e => setValues({ ...values, password: e.target.value })}
            />
          </label>
          <br />
          <label>
            Konfirmasi Kata Sandi: <br />
            <input
              className='inputlogin'
              type="password"
              name="confirmPassword"
              placeholder='Enter Password'
              value={values.confirmPassword}
              onChange={e => setValues({ ...values, confirmPassword: e.target.value })}
            />
          </label>
          <p>Sudah memiliki akun? <a className='masuk' href='/login'>Masuk</a></p>
          <button className='button' type="submit">Daftar</button>
        </form>
      </div>
    </div>
  );
}

export default Daftarlogin;
