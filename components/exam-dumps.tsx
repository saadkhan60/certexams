import Image from "next/image"

export default function ExamDumps() {
  const examDumps = [
    {
      title: "Exam voucher",
      description: "Get your exam voucher at a discounted price",
      image: "/voucher.png",
    },
    {
      title: "Exam Dumps",
      description: "Access to a wide range of exam questions and answers",
      image: "/dumps.png",
    },
    {
      title: "Exam Simulator",
      description: "Simulate the real exam environment with our practice tests",
      image: "/exam.png",
    },
  ]

  return (
    <section id="exam-dumps" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examDumps.map((dump, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={dump.image || "/placeholder.svg"}
                  alt={dump.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{dump.title}</h3>
              <p className="text-gray-600">{dump.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Why Our Exam Dumps Are Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-secondary mb-4">Verified by Recent Test Takers</h4>
              <p className="text-gray-700">
                Our exam dumps are collected from successful PMP candidates who took the exam recently. Each question is
                verified for accuracy and relevance to the current exam pattern.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-accent mb-4">Regular Updates</h4>
              <p className="text-gray-700">
                The PMP exam evolves, and so do our dumps. We update our question bank weekly to ensure you&apos;re
                practicing with the most current and relevant questions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-purple mb-4">Realistic Exam Simulation</h4>
              <p className="text-gray-700">
                Our practice environment mimics the actual PMP exam interface, helping you get comfortable with the
                format and timing before the real test.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-secondary mb-4">100% Pass Guarantee</h4>
              <p className="text-gray-700">
                We&apos;re so confident in our exam dumps that we offer a 100% money-back guarantee if you don&apos;t pass your
                PMP exam on the first attempt after using our materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
