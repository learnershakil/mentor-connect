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
      <section className="w-full py-6 md:py-10 bg-gradient-to-b from-[#087E8B]/15 via-[#087E8B]/5 to-transparent shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl text-[#087E8B]">
            Welcome back, learner!
          </h1>
          <p className="text-muted-foreground">
            Track your progress and connect with mentors.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="border-[#087E8B] text-[#087E8B] hover:bg-[#087E8B]/10 hover:text-[#087E8B] transition-colors"
          >
            <div className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF5A5F] text-[10px] font-bold text-white">2</span>
            </div>
            <span className="sr-only">Notifications</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="border-[#087E8B] text-[#087E8B] hover:bg-[#087E8B]/10 hover:text-[#087E8B] transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="sr-only">Messages</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="border-[#087E8B] text-[#087E8B] hover:bg-[#087E8B]/10 hover:text-[#087E8B] transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <div className="relative">
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5A5F] text-[10px] font-bold text-white shadow-sm animate-pulse">3</span>
            <Avatar className="h-10 w-10 border-2 border-[#FF5A5F] shadow-md hover:shadow-lg transition-shadow">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback className="bg-[#087E8B]/20 text-[#087E8B] font-medium">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
          </div>
          
          <div className="mt-8 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-24 rounded-full bg-[#FF5A5F] shadow-sm"></div>
          <div className="h-1.5 w-16 rounded-full bg-[#087E8B] shadow-sm"></div>
          <div className="h-1.5 w-8 rounded-full bg-[#087E8B]/50 shadow-sm"></div>
        </div>
        
        <div className="grid gap-3 md:grid-cols-2">
          <div className="flex items-center justify-between p-4 rounded-lg border border-[#087E8B]/20 bg-gradient-to-r from-[#087E8B]/10 to-[#087E8B]/5 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#FF5A5F]/20 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-[#FF5A5F]" />
          </div>
          <div>
            <p className="text-sm font-medium">Next mentor session</p>
            <p className="text-xs font-semibold text-[#087E8B]">Tomorrow at 3:00 PM</p>
          </div>
            </div>
            <Button 
          size="sm" 
          className="bg-[#087E8B] hover:bg-[#087E8B]/90 text-white shadow-sm"
            >
          View Details
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg border border-[#FF5A5F]/20 bg-gradient-to-r from-[#FF5A5F]/10 to-[#FF5A5F]/5 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#087E8B]/20 flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-[#087E8B]" />
          </div>
          <div>
            <p className="text-sm font-medium">Weekly goal progress</p>
            <p className="text-xs font-semibold text-[#FF5A5F]">70% completed</p>
          </div>
            </div>
            <div className="w-16">
          <Progress 
            value={70} 
            className="h-2 bg-[#FF5A5F]/20 [--progress-foreground:#FF5A5F]" 
          />
            </div>
          </div>
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
                <Card className="border border-[#087E8B]/20 hover:border-[#087E8B]/40 transition-colors shadow-sm hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-[#087E8B]">
                    Career Path
                  </CardTitle>
                  <div className="h-8 w-8 rounded-full bg-[#087E8B]/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-[#087E8B]" />
                  </div>
                  </CardHeader>
                  <CardContent>
                  <div className="text-2xl font-bold">Full Stack Developer</div>
                  <p className="text-xs text-[#FF5A5F] font-medium">
                    35% complete
                  </p>
                  <Progress value={35} className="mt-2 h-2 bg-[#087E8B]/20 [--progress-foreground:#087E8B]" />
                  </CardContent>
                </Card>
                <Card className="border border-[#FF5A5F]/20 hover:border-[#FF5A5F]/40 transition-colors shadow-sm hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-[#FF5A5F]">
                    Learning Hours
                  </CardTitle>
                  <div className="h-8 w-8 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-[#FF5A5F]" />
                  </div>
                  </CardHeader>
                  <CardContent>
                  <div className="text-2xl font-bold">24.5</div>
                  <p className="text-xs text-[#087E8B] font-medium">
                    +2.5 from last week
                  </p>
                  </CardContent>
                </Card>
                <Card className="border border-[#087E8B]/20 hover:border-[#087E8B]/40 transition-colors shadow-sm hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-[#087E8B]">
                    Mentor Sessions
                  </CardTitle>
                  <div className="h-8 w-8 rounded-full bg-[#087E8B]/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-[#087E8B]" />
                  </div>
                  </CardHeader>
                  <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-[#FF5A5F] font-medium">
                    Next session in 2 days
                  </p>
                  </CardContent>
                </Card>
                <Card className="border border-[#FF5A5F]/20 hover:border-[#FF5A5F]/40 transition-colors shadow-sm hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-[#FF5A5F]">
                    Completed Skills
                  </CardTitle>
                  <div className="h-8 w-8 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-[#FF5A5F]" />
                  </div>
                  </CardHeader>
                  <CardContent>
                  <div className="text-2xl font-bold">8/24</div>
                  <p className="text-xs text-[#087E8B] font-medium">
                    +2 this month
                  </p>
                  </CardContent>
                </Card>
                </div>
                
                {/* Recent Activity & Upcoming Sessions */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4 border border-[#087E8B]/20 shadow-sm">
                  <CardHeader className="border-b border-[#087E8B]/10 bg-gradient-to-r from-[#087E8B]/5 to-transparent">
                  <CardTitle className="text-[#087E8B]">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-4">
                  {[
                    {
                    title: "Completed React Fundamentals",
                    description: "You've completed the React Fundamentals course",
                    time: "2 days ago",
                    icon: <CheckCircle className="h-4 w-4 text-[#FF5A5F]" />,
                    color: "#FF5A5F"
                    },
                    {
                    title: "Mentor Session with Sarah Johnson",
                    description: "You had a 45-minute session discussing frontend architecture",
                    time: "4 days ago",
                    icon: <User className="h-4 w-4 text-[#087E8B]" />,
                    color: "#087E8B"
                    },
                    {
                    title: "Started JavaScript Advanced Concepts",
                    description: "You've started a new course on advanced JavaScript",
                    time: "1 week ago",
                    icon: <BookOpen className="h-4 w-4 text-[#FF5A5F]" />,
                    color: "#FF5A5F"
                    },
                    {
                    title: "Updated Career Roadmap",
                    description: "You've updated your career roadmap to focus on React and Node.js",
                    time: "1 week ago",
                    icon: <Settings className="h-4 w-4 text-[#087E8B]" />,
                    color: "#087E8B"
                    }
                  ].map((activity, index) => (
                    <div key={index} className={`flex items-start gap-4 rounded-lg border border-${activity.color}/20 p-3 hover:shadow-sm transition-all bg-gradient-to-r from-${activity.color}/5 to-transparent`}>
                      <div className={`h-8 w-8 rounded-full bg-${activity.color}/10 flex items-center justify-center mt-0.5`}>
                        {activity.icon}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                  </CardContent>
                </Card>
                
                <Card className="lg:col-span-3 border border-[#FF5A5F]/20 shadow-sm">
                  <CardHeader className="border-b border-[#FF5A5F]/10 bg-gradient-to-r from-[#FF5A5F]/5 to-transparent">
                  <CardTitle className="text-[#FF5A5F]">Upcoming Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-4">
                  {[
                    {
                    title: "Mentor Session: Code Review",
                    with: "Sarah Johnson",
                    date: "Tomorrow",
                    time: "3:00 PM - 4:00 PM",
                    color: "#087E8B"
                    },
                    {
                    title: "Group Workshop: API Design",
                    with: "Michael Chen & 5 others",
                    date: "Friday, Jun 12",
                    time: "1:00 PM - 2:30 PM",
                    color: "#FF5A5F"
                    },
                    {
                    title: "Career Strategy Session",
                    with: "Emily Rodriguez",
                    date: "Monday, Jun 15",
                    time: "11:00 AM - 12:00 PM",
                    color: "#087E8B"
                    }
                  ].map((session, index) => (
                    <div key={index} className={`flex flex-col space-y-2 rounded-lg border border-${session.color}/20 p-3 hover:shadow-md transition-all bg-gradient-to-r from-${session.color}/5 to-transparent`}>
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{session.title}</p>
                        <Badge variant="outline" className={`text-xs border-${session.color}/30 bg-${session.color}/10 text-${session.color}`}>
                          {session.date}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className={`mr-1 h-3 w-3 text-${session.color}`} />
                        <span>{session.with}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className={`mr-1 h-3 w-3 text-${session.color}`} />
                        <span>{session.time}</span>
                      </div>
                      <Button variant="outline" size="sm" className={`mt-2 border-${session.color} text-${session.color} hover:bg-${session.color}/10 hover:text-${session.color}`}>
                        View Details
                      </Button>
                    </div>
                  ))}
                  <Button className="w-full gap-1 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white transition-colors">
                    <Plus className="h-4 w-4" /> Schedule Session
                  </Button>
                  </CardContent>
                </Card>
                </div>
              
              {/* Recommended Resources */}
                <Card className="border border-[#087E8B]/20 shadow-sm hover:shadow-md transition-all">
                <CardHeader className="border-b border-[#087E8B]/10 bg-gradient-to-r from-[#087E8B]/5 to-transparent">
                  <CardTitle className="text-[#087E8B]">Recommended Resources</CardTitle>
                  <CardDescription>
                  Based on your learning progress and career goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                    title: "Advanced React Patterns",
                    type: "Course",
                    provider: "TechAcademy",
                    image: "/placeholder.svg?height=100&width=200",
                    duration: "8 hours",
                    color: "#087E8B"
                    },
                    {
                    title: "Building RESTful APIs with Node.js",
                    type: "Workshop",
                    provider: "CodeMasters",
                    image: "/placeholder.svg?height=100&width=200",
                    duration: "4 hours",
                    color: "#FF5A5F"
                    },
                    {
                    title: "Frontend Architecture Best Practices",
                    type: "eBook",
                    provider: "Web Design Press",
                    image: "/placeholder.svg?height=100&width=200",
                    duration: "240 pages",
                    color: "#087E8B"
                    }
                  ].map((resource, index) => (
                    <Card key={index} className={`overflow-hidden border border-${resource.color}/20 hover:border-${resource.color}/40 transition-all shadow-sm`}>
                    <div className="aspect-video overflow-hidden relative">
                      <div className={`absolute top-2 right-2 z-10`}>
                      <Badge className={`bg-${resource.color} text-white hover:bg-${resource.color}/90`}>
                        {resource.type}
                      </Badge>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t from-${resource.color}/80 to-transparent opacity-20 z-0`}></div>
                      <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      width={200}
                      height={100}
                      className="h-full w-full object-cover transition-all duration-300 hover:scale-105 z-0"
                      />
                    </div>
                    <CardHeader className={`p-3 border-b border-${resource.color}/10`}>
                      <CardTitle className={`text-base text-${resource.color}`}>{resource.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1 text-xs mt-1">
                        <Clock className={`h-3 w-3 text-${resource.color}`} />
                        <span>{resource.duration} • {resource.provider}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-3 pt-2">
                      <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full border-${resource.color} text-${resource.color} hover:bg-${resource.color}/10 hover:text-${resource.color}`}
                      >
                      View Resource
                      </Button>
                    </CardFooter>
                    </Card>
                  ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 pb-4">
                  <Link href="/resources" className="w-full">
                  <Button className="w-full gap-1 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white transition-colors shadow-sm">
                    View All Resources <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                  </Link>
                </CardFooter>
                </Card>
            </TabsContent>
            
            {/* Roadmap Tab */}
            <TabsContent value="roadmap" className="space-y-4">
              <Card className="border border-[#087E8B]/20 shadow-sm hover:shadow-md transition-all">
                <CardHeader className="border-b border-[#087E8B]/10 bg-gradient-to-r from-[#087E8B]/5 to-transparent">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-[#087E8B] font-bold text-xl">Full Stack Developer Roadmap</CardTitle>
                      <CardDescription>
                        Your personalized learning journey
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-3 bg-white/50 p-2 rounded-lg shadow-sm">
                      <span className="text-sm font-semibold text-[#FF5A5F]">35% Complete</span>
                      <Progress value={35} className="w-[100px] h-3 bg-[#087E8B]/10 [--progress-foreground:#FF5A5F]" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8 pt-6">
                  {[
                    {
                      name: "Foundation",
                      status: "completed",
                      progress: 100,
                      skills: ["HTML/CSS", "JavaScript Basics", "Git & GitHub", "Command Line"],
                      color: "#FF5A5F"
                    },
                    {
                      name: "Frontend Development",
                      status: "in-progress",
                      progress: 60,
                      skills: ["React", "State Management", "CSS Frameworks", "Frontend Testing"],
                      color: "#087E8B"
                    },
                    {
                      name: "Backend Development",
                      status: "upcoming",
                      progress: 0,
                      skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
                      color: "#087E8B"
                    },
                    {
                      name: "Database Management",
                      status: "upcoming",
                      progress: 0,
                      skills: ["SQL", "MongoDB", "Database Design", "ORM/ODM"],
                      color: "#FF5A5F"
                    },
                    {
                      name: "DevOps & Deployment",
                      status: "upcoming",
                      progress: 0,
                      skills: ["CI/CD", "Docker", "Cloud Services", "Performance Optimization"],
                      color: "#087E8B"
                    }
                  ].map((stage, index) => (
                    <div key={index} className="relative">
                      {/* Timeline connector */}
                      {index < 4 && (
                        <div className={`absolute left-6 top-10 bottom-0 w-1 ${
                          stage.status === 'completed' ? 'bg-[#FF5A5F]' :
                          stage.status === 'in-progress' ? 'bg-gradient-to-b from-[#FF5A5F] to-[#087E8B]/40' :
                          'bg-gray-200'
                        } h-full`} />
                      )}
                      
                      <div className="flex gap-6">
                        <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 shadow-lg ${
                          stage.status === 'completed' ? 'bg-gradient-to-br from-[#FF5A5F] to-[#FF5A5F]/80 border-[#FF5A5F]/20 text-white' :
                          stage.status === 'in-progress' ? 'bg-gradient-to-br from-[#087E8B] to-[#087E8B]/80 border-[#087E8B]/20 text-white' :
                          'bg-gray-100 border-gray-200 text-gray-400'
                        }`}>
                          {stage.status === 'completed' ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <span className="text-lg font-bold">{index + 1}</span>
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <div className={`rounded-xl border ${
                            stage.status === 'completed' ? 'border-[#FF5A5F]/20 bg-gradient-to-br from-white to-[#FF5A5F]/5' :
                            stage.status === 'in-progress' ? 'border-[#087E8B]/20 bg-gradient-to-br from-white to-[#087E8B]/5' :
                            'border-gray-100 bg-gray-50/50'
                          } p-5 transition-all hover:shadow-md`}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <h3 className={`text-lg font-bold ${
                                  stage.status === 'completed' ? 'text-[#FF5A5F]' :
                                  stage.status === 'in-progress' ? 'text-[#087E8B]' :
                                  'text-gray-700'
                                }`}>{stage.name}</h3>
                                <Badge className={`${
                                  stage.status === 'completed' ? 'bg-[#FF5A5F]/15 text-[#FF5A5F] border border-[#FF5A5F]/30' :
                                  stage.status === 'in-progress' ? 'bg-[#087E8B]/15 text-[#087E8B] border border-[#087E8B]/30' :
                                  'bg-gray-100 text-gray-500 border border-gray-200'
                                }`}>
                                  {stage.status === 'completed' ? 'Completed' :
                                   stage.status === 'in-progress' ? 'In Progress' :
                                   'Upcoming'}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-sm font-medium ${
                                  stage.status === 'completed' ? 'text-[#FF5A5F]' :
                                  stage.status === 'in-progress' ? 'text-[#087E8B]' :
                                  'text-gray-500'
                                }`}>{stage.progress}%</span>
                                <Progress value={stage.progress} className={`w-[120px] h-3 bg-gray-100 rounded-full ${
                                  stage.status === 'completed' ? '[--progress-foreground:#FF5A5F]' :
                                  stage.status === 'in-progress' ? '[--progress-foreground:#087E8B]' :
                                  '[--progress-foreground:#E2E2E2]'
                                }`} />
                              </div>
                            </div>
                            
                            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                              {stage.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className={`flex items-center gap-3 rounded-lg py-3 px-4 ${
                                  stage.status === 'completed' ? 'bg-[#FF5A5F]/10 border border-[#FF5A5F]/20' :
                                  stage.status === 'in-progress' && skillIndex < 2 ? 'bg-[#087E8B]/10 border border-[#087E8B]/20' :
                                  stage.status === 'in-progress' ? 'bg-gray-100 border border-gray-200' :
                                  'bg-gray-50 border border-gray-100'
                                }`}>
                                  {stage.status === 'completed' ? (
                                    <CheckCircle className="h-5 w-5 text-[#FF5A5F]" />
                                  ) : stage.status === 'in-progress' && skillIndex < 2 ? (
                                    <CheckCircle className="h-5 w-5 text-[#087E8B]" />
                                  ) : (
                                    <div className={`h-5 w-5 rounded-full flex items-center justify-center border-2 ${
                                      stage.status === 'in-progress' ? 'border-[#087E8B]/60' : 'border-gray-300'
                                    }`} />
                                  )}
                                  <span className={`font-medium ${
                                    stage.status === 'completed' ? 'text-[#FF5A5F]/90' :
                                    stage.status === 'in-progress' && skillIndex < 2 ? 'text-[#087E8B]/90' :
                                    stage.status === 'in-progress' ? 'text-gray-600' : 
                                    'text-gray-500'
                                  }`}>{skill}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-5">
                              <Button 
                                className={`${
                                  stage.status === 'completed' ? 'bg-[#FF5A5F] hover:bg-[#FF5A5F]/90' :
                                  stage.status === 'in-progress' ? 'bg-[#087E8B] hover:bg-[#087E8B]/90' :
                                  'bg-gray-200 hover:bg-gray-300 text-gray-600'
                                } text-white shadow-md hover:shadow-lg transition-all`} 
                                disabled={stage.status === 'upcoming'}
                              >
                                {stage.status === 'completed' ? 'Review Materials' :
                                 stage.status === 'in-progress' ? 'Continue Learning' :
                                 'Start Learning'}
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="bg-gradient-to-r from-[#087E8B]/10 to-transparent border-t border-[#087E8B]/20 pt-6">
                  <Link href="/roadmap" className="w-full">
                    <Button className="w-full gap-2 bg-gradient-to-r from-[#FF5A5F] to-[#FF5A5F]/90 hover:from-[#FF5A5F]/90 hover:to-[#FF5A5F]/80 text-white shadow-md hover:shadow-lg transition-all">
                      View Detailed Roadmap <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Mentors Tab */}
            <TabsContent value="mentors" className="space-y-4">
              <Card className="border border-[#087E8B]/20 shadow-sm hover:shadow-md transition-all">
                <CardHeader className="border-b border-[#087E8B]/10 bg-gradient-to-r from-[#087E8B]/5 to-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-[#087E8B] font-bold text-xl">Your Mentors</CardTitle>
                      <CardDescription>
                        Connect with industry professionals to accelerate your growth
                      </CardDescription>
                    </div>
                    <Button className="gap-2 bg-gradient-to-r from-[#FF5A5F] to-[#FF5A5F]/90 hover:bg-[#FF5A5F]/90 text-white shadow-md">
                      <Plus className="h-4 w-4" /> Find New Mentor
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                    name: "Sarah Johnson",
                    role: "Senior Full Stack Developer at TechCorp",
                    image: "/placeholder.svg?height=100&width=100",
                    focus: "Frontend Architecture",
                    nextSession: "Tomorrow, 3:00 PM",
                    color: "#087E8B",
                    skills: ["React", "UI/UX", "Architecture", "Testing"]
                    },
                    {
                    name: "Michael Chen",
                    role: "Lead Developer at WebSolutions",
                    image: "/placeholder.svg?height=100&width=100",
                    focus: "Backend Development",
                    nextSession: "Friday, Jun 12, 1:00 PM",
                    color: "#FF5A5F",
                    skills: ["Node.js", "API Design", "Databases", "Performance"]
                    },
                    {
                    name: "Emily Rodriguez",
                    role: "Full Stack Architect at InnovateTech",
                  nextSession: "Monday, Jun 15, 11:00 AM",
                  color: "#087E8B"
                  }
                ].map((mentor, index) => (
                  <Card key={index} className={`overflow-hidden border border-${mentor.color}/20 hover:border-${mentor.color}/40 shadow-sm hover:shadow-md transition-all`}>
                    <div className={`h-2 w-full bg-${mentor.color}`}></div>
                    <CardHeader className="pb-2 pt-4">
                      <div className="flex items-center gap-4">
                      <Avatar className={`h-16 w-16 ring-2 ring-${mentor.color} ring-offset-2 shadow-md`}>
                        <AvatarImage src={mentor.image} alt={mentor.name} />
                        <AvatarFallback className={`bg-${mentor.color}/10 text-${mentor.color} font-medium`}>
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{mentor.name}</CardTitle>
                        <CardDescription className="text-xs">
                        {mentor.role}
                        </CardDescription>
                        <Badge variant="outline" className={`mt-1 text-xs border-${mentor.color}/30 bg-${mentor.color}/10 text-${mentor.color}`}>
                        {mentor.focus}
                        </Badge>
                      </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className={`rounded-lg border border-${mentor.color}/20 bg-${mentor.color}/5 p-3 flex items-center gap-2 shadow-sm`}>
                      <Calendar className={`h-4 w-4 text-${mentor.color}`} />
                      <div className="flex-1">
                        <div className="text-xs font-medium">Next Session</div>
                        <div className="text-sm">{mentor.nextSession}</div>
                      </div>
                      <Button size="sm" variant="ghost" className={`h-8 w-8 p-0 text-${mentor.color}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      </div>
                      
                      <div className="mt-4 space-y-1">
                      <div className="text-xs font-medium">Expertise</div>
                      <div className="flex flex-wrap gap-1">
                        {["React", "Node.js", "UI/UX", "Architecture"].slice(0, index + 2).map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                        ))}
                      </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 pt-2">
                      <Button 
                      variant="outline" 
                      size="sm" 
                      className={`flex-1 gap-1 border-${mentor.color} text-${mentor.color} hover:bg-${mentor.color}/10 hover:text-${mentor.color}`}
                      >
                      <MessageSquare className="h-4 w-4" /> Message
                      </Button>
                      <Button 
                      size="sm" 
                      className={`flex-1 gap-1 bg-${mentor.color} hover:bg-${mentor.color}/90 text-white`}
                      >
                      <Calendar className="h-4 w-4" /> Schedule
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                </div>
              </CardContent>
              <CardFooter className="bg-gradient-to-r from-[#FF5A5F]/5 to-transparent border-t border-[#FF5A5F]/10 pt-4">
                <Link href="/mentors" className="w-full">
                <Button className="w-full gap-1 bg-[#087E8B] hover:bg-[#087E8B]/90 text-white shadow-sm transition-colors">
                  Find More Mentors <ArrowRight className="h-4 w-4" />
                </Button>
                </Link>
              </CardFooter>
              </Card>
            </TabsContent>

                               
                                {/* Resources Tab */}
                                <TabsContent value="resources" className="space-y-4">
                                  <Card className="border border-[#087E8B]/20 shadow-sm hover:shadow-md transition-all">
                                    <CardHeader className="border-b border-[#087E8B]/10 bg-gradient-to-r from-[#087E8B]/5 to-transparent">
                                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                          <CardTitle className="text-[#087E8B]">Learning Resources</CardTitle>
                                          <CardDescription>
                                            Curated content to help you advance your skills
                                          </CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Button className="gap-1 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white shadow-sm transition-colors">
                                            <Plus className="h-4 w-4 mr-1" /> Save Resource
                                          </Button>
                                        </div>
                                      </div>
                                    </CardHeader>
                                    <CardContent>
                                      <Tabs defaultValue="all" className="space-y-4">
                                        <TabsList className="bg-[#087E8B]/10 border border-[#087E8B]/20">
                                          <TabsTrigger value="all" className="data-[state=active]:bg-[#087E8B] data-[state=active]:text-white">All</TabsTrigger>
                                          <TabsTrigger value="courses" className="data-[state=active]:bg-[#087E8B] data-[state=active]:text-white">Courses</TabsTrigger>
                                          <TabsTrigger value="books" className="data-[state=active]:bg-[#087E8B] data-[state=active]:text-white">Books</TabsTrigger>
                                          <TabsTrigger value="articles" className="data-[state=active]:bg-[#087E8B] data-[state=active]:text-white">Articles</TabsTrigger>
                                          <TabsTrigger value="videos" className="data-[state=active]:bg-[#087E8B] data-[state=active]:text-white">Videos</TabsTrigger>
                                        </TabsList>
                                        
                                        <TabsContent value="all" className="space-y-4">
                                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                            {Array.from({ length: 6 }).map((_, index) => (
                                              <Card key={index} className={`overflow-hidden border border-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/20 hover:border-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/40 shadow-sm hover:shadow-md transition-all`}>
                                                <div className="aspect-video overflow-hidden relative">
                                                  <div className="absolute top-2 right-2 z-10">
                                                    <Badge className={`bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'} text-white hover:bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/90`}>
                                                      {["Course", "eBook", "Video", "Workshop", "Article", "Course"][index % 6]}
                                                    </Badge>
                                                  </div>
                                                  <div className={`absolute inset-0 bg-gradient-to-t from-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/50 to-transparent opacity-20 z-0`}></div>
                                                  <Image
                                                    src={`/placeholder.svg?height=100&width=200&text=Resource ${index + 1}`}
                                                    alt={`Resource ${index + 1}`}
                                                    width={200}
                                                    height={100}
                                                    className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
                                                  />
                                                </div>
                                                <CardHeader className={`p-3 border-b border-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/10`}>
                                                  <div className="flex justify-between items-start">
                                                    <CardTitle className={`text-base text-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}`}>
                                                      {["Advanced React Patterns", "Node.js Microservices", "CSS Architecture", "TypeScript Deep Dive", "GraphQL Fundamentals", "Web Performance Optimization"][index % 6]}
                                                    </CardTitle>
                                                  </div>
                                                  <CardDescription className="flex items-center gap-1 text-xs mt-1">
                                                    <Clock className={`h-3 w-3 text-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}`} />
                                                    <span>{["8 hours", "320 pages", "1.5 hours", "4 hours", "15 min read", "6 hours"][index % 6]} • </span>
                                                    <span className="font-medium">{["TechAcademy", "Code Publishing", "YouTube", "WorkshopPro", "Dev.to", "FrontendMasters"][index % 6]}</span>
                                                  </CardDescription>
                                                </CardHeader>
                                                <CardFooter className="p-3 pt-2 flex gap-2">
                                                  <Button 
                                                    variant="outline" 
                                                    size="sm" 
                                                    className={`flex-1 border-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'} text-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'} hover:bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/10 hover:text-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}`}
                                                  >
                                                    <BookOpen className="h-4 w-4 mr-1" /> Preview
                                                  </Button>
                                                  <Button 
                                                    size="sm" 
                                                    className={`flex-1 bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'} hover:bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/90 text-white shadow-sm`}
                                                  >
                                                    Start Learning
                                                  </Button>
                                                </CardFooter>
                                              </Card>
                                            ))}
                                          </div>
                                          <div className="flex justify-center">
                                            <Button variant="outline" className="border-[#087E8B] text-[#087E8B] hover:bg-[#087E8B]/10">
                                              Load More Resources
                                            </Button>
                                          </div>
                                        </TabsContent>
                                        
                                        {["courses", "books", "articles", "videos"].map((tab, index) => (
                                          <TabsContent key={tab} value={tab}>
                                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                              <div className={`h-20 w-20 rounded-full bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/10 flex items-center justify-center mb-4`}>
                                                <BookOpen className={`h-10 w-10 text-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}`} />
                                              </div>
                                              <h3 className="mt-2 text-lg font-medium text-foreground">No {tab} saved yet</h3>
                                              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                                                Browse our curated catalog and save {tab} that interest you to build your personalized library
                                              </p>
                                              <Button className={`mt-6 bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'} hover:bg-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}/90 text-white shadow-sm transition-colors`}>
                                                Browse {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                              </Button>
                                            </div>
                                          </TabsContent>
                                        ))}
                                      </Tabs>
                                    </CardContent>
                                    <CardFooter className="bg-gradient-to-r from-[#FF5A5F]/5 to-transparent border-t border-[#FF5A5F]/10 pt-4">
                                      <Link href="/resources" className="w-full">
                                        <Button className="w-full gap-1 bg-[#087E8B] hover:bg-[#087E8B]/90 text-white shadow-sm transition-colors">
                                          Explore All Resources <ArrowRight className="h-4 w-4 ml-1" />
                                        </Button>
                                      </Link>
                                    </CardFooter>
                                  </Card>
                                </TabsContent>
                                </Tabs>
                              </div>
                              </section>
                            </div>
                            )
                          }