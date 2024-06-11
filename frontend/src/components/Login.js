import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      if (response.status === 200) {
        // Berhasil login, arahkan pengguna ke halaman beranda atau dashboard
        navigate('/Home');
      } else {
        alert("Gagal masuk. Periksa kembali email dan kata sandi Anda.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal masuk. Terjadi kesalahan.");
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Kata Sandi: <br />
            <input
              className='inputlogin'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <p>Belum memiliki akun? <a className='masuk' href='/Daftarlogin'>Daftar sekarang</a></p>
          <button className='button' type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
