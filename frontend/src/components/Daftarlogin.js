import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Daftarlogin() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3002/daftarlogin', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/login');
        } else {
          alert("Error");
        }
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
              placeholder='Enter Password'
            />
          </label>
          <p>Sudah memiliki akun? <a className='masuk' href=''>Masuk</a></p>
          <button className='button' type="submit">Daftar</button>
        </form>
      </div>
    </div>
  );
}

export default Daftarlogin;
