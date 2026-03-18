# Contributing to FreshFlower

Thank you for your interest in contributing to FreshFlower! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## How to Contribute

### 1. Report Bugs
- Check if the bug already exists
- Provide detailed description
- Include steps to reproduce
- Add screenshots if applicable

### 2. Suggest Features
- Describe the feature clearly
- Explain why it would be useful
- Provide examples if possible
- Consider the impact on existing code

### 3. Submit Code Changes

#### Setup Development Environment
```bash
# Clone the repository
git clone https://github.com/yourusername/freshflower.git
cd freshflower

# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes
# Test thoroughly
# Commit with clear messages
git add .
git commit -m "Add: description of changes"

# Push to your fork
git push origin feature/your-feature-name

# Create a Pull Request
```

#### Code Style Guidelines

**HTML**
- Use semantic HTML5 elements
- Proper indentation (2 spaces)
- Descriptive class and id names
- Add comments for complex sections

**CSS**
- Follow BEM naming convention
- Group related properties
- Use CSS variables for colors
- Add comments for complex styles
- Mobile-first approach

**JavaScript**
- Use ES6+ syntax
- Clear variable names
- Add JSDoc comments
- Avoid global variables
- Use const/let instead of var

#### Commit Message Format
```
Type: Brief description

Detailed explanation if needed

- Bullet point 1
- Bullet point 2

Fixes #issue-number
```

Types: Add, Fix, Update, Remove, Refactor, Docs, Style, Test

### 4. Documentation
- Update README.md for new features
- Add code comments
- Create examples
- Update CHANGELOG.md

## Pull Request Process

1. **Before Submitting**
   - Test all changes thoroughly
   - Check for console errors
   - Verify responsive design
   - Update documentation

2. **PR Description**
   - Clear title
   - Detailed description
   - Screenshots/GIFs if applicable
   - Related issues

3. **Review Process**
   - Address feedback promptly
   - Keep commits clean
   - Rebase if needed
   - Wait for approval

4. **Merge**
   - Squash commits if needed
   - Delete branch after merge
   - Update CHANGELOG.md

## Testing

### Manual Testing
- Test on multiple browsers
- Test on mobile devices
- Test all user flows
- Check for console errors

### Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design verified
- [ ] All features tested

## Development Tips

### Local Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

### Browser DevTools
- Use Chrome DevTools for debugging
- Check Network tab for performance
- Use Console for errors
- Test responsive design

### Performance
- Minimize images
- Lazy load images
- Minify CSS/JS
- Use browser caching

## Questions?

- Check existing issues
- Read documentation
- Ask in discussions
- Email: support@freshflower.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to FreshFlower! 🌸
