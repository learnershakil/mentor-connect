"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code,
  Database,
  Globe,
  Server,
  Shield,
  Cpu,
  LineChart,
  Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SkillSelectorPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const skillCategories = [
    {
      id: "full-stack",
      name: "Full Stack Development",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Vue.js",
        "Node.js",
        "Express",
        "Next.js",
        "MongoDB",
        "PostgreSQL",
        "GraphQL",
        "REST API",
        "HTML/CSS",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      id: "app-dev",
      name: "App Development",
      icon: <Smartphone className="h-5 w-5" />,
      skills: [
        "Swift",
        "Kotlin",
        "Flutter",
        "React Native",
        "Ionic",
        "Android SDK",
        "iOS Development",
        "Firebase",
        "App Store Optimization",
        "Mobile UI/UX",
        "Push Notifications",
        "Offline Storage",
        "App Security",
      ],
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Deployment",
        "Neural Networks",
        "Reinforcement Learning",
        "MLOps",
      ],
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      icon: <Shield className="h-5 w-5" />,
      skills: [
        "Network Security",
        "Penetration Testing",
        "Security Auditing",
        "Cryptography",
        "Secure Coding",
        "Vulnerability Assessment",
        "Incident Response",
        "Security Architecture",
        "Identity & Access Management",
        "Cloud Security",
        "Ethical Hacking",
        "Security Compliance",
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        "Java",
        "C#",
        ".NET",
        "Python",
        "Ruby on Rails",
        "PHP",
        "Laravel",
        "Microservices",
        "API Design",
        "Authentication",
        "Caching",
        "Message Queues",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Google Cloud",
      ],
    },
    {
      id: "data",
      name: "Data Engineering",
      icon: <Database className="h-5 w-5" />,
      skills: [
        "SQL",
        "NoSQL",
        "ETL Pipelines",
        "Data Warehousing",
        "Big Data",
        "Apache Spark",
        "Hadoop",
        "Data Modeling",
        "Data Governance",
        "Data Lakes",
        "Stream Processing",
        "Data Quality",
        "Data Visualization",
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "CI/CD",
        "Infrastructure as Code",
        "Terraform",
        "Ansible",
        "Jenkins",
        "GitHub Actions",
        "Monitoring",
        "Logging",
        "Containerization",
        "Orchestration",
        "Site Reliability Engineering",
        "Performance Optimization",
        "Cloud Architecture",
      ],
    },
    {
      id: "analytics",
      name: "Data Analytics",
      icon: <LineChart className="h-5 w-5" />,
      skills: [
        "Data Analysis",
        "Business Intelligence",
        "Tableau",
        "Power BI",
        "Excel",
        "Statistical Analysis",
        "A/B Testing",
        "Predictive Analytics",
        "Data Storytelling",
        "SQL for Analytics",
        "Python for Data Analysis",
        "R",
        "Dashboard Design",
      ],
    },
  ]

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Your Path</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Select the skills you're familiar with or interested in to discover your ideal career roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Selector */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Select Your Skills</h2>
                <p className="text-muted-foreground">
                  Choose the skills you're familiar with or interested in developing further.
                </p>
              </div>

              <Tabs defaultValue="full-stack" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mb-4">
                  {skillCategories.slice(0, 4).map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                      {category.icon}
                      <span className="hidden sm:inline">{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                  {skillCategories.slice(4).map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                      {category.icon}
                      <span className="hidden sm:inline">{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {skillCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="pt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {category.icon}
                          {category.name}
                        </CardTitle>
                        <CardDescription>
                          Select the skills you're familiar with in {category.name.toLowerCase()}.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {category.skills.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox
                                id={skill}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => toggleSkill(skill)}
                              />
                              <Label htmlFor={skill} className="cursor-pointer">
                                {skill}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Selected Skills</h2>
                <p className="text-muted-foreground">
                  {selectedSkills.length > 0
                    ? `You've selected ${selectedSkills.length} skills.`
                    : "You haven't selected any skills yet."}
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Your Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">
                      Select skills from the categories to see them here.
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <Link href={selectedSkills.length > 0 ? "/roadmap" : "#"} className="w-full">
                    <Button className="w-full gap-1.5" disabled={selectedSkills.length === 0}>
                      View Your Roadmap <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Paths</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedSkills.length > 0 ? (
                    <>
                      {(selectedSkills.includes("JavaScript") ||
                        selectedSkills.includes("React") ||
                        selectedSkills.includes("Node.js")) && (
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <h4 className="font-medium">Full Stack JavaScript Developer</h4>
                            <p className="text-sm text-muted-foreground">Based on your JavaScript skills</p>
                          </div>
                          <Link href="/roadmap">
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      )}

                      {(selectedSkills.includes("Python") ||
                        selectedSkills.includes("TensorFlow") ||
                        selectedSkills.includes("Data Analysis")) && (
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <h4 className="font-medium">AI/ML Engineer</h4>
                            <p className="text-sm text-muted-foreground">Based on your Python and data skills</p>
                          </div>
                          <Link href="/roadmap">
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      )}

                      {(selectedSkills.includes("Swift") ||
                        selectedSkills.includes("Kotlin") ||
                        selectedSkills.includes("React Native")) && (
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <h4 className="font-medium">Mobile App Developer</h4>
                            <p className="text-sm text-muted-foreground">Based on your mobile development skills</p>
                          </div>
                          <Link href="/roadmap">
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      )}

                      {(selectedSkills.includes("Network Security") ||
                        selectedSkills.includes("Penetration Testing") ||
                        selectedSkills.includes("Security Auditing")) && (
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <h4 className="font-medium">Cybersecurity Specialist</h4>
                            <p className="text-sm text-muted-foreground">Based on your security skills</p>
                          </div>
                          <Link href="/roadmap">
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">
                      Select skills to see recommended career paths.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our skill-based matching system connects you with the perfect mentor and career roadmap.
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
                Choose the skills you're familiar with or interested in developing further.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">Get Your Roadmap</h3>
              <p className="text-muted-foreground">
                Receive a personalized career roadmap based on your selected skills and interests.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">Connect with Mentors</h3>
              <p className="text-muted-foreground">
                Match with mentors who specialize in your areas of interest and can guide your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

