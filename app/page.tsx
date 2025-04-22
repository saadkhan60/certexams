import FAQ from "@/components/faq";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import SocialMedia from "@/components/social-media";
import Testimonials from "@/components/testimonials";
import Hero from "@/components/hero";
import AboutPmp from "@/components/about-pmp";
import StudyFeatures from "@/components/study-features";
import ExamDumps from "@/components/exam-dumps";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <Hero />
      <AboutPmp />
      <StudyFeatures />
      <ExamDumps />
      <Testimonials />
      <FAQ />
      <SocialMedia />
      <Footer />
    </main>
  )
}


