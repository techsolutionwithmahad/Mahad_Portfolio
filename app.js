/* ═══════════════════════════════════════════════════════════════
   SITE DATA — Change this object to update the entire website.
   ═══════════════════════════════════════════════════════════════ */
const siteData = {
  /* ── META & SEO ─────────────────────────────────────────── */
  meta: {
    title: "Mahad Ali — Security & Marketing",
    description:
      "Offensive application security engineer and performance marketing strategist based in Lahore, Pakistan.",
  },

  /* ── PERSONAL ───────────────────────────────────────────── */
  personal: {
    name: "Mahad Ali",
    role: "Offensive Application Security & Performance Marketing",
    logo: "Mahad.",
    location: "Lahore, Pakistan",
    email: "contact@mahadali.com",
  },

  /* ── NAVIGATION ─────────────────────────────────────────── */
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  /* ── HERO ────────────────────────────────────────────────── */
  hero: {
    tag: "Available for freelance projects",
    headline: "Securing systems.\nScaling brands.",
    subtext:
      "I blend deep-level offensive security with data-driven performance marketing to protect what you build and amplify how you grow.",
    cta: "Hire Me",
    ctaSecondary: "View Work",
    stats: [
      { number: "50+", label: "Projects Delivered" },
      { number: "5+", label: "Years Experience" },
      { number: "99%", label: "Client Satisfaction" },
    ],
  },

  /* ── ABOUT ──────────────────────────────────────────────── */
  about: {
    tag: "About",
    title: "Engineer by trade.\nStrategist by instinct.",
    paragraphs: [
      "I'm a security researcher and marketing strategist based in Lahore. My days are split between breaking into applications to find critical vulnerabilities and engineering high-performance marketing campaigns that deliver measurable ROI.",
      "I believe the best products deserve bulletproof security and razor-sharp brand visibility — and I bring both to the table.",
    ],
    details: [
      { label: "Name", value: "Mahad Ali" },
      { label: "Location", value: "Lahore, Pakistan" },
      { label: "Experience", value: "5+ Years" },
      { label: "Availability", value: "Open to Work" },
    ],
  },

  /* ── SERVICES ───────────────────────────────────────────── */
  services: {
    tag: "Expertise",
    title: "What I bring to the table.",
    subtitle:
      "A unique intersection of cybersecurity expertise and marketing strategy, tailored for startups and enterprises alike.",
    items: [
      {
        icon: "🛡️",
        title: "Security Audits",
        desc: "Targeted reconnaissance, logic-flaw discovery, and in-depth penetration testing for web and mobile applications.",
      },
      {
        icon: "🔍",
        title: "Vulnerability Research",
        desc: "Custom fuzzing, CVE analysis, and zero-day hunting using cutting-edge tools and methodologies.",
      },
      {
        icon: "📈",
        title: "Performance Marketing",
        desc: "Data-driven multi-platform campaigns across Google, Meta, and TikTok optimised for ROAS.",
      },
      {
        icon: "⚡",
        title: "Digital Strategy",
        desc: "Full-funnel marketing strategy, brand positioning, and conversion rate optimisation.",
      },
      {
        icon: "🔒",
        title: "Secure Code Review",
        desc: "Manual and automated source code analysis to identify vulnerabilities before deployment.",
      },
      {
        icon: "🚀",
        title: "Growth Engineering",
        desc: "Technical SEO, analytics implementation, and growth hacking for SaaS and D2C brands.",
      },
    ],
  },

  /* ── PROJECTS ───────────────────────────────────────────── */
  projects: {
    tag: "Portfolio",
    title: "Selected work.",
    subtitle:
      "A curated showcase of security research and marketing campaigns.",
    items: [
      {
        name: "Rapid Meta Ads Optimization",
        category: "Marketing",
        desc: "Managed a highly optimized 4-day Meta Ads blitz campaign, generating nearly 20,000 impressions and reaching over 18,900 unique accounts with highly efficient ad spend.",
        tech: ["Meta Ads", "Rapid Scaling", "Budget Optimization"],
        link: "projects/meta-ads-optimization/index.html",
      },
      {
        name: "E-Commerce Growth Campaign",
        category: "Marketing",
        desc: "Scaled a D2C fashion brand from $20K to $180K monthly revenue through strategic Meta and Google Ads campaigns.",
        tech: ["Google Ads", "Meta Ads", "GA4", "Looker"],
        link: "#",
      },
      {
        name: "Custom Fuzzing Framework",
        category: "Security",
        desc: "Built a custom HTTP fuzzer in Go that identified edge-case vulnerabilities traditional scanners missed across 200+ endpoints.",
        tech: ["Go", "Docker", "REST APIs"],
        link: "#",
      },
      {
        name: "SaaS Lead Generation Funnel",
        category: "Marketing",
        desc: "Designed and deployed a full-funnel lead-gen system that reduced CAC by 42% for a B2B cybersecurity startup.",
        tech: ["HubSpot", "LinkedIn Ads", "A/B Testing"],
        link: "#",
      },
    ],
  },

  /* ── TESTIMONIALS ───────────────────────────────────────── */
  testimonials: {
    tag: "Testimonials",
    title: "What clients say.",
    items: [
      {
        quote:
          "Mahad found critical vulnerabilities our entire dev team missed. His security audit was thorough, well-documented, and actionable.",
        name: "Sarah K.",
        role: "CTO, FinSecure",
        initials: "SK",
      },
      {
        quote:
          "Our ROAS tripled within three months. Mahad's strategic approach to ad campaigns is unlike anything we've experienced.",
        name: "James R.",
        role: "Founder, StyleVault",
        initials: "JR",
      },
      {
        quote:
          "Rare to find someone who genuinely understands both security and growth. Mahad is that person.",
        name: "Ahmed N.",
        role: "CEO, CloudNex",
        initials: "AN",
      },
    ],
  },

  /* ── CONTACT ────────────────────────────────────────────── */
  contact: {
    tag: "Contact",
    title: "Let's work together.",
    subtitle:
      "Have a project in mind or just want to chat? Reach out and I'll get back to you within 24 hours.",
    links: [
      { label: "✉️  contact@mahadali.com", href: "mailto:contact@mahadali.com" },
      { label: "🔗  LinkedIn", href: "https://linkedin.com/in/mahadali" },
      { label: "🐙  GitHub", href: "https://github.com/mahadali" },
    ],
  },

  /* ── FOOTER ─────────────────────────────────────────────── */
  footer: {
    copy: "© 2026 Mahad Ali. All rights reserved.",
    socials: [
      {
        label: "Li",
        href: "https://linkedin.com/in/mahadali",
        ariaLabel: "LinkedIn",
      },
      {
        label: "Gh",
        href: "https://github.com/mahadali",
        ariaLabel: "GitHub",
      },
      {
        label: "Tw",
        href: "https://twitter.com/mahadali",
        ariaLabel: "Twitter",
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DOM INJECTION — reads siteData and populates the HTML shell.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── Helpers ─────────────────────────────────────────────── */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function setText(selector, text) {
    const el = $(selector);
    if (el) el.textContent = text;
  }

  function setHTML(selector, html) {
    const el = $(selector);
    if (el) el.innerHTML = html;
  }

  /* ── Arrow SVG (reusable) ────────────────────────────────── */
  const arrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

  /* ── META ─────────────────────────────────────────────────── */
  document.title = siteData.meta.title;
  const metaDesc = $("#meta-description");
  if (metaDesc) metaDesc.setAttribute("content", siteData.meta.description);

  /* ── NAV ──────────────────────────────────────────────────── */
  setText("#nav-logo", siteData.personal.logo);
  setHTML(
    "#nav-links",
    siteData.nav
      .map((n) => `<li><a href="${n.href}">${n.label}</a></li>`)
      .join("")
  );

  /* ── HERO ─────────────────────────────────────────────────── */
  setText("#hero-tag", siteData.hero.tag);
  setText("#hero-headline", siteData.hero.headline);
  setText("#hero-subtext", siteData.hero.subtext);
  setText("#hero-cta", siteData.hero.cta);
  setText("#hero-cta-secondary", siteData.hero.ctaSecondary);
  setHTML(
    "#hero-stats",
    siteData.hero.stats
      .map(
        (s) => `
      <div class="hero__stat">
        <div class="hero__stat-number">${s.number}</div>
        <div class="hero__stat-label">${s.label}</div>
      </div>`
      )
      .join("")
  );

  /* ── ABOUT ────────────────────────────────────────────────── */
  setText("#about-tag", siteData.about.tag);
  setText("#about-title", siteData.about.title);
  setHTML(
    "#about-text",
    siteData.about.paragraphs.map((p) => `<p>${p}</p>`).join("")
  );
  setHTML(
    "#about-details",
    siteData.about.details
      .map(
        (d) => `
      <div class="about__detail-item">
        <span>${d.label}</span>
        <span>${d.value}</span>
      </div>`
      )
      .join("")
  );

  /* ── SERVICES ─────────────────────────────────────────────── */
  setText("#services-tag", siteData.services.tag);
  setText("#services-title", siteData.services.title);
  setText("#services-subtitle", siteData.services.subtitle);
  setHTML(
    "#services-grid",
    siteData.services.items
      .map(
        (s) => `
      <div class="service-card reveal">
        <div class="service-card__icon">${s.icon}</div>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__desc">${s.desc}</p>
      </div>`
      )
      .join("")
  );

  /* ── PROJECTS ─────────────────────────────────────────────── */
  setText("#work-tag", siteData.projects.tag);
  setText("#work-title", siteData.projects.title);
  setText("#work-subtitle", siteData.projects.subtitle);
  setHTML(
    "#work-grid",
    siteData.projects.items
      .map((p) => {
        // SMART LINK CHECK: If it starts with http, open in new tab. Otherwise, stay in same tab.
        const isExternal = p.link.startsWith("http");
        const targetAttr = isExternal ? 'target="_blank" rel="noopener"' : '';

        return `
      <div class="project-card reveal">
        <div class="project-card__img">${p.category === "Security" ? "🛡️" : "📈"}</div>
        <div class="project-card__body">
          <span class="project-card__category">${p.category}</span>
          <h3 class="project-card__name">${p.name}</h3>
          <p class="project-card__desc">${p.desc}</p>
          <div class="project-card__tech">
            ${p.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <a href="${p.link}" class="project-card__link" ${targetAttr}>
            View Project ${arrowSVG}
          </a>
        </div>
      </div>`;
      })
      .join("")
  );

  /* ── TESTIMONIALS ─────────────────────────────────────────── */
  setText("#testimonials-tag", siteData.testimonials.tag);
  setText("#testimonials-title", siteData.testimonials.title);
  setHTML(
    "#testimonials-grid",
    siteData.testimonials.items
      .map(
        (t) => `
      <div class="testimonial-card reveal">
        <p class="testimonial-card__quote">"${t.quote}"</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${t.initials}</div>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
            <div class="testimonial-card__role">${t.role}</div>
          </div>
        </div>
      </div>`
      )
      .join("")
  );

  /* ── CONTACT ──────────────────────────────────────────────── */
  setText("#contact-tag", siteData.contact.tag);
  setText("#contact-title", siteData.contact.title);
  setText("#contact-subtitle", siteData.contact.subtitle);
  setHTML(
    "#contact-links",
    siteData.contact.links
      .map(
        (l) =>
          `<a href="${l.href}" class="contact__link-item" target="_blank" rel="noopener">${l.label}</a>`
      )
      .join("")
  );

  /* ── FOOTER ───────────────────────────────────────────────── */
  setText("#footer-copy", siteData.footer.copy);
  setHTML(
    "#footer-socials",
    siteData.footer.socials
      .map(
        (s) =>
          `<a href="${s.href}" class="footer__social-link" target="_blank" rel="noopener" aria-label="${s.ariaLabel}">${s.label}</a>`
      )
      .join("")
  );

  /* ═══════════════════════════════════════════════════════════
     INTERACTIVE BEHAVIORS
     ═══════════════════════════════════════════════════════════ */

  /* ── Mobile Nav Toggle ───────────────────────────────────── */
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");
  const overlay = $("#nav-overlay");

  function openNav() {
    menu.classList.add("active");
    toggle.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    menu.classList.remove("active");
    toggle.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    menu.classList.contains("active") ? closeNav() : openNav();
  });

  // Close menu when overlay is tapped
  overlay.addEventListener("click", closeNav);

  // Close menu when a nav link is clicked, then scroll to section
  $$("#nav-links a").forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      closeNav();
      if (target) {
        // Wait for the nav close transition to finish before scrolling
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 380);
      }
    })
  );

  /* ── Sticky Header Shadow ────────────────────────────────── */
  const header = $("#header");
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("header--scrolled", window.scrollY > 60);
    },
    { passive: true }
  );

  /* ── Scroll Reveal (Intersection Observer) ───────────────── */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealEls.forEach((el) => el.classList.add("reveal--visible"));
  }

  /* ── Smooth anchor scrolling (for non-nav links like hero CTAs) ── */
  $$('a[href^="#"]').forEach((a) => {
    // Skip nav links — they already have their own handler above
    if (a.closest("#nav-links")) return;
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
