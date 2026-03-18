# FreshFlower - Online Flower Shop

A modern, responsive e-commerce website for selling fresh flowers online. Built with HTML, CSS, and JavaScript.

## Features

### 🌸 Core Features
- **Product Catalog** - Browse beautiful flower arrangements
- **Shopping Cart** - Add/remove items with real-time updates
- **Wishlist** - Save favorite flowers for later
- **User Authentication** - Email-based login and signup
- **Responsive Design** - Works on all devices (mobile, tablet, desktop)

### 🎨 UI/UX Features
- Professional gradient designs
- Smooth animations and transitions
- Interactive hover effects
- Beautiful hero section with floating animations
- Professional cart page with order summary
- Featured product highlighting

### 📱 Sections
1. **Hero Section** - Eye-catching banner with CTA buttons
2. **Stats Section** - Key metrics about the business
3. **About Section** - Company information with video
4. **Services Section** - Service offerings
5. **Why Choose Us** - Unique selling points
6. **Gallery** - Project showcase
7. **Pricing Plans** - Different subscription options
8. **Blog Section** - Latest articles
9. **Products** - Featured and regular products
10. **Reviews** - Customer testimonials
11. **Contact** - Contact form
12. **Footer** - Links and information

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Tailwind CSS
- **Storage**: LocalStorage for cart and wishlist
- **Icons**: Font Awesome 6.5.2
- **Responsive**: Mobile-first approach

## Project Structure

```
FreshFlower/
├── ECO.HTML              # Main website
├── cart.html             # Shopping cart page
├── test-login.html       # Login/Signup page
├── index.html            # Alternative home page
├── ECO.CSS               # Main stylesheet
├── app.js                # JavaScript functionality
├── README.md             # This file
└── img3/                 # Image assets
    ├── fl*.jpeg          # Flower images
    ├── fg*.jpg           # Background images
    ├── ic*.png           # Icon images
    └── g*.jpeg           # Gallery images
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for local testing

### Installation

1. Clone or download the project
```bash
git clone https://github.com/yourusername/freshflower.git
cd freshflower
```

2. Open in browser
```bash
# Simply open ECO.HTML in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## Usage

### For Users
1. **Browse Products** - Scroll through the product catalog
2. **Add to Cart** - Click "add to cart" button on any product
3. **View Cart** - Click cart icon to see your items
4. **Wishlist** - Click heart icon to save favorites
5. **Login** - Click user icon to login/signup
6. **Checkout** - Proceed to checkout from cart page

### For Developers

#### Adding New Products
Edit the products section in `ECO.HTML`:
```html
<div class="box">
    <span class="discount">-20%</span>
    <div class="image">
        <img src="img3/your-image.jpg" alt="Product Name">
        <div class="icons">
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart cart-btn">add to cart</a>
            <a href="#" class="fas fa-share"></a>
        </div>
    </div>
    <div class="content">
        <h3>product name</h3>
        <div class="price">$XX.XX <span>$YY.YY</span></div>
    </div>
</div>
```

#### Customizing Colors
Edit CSS variables in `ECO.CSS`:
```css
:root {
    --pink: #ff3399;
    --hotpink: #d3090e;
}
```

#### Adding New Sections
1. Add HTML in `ECO.HTML`
2. Add CSS styling in `ECO.CSS`
3. Add JavaScript functionality in `app.js`

## Features Explained

### Shopping Cart
- Items stored in localStorage
- Persists across browser sessions
- Real-time price calculation
- Remove items functionality

### Wishlist
- Heart icon to add/remove items
- Visual feedback (color change)
- Stored in localStorage
- View all wishlist items in modal

### Authentication
- Email-based login/signup
- Password validation (min 6 characters)
- Demo account: ruhiakterakhi@gmail.com / password123
- User data stored in localStorage

### Responsive Design
- Mobile: Single column layout
- Tablet: 2-column layout
- Desktop: 3+ column layout
- Hamburger menu on mobile

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Image Optimization**
   - Use compressed images
   - Use WebP format where possible
   - Lazy load images

2. **Code Optimization**
   - Minify CSS and JavaScript
   - Remove unused code
   - Use CSS Grid/Flexbox efficiently

3. **Caching**
   - Enable browser caching
   - Use service workers for offline support

## Security Considerations

1. **Input Validation**
   - Validate all form inputs
   - Sanitize user data
   - Use HTTPS in production

2. **Data Protection**
   - Don't store sensitive data in localStorage
   - Use secure authentication methods
   - Implement CSRF protection

3. **XSS Prevention**
   - Escape user input
   - Use Content Security Policy
   - Validate all external data

## Future Enhancements

- [ ] Firebase integration for real-time database
- [ ] Payment gateway (Stripe/PayPal)
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Order tracking
- [ ] User profiles
- [ ] Product reviews and ratings
- [ ] Search functionality
- [ ] Filters and sorting
- [ ] Inventory management

## Troubleshooting

### Images not loading
- Check image paths in HTML
- Ensure img3 folder exists
- Verify image file names

### Cart not working
- Check browser console for errors
- Clear localStorage and try again
- Ensure JavaScript is enabled

### Login issues
- Check email format
- Verify password (min 6 characters)
- Clear browser cache

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

- Email: support@freshflower.com
- Phone: +123-456-7890
- Website: www.freshflower.com

## Credits

- Icons: Font Awesome
- Images: Unsplash, Pexels
- Design Inspiration: Modern e-commerce websites

---

**Last Updated**: March 2024
**Version**: 1.0.0
**Status**: Active Development
