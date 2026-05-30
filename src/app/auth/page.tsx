"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { Zap } from "lucide-react";

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

  <div id="sign-up-form" data-section="sign-up-form">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Join FitAI"
      title="Start Your Fitness Journey Today"
      description="Sign up for FitAI and get instant access to your personalized AI fitness coach, custom workouts, and nutrition plans tailored just for you."
      tagIcon={Zap}
      inputPlaceholder="Enter your email"
      buttonText="Create Account"
      termsText="By clicking Create Account you're confirming that you agree with our Terms and Conditions and Privacy Policy."
    />
  </div>

  <div id="auth-faqs" data-section="auth-faqs">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "Is FitAI free to try?",
          content: "Yes, we offer a free trial period that gives you access to a selection of our core AI-powered features. No credit card required to start!",
        },
        {
          id: "faq-2",
          title: "What payment methods do you accept?",
          content: "We accept all major credit cards (Visa, MasterCard, Amex) and PayPal. All payments are securely processed.",
        },
        {
          id: "faq-3",
          title: "Can I cancel my subscription anytime?",
          content: "Yes, you can cancel your FitAI subscription at any time through your account settings. No hidden fees or long-term contracts.",
        },
      ]}
      title="Common Questions About Getting Started"
      description="Find quick answers to help you begin your FitAI journey seamlessly. Your success is our priority."
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
