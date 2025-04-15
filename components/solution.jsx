"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Watch, Brain, Bell, Activity, Smartphone, Shield } from "lucide-react"

export default function Solution() {
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

  const features = [
    {
      icon: <Watch className="h-10 w-10 text-primary" />,
      title: "Wearable Device",
      description: "Comfortable, discreet wearable that monitors vital signs and location in real-time",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Cognitive Assessment",
      description: "AI-powered analysis of cognitive patterns to detect early signs of decline",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Real-time Alerts",
      description: "Immediate notifications for wandering, falls, or unusual behavior patterns",
    },
    {
      icon: <Activity className="h-10 w-10 text-primary" />,
      title: "Health Monitoring",
      description: "Continuous tracking of vital signs and sleep patterns for comprehensive care",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Caregiver App",
      description: "Intuitive mobile application for monitoring and receiving alerts anywhere",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Data Security",
      description: "End-to-end encryption and HIPAA compliance for complete privacy protection",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Wear",
      description: "Patient wears the comfortable MemoTag device daily",
    },
    {
      number: "02",
      title: "Monitor",
      description: "Device tracks location, vital signs, and activity patterns",
    },
    {
      number: "03",
      title: "Analyze",
      description: "AI algorithms analyze data to detect patterns and anomalies",
    },
    {
      number: "04",
      title: "Alert",
      description: "Caregivers receive real-time notifications about important events",
    },
  ]

  return (
    <section id="solution" className="py-16 md:py-24">
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
            Our Solution
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            How MemoTag Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300">
            MemoTag combines wearable technology with advanced AI to provide comprehensive dementia care, giving
            caregivers peace of mind and patients greater independence.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="feature-card">
              <div className="mb-4 p-3 rounded-full bg-blue-100 dark:bg-blue-900">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
            The MemoTag Process
          </motion.h3>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
