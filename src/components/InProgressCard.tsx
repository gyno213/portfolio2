import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Loader2 } from "lucide-react";

interface InProgressCardProps {
  title: string;
  description: string;
  imageUrl: string;
  expectedCompletion?: string;
}

export function InProgressCard({
  title,
  description,
  imageUrl,
  expectedCompletion,
}: InProgressCardProps) {
  return (
    <Card className="overflow-hidden border-neutral-200 bg-white shadow-sm relative">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100 relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
        <Badge className="absolute top-4 right-4 bg-amber-500 text-white border-0">
          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
          In Progress
        </Badge>
      </div>
      <div className="p-5">
        <h4 className="mb-2">{title}</h4>
        <p className="text-neutral-600 mb-3">{description}</p>
        {expectedCompletion && (
          <p className="text-neutral-500">
            Expected: {expectedCompletion}
          </p>
        )}
      </div>
    </Card>
  );
}
