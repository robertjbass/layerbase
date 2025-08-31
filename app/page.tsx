import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
} from "lucide-react";
import { contactInfo } from "@/lib/data";
import { TechIcons } from "@/components/icons/tech-icons";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Layerbase</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#technologies"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Technologies
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Software Engineering & Consulting
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="text-primary">Layerbase</span> builds exceptional,
            future-proof applications for the modern web
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            We specialize in crafting high-performance web applications that
            scale with your business. From concept to deployment, we deliver
            solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Full-Stack Development</CardTitle>
                <CardDescription>
                  End-to-end web application development using modern frameworks
                  and technologies
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Responsive Design</CardTitle>
                <CardDescription>
                  Mobile-first designs that provide exceptional user experiences
                  across all devices
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Database Architecture</CardTitle>
                <CardDescription>
                  Scalable database design and optimization for high-performance
                  applications
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Enterprise-grade security implementation and compliance with
                  industry standards
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>
                  Speed optimization and performance tuning for lightning-fast
                  applications
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>
                  Strategic technology guidance and architecture planning for
                  your projects
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We Love
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8">
            {/* Frontend Frameworks */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.NextJS className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Next.js</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.React className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">React</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Vue className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Vue.js</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Nuxt className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Nuxt.js</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.TypeScript className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">TypeScript</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.TailwindCSS className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Tailwind</span>
            </div>
            
            {/* Backend & Languages */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.NodeJS className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Node.js</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Go className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Go</span>
            </div>
            
            {/* Databases */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.PostgreSQL className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">PostgreSQL</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.MongoDB className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">MongoDB</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Redis className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Redis</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Prisma className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Prisma</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Supabase className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Supabase</span>
            </div>
            
            {/* Cloud & Hosting */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Vercel className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Vercel</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.AWS className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">AWS</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.GoogleCloud className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Google Cloud</span>
            </div>
            
            {/* DevOps & Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Docker className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Docker</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.GitHub className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">GitHub</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Figma className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Figma</span>
            </div>
            
            {/* Additional Services */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Stripe className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Stripe</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Auth0 className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Auth0</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Firebase className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Firebase</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <TechIcons.Cloudflare className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 text-center">Cloudflare</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Layerbase?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With years of experience in software engineering and web
                development, we bring technical excellence and business acumen
                to every project.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <span className="text-foreground">
                    Expert team with proven track record
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <span className="text-foreground">
                    Agile development methodology
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <span className="text-foreground">
                    24/7 support and maintenance
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <span className="text-foreground">
                    Scalable and future-proof solutions
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">98%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and turn your vision into a powerful web
            application
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to start your next project? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Phone</CardTitle>
                <CardDescription>
                  <a 
                    href={contactInfo.phoneHref}
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>{contactInfo.location}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                {contactInfo.company.legalName}
              </span>
            </div>
            <p className="text-muted-foreground">
              © 2025 {contactInfo.company.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
