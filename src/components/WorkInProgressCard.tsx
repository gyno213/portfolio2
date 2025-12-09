import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Loader2, Calendar } from "lucide-react";

interface WorkInProgressCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  expectedCompletion: string;
  progress: number;
  statusLabel: string;
  progressLabel: string;
  taskLabel: string;
  initialIdeasLabel: string;
  task?: string;
  initialIdeas?: string;
}

export function WorkInProgressCard({
  title,
  description,
  imageUrl,
  technologies,
  expectedCompletion,
  progress,
  statusLabel,
  progressLabel,
  taskLabel,
  initialIdeasLabel,
  task,
  initialIdeas,
}: WorkInProgressCardProps) {
  return (
    <Card className="overflow-hidden border border-dashed shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col min-h-[400px]" style={{ borderColor: '#CADCFC', background: 'linear-gradient(to br, white, #CADCFC15)' }}>
      <div className="aspect-[16/6] overflow-hidden bg-white relative">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="absolute top-2 right-2 text-white px-2 py-0.5 rounded-full flex items-center gap-1 text-xs shadow-lg" style={{ backgroundColor: '#4A90E2' }}>
          {statusLabel}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="mb-2 text-lg" style={{ color: '#00246B' }}>{title}</h3>
          <p className="text-neutral-600 mb-3 text-sm">{description}</p>

          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs px-2 py-0"
                style={{ backgroundColor: '#CADCFC80', color: '#00246B', borderColor: '#CADCFC' }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-neutral-500 mt-4 block">{progressLabel}</span>
            <span className="text-xs" style={{ color: '#00246B' }}>{progress}%</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: 'linear-gradient(to right, #00246B, #4A90E2)' }}
            />
          </div>
        </div>

        {/* Expected Completion */}
        <div className="flex items-center gap-1.5 text-neutral-500 text-xs">
          <Calendar className="h-3 w-3" />
          <span>{expectedCompletion}</span>
        </div>

        {/* Hover-Expansion: Mehr Details */}
        {(task || initialIdeas) && (
          <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
            <div className="pt-4 mt-4 border-t space-y-2" style={{ borderColor: '#CADCFC' }}>
              {task && (
                <div>
                  <h4 className="text-xs mb-1" style={{ color: '#00246B' }}>{taskLabel}</h4>
                  <p className="text-xs text-neutral-600">{task}</p>
                </div>
              )}
              {initialIdeas && (
                <div>
                  <h4 className="text-xs mb-1" style={{ color: '#00246B' }}>{initialIdeasLabel}</h4>
                  <p className="text-xs text-neutral-600">{initialIdeas}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}