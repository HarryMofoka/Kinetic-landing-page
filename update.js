const fs = require('fs');
const path = require('path');

const files = ['index.html', 'models.html', 'reserve.html', 'reserve-step-2.html'];

const cspTag = `<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https:; font-src 'self' https: data:;"/>`;

const scriptTags = `
<!-- GSAP & Lenis for Luxury Animations -->
<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="js/main.js"></script>
</body>`;

for (const file of files) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Inject CSP
  if (!content.includes('Content-Security-Policy')) {
      content = content.replace('<head>', `<head>\n${cspTag}`);
  }

  // Inject Scripts
  if (!content.includes('js/main.js')) {
      content = content.replace('</body>', scriptTags);
  }

  // General Nav Updates for internal pages
  content = content.replace(/>Design<\/a>/g, ' href="design.html">Design</a>').replace(/href="#" href="design.html"/g, 'href="design.html"');
  content = content.replace(/>Technology<\/a>/g, ' href="technology.html">Technology</a>').replace(/href="#" href="technology.html"/g, 'href="technology.html"');
  content = content.replace(/>Privacy<\/a>/g, ' href="legal.html">Privacy</a>').replace(/href="#" href="legal.html"/g, 'href="legal.html"');
  content = content.replace(/>Legal<\/a>/g, ' href="legal.html">Legal</a>').replace(/href="#" href="legal.html"/g, 'href="legal.html"');
  content = content.replace(/>Contact<\/a>/g, ' href="contact.html">Contact</a>').replace(/href="#" href="contact.html"/g, 'href="contact.html"');
  content = content.replace(/>Careers<\/a>/g, ' href="careers.html">Careers</a>').replace(/href="#" href="careers.html"/g, 'href="careers.html"');
  content = content.replace(/>Press<\/a>/g, ' href="press.html">Press</a>').replace(/href="#" href="press.html"/g, 'href="press.html"');
  content = content.replace(/>Sustainability<\/a>/g, ' href="technology.html#sustainability">Sustainability</a>').replace(/href="#" href="technology.html#sustainability"/g, 'href="technology.html#sustainability"');
  content = content.replace(/>Performance<\/a>/g, ' href="models.html#performance">Performance</a>').replace(/href="#" href="models.html#performance"/g, 'href="models.html#performance"');
  content = content.replace(/>Support<\/a>/g, ' href="contact.html">Support</a>').replace(/href="#" href="contact.html"/g, 'href="contact.html"');

  // For Forms: Add required to inputs
  content = content.replace(/type="text"/g, 'type="text" required');
  content = content.replace(/type="email"/g, 'type="email" required');
  // Avoid duplicating required if script runs twice
  content = content.replace(/required required/g, 'required');

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log("Files updated via automation script.");
