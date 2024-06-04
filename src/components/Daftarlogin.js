import Form from 'react-bootstrap/Form';
import "../App.css";

const breadcrumbItems = ["Beranda", "Informasi"];
function Daftarlogin() {
  return (
    <div className="App-daftarlogin">
    <div className='containerss'>
      <h1 className='judulbumiku'>Bumiku.com</h1>
      <form>
      <label>
        Email: <br></br>
       <input className='inputlogin'type="email"/>
      </label>
      <br></br>
      <label>
        Nama: <br></br>
       <input className='inputlogin' type="text"/>
      </label>
      <br></br>
      <label>
        Kata Sandi: <br></br>
       <input className='inputlogin' type="text"/>
      </label>
      <br></br>
      <label>
        Konfirmasi Kata Sandi: <br></br>
       <input className='inputlogin' type="text"/>
      </label>
      <p>Sudah memiliki akun? <a className='masuk' href=''>Masuk</a></p>
      <button className='button' type="submit">Daftar</button>
      </form>
      
    </div>
    </div>
  );
}

export default Daftarlogin;