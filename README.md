# Quality of Life Website

A modern, responsive health and wellness platform built with React, TypeScript, and Tailwind CSS. This website provides AI-powered health mentorship, medical appointment booking, and comprehensive wellness education.

## Features

- **AI Health Mentor**: Interactive chat interface for personalized health guidance
- **Medical Appointment Booking**: Easy scheduling with healthcare professionals
- **Educational Lessons**: Comprehensive health and wellness content
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Smooth Animations**: Framer Motion powered interactions
- **TypeScript**: Full type safety and better development experience

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kiruthika/quality-of-life.git
cd quality-of-life
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── AIMentor.tsx    # AI mentor interface
│   ├── BookMedic.tsx   # Medical booking
│   └── Lesson.tsx      # Educational content
├── App.tsx             # Main app component
└── index.css           # Global styles with Tailwind
```

## Deployment

This project is configured for GitHub Pages deployment.

### Automatic Deployment

1. Push your changes to the main branch
2. Run the deploy command:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The website will be available at: `https://kiruthika.github.io/quality-of-life`

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

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

- Update lesson content in `src/pages/Lesson.tsx`
- Modify doctor information in `src/pages/BookMedic.tsx`
- Customize AI mentor responses in `src/pages/AIMentor.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@qualityoflife.com or create an issue in this repository.

---

Built with ❤️ for better health and wellness
