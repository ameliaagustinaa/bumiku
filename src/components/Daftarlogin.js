import Form from 'react-bootstrap/Form';
import "../App.css";

function Daftarlogin() {
  return (
    // <Form>
    //   <Form.Group className="mb-3" controlId="formGroupEmail">
    //     <Form.Label>Email </Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formGroupNama">
    //     <Form.Label>Nama</Form.Label>
    //     <Form.Control type="nama" placeholder="nama" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formGroupKataSandi">
    //     <Form.Label>Kata Sandi</Form.Label>
    //     <Form.Control type="kata sandi" placeholder="Kata Sandi" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formGroupKonfirmasiKataSandi">
    //     <Form.Label>Konfirmasi Kata Sandi</Form.Label>
    //     <Form.Control type="konfirmasi kata sandi" placeholder="konfirmasi kata sandi" />
    //   </Form.Group>

      
    // </Form>
   
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
  );
}

export default Daftarlogin;