import { Users } from 'lucide-react';

export function Trust() {
  return (
    <section id="quienes-somos" className="section trust-section">
      <div className="container">
        <div className="trust-content text-center">
          <Users size={64} className="text-gold mx-auto mb-6" />
          <h2 className="section-title">Quiénes Somos</h2>
          <p className="section-description mx-auto max-w-3xl mt-4">
            <strong>Ramos Bitar Inmobiliaria</strong> está compuesto por un equipo interdisciplinario de abogados expertos en derecho procesal y especialistas inmobiliarios. Con más de 10 años de experiencia comprobada en el mercado de Bogotá, nuestra misión es evitar la destrucción de patrimonio a través de rescates financieros efectivos.
          </p>
        </div>
      </div>
    </section>
  );
}
