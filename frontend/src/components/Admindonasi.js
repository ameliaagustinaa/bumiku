// File: src/components/Admindonasi.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdEditSquare } from 'react-icons/md';
import "../App.css";

const Admindonasi = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Mengambil data donasi dari API
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products', {
          auth: {
            email: 'admin@gmail.com',
            password: '123456'
        },
        });
        // console.log(res.locals.user);
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className='frameadmin'>
      <div className='sidebar'>
        <h2 className='judul-sidebar'>Bumiku.com</h2>
        <p className='page-sidebar'>AdminPage</p>
        <br />
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/Admininformasi" style={{ color: 'white' }}>Informasi</Nav.Link>
          <Nav.Link href="/Adminkursus" style={{ color: 'white' }}>Kursus</Nav.Link>
          <Nav.Link href="/Admindonasi" style={{ color: 'white' }}>Donasi</Nav.Link>
        </Nav>
      </div>

      <div className='tabel'>
        <h6 className='informasiadmin'>Donasi</h6>
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
            {donations.map((donation) => (
              <tr key={donation.uuid}>
                <td>{donation.name}</td>
                <td>{donation.imageUrl}</td>
                <td>Rp {donation.price.toLocaleString()}</td>
                <td>{donation.payment_status}</td>
                <td>
                  <nav className='aksi'>
                    <Nav.Link href='#' onClick={() => handleDelete(donation.uuid)}>
                      <RiDeleteBin6Fill />Hapus
                    </Nav.Link>
                    <Nav.Link href='#' style={{ color: 'black' }} onClick={() => handleConfirm(donation.id)}>
                      <MdEditSquare />Konfirmasi
                    </Nav.Link>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );

  function handleDelete(id) {
    // Fungsi untuk menghapus donasi
    console.log(`Delete donation with id: ${id}`);
  }

  function handleConfirm(id) {
    // Fungsi untuk mengkonfirmasi donasi
    console.log(`Confirm donation with id: ${id}`);
  }
};

export default Admindonasi;
