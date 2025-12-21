# Styles Directory

This directory contains all custom CSS for the Vue.js application.

## Structure

```
styles/
├── main.css         # Global styles, CSS variables, utilities
└── components.css   # Component-specific styles
```

## Architecture

### main.css
- **CSS Variables (Design Tokens)**: Colors, spacing, typography, shadows, transitions
- **Global Resets**: Normalize browser defaults
- **Typography**: Headings, paragraphs, links
- **Utility Classes**: Text alignment, colors, spacing, display
- **Base Components**: Sections, cards, buttons, badges, progress bars
- **Animations**: Keyframes and animation utilities
- **Responsive Design**: Breakpoints and mobile-first approach
- **Scrollbar Styling**: Custom scrollbar design
- **Print Styles**: Print-friendly styles

### components.css
- **Profile Section**: Profile header, images, social buttons
- **Skills Section**: Skill items, progress bars
- **Experience Timeline**: Timeline layout, dots, content
- **Portfolio Grid**: Portfolio items, overlays, hover effects
- **Education Cards**: Education layout, logos, content

## CSS Variables

All design tokens are defined in `:root` in `main.css`:

```css
:root {
  --primary-color: #2CA8FF;
  --spacing-md: 1rem;
  --transition-base: 0.3s ease;
  /* ... more variables */
}
```

### Benefits:
- Easy theme customization
- Consistent design system
- Better maintainability
- Runtime color changes possible

## Usage in Vue Components

### Option 1: Scoped Styles (Recommended)
```vue
<template>
  <div class="my-component">
    <h2>Title</h2>
  </div>
</template>

<style scoped>
.my-component {
  padding: var(--spacing-lg);
  background: var(--white);
}
</style>
```

### Option 2: Use Utility Classes
```vue
<template>
  <div class="card p-3 mb-3">
    <h2 class="text-primary">Title</h2>
  </div>
</template>
```

### Option 3: Import Component Styles
```vue
<style>
/* Uses classes from components.css */
</style>
```

## Customization

### Changing Colors
Edit CSS variables in `main.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
}
```

### Adding New Utilities
Add to `main.css` under "UTILITY CLASSES":
```css
.my-utility {
  /* ... */
}
```

### Adding Component Styles
Add to `components.css` under appropriate section:
```css
/* My New Component */
.my-component {
  /* ... */
}
```

## Framework Integration

### External CSS (Loaded via npm)
- **Bootstrap**: Grid system, utilities
- **AOS**: Animation on scroll
- **Font Awesome**: Icons

### Load Order (in main.js)
```javascript
1. bootstrap/dist/css/bootstrap.min.css  // Framework
2. aos/dist/aos.css                      // Animations
3. @fortawesome/fontawesome-free/...     // Icons
4. ./assets/styles/main.css              // Global custom
5. ./assets/styles/components.css        // Component custom
```

## Performance Notes

- **Size**: ~15KB total (minified + gzipped)
- **Critical CSS**: Inlined in production build
- **Unused CSS**: Removed by PurgeCSS in production
- **Caching**: CSS files are cache-busted in production

## Best Practices

1. **Use CSS Variables**: For any value that might change
2. **Mobile-First**: Design for mobile, then desktop
3. **Scoped Styles**: Prefer `<style scoped>` in components
4. **Avoid !important**: Use specificity instead
5. **BEM Naming**: Use Block-Element-Modifier when needed
6. **Performance**: Avoid expensive properties (box-shadow on large elements)

## Migration from Old CSS

The old `css/main.css` (173KB) has been:
- ✅ Reduced to ~15KB (90% reduction)
- ✅ Split into logical modules
- ✅ Modernized with CSS variables
- ✅ Optimized for Vue.js
- ✅ Removed unused styles
- ✅ Added responsive design

## Future Enhancements

- [ ] Add dark mode support
- [ ] Add CSS-in-JS option (styled-components)
- [ ] Add Tailwind CSS integration
- [ ] Add PostCSS for autoprefixing
- [ ] Add CSS modules support

---

**Last Updated**: December 21, 2025
