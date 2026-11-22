/*
 * File name: portfolioContent.js
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 *
 * Page copy lives here so the React pages stay easy to read.
 */

export const siteOwner = {
  englishName: "Jenny Ed",
  portraitPath: "/images/portrait.png",
};

export const navigationLinks = [
  { pageKey: "home", label: "Home", path: "/" },
  { pageKey: "about", label: "About Me", path: "/about" },
  { pageKey: "projects", label: "Projects", path: "/projects" },
  { pageKey: "education", label: "Education", path: "/education" },
  { pageKey: "services", label: "Services", path: "/services" },
  { pageKey: "contact", label: "Contact Me", path: "/contact" },
];

export const highlightedProjects = [
  {
    title: "liyigarden",
    href: "https://liyigarden.xyz",
    imagePath: "/images/project-blog.svg",
    imageAlt: "A small open notebook",
    role: "I write the notes and I keep the site up. The blog is on GitHub Pages, with Cloudflare DNS, the TLS certificate, and the CDN in front of it.",
    outcome:
      "A plain site for notes on games, tools, and the garden. The domain resolves, the certificate is in place, and the origin can be reached.",
  },
  {
    title: "莉依花园",
    imagePath: "/images/project-garden.svg",
    imageAlt: "White leaves over a dark trunk",
    role: "I wrote the story and the garden.",
    outcome:
      "The opening of 蝶: the palace, the guardian butterfly, and the garden beyond the gate. Lii wakes outside the sealed palace, follows a white butterfly, and finds the garden people used to visit.",
  },
  {
    title: "Don't Starve Together server",
    imagePath: "/images/project-server.svg",
    imageAlt: "A small server rack",
    role: "I deployed the dedicated server with Docker on a VPS I look after. The work started in May 2026 and is still running.",
    outcome:
      "The firewall and ports are set, backups can be restored, and I worked through the lag that was getting in the way of multiplayer.",
  },
];

export const qualifications = [
  {
    title: "Software Engineering Technician",
    detail: "软件工程技术, diploma (大专)",
    school: "苏州百年职业学院",
    dates: "September 2024 – June 2027",
    note: "In progress. 2027 cohort.",
  },
  {
    title: "National Computer Rank Examination, Level 1",
    detail: "全国计算机等级考试一级",
    school: "National Computer Rank Examination",
    dates: "Passed",
    note: "Computer fundamentals certificate.",
  },
  {
    title: "Mandarin proficiency",
    detail: "普通话",
    school: "Listed with the diploma on my resume",
    dates: "Held",
    note: "Everyday spoken English as well.",
  },
];

export const offeredServices = [
  {
    title: "Web development",
    imagePath: "/images/service-pages.svg",
    imageAlt: "A browser window",
    summary:
      "Small websites in HTML, CSS, and JavaScript, including this React portfolio and static sites on GitHub Pages.",
  },
  {
    title: "Windows setup and repair",
    imagePath: "/images/service-windows.svg",
    imageAlt: "A desktop window",
    summary:
      "System install and recovery, drivers, and the usual hardware work: dusting, parts, and a machine that boots again.",
  },
  {
    title: "Linux and VPS care",
    imagePath: "/images/service-express.svg",
    imageAlt: "Connected nodes",
    summary:
      "Day-to-day Linux checks, Docker services, firewall rules, logs, and restoring a backup when something breaks.",
  },
  {
    title: "DNS, HTTPS, and CDN",
    imagePath: "/images/service-network.svg",
    imageAlt: "A lock on a network path",
    summary:
      "Domain records, TLS certificates, and CDN setup, then tracing a bad origin or a certificate that will not line up.",
  },
];
