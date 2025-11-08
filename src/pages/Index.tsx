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
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants that respect reduced motion preference
  const fadeInUp = {
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.9)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed"
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={shouldReduceMotion ? { duration: 0.5 } : { duration: 1, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Building2 className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              SOGETEC
            </motion.h1>
          </motion.div>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Conception et expertise CVC au service de vos projets
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Bureau d'étude spécialisé en climatisation, chauffage et ventilation en Tunisie
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Contactez-nous
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Votre Partenaire Expert en Solutions CVC
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Depuis notre création, <span className="font-semibold text-foreground">Sogetec</span> accompagne les entreprises tunisiennes dans la réalisation de leurs projets d'ingénierie thermique et climatique. Notre équipe d'ingénieurs qualifiés met son expertise au service de vos ambitions, qu'il s'agisse de constructions neuves ou de rénovations.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Nous intervenons sur des projets tertiaires, industriels et résidentiels, en garantissant des solutions techniques performantes, économiques et respectueuses de l'environnement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nos Services
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Des prestations complètes pour tous vos besoins en ingénierie CVC
            </motion.p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ServiceCard
                icon={Thermometer}
                title="Études Thermiques et Climatiques"
                description="Analyse approfondie des besoins thermiques, simulations énergétiques et optimisation des performances pour un confort optimal et une efficacité maximale."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ServiceCard
                icon={Wind}
                title="Conception des Installations CVC"
                description="Dimensionnement et conception sur-mesure de systèmes de chauffage, ventilation et climatisation adaptés à votre bâtiment et vos exigences."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ServiceCard
                icon={ClipboardCheck}
                title="Suivi de Chantier et Assistance"
                description="Accompagnement technique durant toute la phase d'exécution, contrôle qualité et mise en service pour garantir la conformité de vos installations."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nos Réalisations
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Découvrez quelques-uns de nos projets emblématiques
            </motion.p>
          </motion.div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ProjectCard
                image={project1}
                title="Centre Commercial Moderne"
                description="Conception et installation complète du système CVC pour un complexe commercial de 15 000 m², incluant climatisation centrale et ventilation optimisée."
                category="Tertiaire"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProjectCard
                image={project2}
                title="Usine Agroalimentaire"
                description="Étude thermique et système de ventilation spécialisé pour une unité de production, garantissant les normes d'hygiène et de température."
                category="Industriel"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ProjectCard
                image={project3}
                title="Hôtel 5 Étoiles"
                description="Installation de climatisation et chauffage pour 120 chambres avec système de gestion centralisée et récupération d'énergie."
                category="Hôtellerie"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProjectCard
                image={project4}
                title="Clinique Médicale"
                description="Conception d'un système CVC conforme aux normes hospitalières avec filtration HEPA et contrôle de pression différentielle."
                category="Santé"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contactez-nous
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discutons de votre projet et trouvons ensemble les meilleures solutions
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Envoyez-nous un message</h3>
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Notre Bureau</h3>
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Building2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Tunis, Tunisie</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-5 h-5 text-primary mt-1">📧</div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@sogetec.tn</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="w-5 h-5 text-primary mt-1">📞</div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">+216 XX XXX XXX</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg h-[400px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-foreground text-background py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Sogetec - Bureau d'Étude CVC. Tous droits réservés.
          </p>
        </div>
      </motion.footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
