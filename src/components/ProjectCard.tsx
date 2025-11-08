import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const ProjectCard = ({ image, title, description, category }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
          <motion.div 
            className="absolute top-4 left-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              {category}
            </span>
          </motion.div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <motion.h3 
            className="text-xl font-semibold mb-2 text-foreground"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-muted-foreground flex-1">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
