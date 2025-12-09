import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

interface ProjectPreviewCardProps {
  title: string;
  role: string;
  preview: string;
  imageUrl: string;
  technologies: string[];
  onReadMore: () => void;
  readMoreText: string;
}

export function ProjectPreviewCard({
  title,
  role,
  preview,
  imageUrl,
  technologies,
  onReadMore,
  readMoreText,
}: ProjectPreviewCardProps) {
  return (
    <Card className="overflow-hidden border-neutral-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="aspect-[16/10] overflow-hidden bg-white">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
              style={{ backgroundColor: '#CADCFC', color: '#00246B' }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 text-2xl" style={{ color: '#00246B' }}>{title}</h3>
        <p className="mb-4" style={{ color: '#00246B' }}>{role}</p>
        <p className="text-neutral-600 mb-6 flex-1">{preview}</p>
        <Button
          onClick={onReadMore}
          variant="outline"
          className="w-full group/btn hover:text-white"
          style={{ borderColor: '#00246B', color: '#00246B' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00246B';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#00246B';
          }}
        >
          {readMoreText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
}