import Form from 'react-bootstrap/Form';
import "../App.css";

<<<<<<< HEAD
=======
const breadcrumbItems = ["Beranda", "Informasi"];
>>>>>>> 0c67e8ea1354c9c50519a4f5ba9e687e7a6df1af
function Daftarlogin() {
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
       <input className='inputlogin'type="email"/>
>>>>>>> 0c67e8ea1354c9c50519a4f5ba9e687e7a6df1af
      </label>
      <br></br>
      <label>
        Nama: <br></br>
<<<<<<< HEAD
       <input type="text"/>
=======
       <input className='inputlogin' type="text"/>
>>>>>>> 0c67e8ea1354c9c50519a4f5ba9e687e7a6df1af
      </label>
      <br></br>
      <label>
        Kata Sandi: <br></br>
<<<<<<< HEAD
       <input type="text"/>
      </label>
      <br></br>
      <label>
        Konfirmasi kata sandi: <br></br>
       <input type="text"/>
      </label>
      <p>Sudah memiliki akun? <a className='masuk' href=''>masuk</a></p>
=======
       <input className='inputlogin' type="text"/>
      </label>
      <br></br>
      <label>
        Konfirmasi Kata Sandi: <br></br>
       <input className='inputlogin' type="text"/>
      </label>
      <p>Sudah memiliki akun? <a className='masuk' href=''>Masuk</a></p>
>>>>>>> 0c67e8ea1354c9c50519a4f5ba9e687e7a6df1af
      <button className='button' type="submit">Daftar</button>
      </form>
      
    </div>
    </div>
  );
}

export default Daftarlogin;