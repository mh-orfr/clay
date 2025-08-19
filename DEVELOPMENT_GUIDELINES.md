# Clay UI + MHC Development Guidelines

## Overview
These guidelines ensure consistent, maintainable component development when extending Clay UI with MHC design system components using Figma MCP integration.

## 🎯 Core Principles

### 1. **Clay UI First Approach**
- Always leverage existing Clay UI components before building custom implementations
- Use `@clayui/` packages as the foundation (ClayButton, ClayIcon, ClayLayout, ClayNavigationBar, etc.)
- Only add MHC-specific styling and behavior on top of Clay components
- Never modify core Clay UI files - maintain clean fork separation

### 2. **Bootstrap Structure Compliance**
- Follow proper Bootstrap hierarchy: `Container/Container-fluid > Container > Row > Col`
- Use Bootstrap utility classes for layout: `d-flex`, `align-items-center`, `justify-content-between`, `text-white`, `bg-white`, etc.
- Minimize custom CSS by leveraging Bootstrap's built-in classes
- Reserve custom SCSS only for MHC-specific theming (colors, fonts, brand elements)

### 3. **Component-Level Styling**
- Always create component-specific SCSS files (e.g., `ComponentName.scss`)
- Import styles in the component file, never in Stories
- Use CSS Modules or scoped classes to prevent style conflicts
- Keep Stories files focused on documentation and interactive controls

## 🎨 Figma MCP Integration Best Practices

### Figma Layer Organization
Structure Figma layers to match desired HTML/CSS output:

```
📁 [Component Name] Container Fluid
  📁 [Section Name] Section
    📁 Container
      📁 Row [Bootstrap Classes]
        📁 Col [Size/Auto] ([Content Description])
          🔲 [Semantic Element Name]
        📁 Col [Size/Auto] ([Content Description])
          📁 [Component Group Name]
            🔲 [Element Name]
```

### Layer Naming Conventions
- **Containers**: "Container", "Container Fluid", "[Section] Container"
- **Layout**: "Row", "Row Justify Content Between", "Col", "Col Auto", "Col 6"
- **Components**: "Button Group", "Nav Group", "Icon Group", "Brand Section"
- **Elements**: "Primary Button", "Logo Placeholder", "Client Name"
- **States**: "Active State", "Hover State", "Default State"

**Avoid**: Complex prefixes (`Z-Master`, `_Main /`), unclear naming, organizational artifacts

### MCP Workflow
1. **Analyze**: Use `mcp_figma_get_code` to understand current structure
2. **Visualize**: Use `mcp_figma_get_image` for context
3. **Extract**: Use `mcp_figma_get_variable_defs` for design tokens
4. **Implement**: Translate to Clay UI + Bootstrap structure
5. **Verify**: Ensure responsive behavior and clean code output

## 🏗️ Component Development Process

### 1. **Package Structure**
```
packages/[component-name]/
├── src/
│   ├── [ComponentName].tsx      # Main component
│   ├── [ComponentName].scss     # Component-specific styles
│   └── index.ts                 # Exports
├── stories/
│   └── [ComponentName].stories.tsx
└── package.json
```

### 2. **Component Implementation**
```tsx
// Import Clay UI components first
import ClayButton from '@clayui/button';
import ClayLayout from '@clayui/layout';

// Import component styles
import './ComponentName.scss';

const { Container, Row, Col } = ClayLayout;

// Use proper Bootstrap structure
export const ComponentName = ({ ...props }) => {
  return (
    <Container fluid className="mhc-component-name">
      <div className="component-section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              {/* Content using Clay components */}
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};
```

### 3. **Styling Guidelines**
```scss
// Component-specific styles only
.mhc-component-name {
  font-family: "Aller", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

// MHC theme overrides for Clay components
.mhc-component-name .btn-primary {
  background-color: #1071be !important;
  border-color: #1071be !important;
}

// Minimal custom styles - leverage Bootstrap classes in JSX
.mhc-custom-element {
  // Only non-Bootstrap properties here
}
```

## 🔧 Technical Requirements

### Dependencies Management
- Add Clay UI dependencies to component's `package.json`
- Common deps: `@clayui/button`, `@clayui/icon`, `@clayui/layout`, `@clayui/navigation-bar`
- Use exact versions matching the main Clay UI version
- Never modify root `package.json` or shared configs

### TypeScript Standards
- Define comprehensive prop interfaces with JSDoc comments
- Use device-specific variants: `'Desktop' | 'Tablet' | 'Mobile'`
- Include callback props for user interactions
- Export both component and props interface

### Storybook Integration
- Create comprehensive stories for all device variants
- Use `layout: 'fullscreen'` for navigation components
- Include interactive controls for all props
- Document MHC-specific design decisions
- Remove any inline styling - keep stories clean

## 🎨 MHC Design System Integration

### Color Palette
- Primary: `#1071be` (replaces Clay's primary)
- Active states: `#65a2d5`
- Text: `#272833` (active), `#6b6c7e` (inactive)
- Backgrounds: `#393a4a` (utility bar), `#ffffff` (main)
- Borders: `#e7e7ed`, `#cdced9`

### Typography
- Font family: "Aller" (with system font fallbacks)
- Use relative units (`rem`, `em`) for scalability
- Match Figma specifications for weight and line-height

### Responsive Behavior
- Mobile-first approach using Bootstrap breakpoints
- Device variants should adapt layout, not just hide elements
- Test all viewport sizes in Storybook

## 🚫 Anti-Patterns to Avoid

### Code Structure
- ❌ Modifying core Clay UI files
- ❌ Adding styles to Stories files
- ❌ Using `container-fluid` without inner `container`
- ❌ Custom layout implementations when Bootstrap classes exist
- ❌ Inline styles in production components

### Figma Organization
- ❌ Complex layer naming with organizational prefixes
- ❌ Nested structure that doesn't match HTML hierarchy
- ❌ Generic names like "Group 1", "Frame 2"
- ❌ Missing semantic layer organization

### Component Design
- ❌ Building custom navigation when `ClayNavigationBar` exists
- ❌ Reinventing Bootstrap grid system
- ❌ Tight coupling between components
- ❌ Missing device variant support

## 🔄 Maintenance Guidelines

### Version Updates
- Keep Clay UI fork synchronized with upstream releases
- Test MHC components after Clay UI updates
- Document any breaking changes in component-specific changelogs

### Code Quality
- Run TypeScript checks before committing
- Test all device variants in Storybook
- Verify responsive behavior at multiple breakpoints
- Ensure accessibility standards compliance

### Documentation
- Update README files for new components
- Document any deviations from standard patterns
- Include Figma design links in component documentation
- Maintain this guidelines document as patterns evolve

## 🚀 Complete Development & Deployment Workflow

### 1. Component Development & Testing
```bash
# Build Clay CSS foundation (required before Storybook)
yarn workspace @clayui/css run build

# Start Storybook for development
yarn storybook  # Runs on http://localhost:8888

# Build and test components
yarn build      # Builds all @clayui/* packages
yarn test       # Run Jest tests with coverage
```

### 2. Local Testing & Validation
```bash
# Check TypeScript errors across monorepo
yarn lint:typescript

# Test specific package
yarn workspace [package-name] test

# Format and fix linting issues
yarn format:all

# Build size analysis
yarn genBuildSize:compare
```

### 3. Git Deployment Workflow
```bash
# Check status and stage changes
git status
git add -A

# Commit with descriptive message
git commit -m "feat: Description of changes

- Detail 1
- Detail 2"

# Push to remote repository
git push origin master
```

### 4. GitHub Pages Deployment
```bash
# Build static Storybook for deployment
npm run build-storybook

# Deploy to GitHub Pages (creates/updates gh-pages branch)
npm run deploy-storybook

# Verify deployment (check for new gh-pages branch)
git fetch origin
git branch -a  # Should show remotes/origin/gh-pages

# Access deployed Storybook at: https://mh-orfr.github.io/clay/
# Note: GitHub Pages can take 2-5 minutes to update after deployment
```

### 5. Complete Workflow Summary
```bash
# Full development cycle
yarn workspace @clayui/css run build && yarn storybook
# [Develop and test components in Storybook]
# [Stop Storybook with Ctrl+C]

git add -A && git commit -m "feat: Component updates" && git push origin master
npm run build-storybook && npm run deploy-storybook

# Verify at https://mh-orfr.github.io/clay/ (wait 2-5 minutes for updates)
```

## 🎯 Success Metrics

A well-implemented MHC component should:
- ✅ Use existing Clay UI components as foundation
- ✅ Follow proper Bootstrap container hierarchy
- ✅ Have minimal custom CSS (focused on MHC branding only)
- ✅ Work responsively across all device variants
- ✅ Generate clean, semantic HTML structure
- ✅ Be maintainable and extensible
- ✅ Match Figma designs pixel-perfectly

---

*These guidelines are living documentation - update them as new patterns emerge and best practices evolve.*
