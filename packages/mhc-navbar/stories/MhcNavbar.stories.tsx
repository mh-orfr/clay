import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayNavigationBar from '@clayui/navigation-bar';
import ClayLayout from '@clayui/layout';

import { MhcMegaMenu } from '../src';

const { Container, Row, Col } = ClayLayout;

export default {
  title: 'Custom/Primary Navigation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Primary Navigation component with integrated mega menu functionality. Built on Clay UI components with MHC design system styling.'
      }
    }
  }
};

// Sample mega menu data for Members section
const membersMegaMenuData = {
  heading: {
    title: 'Members',
    description: 'Access all your member resources and benefits.',
    icon: <ClayIcon symbol="user" />,
  },
  sections: [
    {
      id: 'health-plans',
      title: 'Health Plans',
      links: [
        {
          id: 'my-plan',
          label: 'My Plan Details',
          description: 'View your current health plan coverage',
          href: '/members/my-plan',
        },
        {
          id: 'compare-plans',
          label: 'Compare Plans',
          description: 'Explore available health plan options',
          href: '/members/compare-plans',
        },
        {
          id: 'enrollment',
          label: 'Enrollment',
          description: 'Enroll in or change your health plan',
          href: '/members/enrollment',
        },
      ],
    },
    {
      id: 'benefits',
      title: 'Benefits & Coverage',
      links: [
        {
          id: 'benefits-summary',
          label: 'Benefits Summary',
          description: 'Overview of your covered services',
          href: '/members/benefits',
        },
        {
          id: 'prior-auth',
          label: 'Prior Authorization',
          description: 'Request approval for treatments',
          href: '/members/prior-auth',
        },
        {
          id: 'formulary',
          label: 'Drug Formulary',
          description: 'Find covered medications',
          href: '/members/formulary',
        },
      ],
    },
    {
      id: 'account',
      title: 'My Account',
      links: [
        {
          id: 'claims',
          label: 'Claims & EOBs',
          description: 'View claims and explanation of benefits',
          href: '/members/claims',
        },
        {
          id: 'id-card',
          label: 'ID Card',
          description: 'Download or print your member ID card',
          href: '/members/id-card',
        },
        {
          id: 'profile',
          label: 'Profile Settings',
          description: 'Update your personal information',
          href: '/members/profile',
        },
      ],
    },
  ],
  cta: {
    icon: <ClayIcon symbol="phone" />,
    title: 'Need Help?',
    description: 'Our member services team is available 24/7 to assist you with any questions or concerns.',
    primaryButton: {
      label: 'Contact Support',
      onClick: () => console.log('Contact support clicked'),
    },
    secondaryButton: {
      label: 'Live Chat',
      onClick: () => console.log('Live chat clicked'),
    },
  },
};

// Sample mega menu data for Providers section
const providersMegaMenuData = {
  heading: {
    title: 'Providers',
    description: 'Resources and tools for healthcare providers.',
    icon: <ClayIcon symbol="user-plus" />,
  },
  sections: [
    {
      id: 'directory',
      title: 'Provider Directory',
      links: [
        {
          id: 'find-provider',
          label: 'Find a Provider',
          description: 'Search our network of healthcare providers',
          href: '/providers/directory',
        },
        {
          id: 'provider-login',
          label: 'Provider Portal',
          description: 'Access provider-specific resources',
          href: '/providers/portal',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        {
          id: 'forms',
          label: 'Forms & Documents',
          description: 'Download commonly used forms',
          href: '/providers/forms',
        },
        {
          id: 'policies',
          label: 'Medical Policies',
          description: 'Review coverage policies and guidelines',
          href: '/providers/policies',
        },
      ],
    },
    {
      id: 'billing',
      title: 'Billing & Claims',
      links: [
        {
          id: 'submit-claims',
          label: 'Submit Claims',
          description: 'Submit and track claim status',
          href: '/providers/claims',
        },
        {
          id: 'payment-status',
          label: 'Payment Status',
          description: 'Check payment and remittance status',
          href: '/providers/payments',
        },
      ],
    },
  ],
  cta: {
    icon: <ClayIcon symbol="document" />,
    title: 'Provider Manual',
    description: 'Access comprehensive guides and policies for our network providers.',
    primaryButton: {
      label: 'View Manual',
      onClick: () => console.log('Provider manual clicked'),
    },
  },
};

export const Default = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('members');

  const handleNavigationClick = (tabId: string) => {
    if (tabId === 'members' || tabId === 'providers') {
      // Toggle mega menu for tabs that have one
      setActiveMegaMenu(activeMegaMenu === tabId ? null : tabId);
    } else {
      // Close mega menu for tabs that don't have one
      setActiveMegaMenu(null);
    }
    setActiveTab(tabId);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Utility bar */}
      <div className="bg-dark">
        <Container>
          <Row className="justify-content-between align-items-center py-2">
            <Col>
              <div className="text-white">Magellan Healthcare</div>
            </Col>
            <Col xs="auto">
              <div className="d-flex align-items-center gap-3">
                <ClayButton displayType="unstyled" className="text-white">
                  English <ClayIcon className="ml-1" symbol="caret-bottom" />
                </ClayButton>
                <ClayButton displayType="unstyled" className="text-white">
                  Crisis Hotlines
                </ClayButton>
                <ClayButton displayType="unstyled" className="text-white">
                  Get Help
                </ClayButton>
                <ClayButton displayType="unstyled" className="text-white">
                  My Account
                </ClayButton>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main navigation with mega menu */}
      <div className="mhc-navbar-main bg-white border-bottom">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              <div className="mhc-navbar-brand-section d-flex align-items-center">
                <div className="mhc-logo me-5">
                  <img 
                    src="https://member.magellanhealthcare.com/o/magellan-theme/images/custom/logo.svg"
                    alt="Magellan Healthcare"
                    style={{ 
                      height: '40px', 
                      width: 'auto',
                      maxWidth: '200px'
                    }}
                  />
                </div>
                
                {/* Navigation with mega menus */}
                <div className="d-none d-lg-block">
                  <ClayNavigationBar
                    fluidSize={false}
                    inverted={false}
                    triggerLabel={activeTab}
                  >
                    {/* Members with mega menu */}
                    <ClayNavigationBar.Item active={activeTab === 'members'}>
                      <MhcMegaMenu
                        trigger={
                          <ClayButton 
                            displayType="unstyled" 
                            className="text-nowrap px-4 py-3"
                            onClick={() => handleNavigationClick('members')}
                          >
                            Members
                            <ClayIcon className="ml-1" symbol="caret-bottom" />
                          </ClayButton>
                        }
                        heading={membersMegaMenuData.heading}
                        sections={membersMegaMenuData.sections}
                        cta={membersMegaMenuData.cta}
                        active={activeMegaMenu === 'members'}
                        onActiveChange={(active) => setActiveMegaMenu(active ? 'members' : null)}
                        onClose={closeMegaMenu}
                      />
                    </ClayNavigationBar.Item>

                    {/* Providers with mega menu */}
                    <ClayNavigationBar.Item active={activeTab === 'providers'}>
                      <MhcMegaMenu
                        trigger={
                          <ClayButton 
                            displayType="unstyled" 
                            className="text-nowrap px-4 py-3"
                            onClick={() => handleNavigationClick('providers')}
                          >
                            Providers
                            <ClayIcon className="ml-1" symbol="caret-bottom" />
                          </ClayButton>
                        }
                        heading={providersMegaMenuData.heading}
                        sections={providersMegaMenuData.sections}
                        cta={providersMegaMenuData.cta}
                        active={activeMegaMenu === 'providers'}
                        onActiveChange={(active) => setActiveMegaMenu(active ? 'providers' : null)}
                        onClose={closeMegaMenu}
                      />
                    </ClayNavigationBar.Item>

                    {/* Regular navigation items */}
                    <ClayNavigationBar.Item active={activeTab === 'about'}>
                      <ClayButton 
                        displayType="unstyled" 
                        className="text-nowrap px-4 py-3"
                        onClick={() => handleNavigationClick('about')}
                      >
                        About
                      </ClayButton>
                    </ClayNavigationBar.Item>

                    <ClayNavigationBar.Item active={activeTab === 'news'}>
                      <ClayButton 
                        displayType="unstyled" 
                        className="text-nowrap px-4 py-3"
                        onClick={() => handleNavigationClick('news')}
                      >
                        News
                      </ClayButton>
                    </ClayNavigationBar.Item>

                    <ClayNavigationBar.Item active={activeTab === 'support'}>
                      <ClayButton 
                        displayType="unstyled" 
                        className="text-nowrap px-4 py-3"
                        onClick={() => handleNavigationClick('support')}
                      >
                        Support
                      </ClayButton>
                    </ClayNavigationBar.Item>
                  </ClayNavigationBar>
                </div>
              </div>
            </Col>
            
            {/* Desktop: Sign In/Create Account buttons */}
            <Col xs="auto" className="d-none d-lg-block">
              <div className="mhc-action-buttons d-flex align-items-center">
                <ClayButton 
                  className="me-3 px-3 py-3"
                  displayType="secondary"
                >
                  Create Account
                </ClayButton>
                <ClayButton 
                  className="px-3 py-3"
                  displayType="primary"
                >
                  Sign In
                </ClayButton>
              </div>
            </Col>
            
            {/* Mobile: Menu button */}
            <Col xs="auto" className="d-block d-lg-none">
              <ClayButton 
                className="d-flex align-items-center px-3 py-3"
                displayType="secondary"
              >
                <ClayIcon className="me-1" symbol="bars" />
                Menu
              </ClayButton>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content area */}
      <Container className="py-5">
        <Row>
          <Col>
            <h1>Primary Navigation with Mega Menu</h1>
            <p className="lead">
              A responsive navigation component with integrated mega menu functionality. 
              Click on "Members" or "Providers" to see the full-width mega menus in action.
            </p>
            
            <div className="mt-4">
              <h3>Features:</h3>
              <ul>
                <li><strong>Full-width mega menus</strong> for Members and Providers sections</li>
                <li><strong>Multi-column layout</strong> with navigation links and descriptions</li>
                <li><strong>Optional CTA cards</strong> with calls-to-action</li>
                <li><strong>Responsive design</strong> that adapts to different screen sizes</li>
                <li><strong>Clay UI integration</strong> built on ClayDropDown foundation</li>
                <li><strong>MHC design system</strong> with proper typography and branding</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-light rounded">
              <h4>Current State:</h4>
              <p><strong>Active Tab:</strong> {activeTab}</p>
              <p><strong>Active Mega Menu:</strong> {activeMegaMenu || 'None'}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Default.storyName = 'Primary Navigation';

export const MegaMenuStandalone = () => {
  const [active, setActive] = useState(false);

  return (
    <div style={{ height: '600px', padding: '20px' }}>
      <p className="mb-4">This shows the mega menu component in isolation:</p>
      
      <MhcMegaMenu
        trigger={
          <ClayButton displayType="primary">
            Open Mega Menu Demo
            <ClayIcon className="ml-1" symbol="caret-bottom" />
          </ClayButton>
        }
        heading={membersMegaMenuData.heading}
        sections={membersMegaMenuData.sections}
        cta={membersMegaMenuData.cta}
        active={active}
        onActiveChange={setActive}
        onClose={() => setActive(false)}
      />
      
      <div className="mt-4">
        <p>
          Click the button above to test the mega menu component. 
          The mega menu spans the full viewport width and displays multiple columns 
          of navigation links with an optional CTA card.
        </p>
      </div>
    </div>
  );
};

MegaMenuStandalone.storyName = 'Mega Menu Component';
