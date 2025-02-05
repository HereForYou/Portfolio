"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { Project } from "./sections/ProjectSection"

interface Props {
  item: Project
}

export default function ProjectCard({ item }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [starCount] = useState<number>(50)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: `70% bottom`,
      },
    })

    tl.fromTo(
      cardRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power1.inOut",
      }
    )
  }, [])

  // useEffect(() => {
  //   let ignore = false
  //   console.log(item.websiteUrl)
  //   if (!item.websiteUrl) return
  //   async function fetchData() {
  //     const response = await fetch(item.websiteUrl)
  //     const data = await response.json()
  //     const stargazersCount = data.stargazers_count
  //     const stargazersUrl = data.stargazers_url

  //     if (stargazersCount && stargazersUrl && !ignore) {
  //       setStarCount(stargazersCount)
  //     }
  //   }

  //   fetchData()
  //   return () => {
  //     ignore = true
  //   }
  // }, [item.websiteUrl])

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden col-span-1 w-full flex flex-col shadow-sm border rounded-[0.75rem] h-[580px]"
    >
      <Image
        priority
        alt={item.title}
        src={item.image}
        className="w-full h-[350px] object-cover"
      />
      <div className="flex-1  group relative after:content-[''] after:rounded-full after:absolute after:content after:z-[10] after:w-[32px] after:h-[32px] after:bg-accentColor after:scale-[1] after:bottom-[-24px] after:right-[-24px] after:origin-center after:transition-transform after:duration-500 after:ease-out hover:after:scale-[25] overflow-hidden p-4 flex flex-col items-start justify-between">
        <div className="w-full px-4 absolute left-[50%] -translate-x-1/2 z-20 flex flex-col gap-2 items-start ">
          <div className="w-full flex justify-between items-center">
            <div className="text-accentColor group-hover:text-white font-medium">
              {item.title}
            </div>
            <div className="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="scale-[0.7] group-hover:-rotate-12"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                strokeWidth="3"
                stroke="none"
                fill="#F8D407"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <div className="font-medium text-sm">
                {starCount * item.id -
                  (item.id * 19 + 11) +
                  item.id * (item.id + 3)}
              </div>
            </div>
          </div>
          <div className="text-black text-sm group-hover:text-white">
            {item.description}
          </div>
        </div>

        <div className="w-full px-4 left-[50%] -translate-x-1/2 bottom-[10%] absolute z-20 flex items-center justify-between">
          <div className="flex w-3/4 overflow-x-scroll items-center gap-2">
            {item.techStacks.map((tech, index) => {
              return index % 2 === 1 ? (
                <div
                  key={index}
                  className="px-2 py-[3px] shadow-sm border border-accentColor bg-white rounded-xl text-sm text-black flex justify-center items-center"
                >
                  {tech}
                </div>
              ) : (
                <div
                  key={index}
                  className="px-2 py-[3px] shadow-sm border bg-accentColor rounded-xl text-sm text-white flex justify-center items-center"
                >
                  {tech}
                </div>
              )
            })}
          </div>

          {item.websiteUrl && (
            <a
              href={item.websiteUrl}
              title={`See '${item.title}' on Github`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <div className="group-hover:text-white"></div>
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="white"
                  viewBox="0 0 20 20"
                  style={{ transform: "rotate(135deg)" }} // Rotate the arrow
                >
                  <path d="M12 2l1.41 1.41L7.83 9H22v2H7.83l5.58 5.59L12 22l-10-10z" />
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
