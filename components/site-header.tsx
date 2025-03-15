"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b border-[#087E8B]/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
      scrolled ? "shadow-md shadow-[#087E8B]/10" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
        <span className="text-xl font-bold bg-gradient-to-r from-[#087E8B] to-[#FF5A5F] bg-clip-text text-transparent">
          Mentor Connect
        </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`relative px-1 py-2 text-sm font-medium transition-colors hover:text-[#087E8B] ${
          isActive(route.href) ? "text-[#087E8B]" : "text-muted-foreground"
          }`}
        >
          {route.label}
          {isActive(route.href) && (
          <span className="absolute left-0 -bottom-[1px] h-0.5 w-full bg-gradient-to-r from-[#087E8B] to-[#FF5A5F]" />
          )}
        </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <Link href="/sign-in">
        <Button variant="ghost" size="sm" className="font-medium hover:text-[#FF5A5F] hover:bg-[#FF5A5F]/10">
          Sign In
        </Button>
        </Link>
        <Link href="/sign-up">
        <Button size="sm" className="font-medium bg-[#087E8B] hover:bg-[#087E8B]/90 text-white shadow-sm hover:shadow transition-all">
          Sign Up
        </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        className="transition-all duration-200 hover:bg-[#087E8B]/10"
        >
        {isMenuOpen ? <X className="h-5 w-5 text-[#FF5A5F]" /> : <Menu className="h-5 w-5 text-[#087E8B]" />}
        </Button>
      </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
        className="md:hidden border-t border-[#087E8B]/20"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        >
        <div className="container py-4 grid gap-4">
          {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`text-sm font-medium transition-colors hover:text-[#087E8B] flex items-center px-2 py-2 rounded-md ${
            isActive(route.href) 
              ? "text-[#087E8B] bg-[#087E8B]/10" 
              : "text-muted-foreground hover:bg-muted/50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {route.label}
          </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3 mt-1 border-t border-[#087E8B]/20">
          <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start font-medium text-[#FF5A5F] hover:bg-[#FF5A5F]/10">
            Sign In
            </Button>
          </Link>
          <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full justify-start font-medium bg-[#087E8B] hover:bg-[#087E8B]/90 text-white">Sign Up</Button>
          </Link>
          </div>
        </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  )
}
