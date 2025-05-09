"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="relative w-48 h-12">
            <div className="relative w-32 h-12">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Certexams"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>

          <nav
            className={`
              fixed lg:relative top-0 right-0 h-screen lg:h-auto w-full lg:w-auto
              bg-white lg:bg-transparent transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
              lg:flex lg:items-center lg:space-x-8
            `}
          >
            <button className="lg:hidden absolute top-6 right-6 text-black" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col lg:flex-row items-center justify-center h-full lg:h-auto space-y-8 lg:space-y-0 lg:space-x-8">
              <Link
                href="/#about"
                className="text-black hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About PMP
              </Link>
              <Link
                href="/#study-materials"
                className="text-black hover:text-secondary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Study Materials
              </Link>
              <Link
                href="/#exam-dumps"
                className="text-black hover:text-purple transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Exam Dumps
              </Link>
              <Link
                href="/#reviews"
                className="text-black hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Button>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </Button>
            </div>
          </nav>

          <button className="lg:hidden text-black" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
