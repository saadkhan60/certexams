import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function StudyFeatures() {
  return (
    <section id="study-materials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium tracking-wider">STUDY MATERIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-6">
            Comprehensive PMP
            <br />
            Exam Preparation Resources
          </h2>
          <p className="text-black/80 leading-relaxed">
            Our complete suite of PMP exam preparation materials is designed to help you understand the concepts,
            memorize the formulas, and practice with real exam-like questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/landing.png"
              alt="PMP Study Materials"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Latest PMP Exam Content</h3>
              <p className="text-black/80 leading-relaxed">
                Our study materials are continuously updated to reflect the latest PMP Exam Content Outline. We cover
                all domains, tasks, and knowledge areas to ensure you&apos;re fully prepared for the exam.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Comprehensive Study Guide with all exam topics",
                "2,000+ Practice Questions with detailed explanations",
                "35 Hours of Contact Education/PDUs",
                "Formula Guide and Quick Reference Sheets",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-black/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative">
            <h4 className="text-xl font-bold text-black mb-3">Realistic Practice Exams</h4>
            <p className="text-black/80">
              Multiple full-length practice exams that simulate the actual PMP exam experience with timer and review
              features.
            </p>
          </div>

          <div className="relative">

            <h4 className="text-xl font-bold text-black mb-3">Latest Exam Dumps</h4>
            <p className="text-black/80">
              Access to the most recent exam questions reported by successful test-takers, updated weekly to ensure
              relevance.
            </p>
          </div>

          <div className="relative lg:col-span-1 md:col-span-2 lg:mt-0 md:mt-8">
            <h4 className="text-xl font-bold text-black mb-3">Expert Coaching</h4>
            <p className="text-black/80">
              One-on-one coaching sessions with PMP-certified instructors who provide personalized guidance and exam
              strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
