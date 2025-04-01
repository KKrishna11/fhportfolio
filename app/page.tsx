"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";

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

export default function Home() {
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white/95 backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-serif font-weight  text-black tracking-wider"
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
              src="https://cdn.shopify.com/s/files/1/0651/4743/7218/files/fhmainimage.jpg?v=1742885727"
              alt="Florian Hurel Portrait"
              width={550}
              height={200}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
              About Florian Hurel
            </h2>

            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience in the beauty industry,
              Florian Hurel has cemented his place as a visionary in the world
              of hair styling and makeup artistry. His journey began at the
              young age of 16, driven by an insatiable passion for fashion and
              beauty. Through relentless dedication, innovation, and an eye for
              perfection, Florian has risen to become one of the most
              sought-after hair and makeup artists in the entertainment and
              fashion industries.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Florian's expertise lies in his ability to create effortlessly
              elegant and trend-setting looks, making him the go-to artist for
              Bollywood’s biggest stars, including Deepika Padukone, Priyanka
              Chopra Jonas, Anushka Sharma, Shraddha Kapoor, Aishwarya Rai
              Bachchan, and Katrina Kaif. His work has graced prestigious global
              platforms like the Cannes Film Festival and India’s most esteemed
              film awards, solidifying his reputation as a maestro of beauty.
            </p>

            <p className="text-gray-700 leading-relaxed">
              His relentless pursuit of excellence extends beyond celebrity
              styling—Florian has been a creative force behind editorial shoots
              for top-tier fashion magazines such as <strong>Vogue, GQ, Harper’s Bazaar, Elle, and Grazia</strong>. His
              minimalist yet impactful approach to beauty has redefined industry
              standards, influencing trends and inspiring the next generation of
              stylists.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Florian’s success is not merely a product of talent but of sheer
              perseverance, discipline, and an unwavering commitment to his
              craft. From working behind the scenes on Bollywood blockbusters to
              setting benchmarks in luxury beauty and fashion, he continues to
              push boundaries, proving that true mastery is achieved through
              passion, hard work, and a relentless pursuit of perfection.
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
                Florian Hurel Hair Couture & Spa isn’t just a salon—it’s an
                exclusive sanctuary where beauty meets artistry, and luxury is a
                way of life.
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Founded by renowned celebrity Hair & Makeup Artist Florian
                Hurel, our space is a reflection of his philosophy—where every
                hair couture experience is deeply personal, celebrating
                individuality through bespoke transformations. Here, beauty is
                not a trend but an intimate journey, tailored to elevate your
                essence and style.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Each visit is more than a service; it’s an indulgence in
                handcrafted luxury. From precision cuts to custom color
                artistry, every detail is curated to enhance your uniqueness.
                Our spa rituals go beyond relaxation—they are immersive
                experiences designed to rejuvenate, restore, and refine,
                ensuring that self-care feels like a celebration of self.
              </p>

              <p className="text-gray-700 leading-relaxed">
                At <strong>Florian Hurel Hair Couture & Spa,</strong> we don’t
                just offer beauty—we craft moments of transformation,
                confidence, and empowerment. Because true luxury isn’t just
                about looking beautiful—it’s about feeling it in every
                experience.
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
                src="https://cdn.shopify.com/s/files/1/0651/4743/7218/files/Color_Longevity_Shampoo_1.jpg?v=1742543109"
                alt="fhair"
                width={600}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide">
                f<span className="pl-1"></span>hair: India's Luxury Haircare,
                Made for the World
              </h2>

              <p className="text-gray-700 leading-relaxed">
                fhair isn’t just a haircare brand—it’s a movement. Born from
                Florian Hurel’s vision to create a world-class brand that
                represents India on the global stage, fhair is a testament to
                innovation, craftsmanship, and excellence.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Every bottle, every formula, every shade is{" "}
                <strong>100% made in India,</strong>
                inspired by the richness of our land and the wisdom of nature.
                Our products are meticulously crafted to be{" "}
                <strong>
                  sulfate-free, phosphate-free, paraben-free, vegan, and
                  cruelty-free
                </strong>
                —powerful enough to transform your hair, yet gentle on the
                planet.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This is more than luxury haircare. It’s an{" "}
                <strong>Indian-born revolution,</strong> designed for everyone,
                everywhere. Experience the future of haircare, rooted in India,
                created for the world.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>fhair—where beauty meets purpose.</strong>
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
                FloFitBox: A Passion Project That Became a Movement
              </h2>

              <p className="text-gray-700 leading-relaxed">
                For Florian Hurel, fitness has always been more than just a
                routine—it’s been a way of life. But when COVID forced gyms to
                shut down, it also closed off a space that had been his
                sanctuary. Struggling with the impact, Florian refused to let
                circumstances define him. Instead, he turned adversity into an
                opportunity, building his own gym—FloFitBox—not just for
                himself, but for anyone who needed a space to rebuild, refocus,
                and reclaim their strength.
              </p>

              <p className="text-gray-700 leading-relaxed">
                What started as a personal journey soon evolved into something
                bigger. FloFitBox became a community—a space where fitness is
                not just about lifting weights but about lifting each other up.
                Drawing from his experience in Wushu and Thai Boxing, and his
                deep-rooted love for cross-functional training, Florian created
                a space that merges passion with purpose.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Today, FloFitBox is Mumbai’s premier Multifunctional Fitness
                Center, bringing together people who share the same hunger for
                growth, resilience, and transformation. With cutting-edge
                equipment, expert trainers, and an approach that blends
                strength, agility, and endurance, it’s more than just a gym—it’s
                a movement.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For Florian, this is not just about fitness. It’s about building
                a mindset, a lifestyle, and a family of individuals who push
                beyond their limits—together.
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
              
              src="https://cdn.shopify.com/s/files/1/0651/4743/7218/files/IMG_4026.jpg?v=1743503837"
                // src="/assets/img/instagram/5.jpg"
                alt="FloFitBox"
                width={600}
                height={300}
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

        <div className="relative overflow-hidden">
          <div className="w-full flex gap-4">
            <div className="flex gap-4 animate-marquee">
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
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-colors duration-300 flex items-center justify-center">
                      <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {/* Duplicate for infinite scrolling effect */}
            <div className="flex gap-4 animate-marquee">
              {instagramPosts.map((post) => (
                <a
                  key={`dup-${post.id}`}
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
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-colors duration-300 flex items-center justify-center">
                      <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 45s linear infinite;
          white-space: nowrap;
        }
      `}</style>
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
                  {/* <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <a
                      href="mailto:contact@florianhurel.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      info@florianhurelhaircouture.com
                    </a>
                  </div> */}
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
              Master Stylist and Visionary Entrepreneur with over 2 decades of
              experience in the beauty industry
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
