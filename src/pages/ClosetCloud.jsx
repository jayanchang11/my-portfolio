import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Clock,
  Hammer,
  HelpCircle,
  Search,
  X,
  Gauge,
  Users,
  ClipboardList,
  BarChart3,
  User,
} from "lucide-react";
import closetcloudBanner from "../assets/images/closetcloud-banner.jpg";
import alexPersona from "../assets/images/alex-persona.jpg";
import closetcloudInterview from "../assets/images/closetcloud-interview.jpg";
import conditionReportDoodle from "../assets/images/condition-report-doodle.png";
import sizeMatchingDoodle from "../assets/images/size-matching-doodle.png";
import whyRentDoodle from "../assets/images/why-rent-doodle.png";
import reelsDoodle from "../assets/images/reels-doodle.png";
import glamcornerLogo from "../assets/images/glamcorner.png";
import rentTheRunwayLogo from "../assets/images/rent-the-runway.png";
import depopLogo from "../assets/images/depop.png";
import infoArchClosetcloud from "../assets/images/info-arch-closetcloud.jpeg";
import homepage1 from "../assets/images/Homepage-1.jpg";
import homepage2 from "../assets/images/Homepage-2.jpg";
import homepage3 from "../assets/images/Homepage-3.jpg";
import homeMockup from "../assets/images/home-mockup.jpg";
import addItemMockup from "../assets/images/add-item-mockup.jpg";
import discoveryMockup from "../assets/images/discovery-mockup.jpg";
import profileMockup from "../assets/images/profile-mockup.jpg";
import reelMockup from "../assets/images/reel-mockup.jpg";
import discover from "../assets/images/discover.jpg";
import discoverWomen from "../assets/images/discover-women.jpg";
import discoverJacket from "../assets/images/discover-jacket.jpg";
import productJacket from "../assets/images/product-jacket.jpg";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import priceSave from "../assets/images/Price-Save.png";
import sizeComp from "../assets/images/size-comp.jpg";
import measurement1 from "../assets/images/measurement1.jpg";
import measurement2 from "../assets/images/measurement2.jpg";
import measurement3 from "../assets/images/measurement3.jpg";
import measurement4 from "../assets/images/measurement4.jpg";
import measurement5 from "../assets/images/measurement5.jpg";
import paymentPickup1 from "../assets/images/Payment-pickup1.jpg";
import paymentPickup2 from "../assets/images/payment-pickup2.jpg";
import paymentPickup3 from "../assets/images/payment-pickup3.jpg";
import paymentPickup4 from "../assets/images/payment-pickup4.jpg";
import condition1 from "../assets/images/condition1.jpg";
import condition2 from "../assets/images/condition2.jpg";
import condition3 from "../assets/images/condition3.jpg";
import condition4 from "../assets/images/condition4.jpg";
import video1 from "../assets/images/Video.jpg";
import video2 from "../assets/images/video2.jpg";
import video3 from "../assets/images/video3.jpg";
import video4 from "../assets/images/video4.jpg";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem Statement" },
  { id: "research", label: "Background Research" },
  { id: "competitive-analysis", label: "Competitive Analysis" },
  { id: "interviews", label: "Interviews & Analysis" },
  { id: "ideation", label: "Ideation" },
  { id: "personas", label: "Personas" },
  { id: "information-architecture", label: "Information Architecture" },
    { id: "prototypes", label: "Low Fidelity Prototypes" },
  { id: "testing", label: "Usability Testing" },
  { id: "iterations", label: "Iterations" },
];

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

export default function ClosetCloud({ onBack }) {
  const [activeSection, setActiveSection] = useState("");
  const activeSectionRef = useRef("");
  const [bannerVisible, setBannerVisible] = useState(false);
  const [iterationsInView, setIterationsInView] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;
      const offset = 140;
      let current = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      });
      if (current && current !== activeSectionRef.current) {
        activeSectionRef.current = current;
        setActiveSection(current);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const position = elementRect - bodyRect - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
      activeSectionRef.current = id;
      setActiveSection(id);
    }
  };

  useEffect(() => {
    setBannerVisible(true);
  }, []);

  const ideationRows = [
    {
      title: "Condition Report",
      image: conditionReportDoodle,
      does:
        "Mandatory verification step for renters and lenders; captures pre/post condition with checklists and photos.",
      solves:
        "Timestamped proof reduces hygiene concerns and damage disputes, preventing conflict and building confidence.",
    },
    {
      title: "Size Compatibility",
      image: sizeMatchingDoodle,
      does:
        "Helps users assess garment fit before renting by comparing body measurements with sizing data, presenting a clear Fit Confidence score.",
      solves:
        "Reduces fit anxiety and return friction by improving first-time fit for event-based rentals.",
    },
    {
      title: "AI Price Saver",
      image: whyRentDoodle,
      does:
        "This pop-up displays an item's original price alongside the rental price and highlights the amount saved by renting, reducing mental calculation.",
      solves:
        "Directly addresses price sensitivity and reinforces renting as a financially smarter choice for one-time or occasion-based outfits.",
    },
    {
      title: "Try-On Reels",
      image: reelsDoodle,
      does:
        "Try-On Reels allow lenders and creators to post short videos showing how garments look when worn, capturing movement, drape, and real-body fit.",
      solves:
        "Addresses hesitation around size compatibility and styling confidence while making browsing more engaging and social.",
    },
  ];

  const competitorTable = [
    {
      name: "GlamCorner",
      region: "Australia — B2C fashion rental",
      logoText: "GC",
      logo: glamcornerLogo,
      mission: "“We are on a mission to accelerate the transition to a more circular fashion system.”",
      target: "Australian customers seeking premium online rental with cleaning handled by the platform.",
      strengths: [
        <>
          <strong>“Done-for-you” convenience</strong> and cleaning lowers friction and hygiene concern.
        </>,
        <>
          Clear <strong>sustainability positioning</strong> (circular fashion + B Corp).
        </>,
      ],
      weaknesses: [
        <>
          <strong>Not peer-to-peer</strong>; limited wardrobe monetization and community sharing dynamics.
        </>,
        <>
          <strong>Platform-controlled inventory</strong> can mean higher prices than community lending.
        </>,
      ],
    },
    {
      name: "Rent the Runway",
      region: "USA — B2C rental subscription",
      logoText: "RTR",
      logo: rentTheRunwayLogo,
      mission: "“Our mission is to power women to feel their best every day.”",
      target: "Women wanting designer variety without ownership, especially via subscription (“Closet in the Cloud”).",
      strengths: [
        <>
          Scalable <strong>subscription with constant rotation</strong>; great for repeat use.
        </>,
        <>
          Strong <strong>brand narrative</strong> and mature rental model (“rent, wear, return/keep”).
        </>,
      ],
      weaknesses: [
        <>
          <strong>Company-owned inventory</strong>—doesn’t unlock a true community wardrobe supply side.
        </>,
        <>
          <strong>Subscription pricing</strong> can deter one-off or rare-use renters.
        </>,
      ],
    },
    {
      name: "Depop",
      region: "Global — C2C second-hand",
      logoText: "DP",
      logo: depopLogo,
      mission: "“Our mission is to make fashion circular…” and make secondhand “as exciting and rewarding as buying new.”",
      target: "Large peer-to-peer resale community (strong Gen Z) buying/selling secondhand fashion.",
      strengths: [
        <>
          <strong>True C2C marketplace</strong>: strong community and huge variety of secondhand supply.
        </>,
        <>
          <strong>Social, exciting discovery</strong> encourages habit formation.
        </>,
      ],
      weaknesses: [
        <>
          <strong>Resale ≠ rental</strong>; ownership transfer doesn’t support occasion-only access.
        </>,
        <>
          <strong>Trust/quality variance</strong> and disputes are hard to solve at scale without strong verification.
        </>,
      ],
    },
  ];

  useEffect(() => {
    let ticking = false;
    const updateIterationsInView = () => {
      ticking = false;
      const target = document.getElementById("iterations");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const marker = 240;
      const isInView = rect.top <= marker && rect.bottom >= marker;
      setIterationsInView(isInView);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateIterationsInView);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateIterationsInView();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("hero");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-[#121212] min-h-screen font-sans overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-[60] flex items-center space-x-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg border border-black/5 hover:bg-[#E1A560] hover:text-white transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Portfolio</span>
      </button>

      {/* Hero Banner */}
      <section
        id="hero"
        className="h-screen w-full relative flex items-center justify-center overflow-hidden"
      >
        <div
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            bannerVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={closetcloudBanner}
            className="w-full h-full object-cover"
            alt="ClosetCloud"
          />
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-800 drop-shadow-lg animate-bounce cursor-pointer"
          onClick={() => scrollTo("overview")}
        >
          <ChevronDown size={40} />
        </div>
      </section>

      <div
        className={`mx-auto py-24 flex flex-col md:flex-row transition-all duration-500 ${
          iterationsInView ? "max-w-none px-0 gap-0" : "max-w-7xl px-6 gap-20"
        }`}
      >
        {/* Left Progress Bar / TOC */}
        <aside
          className={`hidden md:block fixed top-32 z-40 transition-all duration-500 ${
            !heroInView && !iterationsInView ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ left: "max(24px, calc((100vw - 80rem) / 2 + 24px))" }}
        >
          <div className="space-y-4 border-l border-gray-100">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`block pl-6 py-2 text-xs font-bold uppercase tracking-widest transition-all text-left border-l-2 -ml-[2px] ${
                  activeSection === section.id
                    ? "text-[#E1A560] border-[#E1A560]"
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </aside>

        <div
          className={`hidden md:block shrink-0 transition-all duration-500 ${
            iterationsInView ? "w-0" : "w-64"
          }`}
          aria-hidden="true"
        />

        {/* Main Content Sections */}
        <main className="flex-1 space-y-32 transition-all duration-500">
          {/* Overview */}
          <section id="overview" className="scroll-mt-32">
            <Reveal>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-[#E1A560]">
                Project Overview
              </h2>
              <p className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-12">
                ClosetCloud is a peer-to-peer clothing rental platform that connects people who want to rent, lend, or
                share affordable outfits directly from one another’s closets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                    <Clock size={14} /> <span>Timeline</span>
                  </div>
                  <p className="font-bold">12 Weeks (Fall 2025)</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                    <Hammer size={14} /> <span>Tools</span>
                  </div>
                  <p className="font-bold">
                    Figma, Adobe Illustrator, Photoshop, Google Form, Useberry (usability testing)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                    <User size={14} /> <span>Role</span>
                  </div>
                  <p className="font-bold">Lead UX Researcher & Product Designer</p>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Problem Statement */}
          <section id="problem">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">The Problem</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
                <strong>Fast fashion harms the environment</strong> because clothing is{" "}
                <strong>overproduced</strong> and then <strong>abandoned</strong>. Although there are many online
                clothing sites, people still buy <strong>one-time outfits</strong> for special occasions and never wear
                them again. As a result, this creates a <strong>vicious cycle</strong>.
              </p>
              <div className="p-8 bg-gray-50 rounded-3xl border-l-4 border-[#E1A560]">
                <div className="flex items-start space-x-3 text-gray-800">
                  <HelpCircle size={22} className="flex-shrink-0 mt-1 text-[#E1A560]" />
                  <p className="italic text-lg">
                    "How might we create systems that extend the lifespan of clothing and prevent garments from being
                    abandoned after minimal use?"
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Research */}
          <section id="research">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Background Research
              </h3>
              <p className="text-lg text-gray-600 mb-10">
                Secondary research was conducted to fully realize the significance of the problem domain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    num: "01",
                    title: "Fashion’s Environmental Cost",
                    body:
                      "The fashion industry is the world's second most polluting sector which contributes 2-8% of global carbon emissions (GENeco, 2022).",
                  },
                  {
                    num: "02",
                    title: "Fast Fashion & Overconsumption",
                    body:
                      "Fast fashion encourages frequent, low-cost purchases and short-term use, reinforcing a waste-heavy cycle that prioritises volume over durability.",
                  },
                  {
                    num: "03",
                    title: "Human & Ethical Impact",
                    body:
                      "Many garment workers face extremely low wages, unsafe conditions, and excessive hours (Bonanni, Nolan and Pryde, 2024).",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-8 rounded-2xl border border-white/30 shadow-lg bg-gradient-to-br from-white/50 via-white/20 to-[#E1A560]/15 backdrop-blur-lg flex flex-col space-y-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  >
                    <span className="text-xs font-black tracking-[0.3em] uppercase text-gray-400">
                      {item.num}
                    </span>
                    <h4 className="text-xl font-black tracking-tight">{item.title}</h4>
                    {item.body && <p className="text-sm text-gray-600">{item.body}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Competitive Analysis */}
          <section id="competitive-analysis" className="scroll-mt-32">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Competitive Analysis
              </h3>
              <p className="text-gray-600 mb-10">
                How leading rental and resale players address convenience, sustainability, and community—and where gaps
                remain for a peer-to-peer model.
              </p>
              <div className="overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-white/30 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200/70">
                  <div className="p-4 lg:p-6 font-bold uppercase text-xs tracking-[0.25em] text-gray-500">
                    &nbsp;
                  </div>
                  {competitorTable.map((c) => (
                    <div key={c.name} className="p-4 lg:p-6">
                      <div className="flex items-center space-x-3 min-h-[72px]">
                        {c.logo ? (
                          <img
                            src={c.logo}
                            alt={`${c.name} logo`}
                            className="h-12 max-w-[72px] object-contain"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-[#E1A560]/15 flex items-center justify-center text-sm font-black text-[#E1A560]">
                            {c.logoText}
                          </div>
                        )}
                        <div className="leading-snug">
                          <h4 className="text-base font-black tracking-tight">{c.name}</h4>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">{c.region}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {[
                  { label: "Mission", render: (c) => c.mission },
                  { label: "Target Market", render: (c) => c.target },
                  {
                    label: "Strengths",
                    render: (c) => (
                      <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                        {c.strengths.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    label: "Weaknesses",
                    render: (c) => (
                      <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                        {c.weaknesses.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    ),
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200/70"
                  >
                    <div className="p-4 lg:p-6 bg-white/60 md:bg-transparent">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">{row.label}</p>
                    </div>
                    {competitorTable.map((c) => (
                      <div key={c.name + row.label} className="p-4 lg:p-6 bg-white/70">
                        <div className="text-sm text-gray-800 leading-relaxed">{row.render(c)}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Interviews */}
          <section id="interviews">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">Interviews & Analysis</h3>
              <p className="text-gray-600 mb-10">
                To ground ClosetCloud in real user needs, we conducted interviews with potential users who regularly
                engage in fashion purchasing, such as university students and fashion enthusiasts. The results show a
                high willingness to rent clothing for specific occasions (e.g., proms and weddings) rather than for
                everyday wear. Key needs and concerns were also identified:
              </p>
              <div className="w-full flex justify-center">
                <img
                  src={closetcloudInterview}
                  alt="ClosetCloud interview findings"
                  className="w-full max-w-5xl rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          </section>

          {/* Ideation */}
          <section id="ideation">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">Ideation</h3>
              <p className="text-gray-600 mb-8">
                Based on insights from user interviews, we translated key concerns around trust, size compatibility, and price
                sensitivity into concrete design ideas. Each concept focuses on reducing friction in peer-to-peer
                clothing rental and making renting feel as confident, fair, and worthwhile as buying.
              </p>
              <div className="overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-white/30 shadow-lg">
                <div className="divide-y divide-gray-200/70">
                  {ideationRows.map((row) => (
                    <div
                      key={row.title}
                      className="grid lg:grid-cols-3 gap-6 lg:gap-10 p-6 lg:p-8"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-24 h-24 shrink-0 rounded-2xl bg-white shadow border border-white/60 flex items-center justify-center">
                          {row.image ? (
                            <img
                              src={row.image}
                              alt={`${row.title} doodle`}
                              className="w-full h-full object-contain p-2"
                            />
                          ) : (
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                              {row.title}
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="text-xl font-black tracking-tight">{row.title}</h4>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">What it does</p>
                        <p className="text-gray-800 text-sm leading-relaxed">{row.does}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">
                          What it solves
                        </p>
                        <p className="text-gray-800 text-sm leading-relaxed">{row.solves}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* Personas */}
          <section id="personas">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-10">Personas</h3>
              <div className="w-full flex justify-center">
                <a
                  href={alexPersona}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-[#E1A560]/40"
                >
                  <img
                    src={alexPersona}
                    alt="Alex persona"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="mt-4 flex items-center justify-center text-sm text-gray-600 space-x-2">
                <Search size={16} />
                <span>Click to view full image</span>
              </div>
            </Reveal>
          </section>

          {/* Information Architecture */}
          <section id="information-architecture" className="scroll-mt-32">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Information Architecture
              </h3>
              <p className="text-gray-600 mb-10">
                Mapping how key user tasks—discovering items, vetting trust signals, and completing rentals—flow through
                the product to reduce friction and highlight confidence cues.
              </p>
              <div className="w-full flex justify-center">
                <a
                  href={infoArchClosetcloud}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full max-w-5xl rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#E1A560]/30"
                >
                  <img
                    src={infoArchClosetcloud}
                    alt="ClosetCloud information architecture"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Search size={16} />
                <span>Click to view full image</span>
              </div>
            </Reveal>
          </section>

          {/* Wireframes & Prototypes */}
          <section id="prototypes">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Low-Fidelity Prototypes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[homeMockup, addItemMockup, discoveryMockup, profileMockup, reelMockup].map((src, idx) => (
                  <div
                    key={`lowfid-${idx}`}
                    className="overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-sm transition-transform duration-500 hover:scale-[1.02]"
                  >
                    <img src={src} alt="Low-fidelity mockup" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Usability Testing */}
          <section id="testing">
            <Reveal>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Usability Testing
              </h3>
              <p className="text-gray-600 mb-8">
                Think of it as a cockpit view: quick-glance cards for method, participants, data types, and the SUS
                score so we can steer the next iteration with confidence.
              </p>
              <div className="p-7 rounded-3xl bg-white shadow-md mb-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-xl bg-[#E1A560]/15 text-[#E1A560]">
                      <ClipboardList size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-1">Method</p>
                      <ul className="list-disc list-inside text-base text-gray-800 space-y-1">
                        <li>Moderated task-based testing (Figma prototype)</li>
                        <li>Unmoderated 5-second and first-click tests</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-xl bg-[#E1A560]/15 text-[#E1A560]">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-1">
                        Participants
                      </p>
                      <p className="text-base text-gray-800">8 users</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-xl bg-[#E1A560]/15 text-[#E1A560]">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-1">Data Types</p>
                      <p className="text-base text-gray-800">
                        Qualitative: open-ended responses; Quantitative: System Usability Scale (SUS).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="p-6 rounded-3xl bg-[#121212] text-white shadow-lg grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-white/10 text-[#E1A560]">
                      <Gauge size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-300">Overall SUS</p>
                      <p className="text-2xl font-black">84 / 100</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E1A560] md:text-right">
                    Positive & performing well
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h4 className="text-xl font-black tracking-tight mb-4">Task-Based Findings</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Condition Report",
                    "Purchase Pickup Flow",
                    "Size Compatibility Feature",
                    "AI Price Saver",
                  ].map((item) => (
                    <div
                      key={item}
                      className="p-4 rounded-xl bg-gradient-to-br from-white/80 via-white/60 to-[#E1A560]/15 border border-white/50 shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <p className="text-base font-black uppercase tracking-[0.18em] text-gray-600 mb-6">{item}</p>
                      {item === "Condition Report" ? (
                        <>
                          <ul className="list-disc list-inside text-base text-gray-800 leading-relaxed mb-4 space-y-0.5">
                            <li>Strongly validated as a trust-building mechanism.</li>
                            <li>Users saw it as protecting both renter and lender.</li>
                            <li>Reinforces platform values: safety, hygiene, accountability.</li>
                          </ul>
                          <p className="text-xs font-bold tracking-[0.25em] text-[#E1A560] pl-3 border-l-2 border-[#E1A560]/50">
                            Takeaway: This feature successfully addressed a core trust barrier in peer-to-peer clothing rental.
                          </p>
                        </>
                      ) : item === "Purchase Pickup Flow" ? (
                        <>
                          <ul className="list-disc list-inside text-base text-gray-800 leading-relaxed mb-4 space-y-0.5">
                            <li>Payment flow performed well.</li>
                            <li>Users felt confident completing transactions.</li>
                            <li>Users struggled with pickup location negotiation.</li>
                          </ul>
                          <p className="text-xs font-bold tracking-[0.25em] text-[#E1A560] pl-3 border-l-2 border-[#E1A560]/50">
                            Takeaway: Transactional clarity was strong, but pre-payment coordination needed clearer affordances.
                          </p>
                        </>
                      ) : item === "Size Compatibility Feature" ? (
                        <>
                          <ul className="list-disc list-inside text-base text-gray-800 leading-relaxed mb-4 space-y-0.5">
                            <li>Increased confidence when renting clothes.</li>
                            <li>Viewed as a strong communication and reassurance tool.</li>
                            <li>Could benefit from fit preference input (tight/loose) or smart recommendations.</li>
                          </ul>
                          <p className="text-xs font-bold tracking-[0.25em] text-[#E1A560] pl-3 border-l-2 border-[#E1A560]/50">
                            Takeaway: High perceived usefulness, but differentiation needs personalization and contextual fit intelligence.
                          </p>
                        </>
                      ) : item === "AI Price Saver" ? (
                        <>
                          <ul className="list-disc list-inside text-base text-gray-800 leading-relaxed mb-4 space-y-0.5">
                            <li>Users find the original vs. rental price comparison useful.</li>
                            <li>Strongly encourages users to rent.</li>
                            <li>Visual design could be more prominent to entice clicks.</li>
                          </ul>
                          <p className="text-xs font-bold tracking-[0.25em] text-[#E1A560] pl-3 border-l-2 border-[#E1A560]/50">
                            Takeaway: Price comparison effectively motivates rentals, but the visual design should be stronger.
                          </p>
                        </>
                      ) : (
                        <p className="text-base text-gray-800 leading-relaxed">
                          Key usability observations and opportunities captured during task runs.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* Final Iterations Footer */}
          <section
            id="iterations"
            className={`-mt-32 pb-40 pt-32 bg-[#8b5a2b] text-white px-6 transition-all duration-700 ease-out ${
              iterationsInView ? "min-h-screen" : ""
            }`}
            style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)", width: "100vw" }}
          >
            <Reveal>
              <div className="max-w-5xl mx-auto px-2 sm:px-6">
                <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">
                  Final Iterations
                </h3>
                <p className="text-xl text-white/80 leading-relaxed mb-10">
                  Based on our review of the user testing results and recommendations, we made changes to develop the
                  final iterated prototype.
                </p>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-6">
                  Homepage Wireframes
                </h4>
                <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
                  {[homepage1, homepage2, homepage3].map((src, idx) => (
                    <div key={idx} className="relative max-w-[220px] mx-auto">
                      <div className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                        <img src={src} alt={`Homepage ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                      {idx === 0 && (
                        <p className="mt-3 text-sm text-white leading-snug text-center">
                          Stylist videos encourage exploration and enhance engagement.
                        </p>
                      )}
                      {idx === 1 && (
                        <p className="mt-3 text-sm text-white leading-snug text-center">
                          Users can explore stylists’ choices, which are useful for those seeking styling inspiration.
                        </p>
                      )}
                      {idx === 2 && (
                        <p className="mt-3 text-sm text-white leading-snug text-center">
                          Users are able to browse trending items from the homepage.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-6">
                  Discover Flow
                </h4>
                <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
                  {[discover, discoverWomen, discoverJacket, productJacket].map((src, idx) => (
                    <div
                      key={`discover-${idx}`}
                      className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02] max-w-[200px] mx-auto"
                    >
                      <img src={src} alt="Discover flow screen" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed text-center max-w-2xl mx-auto">
                  The discovery flow guides users from gender selection to clothing categories (e.g. jackets, dresses,
                  pants), and then to the product listings.
                </p>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mt-12 mb-6">
                  Product Detail Page
                </h4>
                <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
                  {[productJacket, product1, product2].map((src, idx) => (
                    <div
                      key={`product-${idx}`}
                      className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02] max-w-[220px] mx-auto"
                    >
                      <img src={src} alt="Product detail screen" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed text-center max-w-3xl mx-auto">
                  The product detail page presents key features, including the AI-powered price savings indicator, size
                  compatibility tool, available rental periods, delivery options, and stylist videos showcasing the
                  outfit.
                </p>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mt-12 mb-6">
                  AI-Price Saved Indicator
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
                  {[discoverJacket, priceSave].map((src, idx) => (
                    <div
                      key={`price-save-${idx}`}
                      className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02] max-w-[240px] mx-auto"
                    >
                      <img src={src} alt="AI price save screen" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed text-center max-w-3xl mx-auto">
                  By clicking the AI Price Save button located at the bottom-right corner of the product image, a
                  pop-up appears displaying the retail price, rental price, and the total savings.
                </p>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mt-12 mb-6">
                  Size Compatibility Feature
                </h4>
                <div className="flex justify-center mb-6">
                  <div className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02] max-w-[280px]">
                    <img src={sizeComp} alt="Size compatibility feature" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-sm text-white leading-relaxed text-center max-w-3xl mx-auto">
                  The original size compatibility feature requires users to input their body measurements to generate a
                  size compatibility score; however, some users may not know their exact measurements.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8 mb-8 max-w-5xl mx-auto">
                  {[measurement1, measurement2, measurement3, measurement4, measurement5].map((src, idx) => (
                    <div
                      key={`measurement-${idx}`}
                      className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02] max-w-[160px] mx-auto"
                    >
                      <img src={src} alt="Measurement input screen" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed text-center max-w-3xl mx-auto">
                  In the iterated version, users can enter more general information—such as height, tummy and waist
                  shape, and preferred brand sizing—to receive fit recommendations.
                </p>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mt-12 mb-6">
                  Payment & Delivery Flow
                </h4>
                <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
                  {[paymentPickup1, paymentPickup2, paymentPickup3, paymentPickup4].map((src, idx) => (
                    <div
                      key={`payment-pickup-${idx}`}
                      className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02] max-w-[200px] mx-auto"
                    >
                      <img src={src} alt="Payment and delivery screen" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed text-center max-w-3xl mx-auto">
                  In the payment and delivery flow, users can choose between pickup or shipping.
                </p>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mt-12 mb-6">
                  Condition Report Flow
                </h4>
                <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
                  {[condition1, condition2, condition3, condition4].map((src, idx) => (
                    <div
                      key={`condition-${idx}`}
                      className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02] max-w-[200px] mx-auto"
                    >
                      <img src={src} alt="Condition report screen" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed text-center max-w-3xl mx-auto">
                  The condition report is completed on the order page, where renters confirm whether the lender’s
                  description matches the item’s actual condition. Photos can be uploaded as supporting evidence.
                </p>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mt-12 mb-6">
                  Video Listing
                </h4>
                <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
                  {[video1, video2, video3, video4].map((src, idx) => (
                    <div key={`video-${idx}`} className="max-w-[200px] mx-auto">
                      <div className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                        <img src={src} alt="Video listing screen" className="w-full h-full object-cover" />
                      </div>
                      {idx === 0 && (
                        <p className="mt-3 text-sm text-white leading-snug text-center">
                          It shows a range of videos from different stylists.
                        </p>
                      )}
                      {idx === 1 && (
                        <p className="mt-3 text-sm text-white leading-snug text-center">
                          A switch tab to view different users/stylists.
                        </p>
                      )}
                      {idx === 2 && (
                        <p className="mt-3 text-sm text-white leading-snug text-center">
                          Users are able to save the videos they like.
                        </p>
                      )}
                      {idx === 3 && (
                        <p className="mt-3 text-sm text-white leading-snug text-center">
                          The video includes an embedded button featuring the item’s image, which directs users to the
                          product page when clicked.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={onBack}
                  className="mt-4 flex items-center space-x-2 font-black uppercase text-sm tracking-[0.2em] hover:text-[#E1A560] transition-colors"
                >
                  <span>Next Project: Hand Jump Dino Game</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </Reveal>
          </section>
        </main>
      </div>
    </div>
  );
}
