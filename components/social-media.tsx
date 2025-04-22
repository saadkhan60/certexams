import { Button } from "@/components/ui/button"

export default function SocialMedia() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Join Our PMP Community</h2>
        <p className="text-xl text-gray-600 mb-8">
          Connect with fellow PMP aspirants and certified professionals. Get study tips, exam updates, and special
          offers!
        </p>
        <p className="text-gray-600 mb-4">Share your success story with #PMPSuccess!</p>
        <div className="max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address for exam tips and updates"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">Subscribe to Newsletter</Button>
        </div>
      </div>
    </section>
  )
}
