# Event Website Prototype

A fully functional event website prototype built from Figma designs, featuring multiple pages with interactive elements, countdown timers, and comprehensive event information.

## 🌟 Features

- **Landing Page**: Hero section with countdown timer, featured speakers, and event highlights
- **Tickets Page**: Multiple pass options (Online, Startup, Investor) with detailed pricing
- **About Pages**: 
  - Overview with location details and team members
  - Event Schedule with daily agenda
  - Get a Booth information
  - Online Experience details
  - Hotels & Flights information
- **Responsive Design**: Optimized for various screen sizes
- **Interactive Elements**: All buttons and navigation elements are fully functional
- **Shared Components**: Reusable navigation header and footer across all pages

## 🛠️ Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **ShadCN UI** - Component library

## 📁 Project Structure

```
├── index.html                       # Entry point
├── src/
│   └── main.tsx                     # React entry
├── App.tsx                          # Main app with routing
├── components/
│   ├── Navigation.tsx               # Shared header navigation
│   ├── Footer.tsx                   # Shared footer
│   ├── Countdown.tsx                # Event countdown timer
│   ├── pages/                       # Page wrapper components
│   └── ui/                          # ShadCN UI components
├── imports/                         # Figma-imported page components
├── styles/
│   └── globals.css                  # Global styles and tokens
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/event-website-prototype.git
cd event-website-prototype
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Netlify

This project is ready for Netlify deployment:

1. **Via GitHub (Recommended):**
   - Push your code to GitHub
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings are automatically detected from `netlify.toml`
   - Click "Deploy"

2. **Via Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

3. **Drag & Drop:**
   - Run `npm run build`
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `dist` folder

### Other Platforms

- **Vercel**: Import from GitHub or use `vercel` CLI
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Connect via GitHub

## 📝 Pages

- `/` - Landing Page
- `/tickets` - Tickets Page
- `/about` - About Overview Page
- `/about/schedule` - Event Schedule Page
- `/about/booth` - Get a Booth Page
- `/about/online` - Online Experience Page
- `/about/hotels` - Hotels & Flights Page

## 🎨 Design

All pages are built from Figma designs with pixel-perfect accuracy. The design system uses:
- Base width: 1728px (scales responsively to fit viewport)
- Color scheme: Professional black, white, and accent colors
- Typography: Inter font family
- Custom spacing and layout tokens

## 📝 Key Components

### Navigation
Shared header with logo and navigation links to all major sections of the site.

### Footer
Comprehensive footer with social links, contact information, and site navigation.

### Countdown Timer
Real-time countdown to the event date (June 1-2, 2025) with days, hours, minutes, and seconds.

## 🔧 Technical Highlights

- **Type-safe routing** with TypeScript interfaces
- **Smooth scroll behavior** for navigation
- **Responsive layouts** that adapt to screen size
- **Reusable component architecture**
- **CSS custom properties** for theming
- **Overflow prevention** for optimal mobile experience

## 📄 License

This project is a prototype built for demonstration purposes.

---

Built with Figma Make