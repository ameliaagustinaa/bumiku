
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "../App.css";

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const Auth = async (e) => {
    e.preverntDefault();
    try{
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
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
        <form onSubmit={Auth}>
          <label>
            Email: <br></br>
            <input className='inputlogin' type="email" 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <br></br>
          <label>
            Kata Sandi: <br></br>
            <input className='inputlogin' type="text" 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <br></br>
          <p>Belum memiliki akun? <a className='masuk' href=''>Daftar sekarang</a></p>
          <button className='button' type="submit">Masuk</button>
        </form>

      </div>
    </div>
  );
}

export default Login;