import Nav from 'react-bootstrap/Nav';
import "../App.css";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";

function Adminkursus() {
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
      <h6 className='informasiadmin'> Kursus </h6>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Judul Vidio</th>
          <th>Deskripsi</th>
          <th>Vidio</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ciri dan Contoh Limbah Anorganik Dan Bahaya nya limbah Anorganik ?</td>
          <td>Informasi umum</td>
          <td></td>
          <td>
            <nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />edit
          </Nav.Link>
          </nav>
        </td>
        </tr>
        <tr>
          <td>Apa itu pencemaran lingkungan Dampak Dari Ke Deapn Terkait Lingkungan ?</td>
          <td>Informasi Umum</td>
          <td></td>
          <td><nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />edit
          </Nav.Link>
          </nav></td>
        </tr>
        <tr>
          <td>Fakta Menarik Cendrawasih, Burung Surga ,Kakak Tua Dll.</td>
          <td>Flora & Fauna</td>
          <td></td>
          <td><nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />edit
          </Nav.Link>
          </nav></td>
        </tr>
        <tr>
          <td>Dampak Perubahan Iklim  Polusi Lingkungan ?</td>
          <td>Berita</td>
          <td></td>
          <td> <nav className='aksi'>
          <Nav.Link  href='https://DeleteBin6Fill.com'>
          <RiDeleteBin6Fill />Hapus 
          </Nav.Link>
          
          <Nav.Link  style={{color : 'black'}}  href='https://EditSquare.com'>
          <MdEditSquare />edit
          </Nav.Link>
          </nav></td>
        </tr>
      </tbody>
    </Table>
    <br></br>
    <Nav.Link as={Link} to="/Tambahkursus">
    <button className='butonadmin' type="submit">Tambahkan</button>
    </Nav.Link>
    </div>
    </div>
  );
}

export default Adminkursus;