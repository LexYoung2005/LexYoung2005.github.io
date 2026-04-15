"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    nav: {
      about: "关于",
      projects: "项目",
      focus: "方向",
      contact: "联系",
    },
    hero: {
      badge: "杨乐行 · 个人主页",
      title1: "为真实工程系统构建",
      title2: "智能方法与学习系统",
      desc:
        "武汉理工大学智能制造专业本科生，关注强化学习、工业视觉测量与复杂工程系统的数据驱动优化。",
      primary: "查看 GitHub",
      secondary: "联系我",
      chips: ["强化学习", "工业视觉", "机器人与自主系统", "工程优化"],
    },
    about: {
      label: "关于我",
      title: "工程问题、学习方法与物理约束的交汇处。",
      p1:
        "我的兴趣主要位于机器学习与工程系统的交叉方向。我关注的不只是让模型学会拟合，而是让它们真正服务于复杂系统的建模、优化与控制，并尽量保留物理意义与工程可解释性。",
      p2:
        "目前我主要围绕强化学习控制、工业视觉测量以及螺杆压缩机转子型线优化等方向开展工作，希望把学习方法用于更真实、更复杂的工程场景。",
    },
    projects: {
      label: "代表项目",
      title: "我正在构建的工作。",
      desc:
        "这些项目集中体现了我目前的兴趣：用计算智能方法处理真实世界中的复杂工程问题。",
      items: [
        {
          title: "螺杆压缩机转子型线优化",
          subtitle: "面向高维工程设计的物理一致性学习优化",
          description:
            "构建了参数生成、SCORG仿真与代理模型训练相结合的闭环优化流程，用于加速转子型线设计与性能评估。",
          tag: "优化 · 仿真 · 代理建模",
        },
        {
          title: "工业视觉测量",
          subtitle: "基于透视补偿与逆映射建模的尺寸恢复",
          description:
            "结合平面重建、视角归一化、目标检测与神经网络逆求解，实现低成本深度视觉条件下的工业尺寸测量。",
          tag: "视觉 · 几何 · 测量",
        },
        {
          title: "自主系统强化学习",
          subtitle: "兼顾物理约束与鲁棒性的学习控制",
          description:
            "围绕自动驾驶与机器人控制场景，探索多模态状态输入、策略鲁棒性以及面向 sim-to-real 的强化学习系统设计。",
          tag: "强化学习 · 机器人 · 控制",
        },
      ],
    },
    focus: {
      cards: [
        {
          label: "研究兴趣",
          title: "物理约束下的学习方法",
          text:
            "我更关心那些不仅能提升指标，还能够保持工程含义、支持分析与决策的方法。",
        },
        {
          label: "当前重点",
          title: "强化学习、视觉与优化",
          text:
            "近期工作主要围绕强化学习控制、工业视觉测量和仿真驱动设计优化展开。",
        },
        {
          label: "长期目标",
          title: "面向工业的智能系统",
          text:
            "希望构建具备感知、决策与持续优化能力的工程智能系统，并最终服务于真实工业场景。",
        },
      ],
    },
    contact: {
      label: "联系",
      title: "一起做点有价值的事情。",
      desc:
        "欢迎交流科研合作、工程项目，以及与学习驱动智能系统相关的话题。",
      email: "发送邮件",
      github: "GitHub",
    },
    langButton: "EN",
    orientationLabel: "研究导向",
    orientationTitle: "学习方法不只是拟合数据，也要服务真实系统。",
    orientationText:
      "我更关注那些能够连接数据、物理机理与工程决策的智能方法，希望让学习模型真正嵌入复杂系统的建模、优化与控制流程。",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      focus: "Focus",
      contact: "Contact",
    },
    hero: {
      badge: "Yang Lexing · Homepage",
      title1: "Building intelligent methods",
      title2: "for real engineering systems",
      desc:
        "An undergraduate in Intelligent Manufacturing, working on reinforcement learning, industrial vision measurement, and data-driven optimization for complex engineering systems.",
      primary: "View GitHub",
      secondary: "Contact Me",
      chips: [
        "Reinforcement Learning",
        "Industrial Vision",
        "Robotics & Autonomy",
        "Engineering Optimization",
      ],
    },
    about: {
      label: "About",
      title: "Where engineering, learning, and physical reasoning meet.",
      p1:
        "My interests lie at the intersection of machine learning and engineering systems. I care not only about fitting models to data, but also about making them useful for modeling, optimization, and control in complex real-world systems while preserving physical meaning and engineering interpretability.",
      p2:
        "Recently, I have been working on reinforcement learning for control, industrial vision measurement, and screw compressor rotor profile optimization, with the goal of bringing learning-based methods closer to real engineering applications.",
    },
    projects: {
      label: "Selected Projects",
      title: "What I am building now.",
      desc:
        "These projects reflect my current interest in solving real engineering problems with computational intelligence.",
      items: [
        {
          title: "Screw Compressor Rotor Optimization",
          subtitle:
            "Physics-aware learning for high-dimensional engineering design",
          description:
            "Built a closed-loop pipeline that integrates parameter generation, SCORG simulation, and surrogate modeling to accelerate rotor profile design and performance evaluation.",
          tag: "Optimization · Simulation · Surrogate Modeling",
        },
        {
          title: "Industrial Vision Measurement",
          subtitle:
            "Dimension recovery through perspective compensation and inverse modeling",
          description:
            "Developed a measurement pipeline combining plane reconstruction, view normalization, object detection, and neural inverse solving for industrial dimension recovery with low-cost depth sensing.",
          tag: "Vision · Geometry · Measurement",
        },
        {
          title: "Reinforcement Learning for Autonomous Systems",
          subtitle:
            "Learning-based control with physical consistency and robustness",
          description:
            "Exploring reinforcement learning for autonomous driving and robotic control, focusing on multimodal observations, policy robustness, and sim-to-real oriented system design.",
          tag: "Reinforcement Learning · Robotics · Control",
        },
      ],
    },
    focus: {
      cards: [
        {
          label: "Research Interest",
          title: "Learning under physical constraints",
          text:
            "I am especially interested in methods that improve performance while remaining meaningful for engineering analysis and decision-making.",
        },
        {
          label: "Current Focus",
          title: "RL, vision, and optimization",
          text:
            "My recent work spans reinforcement learning control, industrial visual measurement, and simulation-driven design optimization.",
        },
        {
          label: "Long-term Goal",
          title: "Intelligent systems for industry",
          text:
            "I hope to build systems with perception, decision-making, and continuous optimization capabilities for real industrial environments.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s build something meaningful.",
      desc:
        "I am always open to research collaboration, engineering projects, and conversations about learning-based intelligent systems.",
      email: "Email Me",
      github: "GitHub",
    },
    langButton: "中",
    orientationLabel: "Research Orientation",
    orientationTitle:
      "Learning should do more than fit data — it should serve real systems.",
    orientationText:
      "I am interested in intelligent methods that connect data, physical reasoning, and engineering decision-making, making learning models genuinely useful for modeling, optimization, and control.",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("homepage-lang");
      if (saved === "zh" || saved === "en") {
        setLang(saved);
      } else {
        const browserLang = navigator.language.toLowerCase();
        setLang(browserLang.startsWith("zh") ? "zh" : "en");
      }
    } catch {
      setLang("en");
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem("homepage-lang", lang);
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    } catch {}
  }, [lang, ready]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = content[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <main className="min-h-screen scroll-smooth bg-black text-white selection:bg-white selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 pt-4 md:px-8">
          <div
            className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 backdrop-blur-xl ${
              scrolled
                ? "border border-black/10 bg-white/90 shadow-lg"
                : "border border-white/10 bg-white/5"
            }`}
          >
            <a
              href="#top"
              className={`text-sm font-medium uppercase tracking-[0.18em] transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              YLX
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              <a
                href="#about"
                className={`text-sm transition ${
                  scrolled
                    ? "text-black/70 hover:text-black"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {t.nav.about}
              </a>
              <a
                href="#projects"
                className={`text-sm transition ${
                  scrolled
                    ? "text-black/70 hover:text-black"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {t.nav.projects}
              </a>
              <a
                href="#focus"
                className={`text-sm transition ${
                  scrolled
                    ? "text-black/70 hover:text-black"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {t.nav.focus}
              </a>
              <a
                href="#contact"
                className={`text-sm transition ${
                  scrolled
                    ? "text-black/70 hover:text-black"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {t.nav.contact}
              </a>
            </nav>

            <button
              type="button"
              onClick={toggleLanguage}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                scrolled
                  ? "bg-black text-white hover:bg-black/85"
                  : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {t.langButton}
            </button>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden px-6 pt-32 md:px-10 md:pt-40"
      >
        <div className="absolute inset-0 bg-black" />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/8 backdrop-blur-md" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_42%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/70" />
        <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.26em] text-white/60">
              {t.hero.badge}
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              {t.hero.title1}
              <br className="hidden md:block" />
              {t.hero.title2}
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              {t.hero.desc}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/lexyoung2005"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                {t.hero.primary}
              </a>
              <a
                href="mailto:z28120w@outlook.com"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                {t.hero.secondary}
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              {t.hero.chips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:mt-24 md:p-6">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-8 md:p-14">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/50">
                    {t.orientationLabel}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    {t.orientationTitle}
                  </h2>
                </div>
                <div className="flex items-end">
                  <p className="text-base leading-8 text-white/80 md:text-lg">
                    {t.orientationText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 border-t border-white/10 bg-[#0a0a0a]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              {t.about.label}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t.about.title}
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/70 md:text-lg">
              {t.about.p1}
            </p>
            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              {t.about.p2}
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-black/45">
              {t.projects.label}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              {t.projects.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-black/65 md:text-lg">
              {t.projects.desc}
            </p>
          </div>

          <div className="mt-14 grid gap-6">
            {t.projects.items.map((project) => (
              <div
                key={project.title}
                className="group rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-10"
              >
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
                  <div>
                    <p className="text-sm text-black/45">{project.tag}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-lg text-black/70">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-end">
                    <p className="text-base leading-8 text-black/65">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="scroll-mt-28 bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {t.focus.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                  {card.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{card.title}</h3>
                <p className="mt-4 leading-8 text-white/70">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 border-t border-white/10 bg-black"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10 md:py-28">
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">
            {t.contact.label}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            {t.contact.desc}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:z28120w@outlook.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              {t.contact.email}
            </a>
            <a
              href="https://github.com/lexyoung2005"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              {t.contact.github}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}