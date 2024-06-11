import Nav from 'react-bootstrap/Nav';
import "../App.css";
import { Link } from "react-router-dom";

function Tambahinformasi() {
  return (
    
    <div className='frameadmin'>
    <div className='sidebar'>
        <h2 className='judul-sidebar'>Bumiku.com</h2>
        <p className='page-sidebar'>AdminPage</p>
        <br></br>
        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/Admininformasi" style={{color: 'white'}}>Informasi</Nav.Link>
        <Nav.Link href="/Adminkursus" style={{color: 'white'}}>Kursus</Nav.Link>
        <Nav.Link href="/Admindonasi" style={{color: 'white'}}>Donasi</Nav.Link>
        </Nav>  
    </div>

    <div className='containersss'>
      <h1 className='judul'>Menambahkan Informasi</h1>
      <br></br>
      <form>
      <label className='texttambah'>
        Judul Informasi:
        <br></br>
       <input className='inputtambah' type="text"/>
      </label>
      <br></br>
      <br></br>
      <label className='texttambah'>
        Deskripsi: 
        <br></br>
       <input className='inputtambah' type="text"/>
      </label>
      <br></br>
      <br></br>
      <label className='texttambah'>
        Konten Informasi: 
        <br></br>
       <input className='konten' type="text"/>
      </label>
    
      <p className='uploudgambar'><a className='uploudgambar' href=''>Upload File Gambar</a></p>
      <Nav.Link as={Link} to="/Admininformasi">
      <button className='buttonn' type="submit">Tambahkan</button>
      </Nav.Link>
      </form>
      
    </div>
    </div>
  );
}

export default Tambahinformasi;