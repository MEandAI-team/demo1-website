import { Camera, Award, Users, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      year: "2015-Present",
      title: "Professional Wedding Photographer",
      description: "Capturing love stories across destinations worldwide with over 200 weddings documented.",
      icon: Camera
    },
    {
      year: "2018-2019",
      title: "Photography Tour - Southeast Asia",
      description: "Extensive travel photography project documenting cultures and landscapes across Indonesia, Thailand, and Vietnam.",
      icon: MapPin
    },
    {
      year: "2019",
      title: "International Photography Award",
      description: "Winner of the Best Wedding Photography Series at the Global Photography Awards.",
      icon: Award
    },
    {
      year: "2020-Present",
      title: "Portrait & Lifestyle Specialist",
      description: "Expanded services to include family portraits, maternity sessions, and lifestyle photography.",
      icon: Users
    }
  ];

  const stats = [
    { number: "200+", label: "Weddings Captured" },
    { number: "8", label: "Years Experience" },
    { number: "15+", label: "Countries Visited" },
    { number: "500+", label: "Happy Clients" }
  ];

  return (
    <div className="w-full px-8 pb-16 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
          <h1 className="tracking-widest uppercase mb-6">My Journey</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Photography has been my passion for over eight years. From intimate moments to grand celebrations,
            I believe every story deserves to be told with authenticity and artistry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-2 transition-all duration-300 hover:text-primary">
                {stat.number}
              </div>
              <p className="text-muted-foreground tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          <h2 className="text-center tracking-widest uppercase mb-12">Experience Timeline</h2>
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={exp.title}
                className="flex items-start space-x-6 group animate-in slide-in-from-left duration-700"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Icon size={20} className="text-primary group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 text-muted-foreground tracking-wider uppercase">
                    {exp.year}
                  </div>
                  <h3 className="mb-2 tracking-wide group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey Images Section */}
        <div className="mt-20">
          <h2 className="text-center tracking-widest uppercase mb-12 animate-in slide-in-from-top duration-1000">Journey Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Journey Image Placeholders */}
            <div className="animate-in slide-in-from-bottom duration-700 delay-300">
              <div className="aspect-[4/3] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={32} className="mx-auto mb-2" />
                  <p className="tracking-wider uppercase text-xs">Journey Image 1</p>
                  <p className="text-xs mt-1">Add your photo here</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="tracking-widest uppercase text-xs opacity-60">Early Days - 2015</h3>
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom duration-700 delay-500">
              <div className="aspect-[4/3] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={32} className="mx-auto mb-2" />
                  <p className="tracking-wider uppercase text-xs">Journey Image 2</p>
                  <p className="text-xs mt-1">Add your photo here</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="tracking-widest uppercase text-xs opacity-60">First Award - 2017</h3>
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom duration-700 delay-700">
              <div className="aspect-[4/3] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={32} className="mx-auto mb-2" />
                  <p className="tracking-wider uppercase text-xs">Journey Image 3</p>
                  <p className="text-xs mt-1">Add your photo here</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="tracking-widest uppercase text-xs opacity-60">Asia Tour - 2018</h3>
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom duration-700 delay-900">
              <div className="aspect-[4/3] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={32} className="mx-auto mb-2" />
                  <p className="tracking-wider uppercase text-xs">Journey Image 4</p>
                  <p className="text-xs mt-1">Add your photo here</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="tracking-widest uppercase text-xs opacity-60">Studio Setup - 2019</h3>
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom duration-700 delay-1100">
              <div className="aspect-[4/3] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={32} className="mx-auto mb-2" />
                  <p className="tracking-wider uppercase text-xs">Journey Image 5</p>
                  <p className="text-xs mt-1">Add your photo here</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="tracking-widest uppercase text-xs opacity-60">International Recognition - 2021</h3>
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom duration-700 delay-1300">
              <div className="aspect-[4/3] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={32} className="mx-auto mb-2" />
                  <p className="tracking-wider uppercase text-xs">Journey Image 6</p>
                  <p className="text-xs mt-1">Add your photo here</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="tracking-widest uppercase text-xs opacity-60">Present Day - 2025</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Behind the Scenes Section */}
        <div className="mt-16">
          <h2 className="text-center tracking-widest uppercase mb-12 animate-in slide-in-from-top duration-1000">Behind The Lens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-in slide-in-from-left duration-700 delay-500">
              <div className="aspect-[3/2] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={40} className="mx-auto mb-3" />
                  <p className="tracking-wider uppercase text-sm">Behind the Scenes 1</p>
                  <p className="text-xs mt-1">Add your workspace photo</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="tracking-widest uppercase text-xs opacity-60 mb-2">My Workspace</h3>
                <p className="text-muted-foreground text-sm">Where creativity meets precision - my photography studio and editing space.</p>
              </div>
            </div>

            <div className="animate-in slide-in-from-right duration-700 delay-700">
              <div className="aspect-[3/2] bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Camera size={40} className="mx-auto mb-3" />
                  <p className="tracking-wider uppercase text-sm">Behind the Scenes 2</p>
                  <p className="text-xs mt-1">Add your gear photo</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="tracking-widest uppercase text-xs opacity-60 mb-2">Professional Gear</h3>
                <p className="text-muted-foreground text-sm">The tools that help me capture your most precious moments with precision and artistry.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center animate-in slide-in-from-bottom duration-1000 delay-1000">
          <h2 className="tracking-widest uppercase mb-6">My Philosophy</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            "I believe that the best photographs happen when people feel comfortable being themselves. 
            My approach is to blend into your moments, capturing the genuine emotions and connections 
            that make your story unique. Every click of the shutter is an opportunity to preserve 
            something beautiful and authentic."
          </p>
        </div>
      </div>
    </div>
  );
}