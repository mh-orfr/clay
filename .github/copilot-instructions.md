# GitHub Copilot Instructions for Clay UI

## Project Architecture

**Clay UI** is Liferay's React component library built on Bootstrap, following a monorepo structure with Lerna, Yarn workspaces, and Turbo for build orchestration. This fork extends Clay with **MHC (design system) components** while maintaining clean separation from upstream changes.

### Key Architectural Principles
- **Bootstrap-first**: All layouts use Bootstrap's Container > Row > Col hierarchy
- **Clay component inheritance**: New components extend existing `@clayui/*` components rather than building from scratch
- **Scoped styling**: Component-specific SCSS files with MHC theme overrides
- **Device variants**: Components support `'Desktop' | 'Tablet' | 'Mobile'` responsive patterns

## Essential Development Workflows

### Component Development Pattern
```bash
# 1. Build Clay CSS foundation first (required for Storybook)
yarn workspace @clayui/css run build

# 2. Start Storybook for component development
yarn storybook  # Runs on port 8888

# 3. Build specific components
yarn build  # Builds all @clayui/* packages

# 4. Run tests with coverage
yarn test  # Uses Jest with comprehensive coverage thresholds
```

### Complete Development & Deployment Workflow
```bash
# Full development cycle
yarn workspace @clayui/css run build && yarn storybook
# [Develop and test components in Storybook - Ctrl+C to stop]

# Git deployment
git status && git add -A
git commit -m "feat: Component updates with details"
git push origin master

# GitHub Pages deployment
npm run build-storybook  # Creates storybook-static/
npm run deploy-storybook  # Deploys to gh-pages branch
git fetch origin && git branch -a  # Verify gh-pages exists

# Verify at https://mh-orfr.github.io/clay/ (wait 2-5 minutes)
```

### Testing & Validation Commands
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

### Package Structure (Follow Exactly)
```
packages/[component-name]/
├── src/
│   ├── [ComponentName].tsx     # Main component with Clay imports
│   ├── [ComponentName].scss    # Component-specific styles only
│   └── index.ts               # Named exports
├── stories/
│   └── [ComponentName].stories.tsx  # Clean stories, no inline styles
└── package.json              # @clayui/* dependencies, private: true
```

## Critical Code Patterns

### Component Implementation Template
```tsx
// ALWAYS import Clay components first
import ClayButton from '@clayui/button';
import ClayLayout from '@clayui/layout';
import './ComponentName.scss';  // Component styles, never in stories

const { Container, Row, Col } = ClayLayout;

export const ComponentName = ({ device = 'Desktop', ...props }) => {
  return (
    <Container fluid className="mhc-component-name">
      <div className="component-section">
        <Container>  {/* Bootstrap hierarchy: fluid > container > row > col */}
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              <ClayButton displayType="primary">Clay First</ClayButton>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};
```

### MHC Styling Pattern (SCSS)
```scss
// Component-specific styles with MHC theme overrides
.mhc-component-name {
  font-family: "Aller", -apple-system, BlinkMacSystemFont, sans-serif;
  
  // Override Clay component styles for MHC branding
  .btn-primary {
    background-color: #1071be !important;  // MHC primary color
    border-color: #1071be !important;
  }
  
  // Minimal custom styles - leverage Bootstrap classes in JSX
}
```

## Build System Integration Points

### Turbo Pipeline Dependencies
- Components depend on `^build` (upstream packages build first)
- Build outputs go to `lib/**` directory
- TypeScript declarations build separately via `buildTypes`

### Storybook Configuration
- Stories auto-discovered from `packages/*/stories/*.stories.@(js|jsx|ts|tsx)`
- Requires `yarn workspace @clayui/css run build` before starting
- Uses Webpack 5 with custom `ts:main` field resolution
- SCSS preprocessing via `@storybook/preset-scss`

### Jest Testing Requirements
- Uses `ts-jest` for TypeScript transformation
- Coverage thresholds enforced per package (see `jest.config.js`)
- Custom resolver handles monorepo package resolution
- jsdom environment for React component testing

## Figma MCP Integration Workflow

When using Figma MCP tools for component generation:

1. **Layer naming**: Use Bootstrap-semantic names (`Container Fluid`, `Row Justify Content Between`, `Col Auto`)
2. **Structure matching**: Figma hierarchy should mirror desired HTML/CSS structure
3. **MCP analysis**: Always call `mcp_figma_get_image` after `mcp_figma_get_code` for context
4. **Clay component mapping**: Translate Figma components to existing Clay equivalents first

## Package Dependencies

### Standard Clay Component Dependencies
```json
{
  "dependencies": {
    "@clayui/button": "^3.0.0",    // Always use Clay components first
    "@clayui/icon": "^3.0.0",
    "@clayui/layout": "^3.0.0"     // For Container/Row/Col
  },
  "peerDependencies": {
    "@clayui/css": "3.x",          // Required for styling
    "react": "^18.2.0"
  }
}
```

### Critical Anti-Patterns
- ❌ Never modify core Clay files (maintain clean fork)
- ❌ Never add styles to Stories files (component-level only)
- ❌ Never use `container-fluid` without inner `container`
- ❌ Never build custom navigation when `ClayNavigationBar` exists
- ❌ Never inline styles in production components

## MHC Design System Tokens
```scss
// Core MHC colors for theme overrides
$mhc-primary: #1071be;
$mhc-active: #65a2d5;
$mhc-text-active: #272833;
$mhc-text-inactive: #6b6c7e;
$mhc-utility-bg: #393a4a;
$mhc-border: #e7e7ed;
```

## Debugging Commands
```bash
# Check TypeScript errors across monorepo
yarn lint:typescript

# Test specific package
yarn workspace [package-name] test

# Build size analysis
yarn genBuildSize:compare

# Format and fix linting issues
yarn format:all

# Check Storybook deployment status
git branch -a | grep gh-pages
git log --oneline -5  # Recent commits

# GitHub Pages troubleshooting
npm run build-storybook  # Rebuild if needed
npm run deploy-storybook  # Redeploy if needed
# Visit https://mh-orfr.github.io/clay/ (wait 2-5 minutes for updates)
```

Follow the **DEVELOPMENT_GUIDELINES.md** for comprehensive patterns and refer to existing `packages/mhc-*` components as implementation examples.
