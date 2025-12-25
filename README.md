# 🍎 Manish Tiwari - Portfolio

A stunning macOS-inspired portfolio website built with React and Vite, featuring an interactive desktop environment with draggable windows, animated dock, and modern UI/UX design.

![Portfolio Screenshot](public/images/wallpaper.png)

## ✨ Features

- 🖥️ **macOS-inspired Interface** - Authentic desktop experience with familiar window controls
- 🎯 **Interactive Dock** - Animated dock with hover effects using GSAP
- 📱 **Draggable Windows** - Fully interactive window system with drag functionality
- 🎨 **Modern Design** - Clean, professional UI with Tailwind CSS
- 📑 **Multiple Apps** - Portfolio, Articles, Gallery, Contact, Skills, and Resume sections
- 🔍 **Dynamic Navigation** - Context-aware navigation with smooth transitions
- 📱 **Responsive Design** - Optimized for different screen sizes
- ⚡ **Performance Optimized** - Built with Vite for fast development and builds

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Animations**: GSAP 3.14.2 with Draggable plugin
- **State Management**: Zustand 5.0.9
- **Icons**: Lucide React
- **Additional Libraries**:
  - React PDF for resume viewing
  - Immer for immutable updates
  - DayJS for date handling
  - React Tooltip for interactive hints

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Dock.jsx       # Interactive macOS-style dock
│   ├── Navbar.jsx     # Top navigation bar
│   ├── Welcome.jsx    # Landing section with animations
│   └── WindowControls.jsx
├── windows/           # Application windows
│   ├── Safari.jsx     # Articles/Blog section
│   ├── Terminal.jsx   # Skills/Tech stack
│   ├── Resume.jsx     # PDF resume viewer
│   └── Contact.jsx    # Contact information
├── hoc/              # Higher-order components
│   └── WindowWrapper.jsx
├── store/            # State management
│   └── window.js     # Window state with Zustand
├── constants/        # Data and configuration
└── App.jsx          # Main application component
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Clone Repository

```bash
git clone https://github.com/manishtiwari-dev/manish-tiwari-portfolio.git
cd manish-tiwari-portfolio
```

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Key Components

### Interactive Dock

- Hover animations with GSAP
- App launching functionality
- Visual feedback for active applications

### Window System

- Draggable windows with GSAP Draggable
- Window state management with Zustand
- Authentic macOS window controls

### Portfolio Sections

- **Articles**: Tech blog and insights
- **Portfolio**: Project showcase with details
- **Gallery**: Image collections
- **Skills**: Technical expertise via terminal interface
- **Contact**: Professional contact information
- **Resume**: Interactive PDF viewer

## 🎯 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

## 📱 Responsive Design

- Desktop: Full macOS experience
- Tablet: Adapted interface
- Mobile: Simplified navigation with responsive adjustments

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About

**Manish Tiwari** - Frontend Developer passionate about creating engaging user experiences

- 💼 [Portfolio](https://manish-tiwari-portfolio.vercel.app)
- 💌 Contact via the portfolio's contact section
- 🐙 [GitHub](https://github.com/manishtiwari-dev)

## 🙏 Acknowledgments

- macOS design inspiration from Apple
- GSAP for powerful animations
- React ecosystem for robust development
- Tailwind CSS for rapid styling

---

_Built with ❤️ using React + Vite_
