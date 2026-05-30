"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "AI Coach",
          id: "/ai-coach",
        },
        {
          name: "Workouts",
          id: "/workout-plans",
        },
        {
          name: "Nutrition",
          id: "/nutrition",
        },
        {
          name: "Progress",
          id: "/progress",
        },
        {
          name: "Pricing",
          id: "/pricing",
        },
      ]}
      brandName="FitAI"
      button={{
        text: "Sign Up",
        href: "/auth",
      }}
    />
  </div>

  <div id="ai-coach-about" data-section="ai-coach-about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Your Dedicated AI Fitness Coach, Available 24/7"
      description={[
        "Engage with FitAI's advanced AI chatbot, ready to answer all your fitness and nutrition questions instantly. Get personalized advice, exercise demonstrations, and motivational support whenever you need it.",
        "From 'What workout should I do today?' to 'How can I gain muscle?', our AI provides intelligent, data-driven responses tailored to your goals. It’s like having a personal trainer in your pocket, always learning and adapting to your progress and needs.",
      ]}
    />
  </div>

  <div id="ai-coach-interactive" data-section="ai-coach-interactive">
      <FeatureCardOne
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      features={[
        {
          title: "Workout Recommendations",
          description: "Ask for daily workout suggestions based on your recovery and goals.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-fitness-woman-sportswear-with-headband-showing-reminder-paper-with-question-mark-holding-green-apple-winking-smiling-with-happy-face-standing-orange-wall_141793-50071.jpg",
          imageAlt: "AI chatbot suggesting workout",
        },
        {
          title: "Nutrition Guidance",
          description: "Get instant answers on calorie targets, macro breakdowns, and meal ideas.",
          imageSrc: "http://img.b2bpic.net/free-photo/diet-concept-with-female-scientist-showing-tablet-template_23-2148193252.jpg",
          imageAlt: "AI chatbot providing nutrition advice",
        },
        {
          title: "Goal-Oriented Strategies",
          description: "Receive tailored strategies for fat loss, muscle gain, or strength improvement.",
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165162.jpg",
          imageAlt: "AI chatbot explaining muscle gain strategy",
        },
      ]}
      title="Experience Intelligent Fitness Conversations"
      description="Our AI Coach isn't just smart; it's intuitive and proactive, designed to guide you through every challenge and celebrate every success."
    />
  </div>

  <div id="ai-coach-testimonials" data-section="ai-coach-testimonials">
      <TestimonialCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Alex P.",
          role: "Entrepreneur",
          testimonial: "The AI Coach is phenomenal! It keeps me accountable and provides insights I'd never get from a human coach. My progress has skyrocketed.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-women-meeting-fitness-class_23-2148387813.jpg",
          imageAlt: "Alex P.",
        },
        {
          id: "2",
          name: "Chloe R.",
          role: "Student Athlete",
          testimonial: "I used to struggle with knowing what exercises to do. Now, I just ask the AI, and I get perfect recommendations tailored to my sport. Amazing!",
          imageSrc: "http://img.b2bpic.net/free-photo/cropped-portrait-black-sportsman-sitting-pavement-deep-thoughts-listening-motivative-audiobook-his-headphones-touching-his-head-looking-confident-concentrated-workout_273609-1210.jpg",
          imageAlt: "Chloe R.",
        },
        {
          id: "3",
          name: "Marcus L.",
          role: "Fitness Enthusiast",
          testimonial: "Whether it's midnight or early morning, my AI Coach is always there. It's truly like having a personal trainer without the high cost.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fit-friends-outdoors_23-2150828885.jpg",
          imageAlt: "Marcus L.",
        },
        {
          id: "4",
          name: "Sophia N.",
          role: "Yoga Instructor",
          testimonial: "The AI provides amazing flexibility and recovery tips. It's like having a mindful coach helping me balance my training perfectly.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-fit-women_23-2149269804.jpg",
          imageAlt: "Medium shot smiley fit women",
        },
        {
          id: "5",
          name: "Liam T.",
          role: "Personal Trainer",
          testimonial: "Even as a trainer, I learn new insights from FitAI's coach. It's an excellent tool to supplement professional guidance and track client progress.",
          imageSrc: "http://img.b2bpic.net/free-photo/copy-space-smiley-woman-with-headphones_23-2148435365.jpg",
          imageAlt: "Copy-space smiley woman with headphones",
        },
      ]}
      title="Coaching That Delivers Real Results"
      description="See how FitAI's personalized and always-on coaching has empowered users to reach their fitness milestones and maintain consistency."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="http://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204980.jpg"
      logoAlt="FitAI Logo"
      logoText="FitAI"
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "AI Coach",
              href: "/ai-coach",
            },
            {
              label: "Workouts",
              href: "/workout-plans",
            },
            {
              label: "Nutrition",
              href: "/nutrition",
            },
            {
              label: "Progress Tracker",
              href: "/progress",
            },
            {
              label: "Pricing",
              href: "/pricing",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#careers",
            },
            {
              label: "Blog",
              href: "#blog",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Cookie Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 FitAI. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
