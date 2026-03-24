const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Extract Header (everything up to <main...>)
const headerRegex = /([\s\S]*?)(<main[\s\S]*?>)/;
const headerMatch = indexContent.match(headerRegex);
const header = headerMatch ? headerMatch[0] : '';

// Extract Footer (everything from </main> to the end)
const footerRegex = /(<\/main>[\s\S]*)/;
const footerMatch = indexContent.match(footerRegex);
const footer = footerMatch ? footerMatch[0] : '';


const pages = {
    'design.html': `
        <section class="py-40 px-6 md:px-20 min-h-screen flex flex-col justify-center items-center text-center">
            <h1 class="font-headline text-5xl md:text-8xl font-extralight tracking-[-0.02em] mb-8">Design <span class="text-secondary italic">Philosophy</span></h1>
            <p class="font-body text-xl text-primary max-w-3xl leading-relaxed font-light mb-16">
                Our approach to design strips away the unnecessary, leaving only what is pure, functional, and deeply emotive. It is a visual language spoken in light, shadow, and proportion.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <div class="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-sm group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFjnc6kzRn8EKm60QXTy_c4eX9SfqByp1Yy0HnDpgMGklBrjRt59ssvZv_7xQQdh2ILk9svCUnSHpAgJ4ywEvgF3QrP-Gl4gON1TQlG2AKjWqPi0JnPuDMrtiUgDIMAr7q-NKgeqNwGCDHKPBVwFo1KU1bF6b6cgQRiAa5zvumyACPfEbYT82jV3erlV-Tr5NHzhnhIhjoc7dVeJFUe5m_gn3HDkePttvTlOvuKjcMj233K7grOg6XfQhhI1uxtY5eL0__a_pJew" alt="Design detail" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
                </div>
                <div class="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-sm group relative">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrwbQ2MhavNldqMqKUSE4XFx8n2JyJwjsDxjGsYr4y_IPr-PpccdmNjXVcW9Uim7QL0kIF7-gJNu0X5QH5-Nuzef6kVPvfB3c_Zcc6Mc_RMTtIcWg8X8tOLwRgFgd-5i_RO5e1UVbJp_MDphE0jHDYvI6lKlwxGRhcPJfHjesGSs83JDk2ujosA95N7g3TtOF07C-fw8-UO4lP58PN2JQ4ZufONljZiPMkzWXbxUX4jez17cqCH6CM0EfzkEpNPHEYv-drOT6lcA" alt="Interior craftsmanship" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
                </div>
            </div>
        </section>
    `,
    'technology.html': `
        <section class="py-40 px-6 md:px-20 min-h-screen">
            <div class="max-w-4xl mb-24">
                <div class="text-[10px] font-headline tracking-[0.5em] uppercase text-secondary mb-12">Innovation</div>
                <h1 class="font-headline text-5xl md:text-7xl font-light leading-tight mb-8">
                    Driven by <span class="font-medium italic">Neural Computation</span>
                </h1>
                <p class="font-body text-xl text-on-surface-variant leading-relaxed">
                    Underneath the minimalist exterior lies an incredibly complex neural network processing millions of data points per second to ensure supreme safety and effortless transit.
                </p>
            </div>
            
            <div id="sustainability" class="mt-40 bg-surface-container-low rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row gap-16 items-center">
                <div class="md:w-1/2">
                    <h2 class="font-headline text-4xl mb-6">Sustainability at the Core</h2>
                    <p class="text-on-surface-variant leading-relaxed">We utilize closed-loop recycling systems and bio-based composites to ensure our footprint is as silent as our vehicles.</p>
                </div>
                <div class="md:w-1/2 w-full aspect-video rounded-2xl overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJC2QpdLqG_516ODqQnWQ8E2W7ZL9eQ-yhjcqJrv2KXRm2M82wln1vuT51tVe98KQXcIdrX94wEQFItbwXME2RviHixn_UglHhGdXBlbO51MvP_uXO6ktGiEzJKHM4IJzsi3X8nzrqEnrn4rlaD0sHAtI4c79e2uUskc7VAWnkEXKhZvQmowX549DL32PB-t5c0TEaVXJb0L210CzksvvcGo4HH8ALiok4dzC3nmOzkYxeWQnpbBmvBza-fu9yMRLSwKWsc2k2QQ" class="w-full h-full object-cover" alt="Sustainable production">
                </div>
            </div>
        </section>
    `,
    'contact.html': `
        <section class="py-40 px-6 md:px-20 min-h-screen flex flex-col items-center">
            <div class="max-w-2xl w-full text-center mb-16">
                <h1 class="font-headline text-4xl md:text-6xl font-light mb-6">Contact KINETIC</h1>
                <p class="text-on-surface-variant tracking-wide">Reach out to our global concierge team or submit an inquiry.</p>
            </div>
            <form class="w-full max-w-xl bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl space-y-6 border border-outline-variant/10">
                <div class="flex flex-col gap-2">
                    <label class="font-headline text-[10px] tracking-widest uppercase font-bold text-secondary">Name</label>
                    <input type="text" required class="bg-surface-container-low border-none rounded-lg px-5 py-4 text-sm focus:ring-1 focus:ring-secondary/50 placeholder:text-outline-variant" placeholder="Your Name">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-headline text-[10px] tracking-widest uppercase font-bold text-secondary">Email</label>
                    <input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" class="bg-surface-container-low border-none rounded-lg px-5 py-4 text-sm focus:ring-1 focus:ring-secondary/50 placeholder:text-outline-variant" placeholder="you@example.com">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-headline text-[10px] tracking-widest uppercase font-bold text-secondary">Message</label>
                    <textarea required rows="4" class="bg-surface-container-low border-none rounded-lg px-5 py-4 text-sm focus:ring-1 focus:ring-secondary/50 placeholder:text-outline-variant" placeholder="How can we assist you?"></textarea>
                </div>
                <button type="submit" class="w-full bg-on-surface text-surface py-5 rounded-full font-headline text-xs tracking-widest uppercase hover:scale-105 transition-all mt-4">Send Message</button>
            </form>
        </section>
    `,
    'careers.html': `
        <section class="py-40 px-6 md:px-20 min-h-screen text-center flex flex-col items-center justify-center">
            <h1 class="font-headline text-5xl md:text-7xl font-light mb-8">Build the <span class="italic text-secondary">Future</span></h1>
            <p class="text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12">
                We are actively looking for visionaries in artificial intelligence, materials science, and industrial design. 
            </p>
            <div class="bg-secondary-container/30 px-8 py-6 rounded-xl border border-secondary/10 inline-block">
                <p class="font-headline text-sm font-bold text-on-secondary-container">No open positions at this exact moment.</p>
                <p class="text-xs text-secondary mt-2">Check back in Q3 2025.</p>
            </div>
        </section>
    `,
    'press.html': `
        <section class="py-40 px-6 md:px-20 min-h-screen">
            <h1 class="font-headline text-5xl md:text-7xl font-light mb-16 text-center">Press & Media</h1>
            <div class="max-w-4xl mx-auto space-y-8">
                <article class="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 group cursor-pointer hover:border-secondary/30 transition-all">
                    <p class="text-[10px] text-secondary font-bold tracking-widest uppercase mb-2">Press Release — Oct 2024</p>
                    <h2 class="font-headline text-2xl mb-4 group-hover:text-secondary transition-colors">KINETIC reveals the Model X1 Signature Series.</h2>
                    <p class="text-on-surface-variant line-clamp-2">A paradigm shift in automotive design and autonomous capabilities...</p>
                </article>
                <article class="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 group cursor-pointer hover:border-secondary/30 transition-all">
                    <p class="text-[10px] text-secondary font-bold tracking-widest uppercase mb-2">Feature — Sep 2024</p>
                    <h2 class="font-headline text-2xl mb-4 group-hover:text-secondary transition-colors">The Neural OS: Explained.</h2>
                    <p class="text-on-surface-variant line-clamp-2">How KINETIC's new operating system predicts your destination before you do...</p>
                </article>
            </div>
        </section>
    `,
    'legal.html': `
        <section class="py-40 px-6 md:px-20 min-h-screen max-w-4xl mx-auto">
            <h1 class="font-headline text-5xl font-light mb-16">Legal & Privacy</h1>
            <div class="space-y-12 text-on-surface-variant font-body leading-relaxed">
                <div>
                    <h2 class="text-xl font-bold text-on-surface mb-4">1. Privacy Policy</h2>
                    <p>At KINETIC, we value your privacy. We collect minimal telemetry data strictly to improve the Neural OS driving algorithms. We do not sell data to third-party brokers.</p>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-on-surface mb-4">2. Terms of Service</h2>
                    <p>Usage of KINETIC vehicles is subject to the local laws of operation. Level 4 autonomy requires driver attention in unregulated zones.</p>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-on-surface mb-4">3. Reservations & Refunds</h2>
                    <p>All deposits placed for the Kinetic Signature Series are fully refundable within 30 days of the transaction. Production slots are non-transferable.</p>
                </div>
            </div>
        </section>
    `
};

for (const [filename, mainContent] of Object.entries(pages)) {
    const finalHtml = header + mainContent + footer;
    fs.writeFileSync(path.join(__dirname, filename), finalHtml, 'utf8');
}

console.log("Missing pages generated successfully.");
