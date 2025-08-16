import { Download, MapPin, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/sandy-profile-formal.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Tentang Saya</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kenali lebih dalam tentang latar belakang, minat, dan yang mendorong passion saya terhadap teknologi
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
                      <p className="font-medium">Pendidikan</p>
                      <p className="text-sm text-muted-foreground">SMK Telkom Purwokerto (TKJ)</p>
                      <p className="text-sm text-muted-foreground">Universitas Telkom (Teknik Telekomunikasi)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient shadow-soft border-0">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-sm text-muted-foreground">Purwokerto, Indonesia</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Halo! Saya Sandy Tirta Yudha</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Saya adalah mahasiswa aktif Teknik Telekomunikasi di Universitas Telkom dengan 
                  passion yang mendalam untuk teknologi dan inovasi. Perjalanan saya di dunia teknologi 
                  telah mengembangkan keahlian dalam IT support, jaringan komputer, dan machine learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Yang paling menarik bagi saya tentang teknologi adalah kekuatannya untuk memecahkan 
                  masalah dunia nyata dan menghubungkan orang di seluruh dunia. Saya menikmati tantangan 
                  mengoptimalkan sistem, troubleshooting masalah kompleks, dan membangun solusi yang berdampak.
                </p>
                
                {/* Core Values */}
                <Card className="card-gradient shadow-soft border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Misi Saya</h4>
                        <p className="text-muted-foreground">
                          "Saya senang memecahkan masalah teknis, mengoptimalkan sistem, dan membangun 
                          solusi yang menghubungkan orang melalui teknologi."
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
                  Unduh CV Saya
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