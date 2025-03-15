import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook className="h-5 w-5" />
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-5 w-5" />
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />
  }
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Find a Mentor", href: "/mentors" },
  { name: "Become a Mentor", href: "/become-mentor" }
]

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Support", href: "/support" },
  { name: "Community", href: "/community" }
]

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/30 dark:border-slate-800 dark:from-background dark:to-slate-900/30">
      <div className="container px-4 py-16 md:px-6 lg:py-24">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              {/* Logo with brand colors */}
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#087E8B] to-[#FF5A5F]"></div>
              <h3 className="text-xl font-bold tracking-tight text-[#087E8B]">Mentor Connect</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Connecting students with industry mentors to accelerate career growth and professional development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="rounded-full bg-slate-100 p-2 text-[#087E8B] transition-colors hover:bg-[#FF5A5F]/10 hover:text-[#FF5A5F] dark:bg-slate-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold tracking-tight text-[#087E8B]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-[#FF5A5F]">
                    <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold tracking-tight text-[#087E8B]">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-[#FF5A5F]">
                    <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold tracking-tight text-[#087E8B]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#FF5A5F]" />
                <span className="text-sm text-muted-foreground">Lovely Professional University</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#FF5A5F]" />
                <span className="text-sm text-muted-foreground">+91 6283 415 167</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#FF5A5F]" />
                <span className="text-sm text-muted-foreground">info@mentorconnect.com</span>
              </li>
            </ul>
            
            <form className="mt-6">
              <h4 className="mb-2 text-sm font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]" 
                />
                <button 
                  type="submit" 
                  className="rounded-md bg-[#087E8B] px-3 py-2 text-sm font-medium text-white hover:bg-[#FF5A5F] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center space-y-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Mentor Connect. All rights reserved.</p>
          <div className="flex space-x-4 text-xs">
            <Link href="#" className="text-muted-foreground hover:text-[#FF5A5F]">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-[#FF5A5F]">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-[#FF5A5F]">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

