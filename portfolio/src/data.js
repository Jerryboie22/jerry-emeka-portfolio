export const profile = {
  name: "Jeremiah Emeka",
  shortName: "Jerry",
  role: "Full Stack Developer & SEO Specialist",
  location: "Lagos, Nigeria",
  email: "jerryemeka22@gmail.com",
  phone: "+234 8134-813-3380",
  linkedin: "https://linkedin.com/in/jerry-emeka-470956289",
  website: "https://j7hub.com",
  status: "200 OK — available for new engagements",
};

export const skillGroups = [
  {
    label: "backend",
    title: "Back-End Development",
    items: ["PHP", "Laravel", "Node.js", "Magento 2 REST API Development"],
  },
  {
    label: "frontend",
    title: "Front-End Development",
    items: [
      "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Vue.js",
      "Tailwind CSS", "WordPress Theme/Plugin Development", "Elementor",
    ],
  },
  {
    label: "mobile",
    title: "Mobile Development",
    items: ["Android (Kotlin, Jetpack Compose)", "REST API Integration", "OkHttp"],
  },
  {
    label: "cms",
    title: "CMS & E-Commerce",
    items: [
      "WordPress", "WooCommerce", "Shopify", "Shopify Liquid",
      "Magento 2", "Wix", "Custom Themes", "Custom Plugins",
    ],
  },
  {
    label: "data",
    title: "Databases & Tools",
    items: [
      "MySQL", "Git", "GitHub Actions (CI/CD)", "Postman",
      "Swagger/OpenAPI", "cPanel",
    ],
  },
  {
    label: "seo",
    title: "SEO & Performance",
    items: [
      "Technical SEO", "On-Page SEO", "Core Web Vitals",
      "Search Console", "Speed Optimization",
    ],
  },
];

export const experience = {
  title: "Freelance Web Developer & SEO Specialist",
  location: "Remote",
  period: "2020 — Present",
  responsibilities: [
    "Build scalable WordPress and Shopify websites for businesses across e-commerce, education, and service sectors",
    "Conduct SEO audits, execute on-page & technical optimization, and manage long-term ranking strategies",
    "Develop custom dashboards, landing pages, and backend systems using React, PHP, and Magento 2 REST APIs",
    "Optimize website UX, speed, mobile responsiveness, and conversion flows",
    "Provide long-term maintenance, updates, bug fixes, and performance improvements",
    "Deliver Magento 2 REST API development and Android (Kotlin/Jetpack Compose) companion apps for client backend systems",
  ],
  achievements: [
    { value: "171%", label: "Sales growth — Men's Sexual Health Shopify store (3 months)" },
    { value: "j7hub.com & ogrcs.com", label: "High-performance WordPress redesigns" },
    { value: "moshapparels.com", label: "Complete Shopify store setup & optimization" },
    { value: "salemgroupofschools.com", label: "School website design & modernization" },
    { value: "WOW Pens", label: "Built and maintain the Inventory Manager WordPress plugin" },
  ],
};

export const projects = [
  {
    endpoint: "GET /projects/penhouse-api",
    name: "Penhouse.in — Magento 2 Repair Management System",
    role: "Backend / API Developer",
    stack: ["Magento 2", "PHP", "REST API", "MySQL", "Postman", "Swagger/OpenAPI"],
    points: [
      "Built the Pen\\Repair module REST API — createRepair, status transitions, customer authentication, and dashboard stats endpoints",
      "Authored Postman collections (v1–v4) and Swagger/OpenAPI documentation for API consumers",
      "Fixed core repository bugs: assigned_to_me query logic, status transition map, and customer DTO deserialization",
      "Extended db_schema.xml with new customer columns and handled Magento CLI deployment via SSH",
    ],
  },
  {
    endpoint: "GET /projects/penrepair-android",
    name: "PenRepair — Android Companion App",
    role: "Android Developer (Kotlin / Jetpack Compose)",
    stack: ["Kotlin", "Jetpack Compose", "OkHttp", "REST APIs"],
    points: [
      "Implemented forgot password flow, camera/gallery chooser, and customer search by phone, email, and name",
      "Added CSV export, deep linking, and configurable OkHttp network timeouts",
      "Resolved DTO serialization mismatches between snake_case API responses and camelCase Kotlin models",
      "Shipped multiple build and CI fixes via GitHub Actions",
    ],
  },
  {
    endpoint: "GET /projects/inventory-audit",
    name: "Pen House Inventory Audit App",
    role: "Android Developer",
    stack: ["Android (Kotlin)", "REST API"],
    points: [
      "Built a SKU detail drill-down screen for granular inventory auditing",
      "Fixed the quantity confirmation dialog and implemented a Forgot Password feature",
    ],
  },
  {
    endpoint: "GET /projects/wow-pens-plugin",
    name: "WOW Pens Inventory Manager",
    role: "WordPress Plugin Developer",
    stack: ["WordPress", "PHP", "WooCommerce", "JavaScript", "Select2"],
    points: [
      "Developed per-row GST rate management with configurable dropdowns",
      "Integrated Select2-powered SKU search for fast inventory lookup",
      "Built WooCommerce price sync triggered on purchase approval",
      "Designed a complete custom admin CSS stylesheet for the plugin interface",
    ],
  },
  {
    endpoint: "GET /projects/wowpens-customizer",
    name: "WOWPens.in — Custom Product Customization Platform",
    role: "Frontend Engineer / WordPress & React Integration",
    stack: ["React", "JavaScript", "TypeScript", "WordPress", "WooCommerce", "REST API", "CSS"],
    live: "https://wowpens.in",
    points: [
      "Built and integrated a React-based product customization interface into a live WooCommerce store",
      "Extended real-world frontend logic to support dynamic product options (materials, colors, engraving, etc.)",
      "Debugged and resolved complex state, rendering, and data-persistence issues",
      "Validated customization outputs before checkout to ensure accuracy",
    ],
  },
  {
    endpoint: "GET /projects/j7hub",
    name: "j7hub.com — WordPress Blog & Business Website",
    role: "Full-Stack / SEO",
    stack: ["WordPress", "Elementor", "PHP", "CSS", "HTML", "SEO"],
    points: [
      "Built full website structure, responsive layout, and UI/UX",
      "Wrote and managed blog content for SEO and engagement",
      "Configured SEO settings, metadata, indexing, and sitemap",
    ],
  },
  {
    endpoint: "GET /projects/moshapparels",
    name: "Moshapparels.com — E-commerce Store",
    role: "Shopify Developer",
    stack: ["Shopify", "Liquid", "CSS", "HTML", "WooCommerce", "SEO"],
    points: [
      "Developed Shopify store structure and customized theme",
      "Created product pages, custom sections, and optimized checkout UX",
      "Integrated payment gateways and implemented SEO best practices",
    ],
  },
  {
    endpoint: "GET /projects/ogrcs",
    name: "OGRCS.com — WordPress Website Rebuild",
    role: "Full-Stack / SEO",
    stack: ["WordPress", "Elementor", "PHP", "CSS", "HTML", "SEO"],
    points: [
      "Rebuilt website layout and responsive UI/UX",
      "Implemented SEO improvements, indexing setup, and sitemap configuration",
      "Optimized website performance and page speed",
    ],
  },
  {
    endpoint: "GET /projects/salem-schools",
    name: "Salem Group of Schools — Website Modernization",
    role: "Full-Stack Developer",
    stack: ["WordPress", "Elementor", "PHP", "CSS", "HTML"],
    points: [
      "Redesigned website layout and navigation for responsive UI/UX",
      "Integrated CMS features for easy content updates",
      "Ensured mobile-friendly and fast-loading pages",
    ],
  },
];

export const education = {
  school: "Federal University of Technology, Owerri (FUTO)",
  degree: "B.Tech — Industrial Chemistry",
  period: "2016 — 2021",
};

export const certifications = [
  "Microsoft Certified: Azure Fundamentals",
  "Business Management and Personal Relationship Management — Taraba Business School (2022)",
  "Google Digital Marketing & Google Workspace",
];
