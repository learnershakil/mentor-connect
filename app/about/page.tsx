import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Our Mission & Vision
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Bridging the gap between education and industry through meaningful mentorship connections.
              </p>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              width={550}
              height={550}
              alt="About Mentor Connect"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How Mentor Connect Began</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Mentor Connect was founded in 2020 by a group of industry professionals who recognized a significant gap
                between academic education and real-world industry requirements. They observed that many talented
                graduates struggled to navigate their early career paths despite having strong technical skills.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                What started as informal mentoring sessions quickly grew into a structured platform connecting students
                with experienced professionals across various tech domains. Today, Mentor Connect has helped thousands
                of students and early-career professionals find their path and accelerate their growth.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                width={600}
                height={400}
                alt="Team collaboration at Mentor Connect"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What We Stand For</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our core values guide everything we do at Mentor Connect.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="border-none shadow-md">
              <CardHeader>
                <Users className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in the power of community and collective knowledge sharing to elevate everyone&apos;s potential.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader>
                <Target className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Growth Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We foster a culture of continuous learning, embracing challenges as opportunities for development.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We encourage creative thinking and innovative approaches to solving career challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                The passionate individuals behind Mentor Connect.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
              name: "Emily Chen",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              bio: "Former tech lead with 15+ years of experience in software development and mentorship.",
              },
              {
              name: "David Rodriguez",
              role: "CTO",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
              bio: "AI specialist with a passion for helping new engineers navigate the complex tech landscape.",
              },
              {
              name: "Sarah Johnson",
              role: "Head of Mentorship",
              image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
              bio: "Career coach with expertise in matching mentees with the perfect industry mentors.",
              },
              {
              name: "Michael Lee",
              role: "Product Lead",
              image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
              bio: "UX specialist focused on creating intuitive learning experiences for our community.",
              },
              {
              name: "Priya Patel",
              role: "Community Manager",
              image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
              bio: "Passionate about building inclusive tech communities and fostering meaningful connections.",
              },
              {
              name: "Shakil Ahmad",
              role: "Lead Developer",
              image: "/learner.jpg",
              bio: "Full-stack developer with a knack for building scalable platforms that empower others.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md">
              <div className="aspect-square overflow-hidden">
              <Image
              src={member.image || "/learner.jpg"}
              alt={member.name}
              width={300}
              height={300}
              className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              </div>
              <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              </CardHeader>
              <CardContent>
              <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Mission</h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
                Become part of our community and help shape the future of tech mentorship.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

