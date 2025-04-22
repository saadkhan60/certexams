import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-white font-bold text-2xl">CertExams</span>
              <p className="text-sm text-gray-300">Your Path to Certification Success</p>
            </div>
            <p className="text-gray-300 max-w-xs">
              CertExams provides comprehensive PMP certification preparation materials, including study guides, practice
              exams, and exam dumps to help you pass on your first attempt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  About PMP
                </Link>
              </li>
              <li>
                <Link href="/#study-materials" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Study Materials
                </Link>
              </li>
              <li>
                <Link href="/#exam-dumps" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Exam Dumps
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <span className="text-gray-300">+1 (564) 222-6065</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-purple flex-shrink-0" />
                <span className="text-gray-300">info@certexams.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive exam tips, special offers, and certification updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CertExams Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-secondary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors duration-300">
              Refund Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
