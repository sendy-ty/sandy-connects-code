import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Server, Network } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Machine Learning Path - DBS Foundation',
      description: 'Comprehensive machine learning project involving data analysis, website analytics, and predictive modeling using Python. Developed and implemented ML algorithms for real-world data scenarios.',
      category: 'Machine Learning',
      icon: Brain,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis', 'Predictive Modeling'],
      highlights: [
        'Data preprocessing and feature engineering',
        'Website traffic analysis and insights',
        'Predictive model development',
        'Performance optimization and validation'
      ],
      status: 'Completed',
      type: 'Certification Program'
    },
    {
      title: 'IT Support - PT XLSMART Telecom',
      description: 'Comprehensive IT support role involving hardware installation, software configuration, data backup operations, and local network setup for telecommunications infrastructure.',
      category: 'IT Support',
      icon: Server,
      technologies: ['Windows/Linux', 'Hardware Installation', 'Network Config', 'Data Backup', 'System Admin'],
      highlights: [
        'Hardware and software installation',
        'System backup and recovery procedures',
        'Local network configuration',
        'Technical troubleshooting and support'
      ],
      status: 'Professional Experience',
      type: 'Full-time Role'
    },
    {
      title: 'Network Staff Internship - PT Technophoria',
      description: 'Hands-on internship focused on network infrastructure, computer troubleshooting, and local area network installation and maintenance in corporate environment.',
      category: 'Networking',
      icon: Network,
      technologies: ['LAN Setup', 'Network Troubleshooting', 'Router Config', 'System Maintenance', 'Technical Support'],
      highlights: [
        'Office computer troubleshooting',
        'Local area network installation',
        'Network infrastructure maintenance',
        'Corporate IT support services'
      ],
      status: 'Completed',
      type: 'Internship'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Machine Learning':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'IT Support':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Networking':
        return 'bg-accent text-accent-foreground border-accent';
      default:
        return 'bg-muted text-muted-foreground border-muted';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Projects & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my practical experience in machine learning, IT support, and network administration 
            through various projects and professional roles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`card-gradient shadow-card hover:shadow-hover transition-spring border-0 group animate-scale-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'outline'} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 hero-gradient text-white shadow-soft hover:shadow-hover transition-spring"
                    >
                      <ExternalLink className="mr-1.5 h-3 w-3" />
                      Learn More
                    </Button>
                    {project.category === 'Machine Learning' && (
                      <Button size="sm" variant="outline" className="px-3">
                        <Github className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="card-gradient shadow-card border-0 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Building Real-World Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each project represents a step in my journey to understand and implement technology solutions 
                that solve real problems. From machine learning algorithms to network infrastructure, 
                I focus on practical applications that make a difference.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;