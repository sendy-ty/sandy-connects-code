import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Server, Network } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Sistem Prediksi Machine Learning',
      description: 'Proyek pengembangan model machine learning untuk analisis data dan prediksi menggunakan Python. Implementasi algoritma ML untuk skenario data dunia nyata.',
      category: 'Machine Learning',
      icon: Brain,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis', 'Predictive Modeling'],
      highlights: [
        'Preprocessing data dan feature engineering',
        'Analisis traffic website dan insights',
        'Pengembangan model prediktif',
        'Optimasi performa dan validasi model'
      ],
      status: 'Selesai',
      type: 'Proyek Personal'
    },
    {
      title: 'Dashboard Monitoring Jaringan',
      description: 'Aplikasi web untuk monitoring dan analisis performa jaringan lokal dengan real-time data visualization dan alert system.',
      category: 'Web Development',
      icon: Network,
      technologies: ['React', 'Node.js', 'Chart.js', 'WebSocket', 'Network API'],
      highlights: [
        'Real-time network monitoring',
        'Visualisasi data interaktif',
        'System alert dan notifikasi',
        'Responsive dashboard design'
      ],
      status: 'Dalam Pengembangan',
      type: 'Proyek Personal'
    },
    {
      title: 'Automation Script Collection',
      description: 'Kumpulan script automation untuk troubleshooting sistem, backup data, dan konfigurasi jaringan untuk meningkatkan efisiensi kerja IT.',
      category: 'Automation',
      icon: Server,
      technologies: ['Python', 'Bash', 'PowerShell', 'Cron Jobs', 'System Admin'],
      highlights: [
        'Script backup otomatis',
        'System health monitoring',
        'Network configuration tools',
        'Performance optimization scripts'
      ],
      status: 'Aktif',
      type: 'Tools & Utilities'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Machine Learning':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Web Development':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Automation':
        return 'bg-accent text-accent-foreground border-accent';
      default:
        return 'bg-muted text-muted-foreground border-muted';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Proyek</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koleksi proyek yang telah saya kerjakan dalam bidang machine learning, 
            web development, dan automation untuk solusi teknologi praktis
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
                    <h4 className="font-medium text-sm mb-2">Fitur Utama:</h4>
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
                    <h4 className="font-medium text-sm mb-2">Teknologi:</h4>
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
                      Lihat Detail
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Github className="h-3 w-3" />
                    </Button>
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
              <h3 className="text-xl font-bold mb-4">Membangun Solusi Teknologi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Setiap proyek mewakili langkah dalam perjalanan saya untuk memahami dan mengimplementasikan 
                solusi teknologi yang memecahkan masalah nyata. Dari algoritma machine learning hingga 
                infrastruktur jaringan, saya fokus pada aplikasi praktis yang membuat perbedaan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;