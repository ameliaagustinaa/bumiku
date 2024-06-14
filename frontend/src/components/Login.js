import "../App.css";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, Link, json } from "react-router-dom";

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
        console.log("Login berhasil:", jsonData);
        const { data, token } = jsonData;
        console.log(JSON.stringify(data));
        localStorage.setItem("userData", JSON.stringify(data));
        Cookies.set("token", JSON.stringify(token));
        if (data.role === "admin") {
          // Redirect ke halaman admin donasi
          navigate("/Admininformasi");
        } else {
          // Redirect ke halaman dashboard atau profil
          navigate("/");
        }
      } else {
        // Login gagal
        console.error("Login gagal:", jsonData);
        setState(jsonData.msg || "Login gagal");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setState("Terjadi kesalahan saat mencoba login");
    }
  };

  return (
    <div className="App-daftarlogin">
      <div className="containerss">
        <h1 className="judul">Bumiku.com</h1>
        <h6>{state}</h6>
        <form onSubmit={handleSubmit}>
          <label>
            Email: <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Kata Sandi: <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <br />
          <p>
            Belum memiliki akun?{" "}
            <Link className="masuk" to="/Daftarlogin">
              Daftar sekarang
            </Link>
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
