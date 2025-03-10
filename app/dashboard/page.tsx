"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  MessageSquare,
  Plus,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Dashboard Header */}
      <section className="w-full py-6 md:py-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Welcome back, John!</h1>
              <p className="text-muted-foreground">
                Track your progress and connect with mentors.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="icon">
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">Messages</span>
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              <TabsTrigger value="mentors">Mentors</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              {/* Progress Summary */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Career Path
                    </CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Full Stack Developer</div>
                    <p className="text-xs text-muted-foreground">
                      35% complete
                    </p>
                    <Progress value={35} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Learning Hours
                    </CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24.5</div>
                    <p className="text-xs text-muted-foreground">
                      +2.5 from last week
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Mentor Sessions
                    </CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">
                      Next session in 2 days
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Completed Skills
                    </CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8/24</div>
                    <p className="text-xs text-muted-foreground">
                      +2 this month
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Activity & Upcoming Sessions */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Completed React Fundamentals",
                        description: "You've completed the React Fundamentals course",
                        time: "2 days ago",
                        icon: <CheckCircle className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Mentor Session with Sarah Johnson",
                        description: "You had a 45-minute session discussing frontend architecture",
                        time: "4 days ago",
                        icon: <User className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Started JavaScript Advanced Concepts",
                        description: "You've started a new course on advanced JavaScript",
                        time: "1 week ago",
                        icon: <BookOpen className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Updated Career Roadmap",
                        description: "You've updated your career roadmap to focus on React and Node.js",
                        time: "1 week ago",
                        icon: <Settings className="h-4 w-4 text-primary" />
                      }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg border p-3">
                        <div className="mt-0.5">{activity.icon}</div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Mentor Session: Code Review",
                        with: "Sarah Johnson",
                        date: "Tomorrow",
                        time: "3:00 PM - 4:00 PM"
                      },
                      {
                        title: "Group Workshop: API Design",
                        with: "Michael Chen & 5 others",
                        date: "Friday, Jun 12",
                        time: "1:00 PM - 2:30 PM"
                      },
                      {
                        title: "Career Strategy Session",
                        with: "Emily Rodriguez",
                        date: "Monday, Jun 15",
                        time: "11:00 AM - 12:00 PM"
                      }
                    ].map((session, index) => (
                      <div key={index} className="flex flex-col space-y-2 rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{session.title}</p>
                          <Badge variant="outline" className="text-xs">
                            {session.date}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="mr-1 h-3 w-3" />
                          <span>{session.with}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{session.time}</span>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full gap-1">
                      <Plus className="h-4 w-4" /> Schedule Session
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recommended Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Resources</CardTitle>
                  <CardDescription>
                    Based on your learning progress and career goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "Advanced React Patterns",
                        type: "Course",
                        provider: "TechAcademy",
                        image: "/placeholder.svg?height=100&width=200",
                        duration: "8 hours"
                      },
                      {
                        title: "Building RESTful APIs with Node.js",
                        type: "Workshop",
                        provider: "CodeMasters",
                        image: "/placeholder.svg?height=100&width=200",
                        duration: "4 hours"
                      },
                      {
                        title: "Frontend Architecture Best Practices",
                        type: "eBook",
                        provider: "Web Design Press",
                        image: "/placeholder.svg?height=100&width=200",
                        duration: "240 pages"
                      }
                    ].map((resource, index) => (
                      <Card key={index} className="overflow-hidden border-none shadow-sm">
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={resource.image || "/placeholder.svg"}
                            alt={resource.title}
                            width={200}
                            height={100}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-3">
                          <div className="flex justify-between">
                            <CardTitle className="text-base">{resource.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {resource.type}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center gap-1 text-xs">
                            <Clock className="h-3 w-3" />
                            {resource.duration} • {resource.provider}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="p-3 pt-0">
                          <Button variant="outline" size="sm" className="w-full">
                            View Resource
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/resources" className="w-full">
                    <Button variant="outline" className="w-full gap-1">
                      View All Resources <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Roadmap Tab */}
            <TabsContent value="roadmap" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle>Full Stack Developer Roadmap</CardTitle>
                      <CardDescription>
                        Your personalized learning journey
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">35% Complete</span>
                      <Progress value={35} className="w-[100px]" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {[
                    {
                      name: "Foundation",
                      status: "completed",
                      progress: 100,
                      skills: ["HTML/CSS", "JavaScript Basics", "Git & GitHub", "Command Line"]
                    },
                    {
                      name: "Frontend Development",
                      status: "in-progress",
                      progress: 60,
                      skills: ["React", "State Management", "CSS Frameworks", "Frontend Testing"]
                    },
                    {
                      name: "Backend Development",
                      status: "upcoming",
                      progress: 0,
                      skills: ["Node.js", "Express", "RESTful APIs", "Authentication"]
                    },
                    {
                      name: "Database Management",
                      status: "upcoming",
                      progress: 0,
                      skills: ["SQL", "MongoDB", "Database Design", "ORM/ODM"]
                    },
                    {
                      name: "DevOps & Deployment",
                      status: "upcoming",
                      progress: 0,
                      skills: ["CI/CD", "Docker", "Cloud Services", "Performance Optimization"]
                    }
                  ].map((stage, index) => (
                    <div key={index} className="relative">
                      {/* Timeline connector */}
                      {index < 4 && (
                        <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-border h-full" />
                      )}
                      
                      <div className="flex gap-4">
                        <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                          stage.status === 'completed' ? 'bg-primary text-primary-foreground' :
                          stage.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {stage.status === 'completed' ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <span className="text-lg font-bold">{index + 1}</span>
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold">{stage.name}</h3>
                              <Badge variant={
                                stage.status === 'completed' ? 'default' :
                                stage.status === 'in-progress' ? 'secondary' :
                                'outline'
                              }>
                                {stage.status === 'completed' ? 'Completed' :
                                 stage.status === 'in-progress' ? 'In Progress' :
                                 'Upcoming'}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{stage.progress}%</span>
                              <Progress value={stage.progress} className="w-[100px]" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {stage.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full ${
                                  stage.status === 'completed' ? 'bg-primary' :
                                  stage.status === 'in-progress' ? 'bg-primary/60' :
                                  'bg-muted-foreground/40'
                                }`} />
                                <span className={
                                  stage.status === 'completed' ? 'text-foreground' :
                                  stage.status === 'in-progress' ? 'text-foreground' :
                                  'text-muted-foreground'
                                }>{skill}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div>
                            <Button 
                              variant={stage.status === 'upcoming' ? 'outline' : 'default'} 
                              size="sm"
                              disabled={stage.status === 'upcoming'}
                            >
                              {stage.status === 'completed' ? 'Review Materials' :
                               stage.status === 'in-progress' ? 'Continue Learning' :
                               'Start Learning'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link href="/roadmap" className="w-full">
                    <Button className="w-full gap-1">
                      View Detailed Roadmap <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Mentors Tab */}
            <TabsContent value="mentors" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Mentors</CardTitle>
                  <CardDescription>
                    Connect with your assigned mentors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Sarah Johnson",
                        role: "Senior Full Stack Developer at TechCorp",
                        image: "/placeholder.svg?height=100&width=100",
                        focus: "Frontend Architecture",
                        nextSession: "Tomorrow, 3:00 PM"
                      },
                      {
                        name: "Michael Chen",
                        role: "Lead Developer at WebSolutions",
                        image: "/placeholder.svg?height=100&width=100",
                        focus: "Backend Development",
                        nextSession: "Friday, Jun 12, 1:00 PM"
                      },
                      {
                        name: "Emily Rodriguez",
                        role: "Full Stack Architect at InnovateTech",
                        image: "/placeholder.svg?height=100&width=100",
                        focus: "Career Strategy",
                        nextSession: "Monday, Jun 15, 11:00 AM"
                      }
                    ].map((mentor, index) => (
                      <Card key={index} className="overflow-hidden border-none shadow-sm">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={mentor.image} alt={mentor.name} />
                              <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-base">{mentor.name}</CardTitle>
                              <CardDescription className="text-xs">
                                {mentor.role}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span>Focus: {mentor.focus}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>Next: {mentor.nextSession}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 gap-1">
                            <MessageSquare className="h-4 w-4" /> Message
                          </Button>
                          <Button size="sm" className="flex\

