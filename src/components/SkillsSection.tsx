import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Server, 
  Wifi, 
  Code, 
  Monitor, 
  Palette, 
  Brain,
  Wrench,
  Shield
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      name: 'Instalasi Hardware/Software',
      icon: Wrench,
      category: 'IT Support',
      description: 'Perakitan komputer, instalasi OS, konfigurasi driver'
    },
    {
      name: 'Linux System Administration',
      icon: Server,
      category: 'System Admin',
      description: 'Command line, user management, konfigurasi sistem'
    },
    {
      name: 'Konfigurasi Jaringan',
      icon: Wifi,
      category: 'Networking',
      description: 'Setup router, konfigurasi LAN, troubleshooting'
    },
    {
      name: 'Programming',
      icon: Code,
      category: 'Development',
      description: 'Python, JavaScript, pengembangan web dasar'
    },
    {
      name: 'Machine Learning',
      icon: Brain,
      category: 'AI/ML',
      description: 'Analisis data, pemodelan prediktif, Python ML libraries'
    },
    {
      name: 'Desain Grafis',
      icon: Palette,
      category: 'Design',
      description: 'Dasar UI/UX, desain visual, prototyping'
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 70) return 'bg-primary';
    if (level >= 60) return 'bg-secondary';
    return 'bg-muted-foreground';
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Keahlian & Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools dan kegiatan yang pernah saya kerjakan, terus berkembang melalui 
            pengalaman hands-on dan pembelajaran berkelanjutan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name} 
                className={`card-gradient shadow-card hover:shadow-hover transition-spring border-0 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{skill.name}</h3>
                      <p className="text-xs text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="card-gradient shadow-card border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Perjalanan Belajar Berkelanjutan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keahlian teknis saya terus berkembang melalui proyek praktis, magang, 
                dan pembelajaran mandiri. Saya percaya pada pengalaman hands-on dan selalu update dengan 
                tren industri dan teknologi terbaru.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;