import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface SmallProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

export function SmallProjectCard({
  title,
  description,
  link,
}: SmallProjectCardProps) {
  const content = (
    <Card className="group p-5 border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-orange-300">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="group-hover:text-orange-600 transition-colors">{title}</h4>
        {link && (
          <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-orange-600 transition-colors flex-shrink-0" />
        )}
      </div>
      <p className="text-neutral-600">{description}</p>
    </Card>
  );

  if (link) {
    return (
      <a href={link} className="block" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}