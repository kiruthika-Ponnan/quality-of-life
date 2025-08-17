# Quality of Life Website

A modern, responsive health and wellness platform built with React, TypeScript, and Tailwind CSS. This website provides AI-powered health mentorship, medical appointment booking, and comprehensive wellness education.

## 🚀 Live Demo

**Your website is live at:** `https://kiruthika-Ponnan.github.io/quality-of-life`

## ✨ Features

- **AI Health Mentor**: Interactive chat interface for personalized health guidance
- **Medical Appointment Booking**: Easy scheduling with healthcare professionals
- **Educational Lessons**: Comprehensive health and wellness content
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Smooth Animations**: Framer Motion powered interactions
- **TypeScript**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## 📋 Complete Development Process

### Phase 1: Project Setup

1. **Created React App with TypeScript**
   ```bash
   npx create-react-app temp-quality-of-life --template typescript
   ```

2. **Installed Dependencies**
   ```bash
   npm install tailwindcss @tailwindcss/forms @tailwindcss/typography autoprefixer postcss react-router-dom framer-motion lucide-react
   ```

3. **Initialized Tailwind CSS**
   - Created `tailwind.config.js` with custom color scheme
   - Created `postcss.config.js` for PostCSS processing
   - Updated `src/index.css` with Tailwind directives

### Phase 2: Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with mobile menu
│   └── Footer.tsx      # Site footer with contact info
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero, features, stats
│   ├── AIMentor.tsx    # AI mentor chat interface
│   ├── BookMedic.tsx   # Medical appointment booking
│   └── Lesson.tsx      # Educational content library
├── App.tsx             # Main app with routing
└── index.css           # Global styles with Tailwind
```

### Phase 3: Component Development

1. **Header Component** (`src/components/Header.tsx`)
   - Responsive navigation with mobile menu
   - Active page highlighting
   - Logo and branding
   - User authentication placeholder

2. **Footer Component** (`src/components/Footer.tsx`)
   - Company information
   - Quick navigation links
   - Contact information
   - Social media links

3. **Home Page** (`src/pages/Home.tsx`)
   - Hero section with call-to-action
   - Features showcase
   - Statistics display
   - Testimonials section
   - Final CTA section

4. **AI Mentor Page** (`src/pages/AIMentor.tsx`)
   - Interactive chat interface
   - Health topic suggestions
   - Feature highlights
   - Responsive design

5. **Book Medic Page** (`src/pages/BookMedic.tsx`)
   - Doctor search and filtering
   - Appointment booking form
   - Time slot selection
   - Doctor profiles with ratings

6. **Lesson Page** (`src/pages/Lesson.tsx`)
   - Lesson grid with categories
   - Search and filtering
   - Lesson cards with thumbnails
   - Difficulty indicators

### Phase 4: Configuration & Styling

1. **Tailwind Configuration** (`tailwind.config.js`)
   - Custom color palette (primary, secondary)
   - Custom animations and keyframes
   - Typography and form plugins
   - Responsive breakpoints

2. **PostCSS Configuration** (`postcss.config.js`)
   - Tailwind CSS processing
   - Autoprefixer for browser compatibility

3. **Package Configuration** (`package.json`)
   - All necessary dependencies
   - Build and deploy scripts
   - GitHub Pages homepage configuration

### Phase 5: Deployment Setup

1. **GitHub Pages Configuration**
   - Added `homepage` field to package.json
   - Installed `gh-pages` package
   - Configured deploy scripts

2. **Build Process**
   - Production build optimization
   - Asset compression and minification
   - Static file generation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- GitHub account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kiruthika-Ponnan/quality-of-life.git
   cd quality-of-life
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open [http://localhost:3000](http://localhost:3000) to view in browser**

### Building for Production

```bash
npm run build
```

## 🌐 Deployment

### Automatic Deployment

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update: [describe changes]"
   git push origin main
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### GitHub Pages Setup

1. Go to your repository: `https://github.com/kiruthika-Ponnan/quality-of-life`
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

## 🔧 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#0ea5e9',
        600: '#0284c7',
        // ... more shades
      }
    }
  }
}
```

### Content

- **Lessons**: Update content in `src/pages/Lesson.tsx`
- **Doctors**: Modify information in `src/pages/BookMedic.tsx`
- **AI Responses**: Customize in `src/pages/AIMentor.tsx`
- **Home Page**: Edit content in `src/pages/Home.tsx`

### Styling

- **Global Styles**: Modify `src/index.css`
- **Component Styles**: Update Tailwind classes in component files
- **Animations**: Customize Framer Motion animations

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Optimized for small screens
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-featured experience
- **Breakpoints**: Tailwind's responsive utilities

## 🎨 Design System

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large text for hierarchy
- **Body**: Readable, medium weight for content

### Spacing
- **Consistent**: 4px base unit system
- **Responsive**: Scales with screen size
- **Components**: Proper padding and margins

### Colors
- **Primary**: Blue tones for main actions
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Yellow for premium features

## 🚀 Performance Features

- **Lazy Loading**: Images and components
- **Optimized Builds**: Minified CSS/JS
- **Responsive Images**: Proper sizing and formats
- **Smooth Animations**: 60fps interactions

## 🔍 SEO & Accessibility

- **Semantic HTML**: Proper heading structure
- **Alt Text**: Descriptive image alt attributes
- **ARIA Labels**: Screen reader support
- **Meta Tags**: Proper page titles and descriptions

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Deployment Issues
- Ensure repository is public (or GitHub Pro for private)
- Check `gh-pages` package is installed
- Verify homepage URL in package.json
- Wait 5-10 minutes for GitHub Pages to build

### Development Issues
- Check Node.js version (v16+ required)
- Clear browser cache
- Check console for JavaScript errors

## 📚 Learning Resources

- [React Documentation](https://reactjs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [GitHub Pages Documentation](https://pages.github.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Email**: support@qualityoflife.com
- **Issues**: Create an issue in this repository
- **Documentation**: Check the DEPLOYMENT.md file

## 🎯 Future Enhancements

- **User Authentication**: Login/signup system
- **Database Integration**: Real data storage
- **Payment Processing**: Premium content access
- **Real-time Chat**: Live AI mentor conversations
- **Mobile App**: React Native companion app

---

## 🎉 Success Story

This website was built from scratch using modern web technologies and deployed to GitHub Pages in a single development session. It demonstrates:

- **Rapid Development**: Complete website in one session
- **Modern Stack**: Latest React and TypeScript features
- **Professional Quality**: Production-ready code and design
- **Easy Deployment**: Simple GitHub Pages setup

**Built with ❤️ for better health and wellness**

---

*Last Updated: December 2024*
*Version: 1.0.0*
*Status: Live & Deployed*
