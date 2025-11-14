import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from 'lucide-react'
import { contactInfo, projects, socialLinks } from '@/lib/data'
import { TechIcons } from '@/components/icons/tech-icons'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Layerbase
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#work"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </a>
              <a
                href="#technologies"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Technologies
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium"
            >
              Software Engineering & Consulting
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
              Building products
              <br />
              that{' '}
              <span className="bg-gradient-to-r from-primary to-foreground/80 bg-clip-text text-transparent">
                scale
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We craft high-performance applications with modern technologies.
              From concept to deployment, we deliver solutions that drive real
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="px-8 h-12 text-base" asChild>
                <a href="#contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 h-12 text-base hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                asChild
              >
                <a href="#work">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack development services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: 'Full-Stack Development',
                description:
                  'End-to-end application development using modern frameworks and best practices',
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description:
                  'Mobile-first experiences that work seamlessly across all devices',
              },
              {
                icon: Database,
                title: 'Database Architecture',
                description:
                  'Scalable database design and optimization for performance',
              },
              {
                icon: Shield,
                title: 'Security & Compliance',
                description:
                  'Enterprise-grade security and industry standard compliance',
              },
              {
                icon: Zap,
                title: 'Performance',
                description:
                  'Speed optimization and performance tuning for lightning-fast apps',
              },
              {
                icon: Code,
                title: 'Technical Consulting',
                description:
                  'Strategic guidance and architecture planning for your projects',
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-border/50 hover:border-border transition-all hover:shadow-lg bg-card group"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projects showcasing our technical expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-border transition-all hover:shadow-lg bg-card group overflow-hidden"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs font-normal text-muted-foreground"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Our Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern technologies we use to build exceptional products
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              { Icon: TechIcons.NextJS, name: 'Next.js' },
              { Icon: TechIcons.React, name: 'React' },
              { Icon: TechIcons.TypeScript, name: 'TypeScript' },
              { Icon: TechIcons.TailwindCSS, name: 'Tailwind' },
              { Icon: TechIcons.NodeJS, name: 'Node.js' },
              { Icon: TechIcons.Vue, name: 'Vue.js' },
              { Icon: TechIcons.Nuxt, name: 'Nuxt.js' },
              { Icon: TechIcons.PostgreSQL, name: 'PostgreSQL' },
              { Icon: TechIcons.MySQL, name: 'MySQL' },
              { Icon: TechIcons.MongoDB, name: 'MongoDB' },
              { Icon: TechIcons.SQLite, name: 'SQLite' },
              { Icon: TechIcons.Redis, name: 'Redis' },
              { Icon: TechIcons.Prisma, name: 'Prisma' },
              { Icon: TechIcons.Drizzle, name: 'Drizzle' },
              { Icon: TechIcons.PayloadCMS, name: 'Payload' },
              { Icon: TechIcons.AWS, name: 'AWS' },
              { Icon: TechIcons.Vercel, name: 'Vercel' },
              { Icon: TechIcons.Cloudflare, name: 'Cloudflare' },
              { Icon: TechIcons.Docker, name: 'Docker' },
              { Icon: TechIcons.GitHub, name: 'GitHub' },
              { Icon: TechIcons.Linux, name: 'Linux' },
              { Icon: TechIcons.macOS, name: 'macOS' },
              { Icon: TechIcons.Go, name: 'Go' },
              { Icon: TechIcons.Rust, name: 'Rust' },
            ].map(({ Icon, name }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-card transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center space-y-3">
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  500+
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  Projects Delivered
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center space-y-3">
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  98%
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  Client Satisfaction
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center space-y-3">
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  5+
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                  Ready to build something great?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let's discuss your project and turn your vision into reality
                </p>
              </div>
              <Button size="lg" className="px-8 h-12 text-base" asChild>
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your next project?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card hover:border-border transition-all hover:shadow-lg group">
              <CardHeader className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-foreground transition-colors font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-border/50 bg-card hover:border-border transition-all hover:shadow-lg group">
              <CardHeader className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Phone</CardTitle>
                  <CardDescription>
                    <a
                      href={contactInfo.phoneHref}
                      className="hover:text-foreground transition-colors font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-border/50 bg-card hover:border-border transition-all hover:shadow-lg group">
              <CardHeader className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Location</CardTitle>
                  <CardDescription className="font-medium">
                    {contactInfo.location}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-16 px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-8">
            {/* Top section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-foreground">
                    {contactInfo.company.legalName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {contactInfo.company.tagline}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border/50 hover:border-border hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border/50 hover:border-border hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/40" />

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © 2025 {contactInfo.company.legalName}. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Services
                </a>
                <a
                  href="#work"
                  className="hover:text-foreground transition-colors"
                >
                  Work
                </a>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
