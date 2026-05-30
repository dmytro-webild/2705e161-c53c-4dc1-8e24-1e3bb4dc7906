"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
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

  <div id="workout-plans-about" data-section="workout-plans-about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Tailored Workout Plans for Every Goal & Level"
      description={[
        "Whether you're aiming for weight loss, muscle gain, or pure strength, FitAI's AI-driven platform crafts dynamic workout routines that evolve with your progress. Say goodbye to generic plans and hello to intelligent, effective training.",
        "Explore a vast library of exercises, complete with video demonstrations and form tips, ensuring you maximize every session. From comprehensive home workouts to gym-specific programs, your perfect plan is just a click away, continuously optimizing for your success.",
      ]}
    />
  </div>

  <div id="workout-categories" data-section="workout-categories">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "weight-loss",
          name: "Weight Loss",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dumbbells-with-notebook_23-2148531510.jpg",
          imageAlt: "Weight Loss Workout",
        },
        {
          id: "muscle-gain",
          name: "Muscle Gain",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-training-with-kettlebells_23-2149358153.jpg",
          imageAlt: "Muscle Gain Workout",
        },
        {
          id: "strength",
          name: "Strength",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165174.jpg",
          imageAlt: "Strength Training Workout",
        },
        {
          id: "home-workouts",
          name: "Home Workouts",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/cartoon-machines-gym_23-2151149011.jpg",
          imageAlt: "Home Workout",
        },
        {
          id: "beginner",
          name: "Beginner",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fit-woman-training_23-2150169369.jpg",
          imageAlt: "Beginner Workout",
        },
        {
          id: "advanced",
          name: "Advanced",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-fit-man-training_23-2150169385.jpg",
          imageAlt: "Advanced Workout",
        },
      ]}
      title="Discover Your Next Challenge"
      description="Browse our extensive catalog of AI-optimized workout plans, categorized to fit your unique needs, preferences, and fitness level."
    />
  </div>

  <div id="workout-faqs" data-section="workout-faqs">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "How does AI personalize my workouts?",
          content: "Our AI analyzes your fitness level, goals, available equipment, and past performance to create dynamic, optimized workout routines that adjust as you improve.",
        },
        {
          id: "faq-2",
          title: "Can I use FitAI for home workouts?",
          content: "Absolutely! FitAI offers a wide range of home workout plans requiring minimal or no equipment, perfect for training anywhere.",
        },
        {
          id: "faq-3",
          title: "How often do my workout plans update?",
          content: "Your plans are intelligently adapted weekly based on your logged progress and feedback, ensuring continuous challenge and effectiveness.",
        },
      ]}
      title="Frequently Asked Questions About Workouts"
      description="Get quick answers to common questions about FitAI's workout plans and how they adapt to your progress and evolving needs."
      faqsAnimation="slide-up"
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
