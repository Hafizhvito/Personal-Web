# Vito's Portfolio Website

A modern, responsive portfolio website showcasing my journey as an Informatics Engineering student passionate about web development and design.


## 🌟 Features

- **Modern Design**: Clean, minimalist interface with glassmorphism effects
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)
- **Interactive Animations**: Smooth CSS animations and particle effects
- **Dynamic Content**: Rotating text animations and skill progress bars
- **Project Showcase**: Dynamic project grid with hover effects
- **Contact Form**: Functional contact form with validation
- **Particle Background**: Interactive particles.js integration
- **Smooth Scrolling**: Enhanced navigation experience

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Particles.js**: Interactive background particles

### Design Features
- **CSS Variables**: Consistent theming and easy customization
- **Glassmorphism**: Modern glass-like UI elements
- **Custom Animations**: Keyframe animations and transitions
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Modern Typography**: Google Fonts (Outfit & Space Grotesk)

### External Libraries
- **Font Awesome 6.4.0**: Icon library
- **Particles.js 2.0.0**: Interactive background effects
- **Google Fonts**: Typography enhancement

## 📁 Project Structure

```
Main Web/
├── index.html          # Main HTML file
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md          # Project documentation
└── assets/
    └── images/        # Image assets
        ├── _photo.png
        ├── signature.png
        └── [project images]
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for external fonts and particles.js CDN)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hafizhvito/Personal-Web.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd "Main Web"
   ```

3. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

4. **View the website**
   - Open your browser and go to `http://localhost:8000` (if using local server)
   - Or directly open `index.html` file

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px - 768px)
- **Tablets** (768px - 1024px)
- **Desktop** (1024px+)

## 🎨 Customization

### Color Scheme
The website uses CSS custom properties for easy theming. Main colors are defined in `:root`:

```css
:root {
  --primary: #6c5ce7;
  --secondary: #fd79a8;
  --accent: #00cec9;
  --dark: #2d3436;
  --light: #f5f6fa;
}
```

### Adding Projects
To add new projects, update the `projectsData` array in `script.js`:

```javascript
const projectsData = [
  {
    title: "Your Project Name",
    category: "Project Category",
    tags: ["Technology", "Used"],
    image: "assets/images/project-image.jpg",
    description: "Project description",
    status: "Completed", // or "In Progress"
    github: "https://github.com/yourusername/project",
    highlights: ["Feature 1", "Feature 2"]
  }
];
```

## 📧 Contact Information

- **Email**: [pixelsreet@gmail.com](mailto:pixelsreet@gmail.com)
- **Phone**: +62 812 3456 7890
- **Location**: Jakarta, Indonesia

## 🌐 Social Links

- **Instagram**: [@hafizhvito_](https://www.instagram.com/hafizhvito_/)
- **Discord**: [hafizhvito](http://discordapp.com/users/617594776262541314)
- **LinkedIn**: [Hafizh Vito Pratomo](https://www.linkedin.com/in/hafizh-vito-pratomo-abb75a2a6/)
- **GitHub**: [@Hafizhvito](https://github.com/Hafizhvito)

## 🎯 Key Sections

1. **Hero Section**: Introduction with animated text and profile image
2. **About**: Personal background and skills visualization
3. **Learning Process**: My approach to new projects and technologies
4. **Projects**: Portfolio of completed and ongoing projects
5. **Contact**: Contact form and social media links

## 📈 Performance Features

- **Optimized Images**: Compressed assets for faster loading
- **CSS Grid Layout**: Efficient responsive layouts
- **Minimal Dependencies**: Only essential external libraries
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Lazy Loading**: Efficient resource loading

## 🔄 Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add more interactive animations
- [ ] Integrate with headless CMS for dynamic content
- [ ] Add internationalization (i18n)
- [ ] Implement PWA features

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are always welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 💡 Inspiration & Credits

- **Design Inspiration**: Modern portfolio websites and glassmorphism trends
- **Particles.js**: Vincent Garreau for the particle system
- **Icons**: Font Awesome team
- **Fonts**: Google Fonts (Outfit & Space Grotesk families)

## 📞 Support

If you have any questions or need help with the project:

- Open an issue on GitHub
- Contact me via email: [pixelsreet@gmail.com](mailto:pixelsreet@gmail.com)
- Connect with me on [LinkedIn](https://www.linkedin.com/in/hafizh-vito-pratomo-abb75a2a6/)

---

**Built with ❤️ by [Vito](https://github.com/Hafizhvito)**

*Learning to build amazing digital experiences, one project at a time.*
