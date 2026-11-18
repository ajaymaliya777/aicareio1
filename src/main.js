import config from "./config.js";
import "./style.css";

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]));

const iconMap = {
  ai: "✳", retrieval: "⌕", ml: "◈", vision: "▧", web: "⌘", data: "◫", support: "⌁",
};

/* SEO and document-level details */
document.title = config.business.metaTitle;
const metaDescription = $('meta[name="description"]');
if (metaDescription) metaDescription.content = config.business.metaDescription;

/* Mobile navigation: keyboard-friendly, dismissible and state-aware. */
const menuToggle = $("#menuToggle");
const mobileNav = $("#mobileNav");
const setMenuOpen = (open) => {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  mobileNav.classList.toggle("is-open", open);
  mobileNav.inert = !open;
  document.body.classList.toggle("menu-open", open);
};
menuToggle.addEventListener("click", () => setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true"));
$$("#mobileNav a").forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 980 && menuToggle.getAttribute("aria-expanded") === "true") setMenuOpen(false);
}, { passive: true });

/* Small capability strip: no unverified client-count or performance claims. */
const statsGrid = $("#statsGrid");
config.stats.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "intro-item";
  card.innerHTML = `<span class="intro-index">0${index + 1}</span><div><strong>${escapeHTML(item.value)}</strong><span>${escapeHTML(item.label)}</span></div>`;
  statsGrid.appendChild(card);
});

/* Services are progressive-disclosure cards: details appear only when requested. */
const servicesList = $("#servicesList");
const serviceIconKeys = ["ai", "retrieval", "ml", "vision", "web", "data", "support"];
config.serviceGroups.forEach((group, index) => {
  const card = document.createElement("article");
  card.className = "service-card";
  card.dataset.reveal = "";
  card.dataset.revealDelay = String((index % 3) * 70);
  const panelId = `service-details-${index + 1}`;
  const items = group.items.map((item) => `<li><span aria-hidden="true">✓</span>${escapeHTML(item)}</li>`).join("");
  card.innerHTML = `
    <div class="service-card-top"><span class="service-icon" aria-hidden="true">${iconMap[serviceIconKeys[index]] || "✳"}</span><span class="service-number">0${index + 1}</span></div>
    <h3>${escapeHTML(group.category)}</h3>
    <p class="service-short">${escapeHTML(group.short || group.blurb)}</p>
    <div class="service-details" id="${panelId}" hidden><p>${escapeHTML(group.blurb)}</p><ul>${items}</ul><a class="service-discuss" href="#contact" data-service="${escapeHTML(group.category)}">Discuss this service <span aria-hidden="true">↗</span></a></div>
    <button class="service-toggle" type="button" aria-expanded="false" aria-controls="${panelId}"><span>Explore service</span><span class="toggle-icon" aria-hidden="true">+</span></button>
  `;
  const toggle = $(".service-toggle", card);
  const panel = $(".service-details", card);
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.querySelector("span:first-child").textContent = expanded ? "Explore service" : "Show less";
    toggle.querySelector(".toggle-icon").textContent = expanded ? "+" : "−";
    panel.hidden = expanded;
    card.classList.toggle("is-expanded", !expanded);
  });
  servicesList.appendChild(card);
});

/* Technical stack */
const stackGrid = $("#stackGrid");
config.techStack.forEach((group, index) => {
  const card = document.createElement("article");
  card.className = "expertise-card";
  card.dataset.reveal = "";
  card.dataset.revealDelay = String((index % 3) * 60);
  card.innerHTML = `<div class="expertise-card-head"><span class="expertise-index">0${index + 1}</span><h3>${escapeHTML(group.group)}</h3></div><div class="tech-pills">${group.items.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}</div>`;
  stackGrid.appendChild(card);
});

/* Featured projects */
const featuredProjects = $("#featuredProjects");
config.featuredProjects.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card";
  article.dataset.reveal = "";
  const featureItems = project.features.map((feature) => `<li><span aria-hidden="true">↗</span>${escapeHTML(feature)}</li>`).join("");
  const techTags = project.tech.map((tech) => `<span>${escapeHTML(tech)}</span>`).join("");
  article.innerHTML = `
    <div class="project-overview"><span class="project-index">PROJECT / 0${index + 1}</span><span class="project-spark" aria-hidden="true">✳</span><h3>${escapeHTML(project.name)}</h3><p class="project-tag">${escapeHTML(project.tag)}</p><p class="project-description">${escapeHTML(project.description)}</p><div class="project-problem"><span>THE PROBLEM</span><p>${escapeHTML(project.problem || "A practical challenge explored through software and AI engineering.")}</p></div><button class="project-view-toggle" type="button" aria-expanded="false" aria-controls="project-detail-${index + 1}"><span>View project details</span><span aria-hidden="true">↗</span></button></div>
    <div class="project-detail" id="project-detail-${index + 1}" hidden><span class="project-detail-label">SOLUTION HIGHLIGHTS</span><ul>${featureItems}</ul><div class="tech-tags">${techTags}</div></div>
  `;
  const projectToggle = $(".project-view-toggle", article);
  const projectDetails = $(".project-detail", article);
  projectToggle.addEventListener("click", () => {
    const expanded = projectToggle.getAttribute("aria-expanded") === "true";
    projectToggle.setAttribute("aria-expanded", String(!expanded));
    projectToggle.querySelector("span:first-child").textContent = expanded ? "View project details" : "Hide project details";
    projectDetails.hidden = expanded;
    article.classList.toggle("is-open", !expanded);
  });
  featuredProjects.appendChild(article);
});

/* Additional projects */
const moreProjects = $("#moreProjects");
config.additionalProjects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "mini-project-card";
  card.dataset.reveal = "";
  card.innerHTML = `<span class="mini-project-index">EXPLORATION / 0${index + 4}</span><h3>${escapeHTML(project.name)}</h3><p>${escapeHTML(project.description)}</p><div class="tech-tags">${project.tech.map((tech) => `<span>${escapeHTML(tech)}</span>`).join("")}</div>`;
  moreProjects.appendChild(card);
});

/* Why AI Care */
const whyGrid = $("#whyGrid");
config.whyChooseUs.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "why-card";
  card.dataset.reveal = "";
  card.dataset.revealDelay = String((index % 3) * 70);
  card.innerHTML = `<span class="why-index">0${index + 1}</span><span class="why-mark" aria-hidden="true">✳</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p>`;
  whyGrid.appendChild(card);
});

/* Five-step process */
const processGrid = $("#processGrid");
config.process.forEach((step, index) => {
  const card = document.createElement("article");
  card.className = "process-step";
  card.dataset.reveal = "";
  card.dataset.revealDelay = String(index * 55);
  card.innerHTML = `<span class="process-number">${escapeHTML(step.step)}</span><span class="process-dot" aria-hidden="true"></span><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.description)}</p>`;
  processGrid.appendChild(card);
});

/* Business contact data is sourced only from the existing site config. */
const { contact, business, social } = config;
const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;
const contactEntries = [
  { label: "PHONE", value: contact.phoneDisplay, href: `tel:${contact.phoneLink}` },
  { label: "WHATSAPP", value: "Message AI Care", href: whatsappUrl },
  { label: "EMAIL", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LOCATION", value: contact.address, href: contact.googleMapsUrl },
];
const contactList = $("#contactList");
contactEntries.forEach((entry) => {
  const item = document.createElement("li");
  const external = entry.href.startsWith("https://");
  item.innerHTML = `<span>${escapeHTML(entry.label)}</span><a href="${escapeHTML(entry.href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHTML(entry.value)} <span aria-hidden="true">↗</span></a>`;
  contactList.appendChild(item);
});

const footerContact = $("#footerContact");
[
  { label: contact.phoneDisplay, href: `tel:${contact.phoneLink}` },
  { label: contact.email, href: `mailto:${contact.email}` },
].forEach((entry) => {
  const link = document.createElement("a");
  link.href = entry.href;
  link.textContent = entry.label;
  footerContact.appendChild(link);
});

const socialIcons = {
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.2 9h3.6v12H3.2V9Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.6v-5.9c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9V9Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.8" r=".8" class="fill-dot"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4 20 20M20 4 4 20M4 4h4l12 16h-4L4 4Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.5 1.4-4.5-2.5-6.3-3m12.6 6v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.7 7a4.4 4.4 0 0 0-.1-3.2s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C7.4 3.5 6.4 3.8 6.4 3.8A4.4 4.4 0 0 0 6.3 7a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V22"/></svg>',
};
const footerSocial = $("#footerSocial");
Object.entries(social).forEach(([name, url]) => {
  if (!url || !socialIcons[name]) return;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", name);
  link.innerHTML = socialIcons[name];
  footerSocial.appendChild(link);
});
if (!footerSocial.childElementCount) footerSocial.hidden = true;

$("#whatsappFloat").href = whatsappUrl;
$("#year").textContent = String(new Date().getFullYear());

/* The primary enquiry experience is the company's embedded Google Form. */
const messageField = $("#message");
if (messageField) messageField.addEventListener("input", (event) => event.currentTarget.setCustomValidity(""));

/* Lightweight scroll reveals. Content remains visible when JS/IntersectionObserver is unavailable. */
const revealItems = $$('[data-reveal]');
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealItems.forEach((item) => {
    item.style.setProperty("--reveal-delay", `${Number(item.dataset.revealDelay || 0)}ms`);
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* Header depth and active navigation provide location feedback while scrolling. */
const siteHeader = $("#siteHeader");
const updateHeader = () => siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
const navLinks = $$(".desktop-nav a");
const observedSections = navLinks.map((link) => link.getAttribute("href")).filter((href) => href?.startsWith("#")).map((href) => $(href)).filter(Boolean);
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  observedSections.forEach((section) => sectionObserver.observe(section));
}
