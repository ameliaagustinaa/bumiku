import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Daftarlogin() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const Register = async (e) => {
    e.preverntDefault();
    try{
      await axios.post('http://localhost:5000/users', {
        email: email,
        name: name,
        password: password,
        confPassword: confPassword
      })
      navigate.push("/Login");
    }catch(error){
      if(error.response){
        msg(error.response.data.msg);
      }
    }
  }

  return (
    <div className="App-daftarlogin">
      <div className='containerss'>
        <h1 className='judulbumiku'>Bumiku.com</h1>
        <form onSubmit={Register}>
          <p className='has-text-centered'>{msg}</p>
          <label>
            Email: <br />
            <input
              className='inputlogin'
              type="text"
              name="email"
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            Konfirmasi Kata Sandi: <br />
            <input
              className='inputlogin'
              type="password"
              placeholder='Enter Password'
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
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
