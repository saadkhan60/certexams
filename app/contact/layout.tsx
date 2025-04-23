import { generateMetadata } from '@/lib/generate-metadata'
import React from 'react'

export const metadata = generateMetadata({title: "Contact Us | CertExams", description: "Contact CertExams for any inquiries or support regarding PMP certification preparation, exam dumps, and study materials. Our team is here to assist you with your PMP journey."})

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
