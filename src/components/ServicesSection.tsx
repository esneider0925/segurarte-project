import { Camera, Lock, ShieldCheck, Wifi, MonitorSmartphone, Wrench } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Videovigilancia",
    desc: "Sistemas CCTV de alta definición con monitoreo remoto 24/7 para tu hogar o negocio.",
  },
  {
    icon: Lock,
    title: "Control de Acceso",
    desc: "Cerraduras inteligentes, lectores biométricos y sistemas de acceso avanzados.",
  },
  {
    icon: ShieldCheck,
    title: "Alarmas",
    desc: "Sistemas de alarma contra intrusión con respuesta inmediata y notificaciones en tiempo real.",
  },
  {
    icon: Wifi,
    title: "Redes & Conectividad",
    desc: "Infraestructura de red robusta para conectar todos tus dispositivos de seguridad.",
  },
  {
    icon: MonitorSmartphone,
    title: "Monitoreo Remoto",
    desc: "Supervisa tu propiedad desde cualquier lugar con nuestra app y plataforma en la nube.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    desc: "Servicio técnico preventivo y correctivo para mantener tus sistemas siempre operativos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Soluciones de seguridad{" "}
            <span className="text-gradient-primary">a tu medida</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinamos tecnología de vanguardia con un diseño que se integra
            perfectamente a tu espacio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 border border-border/60"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <s.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
