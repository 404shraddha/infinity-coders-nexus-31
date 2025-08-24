import { Code, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-deep-space to-background border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-[var(--shadow-neon)]">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-space-grotesk font-bold glow-text">
                Infinity Coders
              </span>
            </div>
            <p className="text-muted-foreground">
              Empowering the next generation of developers through community, learning, and innovation.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-space-grotesk font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#clubs" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Clubs
              </a>
              <a href="#events" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Events
              </a>
            </nav>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-space-grotesk font-semibold text-foreground">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@infinitycoders.dev" 
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>contact@infinitycoders.dev</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="#" 
                  className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-all duration-300 hover:shadow-[var(--shadow-neon)]"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-all duration-300 hover:shadow-[var(--shadow-neon)]"
                >
                  <Twitter className="w-5 h-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-all duration-300 hover:shadow-[var(--shadow-neon)]"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="border-t border-primary/20 pt-8 mt-12 text-center">
          <p className="text-muted-foreground">
            © 2025 Infinity Coders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;