import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
  thumbnailUrl?: string;
}

const VideoEmbed = ({ videoId, title = "Video", thumbnailUrl }: VideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg military-border bg-card">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full group"
          aria-label={`Play ${title}`}
        >
          <img
            src={thumbnailUrl || defaultThumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-background/80 backdrop-blur-sm px-4 py-2 inline-block">
              <span className="text-sm font-medium text-foreground">{title}</span>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default VideoEmbed;
