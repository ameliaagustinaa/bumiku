import Nav from 'react-bootstrap/Nav';
import "../App.css";

function Tambahinformasi() {
  return (
    
    <div className='frameadmin'>
    <div className='sidebar'>
        <h2 className='judul-sidebar'>Bumiku.com</h2>
        <p className='page-sidebar'>AdminPage</p>
        <br></br>
        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home" style={{color: 'white'}}>Informasi</Nav.Link>
        <Nav.Link eventKey="link-1" style={{color: 'white'}}>Kursus</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: 'white'}}>Donasi</Nav.Link>
        </Nav> 
    </div>

    <div className='containerss'>
      <h1 className='judul'>Bumiku.com</h1>
      <form>
      <label>
        Judul Informasi: <br></br>
       <input type="text"/>
      </label>
      <br></br>
      <label>
        Deskripsi: <br></br>
       <input type="text"/>
      </label>
      <br></br>
      <label>
        Konten Informasi: <br></br>
       <input type="text"/>
      </label>
    
      <p><a className='masuk' href=''>Upload File Gambar</a></p>
      <button className='button' type="submit">Daftar</button>
      </form>
      
    </div>
    </div>
  );
}

export default Tambahinformasi;


