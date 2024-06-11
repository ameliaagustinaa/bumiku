import Form from 'react-bootstrap/Form';
import "../App.css";

function Login() {
  return (
    <div className="App-daftarlogin">
        <div className='containerss'>
        <h1 className='judulbumiku'>Bumiku.com</h1>
        <form>
        <label>
        Email: <br></br>
        <input className='inputlogin' type="email"/>
        </label>
        <br></br>
        <label>
        Kata Sandi: <br></br>
        <input className='inputlogin' type="text"/>
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