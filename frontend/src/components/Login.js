import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function Login() {
  const [values, setValues] = useState({
    
    email: '',
    password: ''
    
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/login', values)
      .then(res => {
        
        navigate('/beranda')
        console.log(res)
      })
      .catch(err => console.log(err));
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
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </label>
          <br />
          <label>
            Kata Sandi: <br />
            <input
              className='inputlogin'
              type="password"
              value={values.password}
              onChange={(e) => setValues({...values, password: e.target.value})}
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
