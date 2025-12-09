import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <a href={link} className="block" target="_blank" rel="noopener noreferrer">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="group-hover:text-teal-600 transition-colors">{title}</h3>
            <ExternalLink className="h-5 w-5 text-neutral-400 group-hover:text-teal-600 transition-colors flex-shrink-0" />
          </div>
          <p className="text-neutral-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-teal-50 text-teal-700 hover:bg-teal-100"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </a>
    </Card>
  );
}