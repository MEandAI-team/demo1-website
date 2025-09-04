import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      detail: "Available Worldwide",
      description: "Based in California, traveling globally"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Available 9am - 6pm PST"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@xyzphotography.com",
      description: "Response within 24 hours"
    }
  ];

  return (
    <div className="w-full px-8 pb-16 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
          <h1 className="tracking-widest uppercase mb-6">Let's Create Together</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Ready to capture your special moments? I'd love to hear about your vision and discuss how 
            we can bring your story to life through photography.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-in slide-in-from-left duration-1000 delay-300">
            <h2 className="tracking-widest uppercase mb-8">Send a Message</h2>
            <Card className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:scale-[1.02]"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:scale-[1.02]"
                      placeholder="Wedding, Portrait Session, Corporate Event, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell me about your vision *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="transition-all duration-300 focus:scale-[1.02] resize-none"
                      placeholder="Share details about your event, style preferences, location, and any specific shots you have in mind..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      "Message Sent!"
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-in slide-in-from-right duration-1000 delay-500">
            <h2 className="tracking-widest uppercase mb-8">Get in Touch</h2>
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.title}
                    className="flex items-start space-x-4 group animate-in slide-in-from-right duration-700"
                    style={{ animationDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="tracking-wide mb-1 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="mb-1 group-hover:tracking-wider transition-all duration-300">
                        {info.detail}
                      </p>
                      <p className="text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQ Section */}
            <div className="mt-16 animate-in slide-in-from-right duration-1000 delay-1000">
              <h3 className="tracking-widest uppercase mb-6">Frequently Asked</h3>
              <div className="space-y-6">
                <div className="group">
                  <h4 className="mb-2 group-hover:text-primary transition-colors duration-300">
                    What's included in your packages?
                  </h4>
                  <p className="text-muted-foreground">
                    All packages include high-resolution edited images, online gallery, and consultation. 
                    Specific deliverables vary by package type.
                  </p>
                </div>
                <div className="group">
                  <h4 className="mb-2 group-hover:text-primary transition-colors duration-300">
                    How far in advance should I book?
                  </h4>
                  <p className="text-muted-foreground">
                    For weddings, I recommend booking 6-12 months in advance. Portrait sessions 
                    can often be scheduled within 2-4 weeks.
                  </p>
                </div>
                <div className="group">
                  <h4 className="mb-2 group-hover:text-primary transition-colors duration-300">
                    Do you travel for shoots?
                  </h4>
                  <p className="text-muted-foreground">
                    Absolutely! I love destination photography and am available for travel worldwide. 
                    Travel fees apply for locations outside California.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}