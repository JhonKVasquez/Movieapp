import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <header style={{ padding: "20px", textAlign: "center" }}>
        <h1>MovieApp 🎬</h1>
        <p>Bienvenido a tu catálogo de películas y series</p>
      </header>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <button onClick={() => setCount((c) => c + 1)}>
          Clicks: {count}
        </button>
      </main>

      <Footer />
    </div>
  );
}

export default App;
