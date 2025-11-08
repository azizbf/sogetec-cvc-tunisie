import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="group hover:shadow-xl transition-all duration-500 border-border hover:border-primary/50 h-full">
        <CardContent className="p-6">
          <motion.div 
            className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <motion.h3 
            className="text-xl font-semibold mb-3 text-foreground"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
