"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Activity, Flame, Gauge, Ruler, Scale } from "lucide-react";

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

  <div id="progress-about" data-section="progress-about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Visualize Your Victory: Track Every Step of Your Journey"
      description={[
        "FitAI’s powerful and intuitive progress tracker helps you stay motivated by showcasing every milestone of your fitness journey. Log your weight, body fat, calories, workouts, and measurements with unparalleled ease and accuracy.",
        "Our intuitive dashboard provides real-time insights, weekly summaries, and personalized AI recommendations to keep you on the fast track to success. Celebrate every achievement, optimize your path forward, and see how far you've come.",
      ]}
    />
  </div>

  <div id="progress-metrics" data-section="progress-metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      metrics={[
        {
          id: "weight",
          icon: Scale,
          title: "Weight",
          value: "Track daily changes",
        },
        {
          id: "body-fat",
          icon: Gauge,
          title: "Body Fat",
          value: "Monitor composition",
        },
        {
          id: "calories",
          icon: Flame,
          title: "Calories",
          value: "Manage intake & burn",
        },
        {
          id: "workouts",
          icon: Activity,
          title: "Workouts",
          value: "Log every session",
        },
        {
          id: "measurements",
          icon: Ruler,
          title: "Measurements",
          value: "See body changes",
        },
      ]}
      title="Key Metrics for a Smarter Journey"
      description="Monitor crucial aspects of your fitness with precision and clarity, guiding you towards your goals with data-driven insights."
    />
  </div>

  <div id="progress-dashboard-overview" data-section="progress-dashboard-overview">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "todays-workout",
          name: "Today's Workout",
          price: "View Details",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-doing-sport-with-stats_23-2150040493.jpg",
          imageAlt: "Today's workout summary",
        },
        {
          id: "todays-calories",
          name: "Today's Calories",
          price: "View Details",
          imageSrc: "http://img.b2bpic.net/free-photo/blond-woman-kitchen-with-fruits_23-2148173251.jpg",
          imageAlt: "Today's calorie tracking",
        },
        {
          id: "weekly-progress",
          name: "Weekly Progress & AI Recommendations",
          price: "View Details",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-biorobots-concept_23-2149524395.jpg",
          imageAlt: "Weekly progress graph and AI insights",
        },
      ]}
      title="Your Personalized Progress Dashboard"
      description="A quick glance provides all the vital information you need for today and your weekly progress, tailored to your objectives."
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
