import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium tracking-wider">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-6">From Our Certified PMP Professionals</h2>
          <p className="text-gray-600 leading-relaxed">
            Hear from professionals who successfully passed their PMP exam on the first attempt using our preparation
            materials.
          </p>
        </div>

        <div className="grid grid-cols-1  gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
            &quot;I passed my PMP exam on the first try with Above Target in all domains! The practice questions were very
              similar to the actual exam, and the exam dumps were incredibly helpful. The coaching sessions helped me
              understand the tricky situational questions.&quot;
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">Sarah Johnson (34)</p>
              <p className="text-gray-600">IT Project Manager / Certified 3 months ago</p>
            </div>
          </div>
        </div>

        {/* Additional reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment:
                "The exam dumps were spot on! At least 80% of the questions in my actual exam were similar to what I practiced.",
              name: "Michael Chen",
              role: "Construction Manager",
              period: "Certified 2 months ago",
            },
            {
              comment:
                "I was struggling with the agile concepts, but the study materials broke everything down perfectly. Passed with flying colors!",
              name: "Jennifer Williams",
              role: "Healthcare Administrator",
              period: "Certified 6 months ago",
            },
            {
              comment:
                "Worth every penny! The practice exams really prepared me for the pressure of the real test. The voucher process was smooth too.",
              name: "David Rodriguez",
              role: "Software Development Lead",
              period: "Certified 1 month ago",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">&quot;{review.comment}&quot;</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role} / {review.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
