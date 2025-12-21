# Modern Digital CV with Webpack

A modern, optimized digital CV built with Webpack 5, Babel, and modern web technologies.

## 🚀 Features

- **Webpack 5** - Modern module bundler with code splitting
- **Babel** - ES6+ JavaScript transpilation
- **SCSS/CSS** - Modular styling with CSS optimization
- **Hot Module Replacement** - Fast development with live reloading
- **Code Splitting** - Optimized bundle sizes
- **Asset Optimization** - Image and font optimization
- **Production Ready** - Minification and optimization for production

## 📦 Project Structure

```
whoami/
├── src/
│   ├── index.js           # Main entry point
│   ├── scripts/
│   │   ├── main.js        # Utility functions
│   │   └── custom.js      # Custom application logic
├── css/                    # Stylesheets
├── images/                 # Image assets
├── icons/                  # Icon assets
├── data/                   # Data files
├── index.html             # Main HTML template
├── webpack.config.js      # Webpack configuration
├── .babelrc               # Babel configuration
└── package.json           # Project dependencies
```

## 🛠️ Installation

```bash
# Install dependencies
npm install
```

## 🏃 Development

```bash
# Start development server with HMR
npm run dev

# Watch mode (auto-rebuild on changes)
npm run watch
```

Development server runs on: http://localhost:12345

## 🏗️ Build

```bash
# Production build (optimized)
npm run build

# Development build (non-minified)
npm run build:dev

# Serve production build
npm run serve
```

## 📊 Bundle Analysis

```bash
# Analyze bundle size and composition
npm run analyze
```

## 🧹 Clean

```bash
# Remove dist folder
npm run clean
```

## 🔧 Configuration

### Webpack
- **Entry**: `src/index.js`
- **Output**: `dist/`
- **Dev Server**: Port 12345
- **Source Maps**: Development & Production

### Babel
- Target: `> 1%, last 2 versions, not dead`
- Core-js: 3
- Preset: @babel/preset-env

## 📝 Scripts Overview

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run build:dev` | Create development build |
| `npm run watch` | Watch mode for development |
| `npm run serve` | Serve production build |
| `npm run clean` | Clean dist directory |
| `npm run analyze` | Analyze bundle composition |

## 🎯 Optimization Features

### Production Build Includes:
- ✅ Code minification (Terser)
- ✅ CSS minification
- ✅ Asset optimization
- ✅ Code splitting (vendors & common chunks)
- ✅ Tree shaking
- ✅ Source maps
- ✅ Cache busting with content hashes
- ✅ HTML minification

### Performance:
- Lazy loading for routes/modules
- Optimized bundle sizes
- Browser caching with hashed filenames
- Compressed assets

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- > 1% market share

## 📄 License

ISC

## 👤 Author

**Biswasindhu Mandal**
- GitHub: [@artbindu](https://github.com/artbindu)
- LinkedIn: [artbindu](https://linkedin.com/in/artbindu)
- StackOverflow: [artbindu](https://stackoverflow.com/users/10850045/art-bindu)

---

Built with ❤️ using modern web technologies
