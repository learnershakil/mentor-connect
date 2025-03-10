"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  Star,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function RoadmapPage() {
  const [selectedPath, setSelectedPath] = useState("fullstack")

  const careerPaths = {
    fullstack: {
      title: "Full Stack Developer",
      description: "Master both frontend and backend technologies to build complete web applications.",
      progress: 35,
      image: "/placeholder.svg?height=300&width=600",
      stages: [
        {
          name: "Foundation",
          status: "completed",
          skills: ["HTML/CSS", "JavaScript Basics", "Git & GitHub", "Command Line"],
        },
        {
          name: "Frontend Development",
          status: "in-progress",
          skills: ["React", "State Management", "CSS Frameworks", "Frontend Testing"],
        },
        {
          name: "Backend Development",
          status: "upcoming",
          skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
        },
        {
          name: "Database Management",
          status: "upcoming",
          skills: ["SQL", "MongoDB", "Database Design", "ORM/ODM"],
        },
        {
          name: "DevOps & Deployment",
          status: "upcoming",
          skills: ["CI/CD", "Docker", "Cloud Services", "Performance Optimization"],
        },
      ],
      mentors: [
        {
          name: "Sarah Johnson",
          role: "Senior Full Stack Developer at TechCorp",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.9,
          reviews: 124,
        },
        {
          name: "Michael Chen",
          role: "Lead Developer at WebSolutions",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.7,
          reviews: 98,
        },
        {
          name: "Emily Rodriguez",
          role: "Full Stack Architect at InnovateTech",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.8,
          reviews: 156,
        },
      ],
      resources: [
        {
          title: "Modern JavaScript: From Fundamentals to Advanced",
          type: "Course",
          duration: "12 hours",
          provider: "TechAcademy",
        },
        {
          title: "React & Node.js: Full Stack Web Development",
          type: "Course",
          duration: "24 hours",
          provider: "CodeMasters",
        },
        {
          title: "Building Scalable Web Applications",
          type: "eBook",
          pages: 320,
          author: "David Wilson",
        },
        {
          title: "Full Stack Developer Handbook",
          type: "eBook",
          pages: 450,
          author: "Jennifer Lee",
        },
      ],
    },
    ai: {
      title: "AI/ML Engineer",
      description: "Develop expertise in artificial intelligence and machine learning technologies.",
      progress: 20,
      image: "/placeholder.svg?height=300&width=600",
      stages: [
        {
          name: "Programming Fundamentals",
          status: "completed",
          skills: ["Python", "Data Structures", "Algorithms", "Statistics"],
        },
        {
          name: "Data Analysis & Visualization",
          status: "in-progress",
          skills: ["Pandas", "NumPy", "Data Cleaning", "Data Visualization"],
        },
        {
          name: "Machine Learning Basics",
          status: "upcoming",
          skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
        },
        {
          name: "Deep Learning",
          status: "upcoming",
          skills: ["Neural Networks", "TensorFlow", "PyTorch", "Computer Vision"],
        },
        {
          name: "MLOps & Deployment",
          status: "upcoming",
          skills: ["Model Deployment", "Monitoring", "Scaling ML Systems", "Ethics in AI"],
        },
      ],
      mentors: [
        {
          name: "Dr. Alex Kim",
          role: "AI Research Scientist at DataViz",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.9,
          reviews: 87,
        },
        {
          name: "Priya Patel",
          role: "ML Engineer at TechInnovate",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.8,
          reviews: 112,
        },
        {
          name: "Robert Chen",
          role: "Data Science Director at AILabs",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.7,
          reviews: 93,
        },
      ],
      resources: [
        {
          title: "Python for Data Science and Machine Learning",
          type: "Course",
          duration: "20 hours",
          provider: "DataAcademy",
        },
        {
          title: "Deep Learning Specialization",
          type: "Course",
          duration: "40 hours",
          provider: "AI Institute",
        },
        {
          title: "Hands-On Machine Learning",
          type: "eBook",
          pages: 550,
          author: "Sarah Johnson",
        },
        {
          title: "AI Ethics and Implementation",
          type: "eBook",
          pages: 280,
          author: "Michael Thompson",
        },
      ],
    },
    mobile: {
      title: "Mobile App Developer",
      description: "Specialize in creating applications for iOS and Android platforms.",
      progress: 45,
      image: "/placeholder.svg?height=300&width=600",
      stages: [
        {
          name: "Programming Fundamentals",
          status: "completed",
          skills: ["Object-Oriented Programming", "Git", "Data Structures", "Algorithms"],
        },
        {
          name: "Platform Basics",
          status: "completed",
          skills: ["Swift/Kotlin", "UI Fundamentals", "App Lifecycle", "Debugging"],
        },
        {
          name: "Advanced UI & UX",
          status: "in-progress",
          skills: ["Responsive Layouts", "Animations", "Gestures", "Design Patterns"],
        },
        {
          name: "Data & Networking",
          status: "upcoming",
          skills: ["API Integration", "Local Storage", "Authentication", "Offline Support"],
        },
        {
          name: "Publishing & Growth",
          status: "upcoming",
          skills: ["App Store Optimization", "Analytics", "Monetization", "User Engagement"],
        },
      ],
      mentors: [
        {
          name: "James Wilson",
          role: "iOS Developer at AppWorks",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.8,
          reviews: 76,
        },
        {
          name: "Sophia Lee",
          role: "Mobile Lead at TechMobile",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.9,
          reviews: 104,
        },
        {
          name: "David Martinez",
          role: "Android Developer at MobileInnovate",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.7,
          reviews: 89,
        },
      ],
      resources: [
        {
          title: "iOS Development with Swift",
          type: "Course",
          duration: "18 hours",
          provider: "AppAcademy",
        },
        {
          title: "Android Development Masterclass",
          type: "Course",
          duration: "22 hours",
          provider: "MobileDev",
        },
        {
          title: "Mobile UI/UX Design Principles",
          type: "eBook",
          pages: 320,
          author: "Emma Thompson",
        },
        {
          title: "Cross-Platform Development with React Native",
          type: "eBook",
          pages: 380,
          author: "John Davis",
        },
      ],
    },
  }

  const selectedCareerPath = careerPaths[selectedPath as keyof typeof careerPaths]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Career Roadmap</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A personalized path to help you achieve your professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Selection */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Your Recommended Career Paths</h2>
              <p className="text-muted-foreground">
                Based on your selected skills, we've identified these career paths for you.
              </p>
            </div>

            <Tabs defaultValue="fullstack" value={selectedPath} onValueChange={setSelectedPath} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="fullstack">Full Stack Developer</TabsTrigger>
                <TabsTrigger value="ai">AI/ML Engineer</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Developer</TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl">{selectedCareerPath.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{selectedCareerPath.description}</CardDescription>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{selectedCareerPath.progress}% Complete</span>
                          <Progress value={selectedCareerPath.progress} className="w-[100px]" />
                        </div>
                        <Link href="/dashboard">
                          <Button variant="outline" size="sm" className="gap-1">
                            View Dashboard <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={selectedCareerPath.image || "/placeholder.svg"}
                        alt={selectedCareerPath.title}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Your Learning Journey</h2>
              <p className="text-muted-foreground">
                Follow this roadmap to develop the skills needed for your chosen career path.
              </p>
            </div>

            <div className="space-y-8">
              {selectedCareerPath.stages.map((stage, index) => (
                <div key={index} className="relative">
                  {/* Timeline connector */}
                  {index < selectedCareerPath.stages.length - 1 && (
                    <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-border h-full" />
                  )}

                  <div className="flex gap-4">
                    <div
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                        stage.status === "completed"
                          ? "bg-primary text-primary-foreground"
                          : stage.status === "in-progress"
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {stage.status === "completed" ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <span className="text-lg font-bold">{index + 1}</span>
                      )}
                    </div>

                    <Card className="flex-1">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle>{stage.name}</CardTitle>
                          <Badge
                            variant={
                              stage.status === "completed"
                                ? "default"
                                : stage.status === "in-progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {stage.status === "completed"
                              ? "Completed"
                              : stage.status === "in-progress"
                                ? "In Progress"
                                : "Upcoming"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {stage.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center gap-2">
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  stage.status === "completed"
                                    ? "bg-primary"
                                    : stage.status === "in-progress"
                                      ? "bg-primary/60"
                                      : "bg-muted-foreground/40"
                                }`}
                              />
                              <span
                                className={
                                  stage.status === "completed"
                                    ? "text-foreground"
                                    : stage.status === "in-progress"
                                      ? "text-foreground"
                                      : "text-muted-foreground"
                                }
                              >
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant={stage.status === "upcoming" ? "outline" : "default"}
                          size="sm"
                          disabled={stage.status === "upcoming"}
                        >
                          {stage.status === "completed"
                            ? "Review Materials"
                            : stage.status === "in-progress"
                              ? "Continue Learning"
                              : "Start Learning"}
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Mentors */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Recommended Mentors</h2>
              <p className="text-muted-foreground">
                Connect with experienced professionals who can guide you on your journey.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {selectedCareerPath.mentors.map((mentor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-4">
                      <Image
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{mentor.name}</CardTitle>
                        <CardDescription>{mentor.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>12 mentees</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Request Mentorship</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/mentors">
                <Button variant="outline" className="gap-1">
                  View All Mentors <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Recommended Resources</h2>
              <p className="text-muted-foreground">
                Curated learning materials to help you develop the necessary skills.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {selectedCareerPath.resources.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription>
                          {resource.type === "Course" ? `By ${resource.provider}` : `By ${resource.author}`}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      {resource.type === "Course" ? (
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{resource.duration}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-sm">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>{resource.pages} pages</span>
                        </div>
                      )}

                      {resource.type === "Course" && (
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Self-paced</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="gap-1">
                      {resource.type === "Course" ? (
                        <>
                          View Course <ExternalLink className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Download <Download className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <Button size="sm">Add to Learning Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/resources">
                <Button variant="outline" className="gap-1">
                  View All Resources <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to start your journey?</h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
                Create an account to save your roadmap and connect with mentors.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Create Account <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

