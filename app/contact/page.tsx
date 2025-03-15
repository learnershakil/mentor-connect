"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#087E8B]/90 to-[#087E8B]/70 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Have questions or feedback? We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#087E8B]">Contact Information</h2>
                <p className="text-muted-foreground md:text-lg">
                  Reach out to us through any of these channels or fill out the contact form.
                </p>
              </div>

              <div className="grid gap-5 md:gap-6">
                <Card className="border-l-4 border-l-[#087E8B] shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[#FF5A5F]" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">info@mentorconnect.com</CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#087E8B] shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-[#FF5A5F]" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">+1 (555) 123-4567</CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#087E8B] shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#FF5A5F]" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      123 Innovation Street
                      <br />
                      Tech City, TC 10101
                      <br />
                      United States
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4 bg-[#087E8B]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#087E8B]">Office Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="bg-[#087E8B]/10 px-3 py-1 rounded-full text-[#087E8B]">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="bg-[#087E8B]/10 px-3 py-1 rounded-full text-[#087E8B]">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="bg-[#FF5A5F]/10 px-3 py-1 rounded-full text-[#FF5A5F]">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#087E8B] to-[#FF5A5F]"></div>
                <CardHeader className="bg-gradient-to-r from-[#087E8B]/5 to-white">
                  <CardTitle className="text-[#087E8B]">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="mb-4 rounded-full bg-[#087E8B]/10 p-4">
                        <CheckCircle className="h-8 w-8 text-[#087E8B]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#087E8B]">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We&apos;ll respond to your inquiry shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" placeholder="John" required className="focus-visible:ring-[#087E8B]" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" placeholder="Doe" required className="focus-visible:ring-[#087E8B]" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required className="focus-visible:ring-[#087E8B]" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select>
                          <SelectTrigger className="focus:ring-[#087E8B]">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="mentorship">Mentorship Question</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="How can we help you?" 
                          className="min-h-[120px] focus-visible:ring-[#087E8B]" 
                          required 
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full gap-2 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white"
                      >
                        Send Message <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#087E8B]/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#087E8B]">Visit Our Office</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">We&apos;re located in the heart of Tech City.</p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-8">
            <div className="overflow-hidden rounded-xl border-4 border-white shadow-xl">
              <div className="relative w-full h-full bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.9347158497482!2d75.70348427481661!3d31.25609997462454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1715308599926!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lovely Professional University Map"
                ></iframe>
                <div className="absolute bottom-3 right-3 bg-white p-3 rounded-lg shadow-lg text-sm">
                  <strong className="text-[#087E8B]">Lovely Professional University</strong><br />
                  Jalandhar - Delhi GT Road, Phagwara, Punjab
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#087E8B]">Frequently Asked Questions</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">Find quick answers to common questions.</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {[
              {
                question: "How do I sign up for Mentor Connect?",
                answer:
                  "You can sign up by clicking the 'Sign Up' button in the top navigation and following the registration process.",
              },
              {
                question: "Is Mentor Connect free to use?",
                answer:
                  "We offer both free and premium plans. The basic mentorship matching is free, while advanced features require a subscription.",
              },
              {
                question: "How are mentors vetted?",
                answer:
                  "All mentors go through a thorough application process, including verification of professional experience and background checks.",
              },
              {
                question: "Can I become a mentor?",
                answer:
                  "Yes! If you have industry experience and want to give back, we welcome you to apply as a mentor through our platform.",
              },
            ].map((faq, index) => (
              <Card key={index} className={`group hover:shadow-md transition-all border-t-4 border-t-${index % 2 === 0 ? '[#087E8B]' : '[#FF5A5F]'}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-[#087E8B] transition-colors">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
