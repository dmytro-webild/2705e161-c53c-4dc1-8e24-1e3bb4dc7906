"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Crown, Sparkles } from "lucide-react";

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
          name: "Home",          id: "/"},
        {
          name: "AI Coach",          id: "/ai-coach"},
        {
          name: "Workouts",          id: "/workout-plans"},
        {
          name: "Nutrition",          id: "/nutrition"},
        {
          name: "Progress",          id: "/progress"},
        {
          name: "Pricing",          id: "/pricing"},
      ]}
      brandName="FitAI"
      button={{
        text: "Sign Up",        href: "/auth"}}
    />
  </div>

  <div id="pricing-plans" data-section="pricing-plans">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          tag: "Essential",          price: "$9.99",          period: "/month",          description: "Perfect for getting started with AI-guided fitness and basic tracking.",          button: {
            text: "Start Basic",            href: "/auth"},
          featuresTitle: "Key Features:",          features: [
            "Personalized AI Workouts",            "Basic Nutrition Tracking",            "Progress Log & Visuals",            "Limited AI Chat Access"],
        },
        {
          id: "pro",          tag: "Recommended",          tagIcon: Sparkles,
          price: "$19.99",          period: "/month",          description: "Comprehensive tools for serious fitness enthusiasts ready for next-level results.",          button: {
            text: "Go Pro",            href: "/auth"},
          featuresTitle: "All Essential, plus:",          features: [
            "Advanced AI Meal Planner",            "24/7 Priority AI Chat",            "Detailed Performance Analytics",            "Customizable Workout Library",            "Priority Support"],
        },
        {
          id: "elite",          tag: "Ultimate",          tagIcon: Crown,
          price: "$29.99",          period: "/month",          description: "The ultimate package for complete fitness mastery and personalized expert-level guidance.",          button: {
            text: "Choose Elite",            href: "/auth"},
          featuresTitle: "All Pro, plus:",          features: [
            "Advanced Body Composition Tracking",            "Exclusive AI Masterclasses",            "Integrations with Wearables",            "Premium Community Access",            "Dedicated AI Coach Manager"],
        },
      ]}
      title="Unlock Your Full Fitness Potential"
      description="Choose the FitAI plan that fits your goals and start your transformation today. All plans include AI-powered coaching and premium features."
    />
  </div>

  <div id="pricing-testimonials" data-section="pricing-testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",          name: "Olivia M.",          role: "Consultant",          testimonial: "The Pro plan is worth every penny. The advanced analytics helped me pinpoint weaknesses, and the AI coach pushed me past plateaus. Best investment for my health!",          imageSrc: "http://img.b2bpic.net/free-photo/image-young-business-woman-suit-holding-mobile-phone-shrugging-clueless-standing-puzzled-smiling-apologize-white-background_176420-48863.jpg",          imageAlt: "Olivia M."},
        {
          id: "2",          name: "Daniel S.",          role: "Graphic Designer",          testimonial: "I upgraded to Elite, and it's incredible. The exclusive masterclasses and wearable integrations make FitAI an indispensable part of my daily routine. Truly premium.",          imageSrc: "http://img.b2bpic.net/free-photo/great-excellence-reward-perforated-paper-star_53876-16436.jpg",          imageAlt: "Daniel S."},
        {
          id: "3",          name: "Sophia G.",          role: "Fitness Instructor",          testimonial: "Even the Basic plan offers so much. The personalized workouts are fantastic, and I love seeing my progress clearly. FitAI makes fitness accessible and effective.",          imageSrc: "http://img.b2bpic.net/free-photo/fit-young-woman-sportswear-posing_23-2148759024.jpg",          imageAlt: "Sophia G."},
        {
          id: "4",          name: "Mark C.",          role: "Accountant",          testimonial: "FitAI's pricing is excellent for the value provided. The insights on my body composition alone have been worth it, helping me make smarter diet choices.",          imageSrc: "http://img.b2bpic.net/free-photo/women-fitness-class-taking-selfies_23-2148387807.jpg",          imageAlt: "Women at fitness class taking selfies"},
        {
          id: "5",          name: "Laura K.",          role: "Student",          testimonial: "I love that there's a plan for every budget. Starting with Basic helped me build healthy habits, and now I'm considering Pro for even more features!",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-fit-women_23-2149269808.jpg",          imageAlt: "Medium shot happy fit women"},
      ]}
      title="Real Value, Real Results"
      description="Our subscribers are investing in themselves and seeing life-changing outcomes with FitAI's flexible and powerful plans."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="http://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204980.jpg"
      logoAlt="FitAI Logo"
      logoText="FitAI"
      columns={[
        {
          title: "Product",          items: [
            {
              label: "AI Coach",              href: "/ai-coach"},
            {
              label: "Workouts",              href: "/workout-plans"},
            {
              label: "Nutrition",              href: "/nutrition"},
            {
              label: "Progress Tracker",              href: "/progress"},
            {
              label: "Pricing",              href: "/pricing"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Careers",              href: "#careers"},
            {
              label: "Blog",              href: "#blog"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Cookie Policy",              href: "#"},
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
