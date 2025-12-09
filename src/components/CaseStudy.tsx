import React, { useState, useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudyProps {
  title: string;
  context: string;
  research: string;
  methods: string[];
  processImages: string[];
  finalImages: string[];
  results: string;
  reflection: string;
  role: string;
  technologies: string[];
  language: "en" | "de";
  videos?: string[]; // YouTube video IDs or URLs
  placeholderImage?: string; // Placeholder image when no video is available
}

export function CaseStudy({
  title,
  context,
  research,
  methods,
  processImages,
  finalImages,
  results,
  reflection,
  role,
  technologies,
  language,
  videos = [],
  placeholderImage,
}: CaseStudyProps) {
  const [processImageIndex, setProcessImageIndex] = useState(0);
  const [finalImageIndex, setFinalImageIndex] = useState(0);
  const processScrollRef = useRef<HTMLDivElement>(null);
  const finalScrollRef = useRef<HTMLDivElement>(null);

  const labels = {
    en: {
      context: "Task",
      research: "Research",
      methods: "Methods Used",
      process: "Process",
      solution: "Result",
      results: "Function Description",
      reflection: "Reflection & Learnings",
      role: "My Role",
      tech: "Technologies & Tools",
    },
    de: {
      context: "Aufgabe",
      research: "Research",
      methods: "Verwendete Methoden",
      process: "Process",
      solution: "Ergebnis",
      results: "Funktionsbeschreibung",
      reflection: "Reflexion & Learnings",
      role: "Meine Rolle",
      tech: "Technologien & Tools",
    },
  };

  const t = labels[language];

  // Extract YouTube video ID from URL or return the ID if it's already just an ID
  const getYouTubeVideoId = (urlOrId: string): string => {
    // If it's already just an ID (11 characters, alphanumeric)
    if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) {
      return urlOrId;
    }
    
    // Extract from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
    ];
    
    for (const pattern of patterns) {
      const match = urlOrId.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return urlOrId; // Return as-is if no pattern matches
  };

  const scrollToImage = (ref: React.RefObject<HTMLDivElement>, index: number) => {
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth;
      const itemWidth = scrollWidth / (ref.current.children.length || 1);
      ref.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleProcessNext = () => {
    if (processImageIndex < processImages.length - 1) {
      const newIndex = processImageIndex + 1;
      setProcessImageIndex(newIndex);
      scrollToImage(processScrollRef, newIndex);
    }
  };

  const handleProcessPrev = () => {
    if (processImageIndex > 0) {
      const newIndex = processImageIndex - 1;
      setProcessImageIndex(newIndex);
      scrollToImage(processScrollRef, newIndex);
    }
  };

  const handleFinalNext = () => {
    if (finalImageIndex < finalImages.length - 1) {
      const newIndex = finalImageIndex + 1;
      setFinalImageIndex(newIndex);
      scrollToImage(finalScrollRef, newIndex);
    }
  };

  const handleFinalPrev = () => {
    if (finalImageIndex > 0) {
      const newIndex = finalImageIndex - 1;
      setFinalImageIndex(newIndex);
      scrollToImage(finalScrollRef, newIndex);
    }
  };

  const handleProcessScroll = () => {
    if (processScrollRef.current) {
      const scrollLeft = processScrollRef.current.scrollLeft;
      const itemWidth = processScrollRef.current.scrollWidth / processImages.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== processImageIndex) {
        setProcessImageIndex(newIndex);
      }
    }
  };

  const handleFinalScroll = () => {
    if (finalScrollRef.current) {
      const scrollLeft = finalScrollRef.current.scrollLeft;
      const itemWidth = finalScrollRef.current.scrollWidth / finalImages.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== finalImageIndex) {
        setFinalImageIndex(newIndex);
      }
    }
  };

  return (
    <div className="mb-32 scroll-mt-20" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <Card className="bg-white border-neutral-200 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-8 md:p-12" style={{ background: 'linear-gradient(to right, #CADCFC30, #E8F0FC20)' }}>
          <h3 className="mb-4 text-4xl md:text-5xl" style={{ color: '#00246B' }}>{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                className="border-0"
                style={{ backgroundColor: '#CADCFC', color: '#00246B' }}
              >
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-lg" style={{ color: '#00246B' }}>
            <span className="font-semibold">{t.role}:</span> {role}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-12">
          {/* Videos Section - at the beginning */}
          {videos.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 gap-6">
                {videos.map((video, index) => {
                  const videoId = getYouTubeVideoId(video);
                  return (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md border border-neutral-200">
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`${title} - Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Placeholder Image Section - at the beginning (when no video but placeholder exists) */}
          {videos.length === 0 && placeholderImage && (
            <div className="mb-12">
              <div className="rounded-lg overflow-hidden shadow-md border border-neutral-200 bg-white flex items-center justify-center min-h-[300px] max-h-[800px]">
                <ImageWithFallback
                  src={placeholderImage}
                  alt={`${title} - Placeholder`}
                  className="w-auto h-auto max-w-full max-h-[800px] object-contain"
                />
              </div>
            </div>
          )}

          {/* Problem & Context */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-2xl" style={{ color: '#00246B' }}>
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: '#CADCFC', color: '#00246B' }}>1</span>
              {t.context}
            </h4>
            <p className="text-neutral-700 text-lg leading-relaxed">{context}</p>
          </div>

          {/* User Research */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-2xl" style={{ color: '#00246B' }}>
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: '#CADCFC', color: '#00246B' }}>2</span>
              {t.research}
            </h4>
            <p className="text-neutral-700 mb-6 text-lg leading-relaxed">{research}</p>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-sm text-neutral-600 mb-3">{t.methods}:</p>
              <div className="flex flex-wrap gap-2">
                {methods.map((method) => (
                  <Badge
                    key={method}
                    variant="outline"
                    className="border-neutral-300"
                  >
                    {method}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-2xl" style={{ color: '#00246B' }}>
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: '#CADCFC', color: '#00246B' }}>3</span>
              {t.process}
            </h4>
            <div className="relative group">
              <div 
                ref={processScrollRef}
                onScroll={handleProcessScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {processImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center">
                    <div className="rounded-lg overflow-hidden shadow-md border border-neutral-200 bg-white flex items-center justify-center min-h-[300px] max-h-[800px]">
                      <ImageWithFallback
                        src={image}
                        alt={`${title} - Design Process ${index + 1}`}
                        className="w-auto h-auto max-w-full max-h-[800px] object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {processImages.length > 1 && (
                <>
                  {processImageIndex > 0 && (
                    <button
                      onClick={handleProcessPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      style={{ color: '#00246B' }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}
                  
                  {processImageIndex < processImages.length - 1 && (
                    <button
                      onClick={handleProcessNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      style={{ color: '#00246B' }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                  
                  <div className="flex justify-center gap-2 mt-4">
                    {processImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setProcessImageIndex(index);
                          scrollToImage(processScrollRef, index);
                        }}
                        className="w-2 h-2 rounded-full transition-all"
                        style={{ 
                          backgroundColor: index === processImageIndex ? '#00246B' : '#CADCFC',
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Final Solution */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-2xl" style={{ color: '#00246B' }}>
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: '#CADCFC', color: '#00246B' }}>4</span>
              {t.solution}
            </h4>
            <div className="relative group mb-6">
              <div 
                ref={finalScrollRef}
                onScroll={handleFinalScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {finalImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center">
                    <div className="rounded-lg overflow-hidden shadow-md border border-neutral-200 bg-white flex items-center justify-center min-h-[300px] max-h-[800px]">
                      <ImageWithFallback
                        src={image}
                        alt={`${title} - Final Solution ${index + 1}`}
                        className="w-auto h-auto max-w-full max-h-[800px] object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {finalImages.length > 1 && (
                <>
                  {finalImageIndex > 0 && (
                    <button
                      onClick={handleFinalPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      style={{ color: '#00246B' }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}
                  
                  {finalImageIndex < finalImages.length - 1 && (
                    <button
                      onClick={handleFinalNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      style={{ color: '#00246B' }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                  
                  <div className="flex justify-center gap-2 mt-4">
                    {finalImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setFinalImageIndex(index);
                          scrollToImage(finalScrollRef, index);
                        }}
                        className="w-2 h-2 rounded-full transition-all"
                        style={{ 
                          backgroundColor: index === finalImageIndex ? '#00246B' : '#CADCFC',
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="p-6 rounded-lg border" style={{ background: '#CADCFC50', borderColor: '#CADCFC' }}>
              <p className="text-sm mb-2 font-semibold" style={{ color: '#00246B' }}>{t.results}</p>
              <p className="text-neutral-700 text-lg leading-relaxed">{results}</p>
            </div>
          </div>

          {/* Reflection */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-2xl" style={{ color: '#00246B' }}>
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: '#CADCFC', color: '#00246B' }}>5</span>
              {t.reflection}
            </h4>
            <div className="p-6 rounded-lg border" style={{ background: '#CADCFC30', borderColor: '#B0CFE0' }}>
              <p className="text-neutral-700 text-lg leading-relaxed italic">{reflection}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}