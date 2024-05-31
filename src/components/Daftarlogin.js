import Form from 'react-bootstrap/Form';
import "../App.css";

function Daftarlogin() {
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
        Nama: <br></br>
       <input type="text"/>
      </label>
      <br></br>
      <label>
        Kata Sandi: <br></br>
       <input type="text"/>
      </label>
      <br></br>
      <label>
        Konfirmasi kata sandi: <br></br>
       <input type="text"/>
      </label>
      <p>Sudah memiliki akun? <a className='masuk' href=''>masuk</a></p>
      <button className='button' type="submit">Daftar</button>
      </form>
      
    </div>
    </div>
  );
}

export default Daftarlogin;