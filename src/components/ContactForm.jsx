import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contáctenos</h2>
      <form className="contact-form">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Tu nombre"
          required
        />
        
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          placeholder="Tu correo"
          required
        />
        
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          placeholder="Escribe tu mensaje"
          rows="5"
          required
        ></textarea>
        
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
