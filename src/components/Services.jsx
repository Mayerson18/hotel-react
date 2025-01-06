import { useState } from "react";
import "./Services.css";
import { saveReservation } from "../utils/supabase";

const services = [
  { id: 1, title: "Habitación Sencilla", description: "Perfecta para viajeros individuales." },
  { id: 2, title: "Habitación Doble", description: "Ideal para parejas." },
  { id: 3, title: "Suite", description: "Lujo y comodidad máxima." },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleSave = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    alert("Datos guardados correctamente");

    const reservation = {
      package: selectedService.title,
      type_doc: event.target[0].value,
      dni: event.target[1].value,
      name: event.target[2].value,
      cel: event.target[3].value,
      email: event.target[4].value,
    };

    console.log(reservation);

    saveReservation(reservation);
    handleCloseModal();
  };

  return (
    <section id="services">
      <h2>Servicios</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleRegisterClick(service)}>Reservar</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <h3>Registrar - {selectedService.title}</h3>
            <form onSubmit={handleSave}>
              <label>
                Tipo de Documento:
                <select required>
                  <option value="">Seleccione</option>
                  <option value="cc">Cédula de Ciudadanía</option>
                  <option value="ti">Tarjeta de Identidad</option>
                  <option value="passport">Pasaporte</option>
                </select>
              </label>
              <label>
                Número de Documento:
                <input type="text" required />
              </label>
              <label>
                Nombre Completo:
                <input type="text" required />
              </label>
              <label>
                Número de Celular:
                <input type="tel" required />
              </label>
              <label>
                Email:
                <input type="email" required />
              </label>
              <button type="submit">Reservar</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
