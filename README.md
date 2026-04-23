# Data-Driven Freelance Portfolio 🚀

A modern, high-converting portfolio website built with a unique "data-driven static" architecture. 

Instead of hardcoding content into HTML tags, the entire global structure of the website is powered by a single JavaScript configuration object (`siteData`). This allows for instant content updates, new project additions, and text tweaks without ever touching the underlying HTML or CSS structure.

## ✨ Features

* **Data-Driven Content:** Update the entire main site and global footers from one central `siteData` object.
* **Dynamic Project Pages:** Includes an HTML template to instantly generate deep-dive case study pages that automatically inherit global data (like contact info and footer).
* **Zero Dependencies:** Pure Vanilla HTML, CSS, and JS. No build steps, no React, no Node.js.
* **Smart Routing:** Automatically detects whether portfolio links should route internally or open in a new tab.
* **Dark Mode UI:** Sleek, modern aesthetic featuring glassmorphism, CSS grid layouts, and vibrant gradient accents.
* **Fully Responsive:** Flawless scaling from desktop down to mobile devices.

## 🏗 Architecture

| File/Folder | Purpose |
| :--- | :--- |
| `index.html` | The semantic skeleton of the main page. Contains structural tags with specific IDs, but zero hardcoded text. |
| `style.css` | The global design system. Utilizes custom properties (`:root`), fluid typography, and modern CSS grid/flexbox. |
| `app.js` | The engine. Holds the `siteData` object and handles the DOM injection logic to populate the HTML on load. |
| `projects/` | Directory containing individual case study pages, built using the project template. |

## 🛠 How to Update Global Content

You never need to edit the root `index.html` file. To update the main website, simply open `app.js` and modify the `siteData` object at the top of the file.

```javascript
const siteData = {
  personal: { name: "Your Name", role: "Your Role" },
  hero: { headline: "Your Headline", subtext: "Your subtext here." },
  // Add a new project to the homepage grid here:
  projects: { 
    items: [
      { 
        name: "Enterprise Vulnerability Assessment", 
        category: "Security",
        tech: ["Burp Suite", "Nuclei"], 
        link: "projects/enterprise-vulnerability-assessment/index.html" // Internal link
      }
    ] 
  }
};
