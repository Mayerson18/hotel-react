const Header = () => {
  return (
      <header style={{ background: "rgb(8 45 85)", color: "white", padding: "1rem" }}>
          <h1>Hotel las palmeras</h1>
          <nav>
              <a href="#about" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Quiénes Somos</a>
              <a href="#services" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Servicios</a>
              <a href="#contact" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contáctenos</a>
          </nav>
      </header>
  );
};

export default Header;
