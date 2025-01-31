"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import SmartTradeBot from "@/public/assets/projects/Smart Trading Bot.jpg"
import Tele from "@/public/assets/projects/Telegram.png"
import Henlo from "@/public/assets/projects/henlo.png"
import NFT from "@/public/assets/projects/nftbid.png"
import VoiceNote from "@/public/assets/projects/voice-note.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Featured Projects
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>Good code is secure. Great code is decentralized.</div>
              <div>
                Development is not just about technology, it&apos;s about trust
                and innovation.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Explore more projects in{" "}
          <Link
            href="https://github.com/HereForYou"
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor navlink dark:hover:text-black"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  websiteUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart 🦊 Solana Trading Bot",
    description:
      "Ths is Solana Trading Bot that monitors token launch on Raydium dex and Pump.fun. Auto monitoring, lightning fast transactio execution are key features of this bot.",
    techStacks: ["solana/web3", "Typescript", "Telegram"],
    image: SmartTradeBot,
    websiteUrl: "https://web.telegram.org/a/#@Smart_SOL_Trading_Bot",
  },
  {
    id: 2,
    title: "Smart 🦊 Solana Arbitrage Bot",
    description:
      "Solana Arbitrage Bot on several dexes including Raydium AMM, CPMM and CLMM, Fluxbeam, Meteora AMM and DLMM, Orca Whirlpool and OpenbookV2.",
    techStacks: ["solana/web3", "Typescript", "Telegram"],
    image: NFT,
    websiteUrl: "https://web.telegram.org/a/#@Smart_SOL_Trading_Bot",
  },
  {
    id: 3,
    title: "Voice Notes",
    description:
      "Integrated with OpenAI, Firebase, Airtable, Deepgram, Google Auth and Google Sheets API. ",
    techStacks: ["Google API", "Next.JS", "OpenAI"],
    image: VoiceNote,
    websiteUrl: "https://touchbasewith.io/",
  },
  {
    id: 4,
    title: "Meme Token Presale Platform",
    description:
      "Developed the Henlo Token smart contract and a presale contract in Solidity, facilitating both private and public sales. ",
    techStacks: ["ReactJS", "Solidity", "web3"],
    image: Henlo,
    websiteUrl: "https://henlotoken.com/",
  },
  {
    id: 5,
    title: "Telegram Mini App",
    description:
      "This is a mini app for coin($HENLO) mining on Telegram. In this project, I was responsible for both frontend and backend development. I built the app using React and Express frameworks, along with the Telegram API",
    techStacks: ["NextJS", "Telegram", "web3"],
    image: Tele,
    websiteUrl: "https://t.me/HenloTokenbot/henlo",
  },
  {
    id: 6,
    title: "NFT MARKETPLACE",
    description:
      "NFTs are unique digital assets that represent ownership of a specific item or piece of content, such as art, music, videos, virtual real estate, and more, on a blockchain.",
    techStacks: ["solidity", "Next", "web3"],
    image: NFT,
    websiteUrl: "https://bidify.cloud",
  },
]
