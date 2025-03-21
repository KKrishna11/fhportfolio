"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Mail,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sendContactEmail } from "@/app/actions";

import { toast } from "sonner";

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <About />
      <BrandSections />
      <InstagramFeed />

      <ContactForm />
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white/95 backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-serif font-bold tracking-tight text-black"
        >
          FLORIAN HUREL
        </Link>

        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-black"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4 shadow-lg">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLinks mobile />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const baseClass = "text-sm uppercase tracking-wider transition-colors";
  const mobileClass = `${baseClass} hover:text-gray-600`;
  const desktopClass = `${baseClass} text-black hover:text-gray-600`;

  const linkClass = mobile ? mobileClass : desktopClass;

  return (
    <>
      <Link href="#about" className={linkClass}>
        About
      </Link>
      <Link href="#brands" className={linkClass}>
        Brands
      </Link>
      <Link href="#instagram" className={linkClass}>
        Instagram
      </Link>

      <Link href="#contact" className={linkClass}>
        Contact
      </Link>
    </>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://cdn.shopify.com/s/files/1/0651/4743/7218/files/Untitled_design.jpg?v=1738496067"
              alt="Florian Hurel Portrait"
              width={600}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
              About Florian Hurel
            </h2>

            <p className="text-gray-700 leading-relaxed">
              With over 2 decades of experience in the beauty industry, Florian
              Hurel stands as a renowned figure in the world of hair styling and
              beauty.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Florian, who forayed into the world of fashion at the tender age
              of 16, is known for his unique and minimalistic style and has
              carved out a niche for himself in Bollywood. With almost two
              decades of experience in make-up and hair styling, he has worked
              with artists on the most prestigious platforms, such as the Cannes
              Film Festival and prominent film awards in the country.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Hair and make-up artist Florian Hurel is a trendsetter! French
              make-up and hair stylist Florian Hurel is one of the most sought-
              after names in the entertainment industry today. He has styled the
              likes of Deepika Padukone, Priyanka Chopra Jonas, Anushka Sharma,
              Shraddha Kapoor, Aishwarya Rai Bachchan, Katrina Kaif many more,
              also adding value to his profile on working with them on some of
              India's highest grossing Bollywood Blockbusters.
            </p>

            <p className="text-gray-700 leading-relaxed">
              His uniqueness and recognition in creating looks, Florian is the
              go to Artist for high-end fashion magazines such as Vogue, GQ,
              Harpers Bazaar , Elle, and Grazia.
            </p>

            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center text-sm uppercase tracking-wider font-medium border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandSections() {
  return (
    <section id="brands" className="bg-white">
      {/* Florian Hurel HAIR COUTURE AND SPA*/}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                Florian Hurel Hair Couture & Spa
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Florian Hurel Hair Couture & Spa is more than just a destination
                for beauty—it’s an artistic expression that connects hair
                styling and wellness to the essence of individuality and
                empowerment. Founded by renowned celebrity Hair & Makeup Artist
                Florian Hurel, our space redefines luxury, blending high-end
                hair couture with rejuvenating spa experiences.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For Florian, Hair Couture is an intimate journey of beauty—a
                form of self-expression that celebrates diversity and
                uniqueness. This philosophy extends beyond styling, with
                training at its core, ensuring that every artist under his
                guidance understands and enhances the distinct beauty of every
                individual they work with.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Complementing this vision, our spa services offer a sanctuary of
                relaxation and renewal, designed to restore balance and enhance
                natural beauty. Whether it’s a transformative hair experience or
                a soothing spa retreat, Florian Hurel Hair Couture & Spa is a
                haven for self-care, empowerment, and artistry.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Here, beauty is not just a craft—it’s a powerful tool for
                confidence, self-expression, and transformation.
              </p>

              <div className="pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border-black text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors"
                >
                  <Link
                    href="https://florianhurelhaircouture.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Hair Couture Website
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Image
                src="https://cdn.shopify.com/s/files/1/0651/4743/7218/files/test-2.jpg?v=1741260581"
                alt="Florian Hurel Hair Couture & Spa"
                width={600}
                height={800}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* fHair */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://cdn.shopify.com/s/files/1/0651/4743/7218/files/Untitled_design_11.png?v=1738408639"
                alt="fhair"
                width={600}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide">
                fhair
              </h2>

              <p className="text-gray-700 leading-relaxed">
                fhair was born out of Florian Hurel's vision to create a
                world-class hair care brand that would proudly represent India
                on the global stage.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Every aspect of fhair, from its meticulously formulated products
                to its elegantly designed packaging and nature-inspired hues, is
                100% made in India.
              </p>

              <p className="text-gray-700 leading-relaxed">
                It is a luxury haircare brand that is both effective and made
                for everyone. fhair is sulfate-free, phosphate-free,
                paraben-free, vegan, and cruelty-free. It’s gentle on your hair,
                kind to the planet, and powerful enough to address a wide range
                of hair concerns.
              </p>

              <p className="text-gray-700 leading-relaxed">
                fhair is designed to bring out the best in you. Experience the
                transformation for yourself. It’s time to celebrate a high-end,
                Indian-made solution for haircare.
              </p>

              <div className="pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border-black text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors"
                >
                  <Link
                    href="https://fhair.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit fhair Website
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOFITBOX*/}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                FloFitBox
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Florian, the No1 CrossFit athlete, faced a challenging time when
                his gym closed during COVID. Determined to regain control of his
                health and well-being, he built his own gym—FlofitBox. What
                started as a personal space to stay fit soon became a
                community-driven fitness hub, inspiring youth to prioritize
                their health and resilience.
              </p>

              <p className="text-gray-700 leading-relaxed">
                FloFitBox is Mumbai's premier Multifunctional Fitness Center,
                founded by Florian Hurel. As a fitness enthusiast who trained in
                Wushu and Thai Boxing in Thailand, Florian discovered
                cross-functional training six years ago and has been passionate
                about it ever since.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The center offers a comprehensive approach to fitness, combining
                various training methodologies to help clients achieve their
                health and wellness goals. With state-of-the-art equipment and
                expert trainers, FloFitBox provides a dynamic and effective
                workout experience.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Florian's vision for FloFitBox extends beyond physical fitness,
                embracing a holistic approach to wellness that nurtures both
                body and mind. The center has become a hub for fitness
                enthusiasts and celebrities alike.
              </p>

              <div className="pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border-black text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors"
                >
                  <Link
                    href="https://www.flofitbox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit FloFitBox Website
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/instagram/5.jpg"
                alt="FloFitBox"
                width={600}
                height={800}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "/assets/img/instagram/1.jpg",
      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
    {
      id: 2,
      imageUrl: "/assets/img/instagram/4.jpg",
      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
    {
      id: 3,

      imageUrl: "/assets/img/instagram/2.jpg",
      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
    {
      id: 4,
      imageUrl: "/assets/img/instagram/5.jpg",
      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
    {
      id: 5,
      imageUrl: "/assets/img/instagram/7.jpg",
      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
    {
      id: 6,
      imageUrl: "/assets/img/instagram/6.jpg",
      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
    {
      id: 7,
      imageUrl: "/assets/img/instagram/3.jpg",
      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
    {
      id: 8,
      imageUrl: "/assets/img/instagram/8.jpg",

      link: "https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount =
        direction === "left"
          ? -current.offsetWidth / 2
          : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="instagram" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            Instagram
          </h2>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm uppercase tracking-wider font-medium hover:text-gray-600 transition-colors"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow @florianhurel
          </Link>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
          >
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[280px] sm:w-[320px] aspect-square snap-start"
              >
                <div className="relative w-full h-full group overflow-hidden rounded-lg">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover  object-top  transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Contact form with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must be at most 15 digits." }),

  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await sendContactEmail(values);
      toast.success("Message sent!", {
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast.error("Something went wrong.", {
        description: "Your message couldn't be sent. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Whether you're seeking a glamorous makeover for a special occasion
              or interested in collaborating on a project, Florian Hurel invites
              you to experience the transformative power of beauty.
            </p>
          </div>

          <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-black text-white p-8 lg:p-12">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <a
                      href="mailto:contact@florianhurel.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      info@florianhurelhaircouture.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Instagram className="h-5 w-5 text-gray-400" />
                    <a
                      href="https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      @florianhurel
                    </a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Facebook className="h-5 w-5 text-gray-400" />
                    <a
                      href="https://facebook.com/florianhurel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Florian Hurel
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-xl font-serif font-medium mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com/florianhurel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your name"
                                className="border-gray-300 focus-visible:ring-black"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="Your email"
                                className="border-gray-300 focus-visible:ring-black"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Phone
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your phone number"
                              className="border-gray-300 focus-visible:ring-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Subject"
                              className="border-gray-300 focus-visible:ring-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Your message"
                              rows={5}
                              className="border-gray-300 focus-visible:ring-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-none text-sm uppercase tracking-wider font-medium py-6"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  const brands = [
    {
      name: "Florian Hurel Hair Couture",
      url: "https://florianhurelhaircouture.com/",
    },
    { name: "FloFitBox", url: "https://www.flofitbox.com/" },
    { name: "fhair", url: "https://fhair.in/" },
  ];

  return (
    <footer className="py-16 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Florian Hurel</h3>
            <p className="text-gray-400 mb-6">
              Renowned Celebrity Hair & Makeup Artist | Beauty Industry Expert
              Master Stylist and Visionary Entrepreneur with over 2 decades of experience in the beauty industry,
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/florianhurel?igsh=ZHZsc3hjcXJwNWd3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/florianhurel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@florianhurelhaircouture.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Brands</h3>
            <ul className="space-y-3">
              {brands.map((brand, index) => (
                <li key={index}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#brands"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Florian Hurel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
