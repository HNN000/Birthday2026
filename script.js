// ===== BIRTHDAY WEBSITE MAIN SCRIPT =====

// Update days counter
function updateDaysCounter() {
    const daysElement = document.getElementById('daysCounter');
    const daysBetween = calculateDaysBetween(CONFIG.meetingDate, new Date().toISOString().split('T')[0]);
    daysElement.textContent = daysBetween;
    
    // Animate the counter
    daysElement.style.animation = 'none';
    setTimeout(() => {
        daysElement.style.animation = 'popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }, 10);
}

// Generate gallery from config
function generateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = ''; // Clear existing items
    
    CONFIG.memories.forEach((memory, index) => {
        const daysSinceMoment = calculateDaysBetween(memory.date, new Date().toISOString().split('T')[0]);
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <div class="gallery-item-image">
                ${isImageUrl(memory.image) ? `<img src="${memory.image}" alt="${memory.title}">` : memory.image}
            </div>
            <div class="gallery-item-info">
                <div class="gallery-item-title">${memory.title}</div>
                <div class="gallery-item-days">
                    📅 <span class="days-badge">${daysSinceMoment} days</span> ago
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Helper function to check if string is a URL
function isImageUrl(str) {
    try {
        new URL(str);
        return true;
    } catch (e) {
        return false;
    }
}

// Add particle effects on mouse move
function createParticles(x, y) {
    const particles = ['✨', '🌊', '⭐', '🌌'];
    const particle = document.createElement('div');
    const randomParticle = particles[Math.floor(Math.random() * particles.length)];
    
    particle.textContent = randomParticle;
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 1.5rem;
        pointer-events: none;
        animation: particleFloat 1s ease-out forwards;
        z-index: 999;
    `;
    
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

// Add animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 100 - 50}px, -100px) scale(0);
        }
    }
`;
document.head.appendChild(style);

// Optional: Add particle effects on clicks
document.addEventListener('click', (e) => {
    if (Math.random() > 0.3) {
        createParticles(e.clientX, e.clientY);
    }
});

// Initialize
window.addEventListener('load', () => {
    updateDaysCounter();
    generateGallery();
});

// Update counter every day
setInterval(updateDaysCounter, 24 * 60 * 60 * 1000);
