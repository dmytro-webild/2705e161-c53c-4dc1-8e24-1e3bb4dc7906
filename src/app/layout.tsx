import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'FitAI - Your Personal AI Fitness Coach',
  description: 'FitAI is an AI-powered fitness platform offering personalized workouts, nutrition plans, calorie tracking, and a 24/7 AI fitness coach to help you achieve your goals.',
  keywords: ["AI fitness, AI coach, personalized workouts, nutrition plans, calorie tracker, muscle gain, fat loss, home workouts, gym workouts, progress tracking, fitness chatbot, FitAI"],
  openGraph: {
    "title": "FitAI - Your Personal AI Fitness Coach",
    "description": "Unlock your full potential with FitAI: personalized workouts, nutrition, and 24/7 AI guidance for muscle gain, fat loss, and optimized fitness.",
    "url": "https://www.fitai.com",
    "siteName": "FitAI",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/person-being-scanned-by-digital-health-app_23-2151891772.jpg",
        "alt": "AI Fitness Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "FitAI - Your Personal AI Fitness Coach",
    "description": "Unlock your full potential with FitAI: personalized workouts, nutrition, and 24/7 AI guidance for muscle gain, fat loss, and optimized fitness.",
    "images": [
      "http://img.b2bpic.net/free-photo/person-being-scanned-by-digital-health-app_23-2151891772.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
