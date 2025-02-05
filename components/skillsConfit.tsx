import FluxBeam from "@/public/assets/skills/FluxBeam.jpg"
import Solana from "@/public/assets/skills/Solana.svg"
import Web3 from "@/public/assets/skills/Web3js.svg"
import Anchor from "@/public/assets/skills/anchor.svg"
import Golang from "@/public/assets/skills/golang.svg"
import GraphQL from "@/public/assets/skills/graphql.svg"
import Hardhat from "@/public/assets/skills/hardhat.svg"
import Javascript from "@/public/assets/skills/javascript.svg"
import MongoDB from "@/public/assets/skills/mongodb.svg"
import Next from "@/public/assets/skills/nextjs-icon.svg"
import React from "@/public/assets/skills/react.svg"
import Rust from "@/public/assets/skills/rust.svg"
import Solidity from "@/public/assets/skills/solidity-icon.svg"
import Tailwind from "@/public/assets/skills/tailwind.svg"
import Typescript from "@/public/assets/skills/typescript.svg"
import { StaticImageData } from "next/image"

export type Skill = {
  title: string
  category?: string
  icon: StaticImageData
  url?: string
}

export const skills: Skill[] = [
  { title: "Solana Web3", icon: Web3, category: "main" },
  { title: "Solana", icon: Solana, category: "main" },
  { title: "Rust", icon: Rust, category: "main" },
  { title: "Anchor", icon: Anchor, category: "main" },

  {
    title: "Raydium",
    icon: Web3,
    category: "dex",
    url: "https://icons.llama.fi/raydium.jpg",
  },
  {
    title: "Meteora",
    icon: Web3,
    category: "dex",
    url: "https://icons.llama.fi/meteora.png",
  },
  {
    title: "Orca",
    icon: Web3,
    category: "dex",
    url: "https://icons.llamao.fi/icons/protocols/orca",
  },
  {
    title: "FluxBeam",
    icon: FluxBeam,
    category: "dex",
  },
  {
    title: "Openbook V2",
    icon: Web3,
    category: "dex",
    url: "https://icons.llamao.fi/icons/protocols/openbook",
  },

  {
    title: "Helius",
    icon: Web3,
    category: "rpc",
    url: "https://images.ctfassets.net/23fkqdsgbpuj/76kot7qFlykKjnZPONBMlc/c8114ede886c494b6d804ef708da485a/646e71f37057790aff4f697b_heliusLogo.png",
  },
  {
    title: "Core API",
    icon: Web3,
    category: "rpc",
    url: "https://images.ctfassets.net/23fkqdsgbpuj/6xvK4uUNIzll3ZWbNjXkLs/e94f5fd52c6d1b45606c08e69584853c/QuickNode.png",
  },
  {
    title: "Supernode",
    icon: Web3,
    category: "rpc",
    url: "https://images.ctfassets.net/23fkqdsgbpuj/1hwDeXu0DOGfnlSGwDJi69/104b2f56f0d39ab4db8ce695a57bf9a5/alchemy-logo-black_1.svg",
  },
  {
    title: "Elastic Nodes",
    icon: Web3,
    category: "rpc",
    url: "https://images.ctfassets.net/23fkqdsgbpuj/6ZJiKCk25OOM82wcZJXCys/d06cd29dbebd32ba227a02af61b2cf20/chainstack.svg",
  },
  {
    title: "Tenderly Node",
    icon: Web3,
    category: "rpc",
    url: "https://images.ctfassets.net/23fkqdsgbpuj/1BnNYMwT5LkVy5499I6htm/9baf900be1aeece144343a4c32ce316d/Tenderly.png",
  },

  {
    title: "React",
    icon: React,
    category: "frontend",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  { title: "Next", icon: Next, category: "frontend" },
  {
    title: "Tailwind",
    icon: Tailwind,
    category: "frontend",
    url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },

  {
    title: "Typescript",
    icon: Typescript,
    category: "language",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    title: "Javascript",
    icon: Javascript,
    category: "language",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "HTML",
    icon: Javascript,
    category: "language",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: Javascript,
    category: "language",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    title: "C++",
    icon: Javascript,
    category: "language",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
  },
  {
    title: "Java",
    icon: Javascript,
    category: "language",
    url: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
  },
  {
    title: "Python",
    icon: Javascript,
    category: "language",
    url: "https://cdn-icons-png.flaticon.com/128/5968/5968544.png",
  },
  {
    title: "Golang",
    icon: Golang,
    category: "language",
  },

  { title: "GraphQL", icon: GraphQL },
  { title: "MongoDB", icon: MongoDB },
  { title: "Hardhat", icon: Hardhat },
  { title: "Solidity", icon: Solidity },
]
