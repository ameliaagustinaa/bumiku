import "../App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(""); // State untuk menyimpan email
  const [password, setPassword] = useState(""); // State untuk menyimpan password
  const navigate = useNavigate();
  const [state, setState] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    try {
      // Kirim data login ke API backend menggunakan fetch
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const jsonData = await response.json();
      if (response.ok) {
        // Login berhasil
        // Simpan token atau data user ke local storage\
        console.log("Login berhasil:", jsonData);
        if (jsonData.role === "admin") {
          // the variable is defined
          // Redirect ke halaman admin donasi
          navigate("/Admininformasi");
        } else {
          // Redirek ke halaman dashboard atau profil
          navigate("/");
        }
      } else {
        // Login gagal
        console.error("Login gagal:", jsonData);
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
        <form onSubmit={handleSubmit}>
          <label>
            Email: <br></br>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br></br>
          <label>
            Kata Sandi: <br></br>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br></br>
          <p>
            Belum memiliki akun?{" "}
            <a className="masuk" href="/Daftarlogin">
              Daftar sekarang
            </a>
          </p>
          <button className="button" type="submit">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
