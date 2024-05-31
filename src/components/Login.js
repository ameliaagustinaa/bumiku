import Form from 'react-bootstrap/Form';
import "../App.css";

function Login() {
  return (
    <div className="App-daftarlogin">
        <div className='containerss'>
        <h1 className='judul'>Bumiku.com</h1>
        <form>
        <label>
        Email: <br></br>
        <input type="email"/>
        </label>
        <br></br>
        <label>
        Kata Sandi: <br></br>
        <input type="text"/>
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