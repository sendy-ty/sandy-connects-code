import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, MapPin, MessageCircle, Send, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sandytirtaa@gmail.com',
      href: 'mailto:sandytirtaa@gmail.com',
      primary: true
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/sendy-ty',
      href: 'https://github.com/sendy-ty',
      primary: false
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Purwokerto, Indonesia',
      href: null,
      primary: false
    }
  ];

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:sandytirtaa@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sendy-ty',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Mari Terhubung</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Saya selalu terbuka untuk diskusi tentang peluang baru, kolaborasi, atau sekadar 
            berbincang tentang teknologi. Jangan ragu untuk menghubungi!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <Card className="card-gradient shadow-card border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Hubungi Saya</h3>
                      <p className="text-muted-foreground">Siap untuk memulai percakapan</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((contact) => {
                      const IconComponent = contact.icon;
                      return (
                        <div key={contact.label} className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            contact.primary ? 'bg-primary/10' : 'bg-secondary/10'
                          }`}>
                            <IconComponent className={`h-5 w-5 ${
                              contact.primary ? 'text-primary' : 'text-secondary'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{contact.label}</p>
                            {contact.href ? (
                              <a 
                                href={contact.href}
                                target={contact.href.startsWith('http') ? '_blank' : undefined}
                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{contact.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-medium mb-4">Terhubung dengan saya</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                          >
                            <IconComponent className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="animate-fade-up animate-delay-200">
              <Card className="card-gradient shadow-card border-0 h-full">
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full hero-gradient mx-auto mb-6 flex items-center justify-center">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">Siap Berkolaborasi?</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Baik Anda mencari dukungan IT, solusi jaringan, atau mengeksplorasi 
                      peluang machine learning, saya ingin mendengar tentang proyek Anda dan 
                      bagaimana kita bisa bekerja sama.
                    </p>

                    <div className="space-y-4">
                      <Button 
                        size="lg"
                        className="w-full hero-gradient text-white shadow-soft hover:shadow-hover transition-spring group"
                        onClick={() => window.location.href = 'mailto:sandytirtaa@gmail.com'}
                      >
                        <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Kirim Email
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                        onClick={() => window.open('https://github.com/sendy-ty', '_blank')}
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Lihat Profil GitHub
                      </Button>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">3+</p>
                        <p className="text-sm text-muted-foreground">Projek</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-secondary">2+</p>
                        <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">100%</p>
                        <p className="text-sm text-muted-foreground">Komitmen</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;