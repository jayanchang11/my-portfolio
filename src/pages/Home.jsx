import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  FileText,
} from "lucide-react";
import closeEyeAvatar from "../assets/images/close-eye-avatar.png";
import smileAvatar from "../assets/images/smile-avatar.png";
import resumePdf from "../assets/resuem/Jay-An's Resume (mark).pdf";

// Reusable Reveal component for scroll-triggered animations
const Reveal = ({ children, width = "w-full", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${width} transition-all duration-1000 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default function Home({ onOpenClosetCloud }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: "closetcloud",
      title: "ClosetCloud",
      category: "Product Design",
      description:
        "ClosetCloud is a peer-to-peer clothing rental platform that connects people who want to rent, lend, or share affordable outfits directly from one another’s closets",
      color: "bg-blue-600",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "hand-jump-dino",
      title: "Hand Jump Dino Game",
      category: "Interactive Game",
      description:
        "I recreated Google’s Dino Game as a more interactive experience using p5.js and an AI model that detects changes in users’ hand gestures to control the character’s jump.",
      color: "bg-emerald-500",
      image: new URL("../assets/images/hand-jump-cover.png", import.meta.url).href,
      link: "https://jayanchang.github.io/hand-jump-dino-game/",
    },
    {
      id: "ibm-skillsbuild",
      title: "IBM SkillsBuild WeChat Mini Program",
      category: "UX Design",
      description:
        "A streamlined version of the SkillsBuild platform that offers different online courses, dedicated to develop individuals’ professional & technical skills",
      color: "bg-orange-500",
      image: new URL("../assets/images/DSC08582.jpg", import.meta.url).href,
    },
    {
      id: "synth-ai",
      title: "Synth AI",
      category: "Interaction Design",
      description:
        "Natural language interface for complex creative sound design and synthesis.",
      color: "bg-purple-600",
      image:
        "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#121212] font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md py-4 border-b border-black/5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "top")}
            className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity uppercase"
          >
            JAY-AN CHANG <span className="text-[#2563EB]">.</span>
          </a>

          <div className="hidden md:flex space-x-12 text-sm font-medium uppercase tracking-widest">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className="hover:text-[#2563EB] transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="hover:text-[#2563EB] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="hover:text-[#2563EB] transition-colors"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#121212] z-40 flex flex-col items-center justify-center space-y-8 text-white">
          <a
            href="#work"
            className="text-4xl font-bold italic"
            onClick={(e) => scrollToSection(e, "work")}
          >
            Work
          </a>
          <a
            href="#about"
            className="text-4xl font-bold italic"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-4xl font-bold italic"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="top"
        className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="relative z-10">
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-[#2563EB]">
                  UX, GRAPHIC & INTERACTION DESIGNER
                </h2>
                <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
                  Design <br />
                  With <br />
                  Intent.
                </h1>
                <p className="max-w-md text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10">
                  Crafting digital experiences that bridge the gap between human
                  intuition and technical possibility.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#work"
                    onClick={(e) => scrollToSection(e, "work")}
                    className="group bg-[#121212] text-white px-8 py-4 rounded-full font-bold flex items-center space-x-2 hover:bg-[#2563EB] transition-all duration-300"
                  >
                    <span>View Projects</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Abstract 3D Hero Element (Jayan's CV Card) */}
            <div className="relative hidden lg:block pt-24">
              <Reveal delay={0.2}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-[400px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[100px] animate-pulse"></div>

                  {/* Clickable Download Card */}
                  <a
                    href={resumePdf}
                    download="Jayan_Chang_CV.pdf"
                    className="group/card relative w-80 h-96 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center justify-center transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-700 overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/20 to-transparent group-hover/card:from-[#2563EB]/30 transition-colors"></div>

                    {/* Semi-transparent decorative lines */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                      <div className="absolute top-0 left-[-20%] w-[140%] h-[1px] bg-white/30 rotate-[35deg] origin-left group-hover/card:bg-white/50 transition-colors"></div>
                      <div className="absolute top-1/3 left-[-20%] w-[140%] h-[1px] bg-white/10 rotate-[35deg] origin-left group-hover/card:bg-white/30 transition-colors"></div>
                      <div className="absolute top-2/3 left-[-20%] w-[140%] h-[1px] bg-white/20 rotate-[35deg] origin-left group-hover/card:bg-white/40 transition-colors"></div>
                    </div>

                    {/* Visual Indicator for Download */}
                    <div className="absolute top-6 right-6 text-[#2563EB] opacity-0 group-hover/card:opacity-100 transition-opacity translate-y-2 group-hover/card:translate-y-0 duration-500">
                      <FileText size={32} />
                    </div>

                    <span className="text-5xl font-black text-[#121212]/20 group-hover/card:text-[#121212]/40 select-none tracking-tighter leading-tight text-center px-10 transition-colors duration-500 uppercase z-10">
                      Jayan's<br />
                      CV
                    </span>

                    <div className="mt-8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 z-10">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                        Click to Download
                      </span>
                    </div>

                    <div
                      className="absolute top-10 -right-10 w-40 h-40 bg-white/20 backdrop-blur-3xl border border-white/40 rounded-2xl rotate-12 animate-bounce transition-all duration-1000"
                      style={{ animationDuration: "4s" }}
                    ></div>
                    <div
                      className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#2563EB]/5 backdrop-blur-xl border border-white/20 rounded-full -rotate-12 animate-bounce transition-all duration-1000"
                      style={{ animationDuration: "6s" }}
                    ></div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={(e) => scrollToSection(e, "work")}
        >
          <ChevronDown size={40} className="text-gray-300" />
        </div>
      </section>

      {/* Selected Works Grid */}
      <section id="work" className="py-24 px-6 bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-8 md:space-y-0">
              <div>
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#2563EB]">
                  Selected Works
                </h3>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                  Portfolio
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index % 2 === 0 ? 0 : 0.1}>
                <div
                  onClick={() => {
                    if (project.id === "closetcloud") {
                      onOpenClosetCloud();
                      return;
                    }
                    if (project.link) {
                      window.open(project.link, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="group relative overflow-hidden bg-zinc-900 rounded-2xl cursor-pointer"
                >
                  <div className="aspect-[4/5] md:aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110 group-hover:opacity-50 grayscale group-hover:grayscale-0"
                    />
                  </div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-sm font-bold tracking-widest uppercase text-[#2563EB] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category}
                    </span>
                    <h4 className="text-4xl font-black tracking-tighter uppercase mb-4">
                      {project.title}
                    </h4>
                    <p className="text-white max-w-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      <button className="flex items-center space-x-2 font-bold text-sm uppercase tracking-widest border-b border-white pb-1 group/btn">
                        <span>View Case Study</span>
                        <ExternalLink
                          size={16}
                          className="group-hover/btn:rotate-45 transition-transform"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={20} className="-rotate-45" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="group relative w-full aspect-[3/4] bg-zinc-200 rounded-3xl overflow-hidden">
                  <img
                    src={smileAvatar}
                    alt="Jay-An Chang"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={closeEyeAvatar}
                    alt="Jay-An Chang"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#2563EB] text-white p-12 rounded-3xl hidden md:block">
                  <p className="text-5xl font-black tracking-tighter uppercase italic leading-none">
                    Hover on<br />
                    me!
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-[#2563EB]">
                  Who am I
                </h3>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">
                  Systematic <br />
                  Creativity.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Hello, my name is Jay-An. I’m a UI/UX designer who builds innovative digital products. Beyond UX, my
                  areas of exploration include interactive media and graphic design. I love football, fashion, and film
                  (all the Fs)—feel free to reach out!
                </p>
                <div className="grid grid-cols-1 gap-8 mb-10">
                  <div className="relative p-0 rounded-2xl">
                    <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">
                      Core Skills
                    </h4>
                    <ul className="flex flex-wrap justify-start gap-3 font-bold text-sm text-left">
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # UX Strategy
                      </li>
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # Design Systems
                      </li>
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # Interaction Design
                      </li>
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # Visual Identity
                      </li>
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # User Research
                      </li>
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # Wireframing
                      </li>
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # Information Architecture
                      </li>
                      <li className="px-4 py-2 rounded-full bg-gradient-to-br from-white/70 via-white/50 to-[#2563EB]/30 backdrop-blur-sm border border-white/30 shadow-sm">
                        # Accessibility Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-[#121212] text-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-32">
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-12 max-w-4xl leading-tight">
                Let's craft the <span className="text-[#2563EB] italic">future</span>{" "}
                together.
              </h2>
              <a
                href="mailto:changjayan@gmail.com"
                className="text-2xl md:text-4xl font-light hover:text-[#2563EB] transition-colors border-b border-white/20 pb-2"
              >
                changjayan@gmail.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 space-y-8 md:space-y-0">
              <div className="text-sm font-bold tracking-widest uppercase">
                © 2025 JAY-AN CHANG — TAIPEI / MELBOURNE
              </div>
              <div className="flex space-x-8">
                <a
                  href="https://www.linkedin.com/in/jayan-chang-9b08312ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#2563EB] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/changjayan?igsh=MWZpdWNseWhpbzZuaA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#2563EB] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:changjayan@gmail.com"
                  className="hover:text-[#2563EB] transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Powered by coffee and donuts
              </div>
            </div>
          </Reveal>
        </div>
      </footer>

      {/* keep exactly as original */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          scroll-behavior: smooth;
        }

        .tracking-tighter {
          letter-spacing: -0.05em;
        }
      `,
        }}
      />
    </div>
  );
}
