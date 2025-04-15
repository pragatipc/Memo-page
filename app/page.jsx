"use client"

import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Solution from "@/components/solution"
import Traction from "@/components/traction"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="min-h-screen gradient-bg">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Traction />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
