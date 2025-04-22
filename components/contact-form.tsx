"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser';
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitted(true)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      )
      .then(
        () => {
          toast("Message sent successfully. We will get back to you soon.")
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "general",
            message: "",
          })
        },
        (error) => {
          toast("Failed to send message. Please try again later.")
          console.log(error)
        }
      )
      .finally(() => {
        setIsSubmitted(false)
      })
  }



  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Thank You!</h3>
          <p className="text-black/80">
            Your message has been sent successfully. One of our certification experts will get back to you shortly.
          </p>
          <Button className="mt-6 bg-primary hover:bg-primary/90" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label>What are you interested in?</Label>
            <RadioGroup
              defaultValue="general"
              value={formData.subject}
              onValueChange={handleRadioChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="general" />
                <Label htmlFor="general" className="cursor-pointer">
                  General Inquiry
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="exam-dumps" id="exam-dumps" />
                <Label htmlFor="exam-dumps" className="cursor-pointer">
                  PMP Exam Dumps
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="study-materials" id="study-materials" />
                <Label htmlFor="study-materials" className="cursor-pointer">
                  Study Materials
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="exam-voucher" id="exam-voucher" />
                <Label htmlFor="exam-voucher" className="cursor-pointer">
                  Exam Voucher
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help with your PMP certification journey?"
              required
              className="min-h-[150px] border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>

          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Send Message
          </Button>
        </form>
      )}
    </div>
  )
}
