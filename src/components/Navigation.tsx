import React, { useState, useEffect } from 'react';
import { Code, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-[var(--shadow-neon)]">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-space-grotesk font-bold glow-text">
              Infinity Coders
            </span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              About
            </a>
            
            {/* Clubs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium">
                <span>Clubs</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-primary/20 backdrop-blur-sm">
                <DropdownMenuItem className="text-foreground hover:text-neon-green hover:bg-primary/10 transition-colors">
                  GDG On Campus
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-neon-magenta hover:bg-primary/10 transition-colors">
                  MLSA
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-neon-orange hover:bg-primary/10 transition-colors">
                  Unstop
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#events" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Events
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;