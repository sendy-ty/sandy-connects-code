import { Download, MapPin, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/sandy-profile-formal.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-in">
            <Card className="card-gradient shadow-card overflow-hidden">
              <CardContent className="p-6">
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Sandy Tirta Yudha - Professional Photo"
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 rounded-lg hero-gradient opacity-5"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="animate-fade-up animate-delay-200">
            <div className="space-y-6">
              {/* Basic Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="card-gradient shadow-soft border-0">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Education</p>
                      <p className="text-sm text-muted-foreground">Universitas Telkom</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient shadow-soft border-0">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Purwokerto, Indonesia</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Hello! I'm Sandy Tirta Yudha</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm an active Telecommunications Engineering student at Universitas Telkom with a 
                  deep passion for technology and innovation. My journey in tech has led me to develop 
                  expertise in IT support, computer networks, and machine learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What excites me most about technology is its power to solve real-world problems and 
                  connect people across the globe. I enjoy the challenge of optimizing systems, 
                  troubleshooting complex issues, and building solutions that make a meaningful impact.
                </p>
                
                {/* Core Values */}
                <Card className="card-gradient shadow-soft border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">My Mission</h4>
                        <p className="text-muted-foreground">
                          "I enjoy solving technical problems, optimizing systems, and building 
                          solutions that connect people through technology."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button className="hero-gradient text-white shadow-soft hover:shadow-hover transition-spring">
                  <Download className="mr-2 h-4 w-4" />
                  Download My CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;