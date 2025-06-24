// Terminal typing effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.03';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 35);
}

// Terminal-style mobile nav panel
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

// Mobile nav overlay for focus and background lock
function showMobileNavOverlay() {
  if (!document.querySelector('.mobile-nav-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';
    overlay.onclick = () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      navbar.classList.remove('mobile-terminal-panel');
      document.body.classList.remove('mobile-nav-open');
      overlay.remove();
    };
    document.body.insertBefore(overlay, navbar);
    document.body.classList.add('mobile-nav-open');
  }
}
function removeMobileNavOverlay() {
  const overlay = document.querySelector('.mobile-nav-overlay');
  if (overlay) overlay.remove();
  document.body.classList.remove('mobile-nav-open');
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
        navbar.classList.add('mobile-terminal-panel');
        showMobileNavOverlay();
    } else {
        navbar.classList.remove('mobile-terminal-panel');
        removeMobileNavOverlay();
    }
});

// Close mobile menu when clicking on a link
navMenu.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navbar.classList.remove('mobile-terminal-panel');
    removeMobileNavOverlay();
}));

// Easter egg: fake sudo terminal prompt
let sudoBuffer = '';
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    sudoBuffer += e.key;
    if (sudoBuffer.length > 8) sudoBuffer = sudoBuffer.slice(-8);
    if (sudoBuffer.toLowerCase().includes('sudo')) {
        showSudoEasterEgg();
        sudoBuffer = '';
    }
});

function showSudoEasterEgg() {
    if (document.getElementById('sudo-easter-egg')) return;
    const egg = document.createElement('div');
    egg.id = 'sudo-easter-egg';
    egg.innerHTML = `
      <div class="terminal-window sudo-egg" style="position:fixed;left:50%;top:18%;transform:translate(-50%,0);z-index:9999;min-width:320px;max-width:90vw;box-shadow:0 8px 32px #00ff4133,0 1.5px 8px #000a;">
        <div class="terminal-header-small">
          <span class="terminal-btn close"></span>
          <span class="terminal-btn minimize"></span>
          <span class="terminal-btn maximize"></span>
        </div>
        <div class="terminal-content" style="padding:1.2em 1.5em;font-family:'JetBrains Mono',monospace;font-size:1.08em;color:#00ff41;background:#181a1b;">
          <span class="prompt" style="color:#00ff41;">$</span> sudo make-me-root<br>
          <span style="color:#ff4444;">Permission denied: You are not root!</span>
        </div>
      </div>
    `;
    document.body.appendChild(egg);
    setTimeout(() => {
      egg.style.opacity = '0';
      setTimeout(() => egg.remove(), 600);
    }, 2600);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.borderBottom = '1px solid #00ff41';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.borderBottom = '1px solid #333';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Terminal command simulation
function simulateTerminalCommands() {
    const commands = [
        { cmd: 'whoami', output: 'josh_vengco' },
        { cmd: 'cat profile.txt', output: 'Loading profile...' },
        { cmd: 'ls skills/', output: 'React Node.js JavaScript Python SQL' },
        { cmd: './start_portfolio', output: 'Portfolio initialized successfully!' }
    ];

    const commandLines = document.querySelectorAll('.command-line:not(.active)');
    const outputs = document.querySelectorAll('.output');

    commands.forEach((command, index) => {
        if (commandLines[index]) {
            setTimeout(() => {
                const cmdElement = commandLines[index].querySelector('.command');
                if (cmdElement) {
                    typeWriter(cmdElement, command.cmd, 30);
                }
            }, index * 1000);
        }
    });
}

// Skill progress animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Glitch effect for titles
function addGlitchEffect() {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.textShadow = '2px 0 #ff0000, -2px 0 #00ff00';
            setTimeout(() => {
                title.style.textShadow = 'none';
            }, 200);
        });
    });
}

// Particle effect for buttons
function addParticleEffect() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const particles = 10;
            for (let i = 0; i < particles; i++) {
                createParticle(e.target, e.clientX, e.clientY);
            }
        });
    });
}

function createParticle(button, x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#00ff41';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 5 + 2;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    let opacity = 1;
    const animate = () => {
        if (opacity <= 0) {
            particle.remove();
            return;
        }
        opacity -= 0.02;
        particle.style.opacity = opacity;
        particle.style.left = parseFloat(particle.style.left) + vx + 'px';
        particle.style.top = parseFloat(particle.style.top) + vy + 'px';
        requestAnimationFrame(animate);
    };
    animate();
}

// Form submission handling with terminal effect
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Enter subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showTerminalNotification('Error: Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showTerminalNotification('Error: Invalid email format', 'error');
            return;
        }
        
        // Simulate form submission with terminal effect
        showTerminalNotification('Message sent successfully!', 'success');
        this.reset();
    });
}

// Terminal-style notification
function showTerminalNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `terminal-notification ${type}`;
    notification.innerHTML = `
        <div class="terminal-header-small">
            <span class="terminal-btn close"></span>
            <span class="terminal-btn minimize"></span>
            <span class="terminal-btn maximize"></span>
        </div>
        <div class="terminal-content">
            <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">echo "${message}"</span>
            </div>
            <div class="output ${type}">${message}</div>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 400px;
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: 'JetBrains Mono', monospace;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.terminal-btn.close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add glitch effect on scroll
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'glitch 0.3s ease';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize matrix rain
    createMatrixRain();
    
    // Initialize terminal commands
    simulateTerminalCommands();
    
    // Add glitch effects
    addGlitchEffect();
    
    // Add particle effects
    addParticleEffect();
    
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .about-stats .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize typing animation for hero
    const heroTitle = document.querySelector('.profile-info h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Skill progress animation trigger
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add CSS for active navigation link and animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #00ff41 !important;
        font-weight: 600;
    }
    
    .terminal-notification .output.success {
        color: #00ff41;
    }
    
    .terminal-notification .output.error {
        color: #ff4444;
    }
    
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
    
    .project-card:hover {
        animation: glitch 0.3s ease;
    }
    
    .skill-item:hover .skill-progress {
        animation: pulse 1s ease;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .terminal-btn:hover {
        opacity: 0.7;
    }
    
    .command-line.active .cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Matrix Rain Animation (Enhanced)
(function matrixRain() {
  const canvas = document.querySelector('.matrix-rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = document.querySelector('.hero').offsetHeight;
  canvas.width = width;
  canvas.height = height;
  const fontSize = 18;
  const columns = Math.floor(width / fontSize);
  // Use CSS variables for colors
  function getCSSVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  const colors = [
    getCSSVar('--accent-blue') || '#89b4fa',
    getCSSVar('--accent-main') || '#3ddc97',
    getCSSVar('--accent-lavender') || '#cba6f7',
    getCSSVar('--accent-green') || '#a6e3a1',
    getCSSVar('--accent-pink') || '#f5c2e7'
  ];
  const drops = Array(columns).fill(1);
  function draw() {
    ctx.fillStyle = 'rgba(35,41,70,0.15)'; // matches --bg-main
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + 'px JetBrains Mono, monospace';
    for (let i = 0; i < drops.length; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillStyle = color;
      const text = String.fromCharCode(0x30A0 + Math.random() * 96);
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 40);
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = document.querySelector('.hero').offsetHeight;
    canvas.width = width;
    canvas.height = height;
  });
})();

// Section Fade-in/Slide-in on Scroll with Bounce
(function sectionFadeIn() {
  const sections = document.querySelectorAll('section, .terminal-card, .project-card, .cert-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(sec => {
    sec.classList.add('section-fade');
    observer.observe(sec);
  });
})();

// Ripple Effect for Buttons
(function rippleEffect() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.left = (e.offsetX || e.touches?.[0]?.clientX || 0) + 'px';
      ripple.style.top = (e.offsetY || e.touches?.[0]?.clientY || 0) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });
})();

// Glitch/Flicker Effect for Section Titles and Buttons
(function glitchEffect() {
  document.querySelectorAll('.section-title, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('glitch-animate');
      setTimeout(() => el.classList.remove('glitch-animate'), 400);
    });
  });
})();

// Matrix Rain: Add color pulses
(function matrixRainPulse() {
  const canvas = document.querySelector('.matrix-rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = document.querySelector('.hero').offsetHeight;
  canvas.width = width;
  canvas.height = height;
  const fontSize = 18;
  const columns = Math.floor(width / fontSize);
  function getCSSVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  const colors = [
    getCSSVar('--term-green') || '#00ff41',
    '#00ff41', '#00e63a', '#b0ffb0'
  ];
  const drops = Array(columns).fill(1);
  function draw() {
    ctx.fillStyle = 'rgba(16,16,16,0.15)';
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + 'px JetBrains Mono, monospace';
    for (let i = 0; i < drops.length; i++) {
      let color = colors[Math.floor(Math.random() * colors.length)];
      // Occasionally pulse a column
      if (Math.random() > 0.985) color = '#b0ffb0';
      ctx.fillStyle = color;
      const text = String.fromCharCode(0x30A0 + Math.random() * 96);
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 40);
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = document.querySelector('.hero').offsetHeight;
    canvas.width = width;
    canvas.height = height;
  });
})();

// Blinking Cursor with Color Cycling
(function blinkingCursorColor() {
  const cursors = document.querySelectorAll('.cursor, .blinking-cursor');
  if (!cursors.length) return;
  let colors = ['#00ff41', '#b0ffb0', '#00e63a'];
  let idx = 0;
  setInterval(() => {
    cursors.forEach(cur => {
      cur.style.color = colors[idx % colors.length];
    });
    idx++;
  }, 500);
})();

// Animate Skill Bars
(function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  bars.forEach(bar => {
    const width = bar.getAttribute('data-width') || '80%';
    bar.style.setProperty('--bar-width', width);
  });
})();

// Animated Typing/Bliking Cursor in About Code Block
(function typingEffect() {
  const code = document.querySelector('.about-text .code-block pre');
  if (!code) return;
  const text = code.textContent;
  code.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      code.textContent += text[i];
      i++;
      setTimeout(type, 18 + Math.random() * 40);
    } else {
      code.classList.add('blinking-cursor');
    }
  }
  type();
})();

// Optional: Particle/Circuit Board Background (for .particle-bg)
// (Add your SVG/canvas code here if you want more background effects)

// Floating Navbar on Scroll
(function floatingNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  let lastScrollY = window.scrollY;
  function onScroll() {
    if (window.scrollY > 24) {
      navbar.classList.add('navbar-floating');
    } else {
      navbar.classList.remove('navbar-floating');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Discord copy-to-clipboard for contact section
const copyDiscordBtn = document.getElementById('copy-discord');
if (copyDiscordBtn) {
  copyDiscordBtn.addEventListener('click', function() {
    navigator.clipboard.writeText('_j4shin');
    const copied = document.getElementById('discord-copied');
    if (copied) {
      copied.style.display = 'inline';
      setTimeout(() => { copied.style.display = 'none'; }, 1500);
    }
  });
}

// Certifications auto-scroll and arrows (mobile only)
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.certifications-grid');
  const left = document.querySelector('.cert-arrow-left');
  const right = document.querySelector('.cert-arrow-right');
  let autoScrollInterval, isUserScrolling = false, autoScrollPaused = false, holdTimeout = null;

  function isMobile() {
    return window.innerWidth <= 700;
  }

  function scrollByCard(dir = 1) {
    if (!grid) return;
    const card = grid.querySelector('.cert-card');
    if (!card) return;
    const scrollAmount = card.offsetWidth + 16; // gap
    grid.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
  }

  function startAutoScroll() {
    if (!isMobile() || !grid) return;
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      if (!autoScrollPaused) {
        grid.scrollBy({ left: 1, behavior: 'auto' });
        // Loop back to start if at end
        if (grid.scrollLeft + grid.offsetWidth >= grid.scrollWidth - 2) {
          grid.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 18);
  }
  function stopAutoScroll() {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
  function pauseAutoScroll(hold = false) {
    autoScrollPaused = true;
    if (holdTimeout) clearTimeout(holdTimeout);
    if (!hold) {
      holdTimeout = setTimeout(() => { autoScrollPaused = false; }, 2200);
    }
  }
  function resumeAutoScroll() {
    autoScrollPaused = false;
  }

  if (grid && left && right && isMobile()) {
    // Pause on tap, hold, drag, wheel, or arrow click
    const pauseEvents = ['touchstart', 'mousedown', 'pointerdown'];
    const resumeEvents = ['touchend', 'mouseup', 'pointerup', 'mouseleave'];
    pauseEvents.forEach(evt => {
      grid.addEventListener(evt, () => pauseAutoScroll(true));
      left.addEventListener(evt, () => pauseAutoScroll(true));
      right.addEventListener(evt, () => pauseAutoScroll(true));
    });
    resumeEvents.forEach(evt => {
      grid.addEventListener(evt, resumeAutoScroll);
      left.addEventListener(evt, resumeAutoScroll);
      right.addEventListener(evt, resumeAutoScroll);
    });
    grid.addEventListener('wheel', () => pauseAutoScroll());
    left.addEventListener('click', () => { scrollByCard(-1); pauseAutoScroll(); });
    right.addEventListener('click', () => { scrollByCard(1); pauseAutoScroll(); });
    grid.addEventListener('touchstart', () => { isUserScrolling = true; });
    grid.addEventListener('touchend', () => { isUserScrolling = false; });
    startAutoScroll();
    window.addEventListener('resize', () => {
      if (isMobile()) startAutoScroll();
      else stopAutoScroll();
    });
  }
});

// Email and phone copy-to-clipboard for contact section
const copyEmailBtn = document.getElementById('copy-email');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', function() {
    navigator.clipboard.writeText('jacercinense@gmail.com');
    const copied = document.getElementById('email-copied');
    if (copied) {
      copied.style.display = 'inline';
      setTimeout(() => { copied.style.display = 'none'; }, 1500);
    }
    // Hide others
    const phoneCopied = document.getElementById('phone-copied');
    if (phoneCopied) phoneCopied.style.display = 'none';
  });
}
const copyPhoneBtn = document.getElementById('copy-phone');
if (copyPhoneBtn) {
  copyPhoneBtn.addEventListener('click', function() {
    navigator.clipboard.writeText('+639269003279');
    const copied = document.getElementById('phone-copied');
    if (copied) {
      copied.style.display = 'inline';
      setTimeout(() => { copied.style.display = 'none'; }, 1500);
    }
    // Hide others
    const emailCopied = document.getElementById('email-copied');
    if (emailCopied) emailCopied.style.display = 'none';
  });
} 