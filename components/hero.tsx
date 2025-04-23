import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-[#F5F5F5]">
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="md:inline-block bg-primary/10 px-4 py-2 rounded-full hidden">
              <span className="text-primary font-medium text-sm">*No commitment required. 100% money-back guarantee.</span>
            </div>

            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl  text-black">
              <span className="">PASS YOUR </span>
                <span className="text-primary">P</span>
                <span className="text-secondary">M</span>
                <span className="text-accent">P</span>
              <span className="block">ON THE FIRST ATTEMPT</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Get certified in just 12 days with our comprehensive study materials, practice exams, and expert guidance.
              <span className="block mt-2">
                100% passing guarantee or your money back. Join thousands of successful PMP professionals.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full">
              <Link href="/#exam-dumps" className="flex items-center">
              Exam Dumps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full"
              >
                <Link href="/contact" className="flex items-center">
               Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-black/80 leading-snug">Passing Guarantee</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">35K+</div>
                <p className="text-sm text-black/80 leading-snug">Certified Professionals</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">12</div>
                <p className="text-sm text-black/80 leading-snug">Days to Certification</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/hero.png"
                alt="PMP Certification"
                fill
                className="object-contain transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            {/* Product badges */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-primary font-medium">Expert-Led Training</span>
            </div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-primary font-medium">Guaranteed Success</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-black/80">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-secondary to-transparent" />
        </div>
      </div>
    </section>
  )
}
