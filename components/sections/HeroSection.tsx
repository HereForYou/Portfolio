"use client"

import HeroLines from "@/public/assets/hero/hero-lines.png"
import dynamic from "next/dynamic"
import Image from "next/image"
import SocialLinks from "../SocialLinks"
import HeroContent from "./HeroContent"
const HeroTool = dynamic(() => import("./HeroTool"), { ssr: false })

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full relative z-[30] min-h-screen bg-baseBackground pt-[4.5rem]"
    >
      <Image
        className="w-[38rem] absolute top-[6.5rem] md:top-[50%] left-[50%] -translate-x-1/2 md:-translate-y-1/2 select-none pointer-events-none"
        alt="hero-background"
        src={HeroLines}
        priority
        aria-label="Hero Background Illustration"
      />
      <HeroTool />
      <HeroContent />
      <SocialLinks />
    </section>
  )
}
