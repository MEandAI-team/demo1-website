import { Instagram, Mail, Facebook, Twitter, Camera } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const quickLinks = [
    { label: "Wedding Photography", href: "#" },
    { label: "Portrait Sessions", href: "#" },
    { label: "Corporate Events", href: "#" },
    { label: "Travel Photography", href: "#" }
  ];

  return (
    <footer className="bg-secondary/30 mt-20">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Camera size={24} className="text-primary" />
              <h3 className="tracking-widest uppercase">XYZ Photography</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Capturing life's most precious moments with artistic vision and authentic storytelling. 
              Based in California, available worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 transform group"
                    aria-label={social.label}
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="tracking-widest uppercase">Services</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:tracking-wider hover:translate-x-2 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="tracking-widest uppercase">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="hover:text-foreground transition-colors duration-300">
                hello@xyzphotography.com
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                +1 (555) 123-4567
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                California, USA
              </p>
            </div>
            <div className="pt-4">
              <p className="text-muted-foreground">
                "Every picture tells a story. Let me help tell yours."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground">
              © 2024 XYZ Photography. All rights reserved.
            </p>
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors duration-300 hover:tracking-wider">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-300 hover:tracking-wider">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}