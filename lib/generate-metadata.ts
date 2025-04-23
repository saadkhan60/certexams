import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    keywords?: string[];
    author?: string;
}

export const generateMetadata = ({
    title = `CertExams | Pass Your PMP Exam on the First Attempt`,
    description = `CertExams provides comprehensive PMP certification preparation resources including latest exam dumps, practice tests, and study materials with a 100% passing guarantee. Our expert-led training covers all exam domains and includes the required 35 contact hours/PDUs for your PMP application. With thousands of successful candidates, our proven methodology helps professionals pass the PMP exam on their first attempt in as little as 12 days. We offer application assistance, exam vouchers at discounted rates, and personalized coaching from certified PMP instructors. Our continuously updated question bank ensures you're practicing with the most current and relevant exam content. Join thousands of project managers who have advanced their careers with CertExams - your trusted partner for PMP certification success.`,
    keywords = [
        // Company specific
        "CertExams",
        "CertExams PMP",
        "PMP certification CertExams",
        "CertExams exam dumps",

        // PMP Certification
        "PMP certification",
        "PMP exam preparation",
        "pass PMP exam first attempt",
        "PMP certification cost",
        "PMP certification requirements",
        "PMP certification worth it",
        "PMP certification salary",
        "PMP certification online",

        // Exam Dumps
        "PMP exam dumps",
        "PMP exam questions",
        "latest PMP exam dumps",
        "PMP practice exam",
        "PMP sample questions",
        "PMP exam simulator",
        "PMP exam questions 2025",
        "PMP real exam questions",

        // Study Materials
        "PMP study materials",
        "PMP study guide",
        "PMP exam prep",
        "PMP training materials",
        "PMP practice tests",
        "PMP mock exam",
        "PMP exam tips",
        "PMP exam tricks",

        // Training
        "PMP training",
        "PMP 35 contact hours",
        "PMP PDUs",
        "PMP online training",
        "PMP boot camp",
        "PMP instructor-led training",
        "PMP coaching",
        "PMP mentoring",

        // Application
        "PMP application assistance",
        "PMP application process",
        "PMP application requirements",
        "PMP application review",
        "PMP audit process",
        "PMP experience requirements",
        "PMP application tips",

        // Exam Vouchers
        "PMP exam voucher",
        "discounted PMP exam voucher",
        "PMP exam cost",
        "PMP exam registration",
        "PMP exam scheduling",
        "PMP exam locations",
        "PMP online proctored exam",

        // PMI Related
        "PMI approved training",
        "PMI membership",
        "PMI certification",
        "Project Management Institute",
        "PMI exam changes",
        "PMI PMBOK guide",
        "PMI continuing certification requirements",

        // Project Management
        "project management certification",
        "project management professional",
        "project management career",
        "project management salary",
        "project management jobs",
        "project management skills",
        "project management methodology",
        "agile project management",

        // Business Outcomes
        "PMP career advancement",
        "PMP salary increase",
        "project management career path",
        "PMP job opportunities",
        "PMP return on investment",
        "PMP benefits",
        "global recognition PMP",
        "PMP credential value"
    ],
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://certexams.com/");

    return {
        metadataBase,
        title: {
            template: `%s | CertExams`,
            default: title
        },
        description,
        openGraph: {
            title: 'CertExams | Pass Your PMP Exam on the First Attempt',
            description:
                "CertExams provides comprehensive PMP certification preparation resources including latest exam dumps, practice tests, and study materials with a 100% passing guarantee. Our expert-led training covers all exam domains and includes the required 35 contact hours/PDUs for your PMP application. With thousands of successful candidates, our proven methodology helps professionals pass the PMP exam on their first attempt in as little as 12 days.",
            url: 'https://certexams.com/',
            siteName: 'CertExams',
            locale: 'en_US',
            type: 'website'
        },
        keywords,
        authors: [{ name: 'CertExams' }],
        creator: 'CertExams Team',
        publisher: 'CertExams',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        },
    };
};