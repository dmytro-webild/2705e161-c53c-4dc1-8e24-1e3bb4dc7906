"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
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

  <div id="nutrition-about" data-section="nutrition-about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Fuel Your Body, Master Your Goals with AI Nutrition"
      description={[
        "Nutrition is the cornerstone of fitness, and FitAI makes it simple and intelligent. Our AI-powered tools help you manage your diet, track calories, and plan meals for optimal performance, recovery, and results.",
        "Generate weekly meal plans, accurately calculate macros, and even get dynamic grocery lists tailored to your preferences, dietary restrictions, and fitness goals. Make informed choices and unlock a healthier, stronger you with ease.",
      ]}
    />
  </div>

  <div id="nutrition-features" data-section="nutrition-features">
      <FeatureCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      features={[
        {
          title: "Calorie Calculator",
          description: "Accurately determine your daily caloric needs for weight loss, maintenance, or gain.",
          imageSrc: "http://img.b2bpic.net/free-photo/reading-recipe_1098-19891.jpg",
          imageAlt: "Calorie calculator interface",
        },
        {
          title: "Macro Calculator",
          description: "Optimize your protein, carb, and fat intake for peak performance and body composition.",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-food-concept-with-tablet-salad_23-2147802998.jpg",
          imageAlt: "Macro nutrient breakdown",
        },
        {
          title: "AI Meal Generator",
          description: "Get instant, delicious, and personalized meal suggestions perfectly aligned with your goals.",
          imageSrc: "http://img.b2bpic.net/free-photo/food-delivery-app_23-2151952985.jpg",
          imageAlt: "AI generating meal options",
        },
        {
          title: "Weekly Meal Plans",
          description: "Receive comprehensive weekly meal schedules with diverse recipes and smart substitutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-food-concept-with-smartphone-clipboard-bowl_23-2147803022.jpg",
          imageAlt: "Digital weekly meal plan",
        },
        {
          title: "Grocery Lists",
          description: "Automatically generated shopping lists for your meal plans, saving you time and effort.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-food-crate_23-2148767093.jpg",
          imageAlt: "Digital grocery list",
        },
      ]}
      title="Smart Nutrition Tools at Your Fingertips"
      description="Revolutionize your eating habits and maximize your fitness gains with FitAI’s comprehensive suite of intelligent nutrition features."
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
