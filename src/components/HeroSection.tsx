import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/sandy-profile-hero.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <p className="text-muted-foreground text-lg mb-4">
                Hi, I'm Sandy 👋
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to My
                <span className="text-gradient block">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                IT Enthusiast | Network & Machine Learning Learner
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Passionate telecommunications engineering student at Universitas Telkom, 
                dedicated to solving technical problems and building innovative solutions 
                that connect people through technology.
              </p>
            </div>

            <div className="animate-fade-up animate-delay-200 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProjects}
                className="hero-gradient text-white shadow-soft hover:shadow-hover transition-spring group"
                size="lg"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in animate-delay-300">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-secondary/20 animate-pulse animation-delay-500"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={heroImage}
                  alt="Sandy Tirta Yudha"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 hero-gradient opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;