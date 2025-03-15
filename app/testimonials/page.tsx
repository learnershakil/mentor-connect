import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestimonialsPage() {
  const featuredTestimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
      content:
        "Mentor Connect helped me transition from a junior developer to a senior role in just 8 months. The guidance I received was invaluable. My mentor not only helped me improve my technical skills but also provided insights into navigating corporate culture and negotiating promotions. I can't recommend this platform enough for anyone looking to accelerate their tech career.",
    },
    {
      name: "Sarah Chen",
      role: "Data Scientist",
      company: "DataViz",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
      content:
        "Finding a mentor in AI was challenging until I discovered Mentor Connect. Now I'm working on cutting-edge projects thanks to my mentor's guidance. The personalized roadmap helped me focus on the most relevant skills for my career goals. My mentor also introduced me to key industry connections that led to my current position. The investment in Mentor Connect paid off tenfold.",
    },
    {
      name: "Michael Rodriguez",
      role: "UX Designer",
      company: "CreativeHub",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100",
      content:
        "The personalized roadmap helped me focus on the right skills to develop. I've now landed my dream job at a top design agency. My mentor reviewed my portfolio and provided actionable feedback that completely transformed my work. The structured approach to skill development and career planning made all the difference in my professional journey.",
    },
  ]

  const additionalTestimonials = [
    {
      name: "Priya Patel",
      role: "Frontend Developer",
      company: "WebSolutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
      content:
        "As a self-taught developer, I had gaps in my knowledge that were holding me back. My mentor helped identify these gaps and created a learning plan that filled them quickly. Within 6 months, I was able to secure a position that doubled my previous salary.",
    },
    {
      name: "David Kim",
      role: "Cybersecurity Analyst",
      company: "SecureNet",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
      content:
        "The specialized mentorship in cybersecurity was exactly what I needed to pivot from general IT into security. My mentor's practical exercises and real-world scenarios prepared me for challenges I now face daily in my role.",
    },
    {
      name: "Emma Wilson",
      role: "Product Manager",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
      content:
        "Transitioning from engineering to product management was daunting, but my mentor made it seamless. The insights into stakeholder management and product strategy were invaluable for my career change.",
    },
    {
      name: "James Thompson",
      role: "Mobile Developer",
      company: "AppWorks",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100",
      content:
        "The mentor matching algorithm is spot-on! I was paired with someone who had followed almost the exact career path I aspired to. Their guidance helped me avoid common pitfalls and accelerate my progress.",
    },
    {
      name: "Olivia Martinez",
      role: "DevOps Engineer",
      company: "CloudSystems",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
      content:
        "The technical mentorship I received was outstanding. My mentor helped me master containerization and CI/CD pipelines, which were key skills for my promotion to lead DevOps engineer.",
    },
    {
      name: "Robert Chen",
      role: "Blockchain Developer",
      company: "ChainInnovate",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
      content:
        "Finding mentorship in emerging technologies like blockchain is difficult. Mentor Connect connected me with an industry pioneer who helped me understand not just the technology, but where the industry is heading.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#087E8B]/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#087E8B]">Success Stories</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Hear from professionals who have transformed their careers with Mentor Connect.
          </p>
        </div>
        </div>
      </div>
      </section>

      {/* Featured Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-[#087E8B] px-3 py-1 text-sm text-white">
          Featured Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Transformative Mentorship Experiences
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          These professionals share how Mentor Connect helped them achieve significant career milestones.
          </p>
        </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 py-12">
        {featuredTestimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid md:grid-cols-[1fr_2fr] gap-6">
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#087E8B]/10 to-[#087E8B]/5">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#087E8B]">
              <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <CardTitle className="text-xl text-[#087E8B]">{testimonial.name}</CardTitle>
              <CardDescription>
              {testimonial.role} at {testimonial.company}
              </CardDescription>
            </div>
            </div>
            <CardContent className="p-6 flex items-center">
            <div className="relative">
              <Quote className="absolute top-0 left-0 h-8 w-8 text-[#FF5A5F]/30 -translate-x-4 -translate-y-4" />
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
            </CardContent>
          </div>
          </Card>
        ))}
        </div>
      </div>
      </section>

      {/* Video Testimonial (Placeholder) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#087E8B]/5 to-[#FF5A5F]/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#087E8B]">Hear Their Stories</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          Watch video testimonials from our community members.
          </p>
        </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
        <div className="overflow-hidden rounded-xl border-2 border-[#087E8B] shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
          <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8LSt8_11wbQ"
          title="Mentor Connect Success Story"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
        </div>
        </div>
      </div>
      </section>

      {/* More Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#087E8B]">More Success Stories</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          Discover how Mentor Connect has helped professionals across various tech domains.
          </p>
        </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {additionalTestimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-0 border-b-2 border-[#FF5A5F]/10">
            <div className="flex items-center gap-4">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={60}
              height={60}
              className="rounded-full object-cover border-2 border-[#087E8B]"
            />
            <div>
              <CardTitle className="text-lg text-[#087E8B]">{testimonial.name}</CardTitle>
              <CardDescription>
              {testimonial.role} at {testimonial.company}
              </CardDescription>
            </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 relative">
            <Quote className="absolute top-0 left-0 h-8 w-8 text-[#FF5A5F]/30 -translate-x-1/4 -translate-y-1/4" />
            <p className="text-muted-foreground">{testimonial.content}</p>
          </CardContent>
          </Card>
        ))}
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#087E8B] to-[#087E8B]/90 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Ready to write your success story?
          </h2>
          <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
          Join thousands of professionals who have transformed their careers with Mentor Connect.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link href="/sign-up">
          <Button size="lg" className="bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white gap-1.5 border-none">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          </Link>
          <Link href="/skill-selector">
          <Button
            size="lg"
            className="bg-transparent text-white border-white/30 hover:bg-white/10"
          >
            Find Your Mentor
          </Button>
          </Link>
        </div>
        </div>
      </div>
      </section>
    </div>
  )
}

