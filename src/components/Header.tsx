import { Instagram, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="w-full px-8 py-6 flex items-center justify-between relative z-10">
      {/* Left Navigation */}
      <nav className="flex items-center space-x-8">
        <button
          onClick={() => onNavigate('photography')}
          className={`tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
            currentPage === 'photography'
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Photography
        </button>
        <button
          onClick={() => onNavigate('experience')}
          className={`tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
            currentPage === 'experience'
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className={`tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
            currentPage === 'contact'
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Contact
        </button>
      </nav>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => onNavigate('photography')}
          className="tracking-widest uppercase transition-all duration-300 hover:scale-105"
        >
          XYZ Photography
        </button>
      </div>

      {/* Right Social Icons */}
      <div className="flex items-center space-x-4">
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
  );
}