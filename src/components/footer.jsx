import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#fff", padding: "20px 0", marginTop: "30px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        
        <nav style={{ display: "flex", gap: "20px", fontWeight: "600" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Inicio</a>
          <a href="/movies" style={{ color: "#fff", textDecoration: "none" }}>Películas</a>
          <a href="/series" style={{ color: "#fff", textDecoration: "none" }}>Series</a>
          <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Nosotros</a>
        </nav>

        <div style={{ display: "flex", gap: "15px", fontSize: "1.4rem" }}>
          <a href="https://facebook.com" target="_blank" style={{ color: "#fff" }}><FaFacebook/></a>
          <a href="https://instagram.com" target="_blank" style={{ color: "#fff" }}><FaInstagram/></a>
          <a href="https://youtube.com" target="_blank" style={{ color: "#fff" }}><FaYoutube/></a>
          <a href="https://tiktok.com" target="_blank" style={{ color: "#fff" }}><FaTiktok/></a>
        </div>

        <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>
          © {new Date().getFullYear()} MovieApp — Tradición digital, estilo moderno 😎🎬
        </span>
      </div>
    </footer>      
  );
}
