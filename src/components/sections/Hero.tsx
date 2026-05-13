export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text-content animate-fade-in">
          <div className="gold-badge" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
            ¡El Reloj Corre en tu Contra!
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>
            No permitas que el juzgado <span className="text-gold">regale tu Inmueble</span>. <br/>
            Recupera tu dinero hoy.
          </h1>
          
          <p className="hero-subtitle">
            Compramos tu inmueble con procesos judiciales o embargos en Bogotá. Pagamos tu deuda al banco y te entregamos el excedente en efectivo antes del remate.
          </p>
          
          <div className="flex items-center gap-4 hero-actions">
            <a href="#contacto" className="btn-primary cta-pulse">Evaluación Gratuita de mi Caso</a>
          </div>
        </div>
      </div>
    </section>
  );
}
