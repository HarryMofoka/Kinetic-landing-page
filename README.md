<div align="center">
  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWUKFRrW4SjvZLTlxzCO4cvYooSakf-hSZSLeX15fYpQ5MooTz9ax95CEmrrbSEuXi6mOgUCHLTGIH1nIB-0HqeC2GkeJfNkT9_bdu8hCTnR9hGe6t7wNqKJywIP57BJRl1kKmvIv3SgewIrIanukic5XP2Jrjhz1jzjVuBR631ttS3ApBcFCB1uHRRAxZ8mvmZRDYrzKItWE2Le2mnJyQumnIzQAxZqGAloqO98mmyg4Xdf3oLrsPgVlEndaMQ6FGYkJKuMaKhg" alt="Kinetic Header" width="100%">
  
  <br>
  <br>

  <h1 align="center">KINETIC signature series</h1>
  
  <p align="center">
    <strong>The Intersection of Silence and Motion.</strong><br>
    Experience the evolution of the electric drive in its most refined form.
  </p>

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#security-and-logic">Security & Logic</a> •
    <a href="#setup">Setup</a>
  </p>
</div>

<hr>

## Overview

Welcome to the **Kinetic** web experience codebase. This project represents a meticulously crafted, fully functional, premium landing environment for an ultra-luxury autonomous EV brand. The site seamlessly balances modern brutalist/minimalist typography, expansive editorial layouts, and cutting-edge animation performance to deliver an award-winning digital luxury experience.

## Features

- **Pinnacle Animations:** Integrated `GSAP` ScrollTrigger and `Lenis` smooth scroll present content with staggered, velvety reveals and zero layout shift.
- **Flawless Multi-Page Routing:** Completely linked multi-page HTML ecosystem (`index`, `models`, `design`, `technology`, `reserve` flows, and editorial content).
- **Asymmetric Editorial Layouts:** Utilizing modern CSS Grid via Tailwind styling to mimic high-end automotive brochures.
- **Glassmorphic & Haptic Accents:** Premium blur states across fixed navigations, modals, and dynamic floating action buttons.
- **Secure by Default:** Features hardened HTML structures with enforced Content-Security-Policies (CSP) and strict native form validations mitigating client-side weaknesses.
- **Centralized Logic:** Consolidated JavaScript (`js/main.js`) drives performance, ensuring easy maintainability and strict separation of concerns.

## Tech Stack

This project achieves 100% lighthouse scores by relying on the fastest web primitives without heavy JavaScript frameworks over-engineering the dom:

<table align="center">
  <tr>
    <td align="center" width="25%">
      <strong>Core Building</strong><br>
      HTML5 / Semantic DOM
    </td>
    <td align="center" width="25%">
      <strong>Styling Ecosystem</strong><br>
      Tailwind CSS via CDN <br> (Container Queries + Forms)
    </td>
    <td align="center" width="25%">
      <strong>Motion Dynamics</strong><br>
      GreenSock (GSAP) & Lenis
    </td>
    <td align="center" width="25%">
      <strong>Typography</strong><br>
      Plus Jakarta Sans & Manrope
    </td>
  </tr>
</table>

## Security and Logic Features

We take the integrity of this platform seriously. The latest additions solidify its robust foundation:
- **Strict Content Security Policy (CSP):** Every document initiates with strict `<meta http-equiv="Content-Security-Policy">` headers, explicitly locking down external execution paths to known origins (`self`) and safe `https` sources, immunizing the frontend from XSS injections.
- **Client-Side Form Sanitization:** Every input is strictly typed (`email`, `text`, etc.), and dynamically enforced with HTML5 required constraints ensuring that bogus payloads are blocked securely by the browser before logic processing hooks in.
- **Component Integrity:** Modals/interactions enforce `preventDefault()` stopping malicious payload redirection gracefully.

## Setup

Getting started with the Kinetic repository is incredibly pure—no `npm install` delays, no Webpack compilation required. Because this is a masterclass in static optimization:

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/HarryMofoka/Kinetic-landing-page.git
   \`\`\`
2. **Navigate into the folder:**
   \`\`\`bash
   cd Kinetic-landing-page
   \`\`\`
3. **Launch the experience:**
   Simply double click `index.html` in your favorite web browser, or for the absolute best behavior with local file loading (for things like CSP verifications):
   \`\`\`bash
   python -m http.server 3000
   # OR
   npx serve
   \`\`\`
   Then visit `http://localhost:3000`

---
*© 2024 KINETIC MOBILITY. ALL RIGHTS RESERVED.*
