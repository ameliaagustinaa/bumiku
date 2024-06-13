import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Daftarlogin() {
  const [email, setEmail] = useState(""); // State untuk menyimpan email
  const [password, setPassword] = useState(""); // State untuk menyimpan password
  const [name, setName] = useState("");
  const [confPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [state, setState] = useState(" ");

  const handleRegist = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    try {
      // Kirim data login ke API backend menggunakan fetch
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confPassword }),
      });

      const jsonData = await response.json();
      if (response.ok) {
        // Login berhasil
        // Simpan token atau data user ke local storage
        console.log("Registrasi berhasil:", jsonData);
        // Redirek ke halaman dashboard atau profil
        navigate("/login");
      } else {
        // Login gagal
        console.error("Registrasi gagal:", jsonData.error);
        setState(jsonData.msg);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="App-daftarlogin">
      <div className="containerss">
        <h1 className="judul">Bumiku.com</h1>
        <h6>{state}</h6>
        <form onSubmit={handleRegist}>
          <label>
            Email: <br></br>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br></br>
          <label>
            Nama: <br></br>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br></br>
          <label>
            Kata Sandi: <br></br>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br></br>
          <label>
            Konfirmasi kata sandi: <br></br>
            <input type="password" value={confPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
          <p>
            Sudah memiliki akun?{" "}
            <a className="masuk" href="/login">
              masuk
            </a>
          </p>
          <button className="button" type="submit">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Daftarlogin;
