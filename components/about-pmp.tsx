import Image from "next/image"

export default function AboutPmp() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-6">
            Why PMP Certification
            <br />
            Is Essential For Your Career
          </h2>
          <p className="text-black/80 leading-relaxed">
            The Project Management Professional (PMP) certification is the gold standard in project management. It
            demonstrates your expertise and opens doors to higher salaries and better career opportunities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/about.png"
              alt="PMP Certification Benefits"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">
              The Most Recognized
              <br />
              Project Management Credential
            </h3>
            <p className="text-black/80 leading-relaxed">
              PMP certification holders earn up to 25% more than their non-certified peers. The certification is
              recognized globally and validates your ability to lead and direct projects according to the highest
              professional standards.
            </p>
            <p className="text-black/80 leading-relaxed">
              Our comprehensive preparation program is designed to help you pass the PMP exam on your first attempt. We
              provide all the resources you need, from study materials to practice exams and personalized coaching.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💼</span>
            </div>
            <h4 className="text-xl font-bold text-black">Career Advancement</h4>
            <p className="text-black/80">
              Open doors to better job opportunities and higher positions in project management
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💰</span>
            </div>
            <h4 className="text-xl font-bold text-black">Higher Salary</h4>
            <p className="text-black/80">PMP-certified professionals earn up to 25% more than non-certified peers</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-purple/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🌐</span>
            </div>
            <h4 className="text-xl font-bold text-black">Global Recognition</h4>
            <p className="text-black/80">
              The PMP certification is recognized and respected worldwide in all industries
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
