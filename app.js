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

// Modal functionality
const wishlistBtn = document.getElementById('wishlist-btn');
const cartBtn = document.getElementById('cart-btn');
const userBtn = document.getElementById('user-btn');

const wishlistModal = document.getElementById('wishlist-modal');
const cartModal = document.getElementById('cart-modal');
const userModal = document.getElementById('user-modal');

const closeWishlist = document.getElementById('close-wishlist');
const closeCart = document.getElementById('close-cart');
const closeUser = document.getElementById('close-user');

// Open modals
wishlistBtn.addEventListener('click', (e) => {
    e.preventDefault();
    wishlistModal.classList.add('show');
});

cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.add('show');
});

userBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userModal.classList.add('show');
});

// Close modals
closeWishlist.addEventListener('click', () => {
    wishlistModal.classList.remove('show');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('show');
});

closeUser.addEventListener('click', () => {
    userModal.classList.remove('show');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === wishlistModal) wishlistModal.classList.remove('show');
    if (e.target === cartModal) cartModal.classList.remove('show');
    if (e.target === userModal) userModal.classList.remove('show');
});

// Login/Signup buttons
document.querySelector('.login-btn').addEventListener('click', () => {
    window.location.href = 'test-login.html';
});

document.querySelector('.signup-btn').addEventListener('click', () => {
    window.location.href = 'test-login.html';
});

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
