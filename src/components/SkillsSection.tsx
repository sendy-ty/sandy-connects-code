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
      name: 'Hardware/Software Installation',
      level: 75,
      icon: Wrench,
      category: 'IT Support',
      description: 'Computer assembly, OS installation, driver configuration'
    },
    {
      name: 'Linux System Administration',
      level: 70,
      icon: Server,
      category: 'System Admin',
      description: 'Command line, user management, system configuration'
    },
    {
      name: 'Network Configuration',
      level: 60,
      icon: Wifi,
      category: 'Networking',
      description: 'Router setup, LAN configuration, troubleshooting'
    },
    {
      name: 'Programming',
      level: 55,
      icon: Code,
      category: 'Development',
      description: 'Python, JavaScript, basic web development'
    },
    {
      name: 'Machine Learning',
      level: 50,
      icon: Brain,
      category: 'AI/ML',
      description: 'Data analysis, predictive modeling, Python ML libraries'
    },
    {
      name: 'Graphic Design',
      level: 45,
      icon: Palette,
      category: 'Design',
      description: 'UI/UX basics, visual design, prototyping'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise, 
            continuously growing through hands-on experience and learning
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

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Skill Level Badge */}
                  <div className="mt-4 flex justify-end">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      skill.level >= 70 
                        ? 'bg-primary/10 text-primary' 
                        : skill.level >= 60 
                        ? 'bg-secondary/10 text-secondary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {skill.level >= 70 ? 'Intermediate' : skill.level >= 60 ? 'Basic+' : 'Basic'}
                    </span>
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
              <h3 className="text-xl font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My technical skills are constantly evolving through practical projects, internships, 
                and self-directed learning. I believe in hands-on experience and staying updated with 
                the latest industry trends and technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;