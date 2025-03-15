import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Users, BookOpen, Award, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 xl:py-48 bg-gradient-to-b from-[#087E8B]/10 to-background">
      <div className="container px-4 md:px-6 mx-auto">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-sm font-medium mb-2">
        Elevate Your Career Path
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#087E8B] to-[#FF5A5F]">
        Connect with Industry Mentors
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
        Accelerate your career growth with personalized guidance from experienced professionals in your field.
        </p>
        </div>
        <div className="flex flex-col gap-3 min-[400px]:flex-row mt-2">
        <Link href="/skill-selector">
        <Button size="lg" className="bg-[#087E8B] hover:bg-[#087E8B]/90 text-white gap-1.5 shadow-lg hover:shadow-[#087E8B]/20 transition-all">
        Find Your Mentor <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
        </Link>
        <Link href="/about">
        <Button size="lg" variant="outline" className="border-[#087E8B] text-[#087E8B] hover:bg-[#087E8B]/5 transition-colors">
        Learn More
        </Button>
        </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#087E8B]/20 to-[#FF5A5F]/10 rounded-2xl -z-10 blur-xl opacity-50"></div>
        <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=550&q=80"
        width={550}
        height={550}
        alt="Mentor Connect"
        className="mx-auto aspect-square overflow-hidden rounded-2xl object-cover object-center sm:w-full lg:order-last shadow-xl"
        />
      </div>
      </div>
      </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-[#087E8B]/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center"></div>
        <div className="space-y-3 max-w-3xl">
        <div className="inline-block rounded-full bg-[#087E8B] px-4 py-1.5 text-sm font-medium text-white">
        Features
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight text-[#087E8B]">
        Everything you need to accelerate your career
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        Mentor Connect provides the tools and connections to help you navigate your professional journey with
        confidence.
        </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3 lg:gap-12">
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-[#087E8B]/5">
          <CardHeader>
          <div className="p-3 rounded-lg bg-[#087E8B]/10 w-fit">
            <Users className="h-8 w-8 text-[#087E8B]" />
          </div>
          <CardTitle className="mt-4 text-xl">Expert Mentorship</CardTitle>
          <CardDescription className="text-base">
            Connect with industry professionals who have walked the path before you.
          </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-[#FF5A5F]/5">
          <CardHeader>
          <div className="p-3 rounded-lg bg-[#FF5A5F]/10 w-fit">
            <BookOpen className="h-8 w-8 text-[#FF5A5F]" />
          </div>
          <CardTitle className="mt-4 text-xl">Personalized Roadmaps</CardTitle>
          <CardDescription className="text-base">Get customized career paths based on your skills and interests.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-[#087E8B]/5">
          <CardHeader>
          <div className="p-3 rounded-lg bg-[#087E8B]/10 w-fit">
            <Award className="h-8 w-8 text-[#087E8B]" />
          </div>
          <CardTitle className="mt-4 text-xl">Skill Development</CardTitle>
          <CardDescription className="text-base">Enhance your abilities with guidance from experts in your field.</CardDescription>
          </CardHeader>
        </Card>
        </div>
      </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-[#087E8B]/5">
      <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-3 max-w-3xl">
        <div className="inline-block rounded-full bg-[#FF5A5F]/10 px-4 py-1.5 text-sm font-medium text-[#FF5A5F]">
        Simple Process
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight">How It Works</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        Three simple steps to find the perfect mentor for your career journey.
        </p>
      </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12 relative">
      <div className="hidden lg:block absolute h-1 bg-gradient-to-r from-[#087E8B]/30 via-[#FF5A5F] to-[#087E8B]/30 top-24 left-[15%] right-[15%] z-0"></div>
      <div className="flex flex-col items-center space-y-5 text-center relative">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/20 shadow-lg z-10">
        <span className="text-2xl font-bold">1</span>
        </div>
        <h3 className="text-xl font-bold">Select Your Skills</h3>
        <p className="text-muted-foreground">
        Choose the skills and areas you&apos;re interested in developing further.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5 text-center relative">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FF5A5F]/10 text-[#FF5A5F] border border-[#FF5A5F]/20 shadow-lg z-10">
        <span className="text-2xl font-bold">2</span>
        </div>
        <h3 className="text-xl font-bold">Browse Mentors</h3>
        <p className="text-muted-foreground">Explore profiles of experienced professionals in your field.</p>
      </div>
      <div className="flex flex-col items-center space-y-5 text-center relative">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/20 shadow-lg z-10">
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
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#087E8B] to-[#087E8B]/90 text-white">
      <div className="container px-4 md:px-6 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="relative flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight">
        Ready to accelerate your career?
        </h2>
        <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
        Join thousands of professionals who have transformed their careers with Mentor Connect.
        </p>
      </div>
      <div className="flex flex-col gap-3 min-[400px]:flex-row mt-2">
        <Link href="/sign-up">
        <Button size="lg" className="gap-1.5 shadow-lg bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white transition-all">
        Get Started <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
        </Link>
        <Link href="/pricing">
        <Button
        size="lg"
        variant="outline"
        className="bg-transparent text-white border-white/30 hover:bg-white/10 transition-colors"
        >
        View Pricing
        </Button>
        </Link>
      </div>
      </div>
      </div>
      </section>

      {/* Popular Categories */}
      <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-3 max-w-3xl">
        <div className="inline-block rounded-full bg-[#FF5A5F]/10 px-4 py-1.5 text-sm font-medium text-[#FF5A5F]">
        Explore
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight text-[#087E8B]">Popular Mentorship Categories</h2>
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
        <Card className="transition-all hover:shadow-md border border-muted hover:border-[#087E8B]/20">
        <CardHeader>
        <CardTitle className="group-hover:text-[#087E8B] transition-colors">{category.title}</CardTitle>
        <CardDescription className="text-base">{category.description}</CardDescription>
        </CardHeader>
        <CardFooter>
        <Button variant="ghost" className="gap-1 text-[#FF5A5F] group-hover:text-[#FF5A5F]/80">
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
      <section className="w-full py-16 md:py-24 lg:py-32 bg-[#087E8B]/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A5F]/5 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center space-y-5">
        <div className="space-y-3">
        <div className="inline-block rounded-full bg-[#FF5A5F]/10 px-4 py-1.5 text-sm font-medium text-[#FF5A5F] mb-2">
        Industry Insights
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight text-[#087E8B]">
        Stay updated with career insights
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
        Subscribe to our newsletter for the latest industry trends, mentor spotlights, and career advice.
        </p>
        </div>
        <div className="flex flex-col gap-3 min-[400px]:flex-row mt-2">
        <Link href="/sign-up">
        <Button size="lg" className="bg-[#087E8B] hover:bg-[#087E8B]/90 text-white shadow-lg hover:shadow-[#087E8B]/20 transition-all">Subscribe Now</Button>
        </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-5 rounded-xl border bg-background/80 backdrop-blur-sm p-8 shadow-lg">
        <div className="space-y-3">
        <h3 className="text-2xl font-bold text-[#087E8B]">What our subscribers receive:</h3>
        <ul className="grid gap-3">
        {[
        "Weekly career insights from top mentors",
        "Exclusive invitations to webinars and events",
        "Industry trends and job opportunities",
        "Practical tips to advance your career",
        ].map((item, index) => (
        <li key={index} className="flex items-center gap-3 bg-[#087E8B]/5 p-3 rounded-lg">
          <CheckCircle className="h-5 w-5 text-[#FF5A5F] shrink-0" />
          <span className="font-medium">{item}</span>
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
