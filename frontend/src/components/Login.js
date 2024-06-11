import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "../App.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      if (response.status === 200) {
        // Navigasi ke halaman informasi setelah login berhasil
        navigate('/informasi');
      }
    } catch (error) {
      setError('Login gagal. Periksa email dan kata sandi Anda.');
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
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label>
            Kata Sandi: <br />
            <input 
              className='inputlogin' 
              type="password" 
              value={password} 
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          {error && <p style={{color: 'red'}}>{error}</p>}
          <p>Belum memiliki akun? <a className='masuk' href='/Daftarlogin'>Daftar sekarang</a></p>
          <button className='button' type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
