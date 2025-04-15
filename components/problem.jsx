"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, AlertTriangle, Clock } from "lucide-react"

export default function Problem() {
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

  const stats = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      value: "55M+",
      label: "People Living with Dementia",
      description: "Worldwide, with numbers doubling every 20 years",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-primary" />,
      value: "60%",
      label: "Wandering Risk",
      description: "Of dementia patients will wander at least once",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      value: "240+",
      label: "Hours Monthly",
      description: "Average time caregivers spend on dementia care",
    },
  ]

  return (
    <section id="problem" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
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
            The Challenge
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Dementia Care: A Growing Global Crisis
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300">
            Dementia affects millions worldwide, creating immense challenges for patients, caregivers, and healthcare
            systems. Current solutions fail to address the complex needs of dementia care.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="stats-item">
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
              <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 text-center">
            The Diagnosis Gap
          </motion.h3>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 dark:text-red-400 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Only 1 in 4</span> people with dementia receive a formal diagnosis
                    worldwide
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 dark:text-red-400 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">75% of people</span> with dementia are undiagnosed, leading to lack
                    of proper care
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 dark:text-red-400 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Average delay of 2-3 years</span> between symptom onset and
                    diagnosis
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 h-[200px] md:h-[250px] relative">
              <div className="w-full h-full bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">Diagnosis Rate</h4>
                  <div className="relative h-40 w-40 mx-auto">
                    <div className="absolute inset-0 rounded-full border-8 border-gray-200 dark:border-gray-700"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent border-r-transparent border-b-transparent transform -rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
