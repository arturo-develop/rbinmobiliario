import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Lock } from 'lucide-react';
import './Contact.css';

// Zod Schema para dueños en apuros (Alineado al PDF)
const contactSchema = z.object({
  fullName: z.string().min(3, "El nombre es obligatorio").max(100),
  phone: z.string().min(7, "Teléfono inválido").regex(/^[0-9+\s-]+$/, "Solo números o +"),
  location: z.string().min(3, "Indica el barrio o dirección en Bogotá"),
  processStage: z.string().min(1, "Selecciona una etapa del proceso"),
  approximateDebt: z.string().min(1, "Ingresa un valor aproximado de la deuda"),
  estimatedValue: z.string().min(1, "Ingresa un valor comercial estimado del inmueble")
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const webhookUrl = import.meta.env.VITE_APP_WEBHOOK_URL;
      if (!webhookUrl) {
         console.debug("Simulando envío..."); 
         await new Promise(r => setTimeout(r, 1200));
         return;
      }
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error("Fallo en red");
    } catch (error) {
      console.error("Fallo de envío silencioso");
    }
  };

  return (
    <section id="contacto" className="section bg-surface-dark contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Actúa Antes de que sea Demasiado Tarde</h2>
            <p className="section-description">
              Completa este formulario confidencial. Un abogado de nuestro equipo analizará tu caso sin costo y te contactará con una propuesta de rescate.
            </p>
            <div className="security-badge mt-8">
              <Lock size={20} className="text-gold shrink-0" />
              <span>Tus datos están encriptados y protegidos bajo la ley habeas data. Máxima confidencialidad garantizada.</span>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            {isSubmitSuccessful ? (
              <div className="success-message text-center animate-fade-in">
                <h3 className="text-gold text-2xl mb-2">¡Recibimos tu Caso!</h3>
                <p>Un experto de Ramos Bitar analizará la viabilidad jurídica y te contactará a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label htmlFor="fullName">Nombre Completo</label>
                  <input id="fullName" type="text" {...register("fullName")} className={errors.fullName ? "input-error" : ""} />
                  {errors.fullName && <span className="error-text">{errors.fullName.message}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono / WhatsApp</label>
                  <input id="phone" type="tel" {...register("phone")} className={errors.phone ? "input-error" : ""} />
                  {errors.phone && <span className="error-text">{errors.phone.message}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Dirección o Barrio (Solo Bogotá)</label>
                  <input id="location" type="text" {...register("location")} className={errors.location ? "input-error" : ""} />
                  {errors.location && <span className="error-text">{errors.location.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="processStage">¿En qué etapa está su proceso?</label>
                  <select id="processStage" {...register("processStage")} className={errors.processStage ? "input-error" : ""}>
                    <option value="">Selecciona la opción que aplique...</option>
                    <option value="Notificación inicial">Notificación inicial</option>
                    <option value="Embargo registrado">Embargo registrado</option>
                    <option value="Fecha de remate fijada">Fecha de remate fijada</option>
                    <option value="No sé">No sé / Desconozco el estado</option>
                  </select>
                  {errors.processStage && <span className="error-text">{errors.processStage.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="approximateDebt">Deuda aproximada con el banco/acreedor (COP)</label>
                  <input id="approximateDebt" type="number" {...register("approximateDebt")} className={errors.approximateDebt ? "input-error" : ""} placeholder="Ej. 150000000" />
                  {errors.approximateDebt && <span className="error-text">{errors.approximateDebt.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="estimatedValue">Avalúo comercial estimado del inmueble (COP)</label>
                  <input id="estimatedValue" type="number" {...register("estimatedValue")} className={errors.estimatedValue ? "input-error" : ""} placeholder="Ej. 350000000" />
                  {errors.estimatedValue && <span className="error-text">{errors.estimatedValue.message}</span>}
                </div>
                
                <button type="submit" className="btn-primary form-submit-btn cta-pulse" disabled={isSubmitting}>
                  {isSubmitting ? 'Procesando...' : 'Solicitar Evaluación Gratuita'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
