// Create floating hearts
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 300);
}

// Animate counters
function animateCounters() {
    const counters = [
        { id: 'daysCounter', target: 9999 },
        { id: 'smilesCounter', target: 9999 },
        { id: 'kissesCounter', target: 9999 }
    ];
    
    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        let current = 0;
        const increment = counter.target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= counter.target) {
                element.textContent = '∞';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Random Love Message
document.getElementById('loveButton').addEventListener('click', async function() {
    const button = this;
    const messageDisplay = document.getElementById('messageDisplay');
    
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
    
    try {
        const response = await fetch('/api/random-message');
        const data = await response.json();
        
        messageDisplay.style.animation = 'none';
        setTimeout(() => {
            messageDisplay.textContent = data.message;
            messageDisplay.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    } catch (error) {
        messageDisplay.textContent = "You're amazing! 💖";
    }
});

// Love Calculator
document.getElementById('calcButton').addEventListener('click', async function() {
    const button = this;
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const result = document.getElementById('calcResult');
    
    button.disabled = true;
    button.textContent = 'Calculating... 🔮';
    progressContainer.style.display = 'block';
    result.textContent = '';
    
    // Reset progress
    progressBar.style.width = '0%';
    
    // Animate progress
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);
    
    setTimeout(async () => {
        try {
            const response = await fetch('/api/love-percentage');
            const data = await response.json();
            
            result.textContent = `${data.percentage}% - ${data.message}`;
            result.style.animation = 'none';
            setTimeout(() => {
                result.style.animation = 'fadeIn 0.5s ease';
            }, 10);
        } catch (error) {
            result.textContent = "100% - Perfect Match! 💯❤️";
        }
        
        setTimeout(() => {
            progressContainer.style.display = 'none';
            button.disabled = false;
            button.textContent = 'Calculate Our Love! ❤️';
        }, 1000);
    }, 2000);
});

// Load Reasons
async function loadReasons() {
    const reasonsGrid = document.getElementById('reasonsGrid');
    
    try {
        const response = await fetch('/api/reasons');
        const data = await response.json();
        
        data.reasons.forEach((reason, index) => {
            const card = document.createElement('div');
            card.className = 'reason-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="reason-number">${index + 1}</div>
                <div class="reason-text">${reason}</div>
            `;
            
            reasonsGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading reasons:', error);
    }
}

// Yes/No Button Interaction
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');

yesButton.addEventListener('click', function() {
    responseMessage.textContent = "W ane ma8rommmmmmmmmm fekeeeeeeeeeeee! 💖💖💖";
    responseMessage.style.animation = 'none';
    setTimeout(() => {
        responseMessage.style.animation = 'fadeIn 0.5s ease';
    }, 10);
    
    // Create celebration hearts
    createCelebrationHearts();
});

// Make "No" button run away
let noButtonMoved = false;

// Function to move the button
function moveNoButton() {
    const container = document.getElementById('buttonContainer');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    
    // Calculate available space within container
    const maxX = containerRect.width - buttonRect.width - 40; // More padding for bigger movement
    const maxY = containerRect.height - buttonRect.height - 40;
    
    // Generate random position within bounds - make movement more dramatic
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY; // Use full height now
    
    // Set position absolutely within the relative container
    if (!noButtonMoved) {
        noButton.style.position = 'absolute';
        noButtonMoved = true;
    }
    
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.transform = 'translateX(0)'; // Reset any transforms
}

// Desktop - move on hover
noButton.addEventListener('mouseenter', function() {
    moveNoButton();
});

// Mobile - move on touch, prevent default click behavior
noButton.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Prevent the touch from triggering click
    moveNoButton();
}, { passive: false });

// Only show message if button is actually clicked (very hard to do!)
noButton.addEventListener('click', function(e) {
    // Only show message if button hasn't moved (almost impossible)
    if (noButtonMoved) {
        responseMessage.textContent = "lah lah ya 3arsa! 😄";
        responseMessage.style.animation = 'none';
        setTimeout(() => {
            responseMessage.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
});

// Create celebration hearts
function createCelebrationHearts() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = '30px';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'fall 3s ease-in forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Add fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Load gallery images
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // List of image filenames to look for
    // Add your photo filenames here!
    const imageFiles = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg',
        'photo5.jpg',
        'photo6.jpg',
        'photo7.jpg',
        'photo8.jpg'
    ];
    
    let imagesLoaded = 0;
    
    // Try to load each image
    imageFiles.forEach((filename, index) => {
        const img = new Image();
        img.src = `/static/images/${filename}`;
        
        img.onload = function() {
            imagesLoaded++;
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `<img src="/static/images/${filename}" alt="Our Memory ${index + 1}">`;
            galleryGrid.appendChild(galleryItem);
        };
        
        img.onerror = function() {
            // Image doesn't exist, skip it
        };
    });
    
    // If no images loaded after 1 second, show placeholders
    setTimeout(() => {
        if (imagesLoaded === 0) {
            for (let i = 1; i <= 4; i++) {
                const placeholder = document.createElement('div');
                placeholder.className = 'gallery-placeholder';
                placeholder.innerHTML = `
                    <div class="placeholder-icon">📷</div>
                    <p>Add photo${i}.jpg to<br>/static/images/</p>
                `;
                galleryGrid.appendChild(placeholder);
            }
        }
    }, 1000);
}

// Initialize everything when page loads
window.addEventListener('load', function() {
    createFloatingHearts();
    animateCounters();
    loadReasons();
    loadGallery();
});

// Add some confetti effect on scroll
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (Math.abs(currentScroll - lastScroll) > 500) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.fontSize = '25px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '50%';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'fadeOut 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
        
        lastScroll = currentScroll;
    }
});

// Add fade out animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(fadeOutStyle);