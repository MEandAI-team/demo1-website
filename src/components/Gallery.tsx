import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: GalleryImage[];
}

export function Gallery({ isOpen, onClose, title, images }: GalleryProps) {
  // Keyboard navigation - only ESC to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 animate-in fade-in duration-300"
      onClick={(e) => {
        // Close gallery when clicking outside the content
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 text-white bg-black/30 backdrop-blur-sm">
          <div>
            <h2 className="tracking-widest uppercase">{title}</h2>
            <p className="text-white/70 mt-1">{images.length} images • Press ESC to close</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            title="Close (ESC)"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Images Container */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="max-w-4xl mx-auto space-y-8 pt-8">
            {images.map((image, index) => (
              <div 
                key={image.id}
                className="animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative group">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
                  />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-white">
                      <p className="tracking-wider uppercase text-sm opacity-90">Image {index + 1}</p>
                      <p className="text-white/80 text-sm mt-1">{image.alt}</p>
                    </div>
                  </div>
                </div>

                {/* Image Caption */}
                <div className="text-center text-white/60 mt-4">
                  <p className="tracking-wider uppercase text-xs">
                    {index + 1} of {images.length}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Spacing */}
          <div className="h-16"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-px h-16 bg-white/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}