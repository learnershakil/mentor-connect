import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Mentor Connect helped me transition from a junior developer to a senior role in just 8 months. The guidance I received was invaluable.",
    },
    {
      name: "Sarah Chen",
      role: "Data Scientist",
      company: "DataViz",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Finding a mentor in AI was challenging until I discovered Mentor Connect. Now I'm working on cutting-edge projects thanks to my mentor's guidance.",
    },
    {
      name: "Michael Rodriguez",
      role: "UX Designer",
      company: "CreativeHub",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The personalized roadmap helped me focus on the right skills to develop. I've now landed my dream job at a top design agency.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Success stories from our community
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Hear from professionals who have transformed their careers with Mentor Connect.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-none shadow-md">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 -translate-x-1/4 -translate-y-1/4" />
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

