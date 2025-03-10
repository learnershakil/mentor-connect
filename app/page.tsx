import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Users, BookOpen, Award, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Connect with Industry Mentors
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Accelerate your career growth with personalized guidance from experienced professionals in your field.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/skill-selector">
                  <Button size="lg" className="gap-1.5">
                    Find Your Mentor <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Mentor Connect"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything you need to accelerate your career
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Mentor Connect provides the tools and connections to help you navigate your professional journey with
                confidence.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="border-none shadow-md">
              <CardHeader>
                <Users className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Expert Mentorship</CardTitle>
                <CardDescription>
                  Connect with industry professionals who have walked the path before you.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Personalized Roadmaps</CardTitle>
                <CardDescription>Get customized career paths based on your skills and interests.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader>
                <Award className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Skill Development</CardTitle>
                <CardDescription>Enhance your abilities with guidance from experts in your field.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Three simple steps to find the perfect mentor for your career journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">Select Your Skills</h3>
              <p className="text-muted-foreground">
                Choose the skills and areas you're interested in developing further.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">Browse Mentors</h3>
              <p className="text-muted-foreground">Explore profiles of experienced professionals in your field.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">Connect & Grow</h3>
              <p className="text-muted-foreground">
                Schedule sessions and start your journey toward professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to accelerate your career?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
                Join thousands of professionals who have transformed their careers with Mentor Connect.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popular Mentorship Categories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Explore mentorship opportunities across various tech domains.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {[
              { title: "Full Stack Development", description: "Master both frontend and backend technologies" },
              { title: "App Development", description: "Build mobile applications for iOS and Android" },
              { title: "AI & Machine Learning", description: "Explore artificial intelligence and data science" },
              { title: "Cybersecurity", description: "Learn to protect systems and networks from digital attacks" },
            ].map((category, index) => (
              <Link key={index} href="/skill-selector" className="group">
                <Card className="transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="gap-1 group-hover:text-primary">
                      Explore <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Stay updated with career insights
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Subscribe to our newsletter for the latest industry trends, mentor spotlights, and career advice.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sign-up">
                  <Button size="lg">Subscribe Now</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl border bg-background p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What our subscribers receive:</h3>
                <ul className="grid gap-2">
                  {[
                    "Weekly career insights from top mentors",
                    "Exclusive invitations to webinars and events",
                    "Industry trends and job opportunities",
                    "Practical tips to advance your career",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

