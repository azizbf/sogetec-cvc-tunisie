import { Building2, Thermometer, ClipboardCheck, Wind, Factory, Hotel, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroBackground from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.9)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <div className="mb-8">
            <Building2 className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              SOGETEC
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Conception et expertise CVC au service de vos projets
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Bureau d'étude spécialisé en climatisation, chauffage et ventilation en Tunisie
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Contactez-nous
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Votre Partenaire Expert en Solutions CVC
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Depuis notre création, <span className="font-semibold text-foreground">Sogetec</span> accompagne les entreprises tunisiennes dans la réalisation de leurs projets d'ingénierie thermique et climatique. Notre équipe d'ingénieurs qualifiés met son expertise au service de vos ambitions, qu'il s'agisse de constructions neuves ou de rénovations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous intervenons sur des projets tertiaires, industriels et résidentiels, en garantissant des solutions techniques performantes, économiques et respectueuses de l'environnement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nos Services</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des prestations complètes pour tous vos besoins en ingénierie CVC
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={Thermometer}
              title="Études Thermiques et Climatiques"
              description="Analyse approfondie des besoins thermiques, simulations énergétiques et optimisation des performances pour un confort optimal et une efficacité maximale."
            />
            <ServiceCard
              icon={Wind}
              title="Conception des Installations CVC"
              description="Dimensionnement et conception sur-mesure de systèmes de chauffage, ventilation et climatisation adaptés à votre bâtiment et vos exigences."
            />
            <ServiceCard
              icon={ClipboardCheck}
              title="Suivi de Chantier et Assistance"
              description="Accompagnement technique durant toute la phase d'exécution, contrôle qualité et mise en service pour garantir la conformité de vos installations."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nos Réalisations</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets emblématiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              image={project1}
              title="Centre Commercial Moderne"
              description="Conception et installation complète du système CVC pour un complexe commercial de 15 000 m², incluant climatisation centrale et ventilation optimisée."
              category="Tertiaire"
            />
            <ProjectCard
              image={project2}
              title="Usine Agroalimentaire"
              description="Étude thermique et système de ventilation spécialisé pour une unité de production, garantissant les normes d'hygiène et de température."
              category="Industriel"
            />
            <ProjectCard
              image={project3}
              title="Hôtel 5 Étoiles"
              description="Installation de climatisation et chauffage pour 120 chambres avec système de gestion centralisée et récupération d'énergie."
              category="Hôtellerie"
            />
            <ProjectCard
              image={project4}
              title="Clinique Médicale"
              description="Conception d'un système CVC conforme aux normes hospitalières avec filtration HEPA et contrôle de pression différentielle."
              category="Santé"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Contactez-nous</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discutons de votre projet et trouvons ensemble les meilleures solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Envoyez-nous un message</h3>
              <ContactForm />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Notre Bureau</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Tunis, Tunisie</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-1">📧</div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@sogetec.tn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-1">📞</div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">+216 XX XXX XXX</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102974.64209489375!2d10.104959950781254!3d36.80622389999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sogetec Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Sogetec - Bureau d'Étude CVC. Tous droits réservés.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
