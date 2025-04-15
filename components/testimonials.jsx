"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const testimonials = [
    {
      quote:
        "MemoTag has completely transformed how I care for my mother with Alzheimer's. The real-time alerts give me peace of mind, and the cognitive tracking helps me understand her condition better.",
      name: "Sarah Johnson",
      role: "Family Caregiver",
    },
    {
      quote:
        "As a neurologist, I've recommended MemoTag to dozens of families. The data it provides is invaluable for tracking disease progression and adjusting care plans accordingly.",
      name: "Dr. Michael Chen",
      role: "Neurologist",
    },
    {
      quote:
        "Our memory care facility implemented MemoTag across all residents, and we've seen a 40% reduction in wandering incidents and significantly improved response times to emergencies.",
      name: "Lisa Rodriguez",
      role: "Memory Care Director",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            What Our Users Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300">
            Hear from caregivers, healthcare professionals, and families who have experienced the difference MemoTag
            makes.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative max-w-4xl mx-auto"
        >
          <div className="testimonial-card">
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-primary opacity-50" />
            </div>
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-center mb-8"
            >
              "{testimonials[currentIndex].quote}"
            </motion.p>
            <div className="text-center">
              <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
