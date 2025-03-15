"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle,  Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState("student")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (step < 3) {
      setStep(step + 1)
      return
    }

    setIsLoading(true)

    // Simulate registration delay
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <Card className="w-full max-w-md border-0 shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#087E8B] to-[#FF5A5F]"></div>
        <CardHeader className="space-y-2 pb-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-800">Create an account</CardTitle>
            <div className="flex items-center space-x-1 text-sm">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                  step >= 1 ? "bg-[#087E8B] text-white" : "border border-[#087E8B] text-[#087E8B]"
                }`}
              >
                {step > 1 ? <CheckCircle className="h-4 w-4" /> : 1}
              </span>
              <span className="h-px w-4 bg-[#087E8B]/30" />
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                  step >= 2 ? "bg-[#087E8B] text-white" : "border border-[#087E8B] text-[#087E8B]"
                }`}
              >
                {step > 2 ? <CheckCircle className="h-4 w-4" /> : 2}
              </span>
              <span className="h-px w-4 bg-[#087E8B]/30" />
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                  step >= 3 ? "bg-[#087E8B] text-white" : "border border-[#087E8B] text-[#087E8B]"
                }`}
              >
                3
              </span>
            </div>
          </div>
          <CardDescription className="text-[#087E8B] font-medium">
            {step === 1 && "Enter your details to create an account"}
            {step === 2 && "Tell us about your role and interests"}
            {step === 3 && "Set up your profile and preferences"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-gray-700">First name</Label>
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      required 
                      className="border-gray-300 focus-visible:ring-[#087E8B] focus-visible:border-[#087E8B]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-gray-700">Last name</Label>
                    <Input 
                      id="last-name" 
                      placeholder="Doe" 
                      required 
                      className="border-gray-300 focus-visible:ring-[#087E8B] focus-visible:border-[#087E8B]" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    className="border-gray-300 focus-visible:ring-[#087E8B] focus-visible:border-[#087E8B]" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    className="border-gray-300 focus-visible:ring-[#087E8B] focus-visible:border-[#087E8B]" 
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <Label className="text-gray-700 font-medium">I am a:</Label>
                  <RadioGroup defaultValue="student" value={accountType} onValueChange={setAccountType} className="mt-2">
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="student" id="student" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="student" className="font-medium">Student / Mentee</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="mentor" id="mentor" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="mentor" className="font-medium">Professional / Mentor</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="both" id="both" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="both" className="font-medium">Both</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <Label className="text-gray-700 font-medium">Primary area of interest:</Label>
                  <RadioGroup defaultValue="fullstack" className="mt-2">
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="fullstack" id="fullstack" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="fullstack" className="font-medium">Full Stack Development</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="mobile" id="mobile" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="mobile" className="font-medium">Mobile App Development</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="ai" id="ai" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="ai" className="font-medium">AI & Machine Learning</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="cybersecurity" id="cybersecurity" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="cybersecurity" className="font-medium">Cybersecurity</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <RadioGroupItem value="other" id="other" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="other" className="font-medium">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                {accountType === "mentor" || accountType === "both" ? (
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-gray-700">Years of professional experience:</Label>
                    <Input 
                      id="experience" 
                      type="number" 
                      min="0" 
                      placeholder="5" 
                      required 
                      className="border-gray-300 focus-visible:ring-[#087E8B] focus-visible:border-[#087E8B]" 
                    />
                  </div>
                ) : null}
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-gray-700">Short bio:</Label>
                  <textarea
                    id="bio"
                    className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B] focus-visible:border-[#087E8B]"
                    placeholder="Tell us a bit about yourself..."
                  />
                </div>

                <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <Label className="text-gray-700 font-medium">Communication preferences:</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <Checkbox id="email-updates" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="email-updates" className="text-sm">Email updates about new mentors</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <Checkbox id="resource-updates" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="resource-updates" className="text-sm">New learning resources in my field</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <Checkbox id="event-updates" className="text-[#087E8B] border-[#087E8B]" />
                      <Label htmlFor="event-updates" className="text-sm">Upcoming events and webinars</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required className="text-[#087E8B] border-[#087E8B]" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#FF5A5F] hover:underline font-medium">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#FF5A5F] hover:underline font-medium">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between pt-2">
              {step > 1 ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(step - 1)}
                  className="border-[#087E8B] text-[#087E8B] hover:bg-[#087E8B]/10"
                >
                  Back
                </Button>
              ) : (
                <div></div>
              )}

              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-[#087E8B] hover:bg-[#087E8B]/90 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : step < 3 ? (
                  "Continue"
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t pt-6 bg-gray-50">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#FF5A5F] font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

