import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReservations } from "../utils/supabase";

// Datos simulados
const mockReservations = [
  {
    id: 1,
    dni: "12345678",
    type_doc: "DNI",
    name: "Juan Pérez",
    cel: "987654321",
    email: "juan.perez@example.com",
    package: "Premium",
    created_at: "2025-01-05",
  },
  {
    id: 2,
    dni: "87654321",
    type_doc: "Pasaporte",
    name: "Ana López",
    cel: "123456789",
    email: "ana.lopez@example.com",
    package: "Económico",
    created_at: "2025-01-04",
  },
  {
    id: 3,
    dni: "11223344",
    type_doc: "Cédula",
    name: "Carlos García",
    cel: "564738291",
    email: "carlos.garcia@example.com",
    package: "Estándar",
    created_at: "2025-01-03",
  },
];

function AdminReservations() {
  const [reservations, setReservations] = useState([]);

  const getReservationsAux = async () => {
    const res = await getReservations();
    console.log(res);
    setReservations(res);
  }

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("es-ES", options);
  }

  useEffect(() => {
    // Simular una llamada a la API
    // setTimeout(() => setReservations(mockReservations), 1000);
    getReservationsAux();
  }, []);

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Hotel</h2>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Inicio</Link>
          <Link to="/reservations" style={styles.link}>Reservas</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.content}>
        <h1 style={styles.title}>Listado de Reservas</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>DNI</th>
              <th>Tipo Doc</th>
              <th>Nombre</th>
              <th>Celular</th>
              <th>Email</th>
              <th>Paquete</th>
              <th>Creado</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length > 0 ? (
              reservations.map((res) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.dni}</td>
                  <td>{res.type_doc}</td>
                  <td>{res.name}</td>
                  <td>{res.cel}</td>
                  <td>{res.email}</td>
                  <td>{res.package}</td>
                  <td>
                    {formatDate(res.created_at)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={styles.loading}>Cargando reservas...</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}

// Estilos
const styles = {
  dashboard: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
  },
  sidebarTitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  "link:hover": {
    backgroundColor: "#555",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f4f4f4",
    overflowY: "auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  "table th": {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  "table td": {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  "table tr:nth-child(even)": {
    backgroundColor: "#f9f9f9",
  },
  "table tr:hover": {
    backgroundColor: "#f1f1f1",
  },
  loading: {
    textAlign: "center",
    padding: "10px",
  },
};

export default AdminReservations;
