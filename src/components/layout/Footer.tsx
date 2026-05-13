import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer-section" style={{ backgroundColor: '#000', padding: '4rem 0 2rem 0', borderTop: '1px solid var(--surface-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="flex items-center gap-2 logo">
            <img src="/logo.png" alt="Ramos Bitar Inmobiliaria" style={{ height: '30px' }} />
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Bogotá, Colombia</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>contacto@ramosbitar.com.co</p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: '1.6' }}>
          <p>&copy; {new Date().getFullYear()} Ramos Bitar Inmobiliaria. Todos los derechos reservados. | <a href="#" style={{ textDecoration: 'underline' }}>Política de Privacidad</a></p>
          <p style={{ marginTop: '0.5rem' }}><strong>Advertencia Legal:</strong> Ramos Bitar Inmobiliaria es una entidad privada de inversión y asesoría jurídica especializada. Nuestro actuar no constituye préstamos bancarios tradicionales. Toda propuesta de rescate está sujeta a viabilidad jurídica.</p>
        </div>
      </div>
    </footer>
  );
}
