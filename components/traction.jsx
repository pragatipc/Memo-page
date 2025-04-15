"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Building, Award, Heart } from "lucide-react"

export default function Traction() {
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

  const metrics = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      value: "5,000+",
      label: "Pre-Orders",
      description: "From caregivers and healthcare facilities",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      value: "25+",
      label: "Partner Facilities",
      description: "Leading eldercare and memory care centers",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      value: "3",
      label: "Innovation Awards",
      description: "For breakthrough technology in eldercare",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Among beta testing caregivers",
    },
  ]

  return (
    <section id="traction" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
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
            Our Traction
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Leading Eldercare Providers
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300">
            MemoTag is rapidly gaining adoption across the eldercare ecosystem, with strong partnerships and growing
            demand from caregivers worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants} className="stats-item">
              <div className="mb-4">{metric.icon}</div>
              <h3 className="text-4xl font-bold text-primary mb-2">{metric.value}</h3>
              <h4 className="text-xl font-semibold mb-2">{metric.label}</h4>
              <p className="text-gray-600 dark:text-gray-300">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
            Our Partners
          </motion.h3>
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <div className="h-16 w-32 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Partner {index + 1}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
