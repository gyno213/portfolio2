import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
}

export function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 bg-white border-0"
      style={{ backgroundColor: '#CADCFC30' }}
    >
      <Icon className="h-4 w-4 mr-2" style={{ color: '#00246B' }} />
      <span style={{ color: '#00246B' }}>{name}</span>
    </Badge>
  );
}