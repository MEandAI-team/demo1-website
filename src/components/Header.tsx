import { useState } from 'react';
import { Instagram, Mail, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavButtons = (
    <>
      <button
        onClick={() => { onNavigate('photography'); setIsMenuOpen(false); }}
        className={`tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
          currentPage === 'photography' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Photography
      </button>
      <button
        onClick={() => { onNavigate('experience'); setIsMenuOpen(false); }}
        className={`tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
          currentPage === 'experience' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Experience
      </button>
      <button
        onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}
        className={`tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
          currentPage === 'contact' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Contact
      </button>
    </>
  );

  return (
    <>
      <header className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between relative z-20">
        {/* Left: Mobile Menu Button + Desktop Nav */}
        <div className="flex items-center">
          {/* Mobile Hamburger */}
          <button
            aria-label="Open menu"
            className="md:hidden p-2 rounded hover:bg-muted/30 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={20} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 ml-0">
            {NavButtons}
          </nav>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => onNavigate('photography')}
            className="text-sm md:text-base lg:text-lg tracking-widest uppercase transition-all duration-300 hover:scale-105 text-center"
          >
            XYZ Photography
          </button>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <a
            href="#"
            className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 transform"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110 hover:-rotate-12 transform"
          >
            <Mail size={20} />
          </a>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsMenuOpen(false)} />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-72 max-w-[80%] bg-background p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="tracking-widest uppercase">Menu</span>
              <button
                aria-label="Close menu"
                className="p-2 rounded hover:bg-muted/30 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {NavButtons}
            </div>
          </div>
        </div>
      )}
    </>
  );
}