"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md overflow-hidden rounded-xl border-none shadow-2xl transition-all duration-300">
        <div className="h-2.5 bg-gradient-to-r from-[#087E8B] to-[#FF5A5F]" />
        <CardHeader className="space-y-4 pb-6 pt-8">
          <div className="flex items-center justify-center pb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#087E8B] to-[#FF5A5F] p-4 text-white shadow-lg transform transition-transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <CardTitle className="text-center text-2xl font-extrabold tracking-tight text-[#087E8B]">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Sign in to continue your mentoring journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 px-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                required 
                className="border-gray-200 rounded-md transition-all focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20" 
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                <Link href="/forgot-password" className="text-xs font-medium text-[#FF5A5F] transition-colors hover:text-[#087E8B]">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                className="border-gray-200 rounded-md transition-all focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20" 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#087E8B] to-[#087E8B] hover:from-[#087E8B] hover:to-[#FF5A5F] text-white font-medium py-2.5 rounded-md shadow-md transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-[#087E8B]/50 mt-2" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6">
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-semibold text-[#FF5A5F] transition-all hover:text-[#087E8B] hover:underline">
              Sign up now
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

