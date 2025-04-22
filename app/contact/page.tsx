import ContactForm from "@/components/contact-form";
import ContactHeader from "@/components/contact-header";
import ContactInfo from "@/components/contact-info";
import Footer from "@/components/navigation/footer";
import Header from "@/components/navigation/header";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <ContactHeader />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
