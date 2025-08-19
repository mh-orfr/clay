import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MhcNavbar, MhcNavbarProps } from '../src';

export default {
  title: 'Custom/MHC Navbar',
  component: MhcNavbar,
  argTypes: {
    device: {
      control: { type: 'select', options: ['Desktop', 'Tablet', 'Mobile'] },
      description: 'Choose the device variant to display'
    },
    clientName: {
      control: 'text',
      description: 'Client name displayed in the utility bar'
    },
    showUtilityBar: {
      control: 'boolean',
      description: 'Whether to show the utility bar'
    },
    utilityLinks: {
      control: 'object',
      description: 'Array of utility navigation links'
    },
    navigationTabs: {
      control: 'object',
      description: 'Array of main navigation tabs'
    },
    activeTab: {
      control: 'text',
      description: 'ID of the currently active tab'
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'MHC Navbar component created from Figma design analysis. Supports three device variants: Desktop, Tablet, and Mobile with utility bar and main navigation. Uses Clay UI components with MHC theming.'
      }
    }
  }
} as Meta<MhcNavbarProps>;

const Template: Story<MhcNavbarProps> = (args) => <MhcNavbar {...args} />;

// Default navigation data
const defaultUtilityLinks = [
  { id: 'english', label: 'English', icon: 'caret-bottom' },
  { id: 'crisis', label: 'Crisis Hotlines' },
  { id: 'help', label: 'Get Help' },
  { id: 'search', label: 'Search' },
  { id: 'account', label: 'My Account' }
];

const defaultNavigationTabs = [
  { id: 'home', label: 'Navbar Text' },
  { id: 'nav1', label: 'Navbar Text' },
  { id: 'nav2', label: 'Navbar Text', icon: 'caret-bottom' },
  { id: 'nav3', label: 'Navbar Text', icon: 'caret-bottom' },
  { id: 'nav4', label: 'Navbar Text', icon: 'caret-bottom' }
];

// Desktop: Full navbar with utility bar, navigation tabs, and action buttons
export const Desktop = Template.bind({});
Desktop.args = {
  device: 'Desktop',
  clientName: 'XYZ Healthcare System',
  showUtilityBar: true,
  utilityLinks: defaultUtilityLinks,
  navigationTabs: defaultNavigationTabs,
  activeTab: 'home'
};
Desktop.storyName = 'Desktop - Full Layout';

// Tablet: Utility bar with navigation but Menu button instead of action buttons  
export const Tablet = Template.bind({});
Tablet.args = {
  device: 'Tablet',
  clientName: 'ABC Medical Center',
  showUtilityBar: true,
  utilityLinks: defaultUtilityLinks,
  navigationTabs: defaultNavigationTabs,
  activeTab: 'nav1'
};
Tablet.storyName = 'Tablet - Simplified Layout';

// Mobile: Very minimal with just client name and Menu button
export const Mobile = Template.bind({});
Mobile.args = {
  device: 'Mobile',
  clientName: 'DEF Health Network',
  showUtilityBar: true,
  utilityLinks: defaultUtilityLinks,
  navigationTabs: defaultNavigationTabs,
  activeTab: 'nav2'
};
Mobile.storyName = 'Mobile - Compact Layout';

// Interactive playground
export const Playground = Template.bind({});
Playground.args = {
  device: 'Desktop',
  clientName: 'Interactive Demo',
  showUtilityBar: true,
  utilityLinks: defaultUtilityLinks,
  navigationTabs: defaultNavigationTabs,
  activeTab: 'home'
};
Playground.storyName = 'Interactive Playground';

// Without utility bar
export const WithoutUtilityBar = Template.bind({});
WithoutUtilityBar.args = {
  device: 'Desktop',
  showUtilityBar: false,
  navigationTabs: defaultNavigationTabs,
  activeTab: 'home'
};
WithoutUtilityBar.storyName = 'Without Utility Bar';

// Custom navigation
export const CustomNavigation = Template.bind({});
CustomNavigation.args = {
  device: 'Desktop',
  clientName: 'Custom Healthcare',
  showUtilityBar: true,
  utilityLinks: [
    { id: 'notifications', label: 'Notifications', icon: 'bell' },
    { id: 'profile', label: 'Dr. Smith', icon: 'user' }
  ],
  navigationTabs: [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'appointments', label: 'Appointments', icon: 'calendar' },
    { id: 'records', label: 'Medical Records', icon: 'folder' },
    { id: 'billing', label: 'Billing', icon: 'credit-card' },
    { id: 'analytics', label: 'Analytics', icon: 'chart' }
  ],
  activeTab: 'dashboard'
};
CustomNavigation.storyName = 'Custom Navigation Items';
