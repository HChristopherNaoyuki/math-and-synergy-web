# Math and Language Synergy Website

A professional educational website showcasing integrated language and mathematics programs. Built with modern HTML5, CSS3, and vanilla JavaScript.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Math and Language Synergy is a responsive website for an educational institute 
offering comprehensive programs in English, Japanese, and Mathematics. The platform 
demonstrates how language and mathematical skills can synergize for academic and 
professional success in a globalized world.

The website features a clean, Apple-inspired design with interactive elements, program selection system, and client-side data handling capabilities.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Navigation**: Smooth scrolling and mobile hamburger menu
- **Program Selection**: Tabbed interface for browsing different course categories
- **Contact System**: Form submission with JSON data export
- **Newsletter Subscription**: Email collection with validation
- **Modern Design**: Apple-inspired minimalist aesthetic with subtle animations
- **No Dependencies**: Built with vanilla JavaScript and pure CSS
- **Accessibility**: Semantic HTML and keyboard navigable interface

## File Structure

```
math-and-synergy-web/
├── index.html
├── Documentation/
│   ├── Documents-V1/
│   │   ├── CONCEPT.md
│   │   ├── DISCLAIMER.md
│   │   └── DOCUMENTATION.md
│   └── Documents-V2/
│       └── PROCESS_DOCUMENT.md
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── images/
│   └── logo.png
└── README.md
```

## Installation

This project requires no build process or package installation. To set up locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/HChristopherNaoyuki/math-and-synergy-web.git
   ```

2. Navigate to the project directory:
   ```bash
   cd math-and-synergy-web
   ```

3. Open `index.html` in any modern web browser.

## Usage

### For Users
- Navigate through sections using the top menu or scroll
- Click program category tabs to view different course offerings
- Use the contact form to send inquiries
- Subscribe to the newsletter for updates

### For Developers
- Modify `index.html` for content changes
- Update `styles/main.css` for styling changes
- Edit `scripts/main.js` for functionality changes
- Replace images in the `images/` folder

### Data Handling
The website implements client-side data handling:
- Contact form submissions generate downloadable JSON files
- Newsletter subscriptions create timestamped JSON exports
- All data persists through browser download functionality

## Technical Details

### HTML Structure
- Semantic HTML5 elements
- ARIA attributes for accessibility
- SEO-friendly meta tags
- Logical content hierarchy

### CSS Implementation
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- CSS custom properties
- BEM-inspired naming conventions
- Smooth transitions and animations

### JavaScript Functionality
- Mobile navigation toggle
- Program category switching
- Form validation and submission
- JSON generation and file creation
- Smooth scrolling navigation
- Dynamic copyright year update

### Design Specifications
- **Primary Color**: #007aff (Apple Blue)
- **Font Family**: Inter (Google Fonts)
- **Icon Set**: Font Awesome 6
- **Layout**: Maximum width 1200px with responsive breakpoints

## Browser Support

The website is compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome for Android

All features degrade gracefully in older browsers.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

Please ensure:
- Code follows existing style patterns
- All functionality works without errors
- No new dependencies are introduced
- Documentation is updated if needed

## License

This project is available for educational and demonstration purposes. 

See the DISCLAIMER.md file for detailed usage information.

---
