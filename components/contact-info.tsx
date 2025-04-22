import {Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
        <p className="text-black/80 mb-8">
          Our certification experts are available to answer your questions about PMP exam preparation, study materials,
          and certification process. Reach out through any of the channels below.
        </p>
      </div>

      <div className="space-y-6">


        <div className="flex items-start space-x-4">
          <div className="bg-secondary/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-black">Phone Numbers</h3>
            <p className="text-black/80">+1 (564) 222-6065 | +44 7414 246528</p>
            <p className="text-black/60 text-sm">Available: Monday-Friday, 9am-6pm EST</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-purple/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-purple" />
          </div>
          <div>
            <h3 className="font-bold text-black">Email Address</h3>
            <p className="text-black/80">info@certexams.com</p>
            <p className="text-black/60 text-sm">We respond within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-black">Business Hours</h3>
            <p className="text-black/80">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p className="text-black/80">Saturday: 10:00 AM - 2:00 PM EST</p>
            <p className="text-black/80">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
