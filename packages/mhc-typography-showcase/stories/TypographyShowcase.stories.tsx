import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TypographyShowcase } from '../src/TypographyShowcase';

export default {
  title: 'Custom/Typography',
  component: TypographyShowcase,
  argTypes: {
    device: {
      control: {
        type: 'select',
        options: ['Desktop', 'Tablet', 'Mobile'],
      },
      description: 'Device variant to preview (informational only - actual responsive behavior is based on browser width)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# MHC Typography Showcase

This component demonstrates the MHC typography system with responsive behavior.

## Features
- **All heading levels** (H1-H6) with proper MHC sizing
- **Responsive behavior** automatically adapts to screen size
- **Body text samples** showing different text sizes
- **Font family demonstration** of Aller Bold and Regular
- **Visual indicators** show current breakpoint

## Testing Responsive Behavior
1. **Desktop (992px+)**: H1 = 60px, H2 = 44px, etc.
2. **Tablet (768-991px)**: H1 = 44px, H2 = 34px, etc.  
3. **Mobile (576px-)**: H1 = 34px, H2 = 28px, etc.

Resize your browser window to see the typography automatically scale according to the MHC design system specifications.

## SCSS Implementation
All typography overrides are defined in \`packages/clay-css/src/scss/_clay_variables.scss\` using Clay UI's responsive map system.
        `,
      },
    },
  },
} as ComponentMeta<typeof TypographyShowcase>;

const Template: ComponentStory<typeof TypographyShowcase> = (args) => (
  <TypographyShowcase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  device: 'Desktop',
};
Default.parameters = {
  docs: {
    description: {
      story: 'Complete MHC typography system showcasing responsive behavior. Resize your browser window to see typography automatically scale between Desktop (992px+), Tablet (768-991px), and Mobile (576px-) breakpoints.',
    },
  },
};
