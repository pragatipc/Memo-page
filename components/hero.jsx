"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-sm font-medium mb-4">
                The Future of Dementia Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">AI-Powered</span> Dementia Care Platform
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved
                ones with dementia.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="rounded-full text-md px-8">
                  <Link href="#contact">Pre-Order Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-md px-8">
                  <Link href="#contact">Request Demo</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center md:justify-start">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 flex items-center">
                  <span className="text-primary dark:text-blue-300 font-medium">As seen on Shark Tank India</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] float-animation">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl hero-gradient"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="MemoTag Wearable Device"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
