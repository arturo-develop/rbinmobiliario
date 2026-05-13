import './Process.css';
import { PhoneCall, Search, FileText, Handshake } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall size={32} className="text-gold" />,
    title: '1. Contacto Inicial',
    description: 'Nos cuentas tu situación con total transparencia y confidencialidad. Escuchamos para entender la urgencia de tu caso.'
  },
  {
    icon: <Search size={32} className="text-gold" />,
    title: '2. Estudio Jurídico',
    description: 'Nuestro equipo analiza el estado real del proceso en el juzgado. Este paso crítico lo realizamos completamente Sin Costo para ti.'
  },
  {
    icon: <FileText size={32} className="text-gold" />,
    title: '3. Oferta de Compra',
    description: 'Con el panorama claro, te presentamos una propuesta de compra directa formal, transparente y justa.'
  },
  {
    icon: <Handshake size={32} className="text-gold" />,
    title: '4. Cierre y Pago',
    description: 'Firmamos documentos, procedemos a cancelar la deuda con el banco y recibes tu dinero excedente para recuperar tu vida financiera.'
  }
];

export function Process() {
  return (
    <section id="proceso" className="section bg-surface-dark process-section">
      <div className="container">
        <div className="section-header text-center mb-16">
          <div className="gold-subtitle">Cómo Funciona</div>
          <h2 className="section-title">En 4 Pasos Detenemos el Remate</h2>
          <p className="section-description mx-auto mt-4 max-w-2xl">
            Hemos optimizado nuestro proceso para actuar con velocidad máxima antes de la fecha de subasta.
          </p>
        </div>
        
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-icon-wrapper">
                {step.icon}
              </div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
