import Nav from 'react-bootstrap/Nav';
import "../App.css";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";

function Admindonasi() {
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
    
    <div className='tabel'>
      <h6 className='informasiadmin'> Donasi </h6>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Bukti Transfer</th>
          <th>Nominal Donasi</th>
          <th>Status pembayaran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PRIA SATYA FAIZAL MAJID</td>
          <td>GAMBAR</td>
          <td>Rp 250.000</td>
          <td>Menunggu konfirmasi</td>
          <td> <nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />Konfirmasi
          </Nav.Link>
          </nav></td>
        </tr>
        <tr>
        <td>Parto</td>
          <td>GAMBAR</td>
          <td>Rp 150.000</td>
          <td>Menunggu konfirmasi</td>
          <td> <nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />Konfirmasi
          </Nav.Link>
          </nav></td>
        </tr>
        <tr>
        <td>BEJO</td>
          <td>GAMBAR</td>
          <td>Rp 200.000</td>
          <td>Menunggu konfirmasi</td>
          <td> <nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />Konfirmasi
          </Nav.Link>
          </nav></td>
        </tr>
        <tr>
        <td>Sarti</td>
          <td>Gambar</td>
          <td>Rp 150.000</td>
          <td>Menunggu konfirmasi</td>
          <td> <nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />Konfirmasi
          </Nav.Link>
          </nav></td>
        </tr>
        <tr>
        <td>Sarton</td>
          <td>Gambar</td>
          <td>Rp 250.000</td>
          <td>Menunggu konfirmasi</td>
          <td> <nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />Konfirmasi
          </Nav.Link>
          </nav></td>
        </tr>
      </tbody>
    </Table>
    
    </div>
    </div>
  );
}

export default Admindonasi;