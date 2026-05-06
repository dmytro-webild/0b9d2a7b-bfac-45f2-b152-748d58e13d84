"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Beef, Flame, ShieldCheck, Sparkles, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Philosophy",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#products",
        },
        {
          name: "Team",
          id: "#team",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Kazan Steakhouse"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "radial-gradient",
      }}
      title="The Art of Wagyu"
      description="Experience the pinnacle of Japanese culinary tradition, where every detail is honed to perfection."
      testimonials={[
        {
          name: "Kenji Sato",
          handle: "@kenjisato",
          testimonial: "An unparalleled wagyu experience in the city.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lamb-chicken-burger-without-top-bun-with-mushroom-herbs-tomato-sauce_140725-8320.jpg?_wi=1",
          imageAlt: "luxury japanese steakhouse interior",
        },
        {
          name: "Yumi Tanaka",
          handle: "@yumit",
          testimonial: "Exquisite attention to detail, the finest ingredients.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-chef-decorating-dish_23-2147863785.jpg?_wi=1",
          imageAlt: "luxury japanese steakhouse interior",
        },
        {
          name: "Hiroshi M.",
          handle: "@hiroshim",
          testimonial: "The atmosphere is unmatched and the service is perfect.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-japanese-meal-composition_23-2148809881.jpg?_wi=1",
          imageAlt: "luxury japanese steakhouse interior",
        },
        {
          name: "Akiko K.",
          handle: "@akikok",
          testimonial: "Authentic flavors crafted with immense care.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-grilled-japanese-eel-with-sliced-cucumbers-gingers-served-with-wasabi-sauce-bamboo-leaf-ice-cubes-plate-table_141793-11605.jpg?_wi=1",
          imageAlt: "luxury japanese steakhouse interior",
        },
        {
          name: "Takeshi L.",
          handle: "@takeshil",
          testimonial: "The best dining experience I've had in years.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-nigiri-sushi-with-tuna-bamboo-leaf-served-with-pickled-ginger-slices-wasabi-plate_141793-8469.jpg?_wi=1",
          imageAlt: "luxury japanese steakhouse interior",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/lamb-chicken-burger-without-top-bun-with-mushroom-herbs-tomato-sauce_140725-8320.jpg?_wi=2"
      imageAlt="Kazan Steakhouse Atmosphere"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/steak-with-cheese-vegetables-restaurant_501050-842.jpg",
          alt: "Diner 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/small-slice-cake-blue-platter-piece-fabric_114579-44847.jpg",
          alt: "Diner 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/seared-tuna-coated-with-sesame-seeds-close-up_1147-532.jpg",
          alt: "Diner 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-food-professional-kitchen_23-2149728019.jpg",
          alt: "Diner 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/seafood-cleaning-process-kitchen_23-2150171403.jpg",
          alt: "Diner 5",
        },
      ]}
      avatarText="Join our satisfied guests"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Premium A5 Wagyu",
          icon: Beef,
        },
        {
          type: "text-icon",
          text: "Seasonal Omakese",
          icon: Flame,
        },
        {
          type: "text-icon",
          text: "Traditional Sake Pairing",
          icon: Wine,
        },
        {
          type: "text-icon",
          text: "Artisan Craftsmanship",
          icon: Sparkles,
        },
        {
          type: "text-icon",
          text: "Private Dining Available",
          icon: ShieldCheck,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="A Legacy of Craftsmanship"
      description="Born from generations of culinary wisdom, we transform the rarest ingredients into unforgettable memories."
      imageSrc="http://img.b2bpic.net/free-photo/close-up-male-chef-decorating-dish_23-2147863785.jpg?_wi=2"
      imageAlt="Chef at Work"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "A5 Wagyu Ribeye",
          price: "Market Price",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-japanese-meal-composition_23-2148809881.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Crispy Tempura",
          price: "$28",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-grilled-japanese-eel-with-sliced-cucumbers-gingers-served-with-wasabi-sauce-bamboo-leaf-ice-cubes-plate-table_141793-11605.jpg?_wi=2",
        },
        {
          id: "3",
          name: "Bluefin Toro Sashimi",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-nigiri-sushi-with-tuna-bamboo-leaf-served-with-pickled-ginger-slices-wasabi-plate_141793-8469.jpg?_wi=2",
        },
        {
          id: "4",
          name: "Miso Glazed Cod",
          price: "$38",
          imageSrc: "http://img.b2bpic.net/free-photo/sushi-dish-asian-restaurant_23-2148195634.jpg",
        },
        {
          id: "5",
          name: "Wagyu Striploin",
          price: "Market Price",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-rare-steak-wooden-board_181624-59117.jpg",
        },
        {
          id: "6",
          name: "Matcha Mousse",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-matcha-tea-plate-with-herbs_23-2148378876.jpg",
        },
      ]}
      title="Our Signature Selection"
      description="Exclusively sourced Wagyu and seasonal delicacies."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "t1",
          name: "Hiroshi Tanaka",
          role: "Executive Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-baker-speaking-about-flour-while-recording-video-tutorial-retired-blogger-chef-influencer-using-internet-technology-communicating-shooting-blogging-social-media-with-digital-equipment_482257-14411.jpg",
        },
        {
          id: "t2",
          name: "Elena Rossi",
          role: "Head Sommelier",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-luxury-restaurant_23-2150598333.jpg",
        },
        {
          id: "t3",
          name: "Kenji Yamamoto",
          role: "General Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-confident-manager-cafeteria_1098-20954.jpg",
        },
      ]}
      title="Masters of the Craft"
      description="Our team combines traditional technique with modern precision."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          handle: "@sarah_m",
          testimonial: "An incredible evening, truly the peak of dining.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-rich-woman-table_23-2149684353.jpg",
        },
        {
          id: "2",
          name: "David Zhou",
          handle: "@dzhou",
          testimonial: "The A5 Wagyu is unlike anything I have tasted before.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-sitting-table_23-2149684349.jpg",
        },
        {
          id: "3",
          name: "Elena Vazquez",
          handle: "@evazq",
          testimonial: "Impeccable service and sophisticated atmosphere.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excited-male-gardener-wearing-gardening-hat-holds-hot-pepper_141793-115867.jpg",
        },
        {
          id: "4",
          name: "Marcus Thorne",
          handle: "@mthorne",
          testimonial: "A culinary masterclass in every dish.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-fashion-clothes-is-sitting-open-air-cafe-is-using-smartphone-waiting-friends-city-lights-background_291650-842.jpg",
        },
        {
          id: "5",
          name: "Jia Lin",
          handle: "@jialin",
          testimonial: "Truly worth every visit, perfectly curated.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-cutting-steak-round-shape-wearing-black-gloves_140725-8334.jpg",
        },
      ]}
      showRating={true}
      title="Words from Guests"
      description="Experiences from those who share our passion for excellence."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do you require reservations?",
          content: "Yes, reservations are highly recommended for dinner.",
        },
        {
          id: "q2",
          title: "What is the dress code?",
          content: "Smart-elegant attire is preferred.",
        },
        {
          id: "q3",
          title: "Can you cater to dietary requirements?",
          content: "Please notify our team upon booking for specific needs.",
        },
      ]}
      title="Refined Details"
      description="Common inquiries regarding your dining experience at Kazan."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/top-view-japanese-dish-arrangement_23-2148809895.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Reserve Table"
      title="Join Our Journey"
      description="Sign up for updates on seasonal offerings and exclusive events."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Kazan Steakhouse"
      copyrightText="© 2025 Kazan Steakhouse. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
