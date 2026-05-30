"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

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

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "sparkles-gradient",
      }}
      title="Your Personal AI Fitness Coach"
      description="Get custom workouts, nutrition plans, and fitness guidance powered by AI, designed to fit your unique goals and lifestyle."
      tag="Revolutionize Your Fitness"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Start Free",
          href: "/auth",
        },
        {
          text: "Try AI Coach",
          href: "/ai-coach",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-being-scanned-by-digital-health-app_23-2151891772.jpg",
          imageAlt: "AI Fitness Dashboard",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-diversity-sport-woman-training_23-2149174760.jpg",
          imageAlt: "User interacting with AI Coach app",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-running-with-stats_23-2150040512.jpg",
          imageAlt: "Side view man running with stats",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-typing-laptop-sitting-home-with-automation-lighting-system_482257-8729.jpg",
          imageAlt: "Woman typing at laptop sitting in home with automation lighting system",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165164.jpg",
          imageAlt: "Data and stats around person doing physical activity",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by 500k+ fitness enthusiasts worldwide"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      features={[
        {
          title: "AI Workout Generator",
          description: "Crafts personalized workout routines that adapt to your progress and goals.",
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165170.jpg",
          imageAlt: "AI generating workout plan",
        },
        {
          title: "AI Meal Planner",
          description: "Creates custom nutrition plans and smart grocery lists based on your dietary needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-sliced-chopped-foods-recipe-book-aside_114579-19557.jpg",
          imageAlt: "AI creating meal plan",
        },
        {
          title: "Progress Analytics",
          description: "Visualizes your journey with insightful data and performance trends to keep you motivated.",
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165163.jpg",
          imageAlt: "Fitness progress charts",
        },
        {
          title: "Calorie Calculator",
          description: "Accurately tracks your calorie intake and helps manage your macros for optimal results.",
          imageSrc: "http://img.b2bpic.net/free-photo/nutrition-facts-comparison-food-dietery_53876-123817.jpg",
          imageAlt: "Digital calorie calculator",
        },
        {
          title: "Exercise Library",
          description: "Access a vast library of exercises with detailed instructions and video demonstrations.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-making-working-out-vlog_23-2149039729.jpg",
          imageAlt: "Diverse exercises montage",
        },
        {
          title: "24/7 AI Coach",
          description: "Your dedicated AI fitness expert, always available to answer questions and provide guidance.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-doing-fitness-with-vr-glasses_23-2151412268.jpg",
          imageAlt: "AI chatbot icon",
        },
      ]}
      title="Unlock Your Full Potential with FitAI's Core Features"
      description="From AI-powered workout generation to real-time progress tracking, FitAI provides everything you need to achieve your fitness goals effectively."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      features={[
        {
          title: "Step 1: Define Your Goals",
          description: "Answer a few quick questions about your fitness level, goals, and preferences.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-business-list-app-interface_53876-13617.jpg",
          imageAlt: "User answering questions",
        },
        {
          title: "Step 2: Get Your AI Plan",
          description: "Our AI instantly generates a personalized workout and nutrition plan tailored for you.",
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165181.jpg",
          imageAlt: "AI creating personalized plan",
        },
        {
          title: "Step 3: Track & Improve",
          description: "Log your progress, receive smart adjustments, and achieve new milestones every week.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-business-man-holding-tablet_23-2150103591.jpg",
          imageAlt: "Progress tracking and improvement",
        },
      ]}
      title="How FitAI Transforms Your Fitness Journey"
      description="Achieving your dream physique and optimal health is just three simple, AI-powered steps away. Get started now and feel the difference."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO, TechFlow",
          testimonial: "FitAI has completely revolutionized my fitness routine. The personalized plans are incredibly effective, and the AI coach is always there to guide me. I've never felt better!",
          imageSrc: "http://img.b2bpic.net/free-photo/young-black-girl-happy-expression_1194-4293.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Software Engineer",
          testimonial: "As a busy professional, I needed something efficient. FitAI’s AI-powered workouts fit perfectly into my schedule, helping me gain muscle without wasting time. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-happy-athletic-woman-listening-music-earphones-having-water-break-after-sports-training_637285-5203.jpg",
          imageAlt: "Michael Chen",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Marketing Director",
          testimonial: "The nutrition plans are a game-changer! I've learned so much about healthy eating, and the calorie tracker makes it super easy to stay on track. FitAI is my secret weapon.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-is-posing-photographer-dark-photo-studio_613910-13180.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Product Manager",
          testimonial: "I love the progress tracking features. Seeing my improvements visually keeps me incredibly motivated. The AI recommendations are spot on, constantly pushing me forward.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-fitness-woman-with-towel-resting_171337-6262.jpg",
          imageAlt: "David Kim",
        },
        {
          id: "5",
          name: "Jessica Lee",
          role: "Freelance Designer",
          testimonial: "Finding effective home workouts was always a struggle, but FitAI changed that. The variety and intelligent adaptations mean I never get bored, and I'm seeing real results.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-sports-fitness-active-healthy-lifestyle-concept-attractive-fit-young-mixed-race-male-with-muscular-shoulders-posing-studio-keeping-arms-folded-his-look-expressing-confidence_343059-339.jpg",
          imageAlt: "Jessica Lee",
        },
      ]}
      title="Hear From Our Thriving Community"
      description="Our users are achieving incredible results, transforming their lives, and hitting new personal bests with FitAI. Join them today!"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Apple Fitness+",
        "Nike Training Club",
        "MyFitnessPal",
        "Gymshark",
        "WHOOP",
        "Strava",
        "Garmin Connect",
        "Peloton",
      ]}
      title="Trusted by Elite Athletes & Fitness Professionals"
      description="FitAI is revolutionizing fitness worldwide, backed by experts and embraced by a global community dedicated to peak performance."
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
