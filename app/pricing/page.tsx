import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      description: "Basic mentorship matching for students",
      price: "$0",
      duration: "forever",
      features: [
        "Access to skill selector tool",
        "Basic career roadmap",
        "Community forum access",
        "1 mentor match per month",
        "Email support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      description: "Enhanced mentorship for serious career growth",
      price: "$19",
      duration: "per month",
      features: [
        "Everything in Free plan",
        "Unlimited mentor matches",
        "Detailed career roadmaps",
        "1-on-1 mentorship sessions",
        "Resume & portfolio reviews",
        "Priority email support",
      ],
      popular: true,
      buttonText: "Get Started",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for organizations",
      price: "Custom",
      duration: "pricing",
      features: [
        "Everything in Pro plan",
        "Custom mentorship programs",
        "Dedicated account manager",
        "Group mentorship sessions",
        "Custom analytics dashboard",
        "API access",
        "24/7 phone & email support",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Choose the plan that&apos;s right for your career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : "border shadow"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    {plan.price}
                    <span className="ml-1 text-xl font-medium text-muted-foreground">/{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/sign-up"} className="w-full">
                    <Button variant={plan.buttonVariant} className="w-full">
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Find answers to common questions about our pricing and plans.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {[
              {
                question: "Can I cancel my subscription at any time?",
                answer:
                  "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
              },
              {
                question: "Is there a discount for annual billing?",
                answer: "Yes, we offer a 20% discount when you choose annual billing for the Pro plan.",
              },
              {
                question: "Do you offer student discounts?",
                answer:
                  "Yes, we offer a 50% discount for verified students. Contact our support team with your student ID for verification.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "Yes, we offer a 14-day free trial of the Pro plan so you can experience all the premium features before committing.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Enterprise Solutions</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Custom mentorship programs for organizations of all sizes.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Custom mentorship matching for your team",
                  "Dedicated account management",
                  "Detailed analytics and reporting",
                  "Custom integration with your existing systems",
                  "Bulk discounts for larger teams",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="gap-1.5">
                    Contact Sales <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl border bg-muted/50 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Companies that trust us</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex h-20 items-center justify-center rounded-md bg-background p-4">
                      <div className="text-center text-sm font-medium text-muted-foreground">Company Logo</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-background p-4">
                <blockquote className="italic text-muted-foreground">
                  &quot;Implementing Mentor Connect&apos;s enterprise solution has significantly improved our onboarding process
                  and employee retention. The ROI has been exceptional.&quot;
                </blockquote>
                <div className="mt-2 text-sm font-medium">— CTO, Fortune 500 Tech Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to accelerate your career?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
                Join thousands of professionals who have transformed their careers with Mentor Connect.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

