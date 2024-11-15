import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Instagram, Twitter, Youtube } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import ScheduleDemoDialog from "../ScheduleDemoDialogue"

const companyLinks = [
  { href: "#", label: "About us" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact us" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Testimonials" },
]

const supportLinks = [
  { href: "#", label: "Help center" },
  { href: "#", label: "Terms of service" },
  { href: "#", label: "Legal" },
  { href: "#", label: "Privacy policy" },
  { href: "#", label: "Status" },
]

const socialLinks = [
  { href: "#", Icon: Instagram, label: "Instagram" },
  { href: "#", Icon: Twitter, label: "Twitter" },
  { href: "#", Icon: Youtube, label: "YouTube" },
]

export default function FooterSection() {
  return (
    <footer className="w-full  text-white">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <ScheduleDemoDialog/>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-12 border-t bg-[#263238] px-4 sm:px-[3vw]  md:px-[100.23px]">
          <div className="space-y-4">
            <Link href="#" className="flex items-center space-x-2">
              <Image src="/assets/logos/Nexcent_logo_white.png" alt="Nexcent Logo" width={132.95} height={20.65} />
            </Link>
            <p className="text-sm text-gray-400">
              Copyright © 2020 Landify UI Kit.
              <br />
              All rights reserved
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, Icon, label }) => (
                <Link key={label} href={href} className="text-gray-400 hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              {supportLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Stay up to date</h3>
            <div className="flex gap-2">
              <Input placeholder="Your email address" type="email" className="max-w-[240px] bg-gray-700 border-gray-600 text-white" />
              <Button size="icon" variant="ghost" className="text-white hover:text-gray-200 hover:bg-gray-700">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Subscribe to newsletter</span>
              </Button>
            </div>
          </div>
        </div>
    </footer>
  )
}