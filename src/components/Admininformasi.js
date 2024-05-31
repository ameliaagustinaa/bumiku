import Nav from 'react-bootstrap/Nav';
import "../App.css";
import Table from 'react-bootstrap/Table';

function Admininformasi() {
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
    
    <div className='tabel'>
      <h6 className='informasiadmin'> Informasi </h6>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Judul Informasi</th>
          <th>Jenis Informasi</th>
          <th>Gambar</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ciri dan Contoh Limbah Anorganik Dan <br></br>Bahaya nya limbah Anorganik ?</td>
          <td>Informasi umum</td>
          <td><img src="./hutan.png" />edit</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Apa itu pencemaran lingkungan Dampak <br></br>Dari Ke Deapn Terkait Lingkungan ?</td>
          <td>Informasi Umum</td>
          <td>Thornton</td>
          <td><img src="./hutan.png" />edit</td>
        </tr>
        <tr>
          <td>Fakta Menarik Cendrawasih, Burung Surga ,Kakak Tua Dll.</td>
          <td>Flora & Fauna</td>
          <td>Thornton</td>
          <td><img src="./hutan.png" />edit</td>
        </tr>
        <tr>
          <td>Dampak Perubahan Iklim  Polusi Lingkungan ?</td>
          <td>Berita</td>
          <td>Thornton</td>
          <td><img src="./hutan.png" />edit</td>
        </tr>
      </tbody>
    </Table>
    <br></br>
    <button className='butonadmin' type="submit">Tambahkan</button>
    </div>
    </div>
  );
}

export default Admininformasi;


