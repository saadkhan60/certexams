export default function ContactHeader() {
  return (
    <section className="pt-32 pb-16 bg-[#F5F5F5] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-secondary font-medium tracking-wider">CONTACT US</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            We&apos;re Here to Help You Succeed
          </h1>
          <p className="text-lg text-black/80 leading-relaxed">
            Have questions about our PMP certification materials, exam dumps, or training programs? Our certification
            experts are ready to assist you.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
    </section>
  )
}
