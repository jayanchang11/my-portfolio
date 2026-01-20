import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Layout,
  Layers,
  Monitor,
  Search,
  Compass,
  SquarePen,
  Wrench,
  Rocket,
  Smartphone,
  MessageCircle,
  Brain,
  BookOpen,
} from "lucide-react";
import Reveal from "../components/Reveal";
import ibmHomepage from "../assets/images/ibm-homepage.jpg";
import designAsset1 from "../assets/images/design-asset1.png";
import designAsset2 from "../assets/images/design-asset2.png";
import designAsset3 from "../assets/images/design-asset3.png";
import xiaoPersona from "../assets/images/xiao-persona.jpg";
import sbHomeLow from "../assets/images/SB-home-low.png";
import sbCourseLow from "../assets/images/SB-course-low.png";
import sbEducatorsLow from "../assets/images/SB-educators-low.png";
import sbStudentLow from "../assets/images/SB-student-low.png";
import sbStudentLow2 from "../assets/images/SB-stduent-low2.png";
import sbHomepage1 from "../assets/images/sb-homepage1.png";
import sbHomepage2 from "../assets/images/sb-homepage2.png";
import sbStudents1 from "../assets/images/sb-students1.png";
import sbStudents2 from "../assets/images/sb-students2.png";
import sbStudents3 from "../assets/images/sb-students3.png";
import sbStudents4 from "../assets/images/sb-students4.png";
import sbReading from "../assets/images/sb-reading.png";
import sbReading2 from "../assets/images/sb-reading2.png";
import sbAiReader from "../assets/images/sb-ai-reader.png";
import sbMenu from "../assets/images/sb-menu.png";
import sbSubmit from "../assets/images/sb-submit.png";
import sbProfile from "../assets/images/sb-profile.png";
import sbChecking from "../assets/images/sb-checking.png";
import sbRanking from "../assets/images/sb-ranking.png";
import sbMockup from "../assets/images/sb-mockup.png";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "Role" },
  { id: "stages", label: "Design Stages" },
  { id: "research", label: "Research Insights" },
  { id: "persona", label: "Persona" },
  { id: "roadmap", label: "Feature Roadmap" },
  { id: "wireframes", label: "Low-Fidelity Wireframes" },
  { id: "visuals", label: "High-Fidelity Design" },
];

export default function IBMSkillsBuild({ onBack }) {
  const [activeSection, setActiveSection] = useState("");
  const [visualsInView, setVisualsInView] = useState(false);
  const visualsInViewRef = useRef(false);
  const [activeStage, setActiveStage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-15% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const updateVisualsInView = () => {
      ticking = false;
      const target = document.getElementById("visuals");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const marker = 140;
      const isInView = rect.top <= marker && rect.bottom >= marker;
      visualsInViewRef.current = isInView;
      setVisualsInView(isInView);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateVisualsInView);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateVisualsInView();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const position = elementRect - bodyRect - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div
      className="bg-[#f4f4f4] text-[#161616] min-h-screen"
      style={{ fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif" }}
    >
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-[60] flex items-center space-x-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg border border-black/5 hover:bg-[#0f62fe] hover:text-white transition-all"
      >
        <ArrowLeft size={16} />
        <span>Back to Portfolio</span>
      </button>

      {/* Hero Section */}
      <section className="pt-12 bg-[#0f62fe] text-white h-[70vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              IBM SkillsBuild <br />
              <span className="font-bold">WeChat Mini Program</span>
            </h1>
            <p className="text-xl opacity-90 max-w-lg leading-relaxed font-light">
              A lightweight, easy-to-access mobile version of IBM SkillsBuild&apos;s learning platform that enables users
              to learn without limitations of device availability, time, or location.
            </p>
          </Reveal>
          <div className="hidden md:block relative h-full">
            <div className="absolute -top-6 right-0 w-[520px] h-[680px] flex items-center justify-center">
              <img
                src={sbMockup}
                alt="IBM SkillsBuild WeChat Mini Program mockup"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Decorative Carbon Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white h-full"></div>
            ))}
          </div>
        </div>
      </section>

      <div
        className={`mx-auto py-20 grid transition-all duration-500 ${
          visualsInView ? "max-w-none px-0 gap-0 md:grid-cols-[0_1fr]" : "max-w-7xl px-6 gap-16 md:grid-cols-[250px_1fr]"
        }`}
      >
        {/* Sidebar Progress Indicator */}
        <aside
          className={`hidden md:block transition-all duration-500 ${
            visualsInView ? "w-0 opacity-0 pointer-events-none" : "w-[250px] opacity-100"
          }`}
        >
          <div
            className={`sticky top-24 border-l border-[#e0e0e0] transition-opacity duration-500 ${
              visualsInView ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`block w-full text-left pl-4 py-3 text-sm transition-all border-l-4 -ml-[1px] ${
                  activeSection === section.id
                    ? "border-[#0f62fe] bg-white font-bold text-[#0f62fe]"
                    : "border-transparent text-gray-500 hover:bg-gray-100"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content Sections */}
        <main className="space-y-32">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24">
            <Reveal>
              <h2 className="text-3xl font-light mb-8">
                Project <span className="font-bold">Overview</span>
              </h2>
              <div className="space-y-6 text-xl leading-relaxed text-[#393939] mb-12">
                <p>
                  IBM SkillsBuild is an online learning platform that offers a wide range of courses designed to help
                  individuals develop in-demand skills.
                </p>
                <p>
                  As part of the Greater China Group, one of our main goals is to provide Chinese students from less
                  developed regions with access to our learning platform.
                </p>
                <p>
                  Through field observations, we discovered that many students in these areas had limited access to
                  computers or laptops. To address this barrier, we proposed and developed IBM&apos;s first-ever mobile
                  version of SkillsBuild—launched as a WeChat Mini Program.
                </p>
              </div>
              <div className="mb-12 border-l-4 border-[#0f62fe] bg-white px-6 py-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-3">Goal</p>
                <p className="text-lg text-[#393939]">
                  Develop a lightweight, easy-to-access mobile version that enables students to learn without
                  limitations of device availability, time, or location.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-[#e0e0e0]">
                {[
                  { label: "Market", value: "China (Mainland)" },
                  { label: "Duration", value: "Jan 2025 - ongoing" },
                  { label: "Users", value: "Students & Educators" },
                  { label: "Platform", value: "WeChat Mini Program" },
                ].map((item) => (
                  <div key={item.label}>
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                      {item.label}
                    </h4>
                    <p className="font-medium text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Role Section */}
          <section id="role">
            <Reveal>
              <h2 className="text-3xl font-light mb-8">
                My <span className="font-bold">Role</span>
              </h2>
              <div className="space-y-10">
                <p className="text-gray-600 leading-relaxed">
                  As this was the first-ever mobile version of IBM SkillsBuild, my role as the lead designer focused on
                  developing a minimum viable product (MVP) that would work seamlessly within WeChat’s mini program
                  ecosystem.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "1. Existing Platform Analysis",
                      body:
                        "Auditing the existing desktop version with UX principles, identifying what could be improved and integrated for the Mini Program.",
                    },
                    {
                      title: "2. Designing the UI",
                      body:
                        "Designing a mobile UI that aligns with both IBM’s global identity and the needs of local student personas in rural areas.",
                    },
                    {
                      title: "3. Creating supporting visual assets",
                      body:
                        "Such as promotional banners and graphics, to ensure a consistent and engaging visual experience within the mini program.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-[#0f62fe] text-white rounded-lg px-6 py-5 shadow-sm border border-[#0f62fe]/60"
                    >
                      <h4 className="text-base font-bold mb-2">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-white/90">{item.body}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={`role-arrow-${i}`} className="flex justify-center">
                      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#0f62fe] opacity-80" />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[designAsset1, designAsset2, designAsset3].map((src, i) => (
                    <img
                      key={`role-asset-${i}`}
                      src={src}
                      alt="Design asset"
                      className="w-full h-auto object-contain shadow-lg"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* Design Stages Section */}
          <section id="stages">
            <Reveal>
              <h2 className="text-3xl font-light mb-12">
                Design <span className="font-bold">Stages</span>
              </h2>
              <div
                className="grid md:grid-cols-2 gap-6 items-start"
                onMouseLeave={() => setActiveStage(null)}
              >
                {[
                  {
                    title: "01",
                    label: "Discover",
                    icon: Compass,
                    body: [
                      "Researched mobile UI patterns to improve the Mini Program’s usability and interaction design.",
                      "Studied IBM’s design system to ensure visual and interaction consistency.",
                      "Reviewed the IBM SkillsBuild website to identify key design elements for integration into the Mini Program.",
                    ],
                  },
                  {
                    title: "02",
                    label: "Define",
                    icon: SquarePen,
                    body: [
                      "Defined core usability principles for a lightweight, low-barrier learning experience.",
                      "Prioritized MVP features based on the stakeholders' needs.",
                    ],
                  },
                  {
                    title: "03",
                    label: "Develop",
                    icon: Wrench,
                    body: [
                      "Translated defined requirements into wireframes and high-fidelity UI tailored to the WeChat Mini Program environment.",
                      "Iterated on layouts, components, and interaction flows to ensure performance, clarity, and ease of use on mobile devices.",
                      "Collaborated with the Greater China Group to refine features based on technical constraints and implementation feedback.",
                    ],
                  },
                  {
                    title: "04",
                    label: "Deliver",
                    icon: Rocket,
                    body: [
                      "Delivered a lightweight WeChat Mini Program that enables students to access learning content anytime and anywhere.",
                      "Ensured the final solution aligned with IBM SkillsBuild’s brand, design standards, and CSR objectives.",
                    ],
                  },
                ].map((stage, index) => {
                  const Icon = stage.icon;
                  const isActive = activeStage === index;
                  return (
                    <div
                      key={stage.title}
                      onMouseEnter={() => setActiveStage(index)}
                      className={`relative rounded-md border border-[#e0e0e0] bg-white transition-all duration-500 ${
                        isActive
                          ? "border-[#0f62fe] shadow-lg md:col-span-2"
                          : "shadow-sm md:col-span-1"
                      }`}
                    >
                      <div className="flex items-center justify-between px-6 py-5">
                        <div>
                          <span className="text-[10px] font-bold text-[#0f62fe] block mb-2">{stage.title}</span>
                          <p className="text-sm font-bold uppercase">{stage.label}</p>
                        </div>
                        <div className="text-[#0f62fe]">
                          <Icon size={22} />
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-3 flex justify-center text-[#0f62fe]">
                        <span className={`text-base transition-transform duration-500 ${isActive ? "rotate-180" : ""}`}>
                          ▼
                        </span>
                      </div>
                      <div
                        className={`px-6 pb-12 text-sm text-gray-600 leading-relaxed transition-all duration-500 ${
                          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <ul className="space-y-2">
                          {stage.body.map((item) => (
                            <li key={item} className="flex items-start space-x-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0f62fe]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </section>

          {/* Research Insights Section */}
          <section id="research">
            <Reveal>
              <h2 className="text-3xl font-light mb-12">
                Research <span className="font-bold">Insights</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded border border-[#e0e0e0] flex items-start space-x-6">
                  <Smartphone size={32} className="text-[#0f62fe] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Access & Device Constraints</h4>
                    <p className="text-sm text-gray-600">
                      Many students rely on a single mobile device and have limited access to laptops or stable
                      internet, making lightweight, mobile-first learning essential.
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-white rounded border border-[#e0e0e0] flex items-start space-x-6">
                  <MessageCircle size={32} className="text-[#0f62fe] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Platform Familiarity</h4>
                    <p className="text-sm text-gray-600">
                      Students are highly familiar with WeChat but less comfortable navigating standalone learning
                      platforms, indicating the importance of embedding learning within existing daily-use apps.
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-white rounded border border-[#e0e0e0] flex items-start space-x-6">
                  <BookOpen size={32} className="text-[#0f62fe] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Learning in Short Sessions</h4>
                    <p className="text-sm text-gray-600">
                      Users tend to learn in short, fragmented time slots rather than long sessions, suggesting that
                      content should be modular and easy to resume.
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-white rounded border border-[#e0e0e0] flex items-start space-x-6">
                  <Brain size={32} className="text-[#0f62fe] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Cognitive Load Sensitivity</h4>
                    <p className="text-sm text-gray-600">
                      Complex navigation and dense interfaces can discourage continued learning, particularly for users
                      with lower digital literacy.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Persona Section */}
          <section id="persona" className="scroll-mt-24">
            <Reveal>
              <h2 className="text-3xl font-light mb-10">
                User <span className="font-bold">Persona</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Based on the research insights, a persona is developed. This persona represents students from less
                developed regions with limited access to technology, who rely on familiar mobile platforms to learn and
                need clear, low-barrier pathways to build digital skills.
              </p>
              <div className="w-full flex justify-center">
                <a
                  href={xiaoPersona}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#0f62fe]/30"
                >
                  <img
                    src={xiaoPersona}
                    alt="Xiao persona"
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

          {/* Feature Roadmap Component */}
          <section id="roadmap">
            <Reveal>
              <h2 className="text-3xl font-light mb-12">
                Feature <span className="font-bold">Roadmap</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1 — MVP (Before 2025)",
                    focus: "Core learning experience",
                    items: [
                      "Homepage featuring essential banners and a curated selection of courses",
                      "Course listing pages for both educators and students",
                      "Course content pages for reading and learning",
                    ],
                  },
                  {
                    phase: "Phase 2 — Feature Expansion (After 2025)",
                    focus: "Engagement, accessibility, and retention",
                    items: [
                      "Social check-in activities, including friend interactions and leaderboard rankings",
                      "Accessibility features such as text enlargement and AI Reading Helper",
                      "Learning memory system to track saved courses, time spent, and completed courses",
                    ],
                  },
                ].map((phase) => (
                  <div
                    key={phase.phase}
                    className="p-6 bg-white border-l-4 border-[#0f62fe] shadow-sm space-y-4 transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{phase.phase}</p>
                      <p className="text-sm font-bold text-[#0f62fe]">Focus: {phase.focus}</p>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                      {phase.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Low-Fidelity Section */}
          <section id="wireframes">
            <Reveal>
              <h2 className="text-3xl font-light mb-12">
                Low-Fidelity <span className="font-bold">Wireframes</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { src: sbHomeLow, caption: "Homepage" },
                  { src: sbEducatorsLow, caption: "Educators: Course listing" },
                  { src: sbStudentLow, caption: "Students: Course listing" },
                  { src: sbStudentLow2, caption: "Students: Course listing" },
                  { src: sbCourseLow, caption: "Course reading page" },
                ].map((item, i) => (
                  <div key={`sb-low-${i}`} className="space-y-2">
                    <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white shadow-sm transition-transform duration-300 hover:scale-[1.04]">
                      <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-gray-600 font-medium text-center">{item.caption}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* High-Fidelity Section */}
          <section
            id="visuals"
            className={`pb-40 pt-20 bg-[#edf5ff] ${visualsInView ? "min-h-screen" : ""}`}
            style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)", width: "100vw" }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <Reveal>
                <h2 className="text-3xl font-light mb-12">
                  High-Fidelity <span className="font-bold">Design</span>
                </h2>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0f62fe] mb-6 pl-4 border-l-4 border-[#0f62fe]">
                  Homepage
                </h4>
                <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
                  {[sbHomepage1, sbHomepage2].map((src, i) => (
                    <div key={`sb-homepage-${i}`} className="max-w-[260px] mx-auto">
                      <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-lg bg-white transition-transform duration-300 hover:scale-[1.03]">
                        <img
                          src={src}
                          alt="SkillsBuild high-fidelity screen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {i === 0 && (
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed text-center">
                          The homepage features a large hero banner to capture attention, with carousel sliders used to
                          organise and present courses efficiently.
                        </p>
                      )}
                      {i === 1 && (
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed text-center">
                          Icons are used to represent course categories, creating a clean yet lively visual tone, while
                          a tab system helps organise courses efficiently.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0f62fe] mb-6 pl-4 border-l-4 border-[#0f62fe]">
                  Students: Course Listing
                </h4>
                <div className="flex flex-col md:flex-row gap-10 mb-6 max-w-6xl mx-auto">
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    {[sbStudents1, sbStudents2].map((src, i) => (
                      <div key={`sb-students-left-${i}`} className="max-w-[260px] mx-auto">
                        <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-lg bg-white transition-transform duration-300 hover:scale-[1.03]">
                          <img
                            src={src}
                            alt="SkillsBuild student course listing"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    {[sbStudents3, sbStudents4].map((src, i) => (
                      <div key={`sb-students-right-${i}`} className="max-w-[260px] mx-auto">
                        <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-lg bg-white transition-transform duration-300 hover:scale-[1.03]">
                          <img
                            src={src}
                            alt="SkillsBuild student course listing"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 mb-12 max-w-6xl mx-auto">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 leading-relaxed text-center">
                      Student courses are organised by themes and learning paths. Within themes, users can expand
                      accordion sections to view course details. Courses can also be filtered using draggable filters
                      across categories such as STEM, AI, Data Science, and Design Thinking.
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 leading-relaxed text-center">
                      For learning paths, courses are organised by duration—1-day, 3-day, 1-week, and 2-week tracks.
                      Expandable accordions present the courses as a step-by-step roadmap, with supporting images that
                      enhance visual richness.
                    </p>
                  </div>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0f62fe] mb-6 pl-4 border-l-4 border-[#0f62fe]">
                  Course Content Page
                </h4>
                <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
                  {[sbReading2, sbReading, sbAiReader, sbMenu].map((src, i) => (
                    <div key={`sb-reading-${i}`} className="max-w-[260px] mx-auto space-y-3">
                      <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-lg bg-white transition-transform duration-300 hover:scale-[1.03]">
                        <img
                          src={src}
                          alt="SkillsBuild course content page"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {i === 0 && (
                        <p className="text-sm text-gray-600 leading-relaxed text-center">
                          The course content page supports learning with accessible font size controls, chapter
                          navigation, and an integrated toolkit for highlighting, translation, and AI-assisted reading
                          support.
                        </p>
                      )}
                      {i === 1 && (
                        <p className="text-sm text-gray-600 leading-relaxed text-center">
                          This image demonstrates enlarged text, improving convenience and accessibility for users who
                          need better readability.
                        </p>
                      )}
                      {i === 2 && (
                        <p className="text-sm text-gray-600 leading-relaxed text-center">
                          The AI Reading Helper provides definitions of key phrases, analyses how they are used within
                          the text, and shows example sentences to support comprehension.
                        </p>
                      )}
                      {i === 3 && (
                        <p className="text-sm text-gray-600 leading-relaxed text-center">
                          The menu button allows users to navigate between chapters, view saved or highlighted content,
                          and access page settings.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center mb-12">
                  <div className="max-w-[260px]">
                    <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-lg bg-white transition-transform duration-300 hover:scale-[1.03]">
                      <img src={sbSubmit} alt="SkillsBuild course submit prompt" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed text-center max-w-md">
                    Once the course is completed, a cute animated robot prompts users to submit and finish the course.
                  </p>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0f62fe] mb-6 pl-4 border-l-4 border-[#0f62fe]">
                  Profile
                </h4>
                <div className="flex justify-center mb-12">
                  <div className="max-w-[260px]">
                    <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-lg bg-white transition-transform duration-300 hover:scale-[1.03]">
                      <img src={sbProfile} alt="SkillsBuild profile page" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
                  In the profile section, users can add friends and view learning statistics such as daily streaks,
                  total learning time, earned medals, and completed courses. These metrics help motivate continued
                  learning.
                </p>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0f62fe] mt-12 mb-6 pl-4 border-l-4 border-[#0f62fe]">
                  Check-in Activities
                </h4>
                <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                  {[sbChecking, sbRanking].map((src, i) => (
                    <div key={`sb-check-${i}`} className="max-w-[260px] mx-auto space-y-3">
                      <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-lg bg-white transition-transform duration-300 hover:scale-[1.03]">
                        <img src={src} alt="SkillsBuild check-in activity" className="w-full h-full object-cover" />
                      </div>
                      {i === 0 && (
                        <p className="text-sm text-gray-600 leading-relaxed text-center">
                          Check-in activities connect users to create a social, peer-encouraging co-learning
                          environment. Users can check in, complete courses to unlock missions, and view their friends’
                          check-in status.
                        </p>
                      )}
                      {i === 1 && (
                        <p className="text-sm text-gray-600 leading-relaxed text-center">
                          By clicking “Ranking”, users can view their position on the leaderboard and see how many times
                          they have completed missions.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
