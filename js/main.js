document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis for Premium Smooth Scrolling
    const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate Lenis with GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Setup GSAP to use Lenis' scroll updates
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // 2. Luxury Reveal Animations
        // Fade in text elements
        const fadeElements = document.querySelectorAll('h1, h2, h3, p');
        fadeElements.forEach((el) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Image Parallax / Reveal
        const imageContainers = document.querySelectorAll('.aspect-square, .aspect-\\[4\\/3\\], .aspect-\\[16\\/9\\], .aspect-\\[16\\/10\\]');
        imageContainers.forEach((container) => {
            const img = container.querySelector('img');
            if (img) {
                // Slower parallax for the image itself
                gsap.fromTo(img,
                    { scale: 1.1, y: '5%' },
                    {
                        scale: 1,
                        y: '-5%',
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
                
                // Opacity reveal for the container
                gsap.fromTo(container,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

        // Staggered Bento grid reveals
        const bentoContainers = document.querySelectorAll('.group.bg-surface-container-lowest');
        if (bentoContainers.length > 0) {
            gsap.fromTo(bentoContainers,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bentoContainers[0].parentElement,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }

    // 3. Form Validation Logic for Reserve pages
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                
                // Visually indicate errors
                const inputs = form.querySelectorAll('input:invalid');
                inputs.forEach(input => {
                    input.classList.add('border-error');
                    input.classList.add('text-error');
                });
            } else {
                // If the form is valid and has a specific action or button click intended
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn && submitBtn.textContent.includes('Complete Reservation')) {
                    // It redirects via action or we handle it visually
                    submitBtn.innerHTML = 'Processing... <span class="material-symbols-outlined text-sm ml-2 animate-spin">refresh</span>';
                    submitBtn.disabled = true;
                    // Let the form submit naturally if it has an action, or we can mock a delay
                    // For the sake of the static demo, allow natural navigation if action is set
                }
            }
        });
        
        // Remove error states on typing
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('border-error', 'text-error');
            });
        });
    });
});
