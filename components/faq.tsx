import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to prepare for the PMP exam?",
      answer:
        "With our accelerated program, you can be ready in as little as 12 days with focused study. Most candidates spend 4-8 weeks preparing, but our structured approach and exam dumps significantly reduce preparation time.",
    },
    {
      question: "Are your exam dumps updated for the latest PMP exam?",
      answer:
        "Yes, our exam dumps are updated weekly based on feedback from recent test-takers. We ensure all materials reflect the current exam content outline and question styles.",
    },
    {
      question: "Do you provide the 35 contact hours required for the PMP application?",
      answer:
        "Yes, our comprehensive course provides the 35 contact hours/PDUs required by PMI for your PMP exam application.",
    },
    {
      question: "What's included in your PMP preparation package?",
      answer:
        "Our complete package includes study guides, 2,000+ practice questions, exam dumps, simulation tests, 35 contact hours of training, application assistance, exam voucher, and one-on-one coaching sessions.",
    },
    {
      question: "How does your 100% pass guarantee work?",
      answer:
        "If you fail your PMP exam after using our complete preparation package, we'll refund your money in full. We're that confident in our materials and approach.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
