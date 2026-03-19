// Navbar toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close navbar when link clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// User dropdown functionality
const userBtnDropdown = document.getElementById('user-btn');
const userDropdown = document.getElementById('user-dropdown');

// Check login status on page load
let currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
let isLoggedIn = currentUser && currentUser.email;

if (userBtnDropdown && userDropdown) {
    // Initialize dropdown state
    updateDropdownView();
    
    userBtnDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        userDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userBtnDropdown.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove('show');
        }
    });

    // Close dropdown when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            userDropdown.classList.remove('show');
        }
    });
}

function updateDropdownView() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    
    // Update current user and login status
    currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    isLoggedIn = currentUser && currentUser.email;
    
    if (isLoggedIn && currentUser.name) {
        // Show user menu
        authButtons?.classList.add('hidden');
        userMenu?.classList.remove('hidden');
        
        // Update user info
        const userName = document.getElementById('user-name');
        const userEmail = document.getElementById('user-email');
        const userAvatar = document.querySelector('.user-avatar i');
        
        if (userName) userName.textContent = currentUser.name;
        if (userEmail) userEmail.textContent = currentUser.email;
        
        // Show Google profile picture if available
        if (currentUser.picture && userAvatar) {
            userAvatar.outerHTML = `<img src="${currentUser.picture}" alt="Profile" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;">`;
        }
    } else {
        // Show auth buttons
        authButtons?.classList.remove('hidden');
        userMenu?.classList.add('hidden');
    }
}

function handleLogout() {
    isLoggedIn = false;
    currentUser = {};
    localStorage.removeItem('currentUser');
    
    showToast('Logged out successfully', 'success');
    updateDropdownView();
    userDropdown.classList.remove('show');
}

// Modal functionality
const wishlistBtn = document.getElementById('wishlist-btn');
const cartBtn = document.getElementById('cart-btn');

const wishlistModal = document.getElementById('wishlist-modal');
const cartModal = document.getElementById('cart-modal');

const closeWishlist = document.getElementById('close-wishlist');
const closeCart = document.getElementById('close-cart');

// Open modals
wishlistBtn.addEventListener('click', (e) => {
    e.preventDefault();
    wishlistModal.classList.add('show');
});

cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.add('show');
});

// Close modals
closeWishlist.addEventListener('click', () => {
    wishlistModal.classList.remove('show');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('show');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === wishlistModal) wishlistModal.classList.remove('show');
    if (e.target === cartModal) cartModal.classList.remove('show');
});

// Login/Signup buttons - removed old modal buttons

// Local storage
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to cart
document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const box = btn.closest('.box');
        const name = box.querySelector('h3').textContent;
        const price = box.querySelector('.price').textContent;
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        
        alert(name + ' added to cart!');
        
        // Redirect to cart page
        setTimeout(() => {
            window.location.href = 'cart.html';
        }, 500);
    });
});

// Add to wishlist (heart icons)
document.querySelectorAll('.products .box .image .icons .fa-heart').forEach(heart => {
    heart.addEventListener('click', (e) => {
        e.preventDefault();
        const box = heart.closest('.box');
        const name = box.querySelector('h3').textContent;
        const price = box.querySelector('.price').textContent;
        
        const exists = wishlist.find(item => item.name === name);
        
        if (exists) {
            wishlist = wishlist.filter(item => item.name !== name);
            heart.style.color = '#070707';
            alert(name + ' removed from wishlist!');
        } else {
            wishlist.push({ name, price });
            heart.style.color = '#ff3399';
            alert(name + ' added to wishlist!');
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistDisplay();
    });
});

// Update displays
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in cart</p>';
    } else {
        cartItems.innerHTML = '<ul style="list-style: none; padding: 0;">';
        cart.forEach((item, index) => {
            cartItems.innerHTML += `<li style="padding: 0.5rem 0; border-bottom: 1px solid #eee; font-size: 1.5rem; color: #333;">
                ${item.name} - ${item.price}
                <button onclick="removeFromCart(${index})" style="float: right; background: #ff3399; color: white; border: none; padding: 0.3rem 0.8rem; border-radius: 0.3rem; cursor: pointer;">Remove</button>
            </li>`;
        });
        cartItems.innerHTML += '</ul>';
    }
}

function updateWishlistDisplay() {
    const wishlistItems = document.getElementById('wishlist-items');
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p>No items in wishlist</p>';
    } else {
        wishlistItems.innerHTML = '<ul style="list-style: none; padding: 0;">';
        wishlist.forEach((item, index) => {
            wishlistItems.innerHTML += `<li style="padding: 0.5rem 0; border-bottom: 1px solid #eee; font-size: 1.5rem; color: #333;">
                ${item.name} - ${item.price}
                <button onclick="removeFromWishlist(${index})" style="float: right; background: #ff3399; color: white; border: none; padding: 0.3rem 0.8rem; border-radius: 0.3rem; cursor: pointer;">Remove</button>
            </li>`;
        });
        wishlistItems.innerHTML += '</ul>';
    }
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
};

window.removeFromWishlist = function(index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistDisplay();
};

// Initialize displays
updateCartDisplay();
updateWishlistDisplay();

// Stat cards hover effect
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});


// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Trigger animation when section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('stats-counter-section')) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.stats-counter-section');
if (statsSection) {
    observer.observe(statsSection);
}


// Form Validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Contact Form Validation
const contactForm = document.querySelector('.contact .row form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[placeholder="name"]').value.trim();
        const email = this.querySelector('input[placeholder="email"]').value.trim();
        const number = this.querySelector('input[placeholder="number"]').value.trim();
        const message = this.querySelector('textarea').value.trim();
        
        if (!name || !email || !number || !message) {
            alert('Please fill all fields');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter valid email');
            return;
        }
        
        if (number.length < 10) {
            alert('Please enter valid phone number');
            return;
        }
        
        alert('Thank you for contacting us! We will get back to you soon.');
        this.reset();
    });
}

// Track page views
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': window.location.href
        });
    }
}

// Track add to cart
function trackAddToCart(productName, price) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            'items': [{
                'item_name': productName,
                'price': price
            }]
        });
    }
}

// Track wishlist
function trackAddToWishlist(productName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_wishlist', {
            'items': [{
                'item_name': productName
            }]
        });
    }
}

// Track on page load
trackPageView();

// Check login status on page load and update dropdown
document.addEventListener('DOMContentLoaded', function() {
    updateDropdownView();
    
    // Check if user just logged in (from URL parameter or recent login)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('login') === 'success' && isLoggedIn) {
        showToast(`Welcome back, ${currentUser.name}!`, 'success');
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});

// Toast notification function
function showToast(message, type = 'info') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // Define colors for different types
    const colors = {
        success: 'linear-gradient(135deg, #11998e, #38ef7d)',
        error: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
        warning: 'linear-gradient(135deg, #f093fb, #f5576c)',
        info: 'linear-gradient(135deg, var(--pink), var(--hotpink))'
    };

    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i class="${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 14px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after duration based on type
    const duration = type === 'error' ? 5000 : 3000;
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 400);
    }, duration);
}
