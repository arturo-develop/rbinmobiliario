import './Features.css';
import { Clock, Ban, DollarSign, AlertOctagon } from 'lucide-react';

export function Features() {
  return (
    <>
      <section id="dolor" className="section pain-section bg-surface-dark">
        <div className="container">
          <div className="pain-card text-center" style={{ border: '1px solid var(--error-color)', padding: '4rem 2rem', borderRadius: '0.5rem', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
            <AlertOctagon size={48} className="mx-auto mb-4" style={{ color: 'var(--error-color)' }} />
            <h2 className="section-title text-3xl mb-4" style={{ color: '#fff' }}>¿Sabías que en un remate judicial podrías perder hasta el <span style={{ color: 'var(--error-color)' }}>60% de tu patrimonio</span>?</h2>
            <p className="max-w-3xl mx-auto" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
              El juzgado subasta tu propiedad por apenas el 70% del avalúo. A eso súmale que los honorarios de secuestres, costas procesales y los intereses moratorios del banco <strong>se comerán casi todo el excedente</strong> dejándote sin propiedad y, en muchos casos, todavía con deudas.
            </p>
            <div className="mt-12" style={{ marginTop: '3rem' }}>
              <a href="#contacto" className="btn-primary cta-pulse">Evitar el Remate Ahora</a>
            </div>
          </div>
        </div>
      </section>

      <section id="solucion" className="section features-section">
        <div className="container">
          <div className="features-header text-center mb-16">
            <h2 className="section-title" style={{ fontSize: '3rem' }}>RAMOS BITAR: Tu salida de emergencia <span className="text-gold">legal y financiera.</span></h2>
          </div>
          <div className="features-grid-3">
            <div className="feature-item-col">
              <Clock size={48} className="text-gold mb-6" />
              <h4 className="feature-title text-xl mb-3">Rapidez</h4>
              <p className="feature-desc">Compramos en días, logrando <strong>frenar el proceso judicial</strong> y la subasta de inmediato.</p>
            </div>
            <div className="feature-item-col border-left-desk">
              <Ban size={48} className="text-gold mb-6" />
              <h4 className="feature-title text-xl mb-3">Cero Costos Ocultos</h4>
              <p className="feature-desc">Nosotros asumimos absolutamente todos los honorarios legales y el proceso de saneamiento jurídico y registral.</p>
            </div>
            <div className="feature-item-col border-left-desk">
              <DollarSign size={48} className="text-gold mb-6" />
              <h4 className="feature-title text-xl mb-3">Dinero Real</h4>
              <p className="feature-desc">Recibes un pago justo por tu inmueble y te entregamos el <strong>excedente en efectivo</strong> para que puedas empezar de nuevo con tranquilidad.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
