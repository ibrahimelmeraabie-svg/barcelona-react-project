import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Matches from "./pages/Matches.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = {
    home: <Home setPage={setPage} />,
    about: <About />,
    team: <Team />,
    matches: <Matches />,
    gallery: <Gallery />,
    contact: <Contact />,
  };

  function handlePageChange(item) {
    setPage(item);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <h1>🔵🔴 FC Barcelona</h1>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "active" : ""}>
            {Object.keys(pages).map((item) => (
              <button
                key={item}
                className={page === item ? "active" : ""}
                onClick={() => handlePageChange(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>{pages[page]}</main>

      <footer>© 2026 FC Barcelona Fan Web App | React Project</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);