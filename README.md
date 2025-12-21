# Digital CV

This is a Digital CV built with Webpack.

## Project Structure

```
whoami/
├── src/                  # Source files
│   ├── index.html       # Main HTML file
│   ├── badge.html       # Badge HTML file
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript files
├── dist/                # Build output (generated)
├── images/              # Static images
├── icons/               # Icons and favicons
├── data/                # PDF and data files
├── webpack.config.js    # Webpack configuration
└── package.json         # Dependencies and scripts
```

## Development

### Install Dependencies
```bash
npm install
```

### Development Server
Start the development server with hot reload:
```bash
npm run dev
```
The site will open at http://localhost:12345

### Build for Production
Create optimized production build in `dist/` folder:
```bash
npm run build
```

## Deployment

The project uses GitHub Actions for automatic deployment:

- **Trigger**: Push to `main` or `digitalcv` branch
- **Build**: Runs `npm run build` to create production files
- **Deploy**: Publishes the `dist/` directory to GitHub Pages

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select the `gh-pages` branch
4. Save and wait for deployment

The site will be available at: `https://artbindu-app.github.io/whoami/`

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready files to dist/
- `npm start` - Alias for `npm run dev`

## Technologies

- Webpack 5 (Module Bundler)
- jQuery, Popper.js, Bootstrap
- AOS (Animate On Scroll)
- Font Awesome

## Build Process

Webpack bundles all JavaScript files from `src/js/` into a single optimized file:
- Core libraries (jQuery, Popper, Bootstrap)
- UI kit and animations (Now UI Kit, AOS)
- Plugins (Bootstrap Switch, Datepicker, etc.)
- Custom scripts (main.js, index.js)

CSS files are copied to the dist folder and linked in HTML.
