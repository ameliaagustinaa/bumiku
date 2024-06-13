import Form from 'react-bootstrap/Form';
import "../App.css";

function Login() {
  return (
    <div className="App-daftarlogin">
        <div className='containerss'>
<<<<<<< HEAD
        <h1 className='judul'>Bumiku.com</h1>
        <form>
        <label>
        Email: <br></br>
        <input type="email"/>
=======
        <h1 className='judulbumiku'>Bumiku.com</h1>
        <form>
        <label>
        Email: <br></br>
        <input className='inputlogin' type="email"/>
>>>>>>> 0c67e8ea1354c9c50519a4f5ba9e687e7a6df1af
        </label>
        <br></br>
        <label>
        Kata Sandi: <br></br>
<<<<<<< HEAD
        <input type="text"/>
=======
        <input className='inputlogin' type="text"/>
>>>>>>> 0c67e8ea1354c9c50519a4f5ba9e687e7a6df1af
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