import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Machine Learning Path Participant',
      organization: 'DBS Foundation - Coding Camp',
      type: 'Program Sertifikasi',
      period: '2024',
      location: 'Remote',
      description: 'Program machine learning intensif yang fokus pada analisis data, website analytics, dan predictive modeling. Mendapatkan pengalaman hands-on dengan Python ML libraries dan skenario data dunia nyata.',
      achievements: [
        'Menyelesaikan kurikulum ML yang komprehensif',
        'Mengembangkan keterampilan analisis dan visualisasi data',
        'Membangun model prediktif menggunakan Python',
        'Memperoleh sertifikasi machine learning'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
      status: 'completed'
    },
    {
      title: 'IT Support Specialist',
      organization: 'PT XLSMART Telecom Sejahtera Tbk',
      type: 'Peran Profesional',
      period: '2023 - 2024',
      location: 'Indonesia',
      description: 'Memberikan dukungan IT komprehensif termasuk instalasi hardware/software, operasi backup sistem, dan konfigurasi jaringan lokal untuk infrastruktur telekomunikasi.',
      achievements: [
        'Mengelola instalasi hardware dan software',
        'Mengimplementasikan prosedur backup dan recovery data',
        'Mengkonfigurasi jaringan area lokal',
        'Memberikan dukungan teknis dan troubleshooting'
      ],
      technologies: ['Windows/Linux', 'Network Configuration', 'Hardware Installation', 'System Administration'],
      status: 'completed'
    },
    {
      title: 'Network Staff Intern',
      organization: 'PT. Technophoria Indonesia',
      type: 'Magang',
      period: '2023',
      location: 'Indonesia',
      description: 'Magang hands-on yang fokus pada manajemen infrastruktur jaringan, troubleshooting komputer, dan instalasi jaringan area lokal di lingkungan korporat.',
      achievements: [
        'Troubleshooting sistem komputer kantor',
        'Instalasi dan pemeliharaan infrastruktur LAN',
        'Mendukung operasi pemeliharaan jaringan',
        'Mendapatkan pengalaman networking praktis'
      ],
      technologies: ['LAN Setup', 'Network Troubleshooting', 'System Maintenance', 'Technical Support'],
      status: 'completed'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Peran Profesional':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Magang':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Program Sertifikasi':
        return 'bg-accent text-accent-foreground border-accent';
      default:
        return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'current' 
      ? 'bg-green-500/10 text-green-600 border-green-500/20' 
      : 'bg-blue-500/10 text-blue-600 border-blue-500/20';
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Pengalaman</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perjalanan saya melalui pendidikan, magang, dan peran profesional yang telah membentuk 
            keahlian saya di bidang IT, networking, dan machine learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-20"></div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.title}
                  className={`relative animate-slide-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full hero-gradient shadow-soft"></div>

                  {/* Experience card */}
                  <div className="ml-20">
                    <Card className="card-gradient shadow-card hover:shadow-hover transition-spring border-0">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <Building2 className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium text-muted-foreground">{experience.organization}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:items-end space-y-2 mt-2 lg:mt-0">
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className={getTypeColor(experience.type)}>
                                {experience.type}
                              </Badge>
                              <Badge variant="outline" className={getStatusColor(experience.status)}>
                                {experience.status === 'current' ? 'Saat Ini' : 'Selesai'}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{experience.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Pencapaian Utama:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-medium mb-2">Teknologi & Keterampilan:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <Card className="card-gradient shadow-card border-0 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Pertumbuhan & Pembelajaran Berkelanjutan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dari fondasi akademis hingga pengalaman profesional, setiap peran telah berkontribusi pada 
                pemahaman teknologi yang komprehensif. Saya bersemangat menerapkan pengetahuan teoritis 
                untuk memecahkan tantangan dunia nyata di bidang IT, networking, dan teknologi emerging.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;