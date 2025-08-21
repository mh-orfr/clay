import React from 'react';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayNavigationBar from '@clayui/navigation-bar';
import ClayLink from '@clayui/link';

import './MhcNavbar.scss';

const { Container, Row, Col } = ClayLayout;

export interface MhcNavbarProps {
  /**
   * Client name to display in the utility bar
   */
  clientName?: string;
  
  /**
   * Whether to show the utility bar
   */
  showUtilityBar?: boolean;
  
  /**
   * Array of utility navigation links
   */
  utilityLinks?: Array<{
    id: string;
    label: string;
    icon?: string;
  }>;
  
  /**
   * Array of main navigation tabs
   */
  navigationTabs?: Array<{
    id: string;
    label: string;
    icon?: string;
    hasDropdown?: boolean;
  }>;
  
  /**
   * ID of the currently active tab
   */
  activeTab?: string;
  
  /**
   * Callback when a navigation tab is clicked
   */
  onNavigationClick?: (tabId: string) => void;
  
  /**
   * Callback when Sign In button is clicked
   */
  onSignIn?: () => void;
  
  /**
   * Callback when Create Account button is clicked
   */
  onCreateAccount?: () => void;
  
  /**
   * Callback when Menu button is clicked (for mobile/tablet view)
   */
  onMenuClick?: () => void;
}

/**
 * MHC Primary Navigation Component
 * 
 * A responsive navigation bar component that automatically adapts to different screen sizes
 * using Bootstrap's responsive utility classes. Integrates with Clay UI components while
 * maintaining MHC design system styling.
 */
export const MhcNavbar: React.FC<MhcNavbarProps> = ({
  clientName = 'Magellan Healthcare',
  showUtilityBar = true,
  utilityLinks = [
    { id: 'english', label: 'English', icon: 'caret-bottom' },
    { id: 'crisis', label: 'Crisis Hotlines' },
    { id: 'help', label: 'Get Help' },
    { id: 'search', label: 'Search' },
    { id: 'account', label: 'My Account' }
  ],
  navigationTabs = [
    { id: 'members', label: 'Members', icon: 'caret-bottom' },
    { id: 'providers', label: 'Providers', icon: 'caret-bottom' },
    { id: 'about', label: 'About' },
    { id: 'news', label: 'News' },
    { id: 'support', label: 'Support' },
  ],
  activeTab = 'members',
  onNavigationClick,
  onSignIn,
  onCreateAccount,
  onMenuClick,
}) => {
  // Utility Bar Component (used in default and variant2)
  const UtilityBar = () => (
    <div className="bg-dark">
      <Container>
        <Row className="justify-content-between align-items-center py-2">
          <Col>
            <div className="mhc-client-name text-white">{clientName}</div>
          </Col>
          <Col xs="auto">
            <div className="mhc-utility-nav d-flex align-items-center">
              {utilityLinks.map((link) => (
                <ClayButton 
                  key={link.id}
                  className="mhc-utility-button text-white border-0" 
                  displayType="unstyled"
                  size="sm"
                >
                  {link.label}
                  {link.icon && <ClayIcon className="ml-1" symbol={link.icon} />}
                </ClayButton>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  // Main Navigation Bar Component using Clay Navigation Bar
  const MainNavbar = () => (
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
              {/* Navigation tabs - hidden on mobile/tablet, shown on desktop (lg+) */}
              <div className="d-none d-lg-block">
                <ClayNavigationBar
                  fluidSize={false}
                  inverted={false}
                  triggerLabel={activeTab ? navigationTabs.find(tab => tab.id === activeTab)?.label || 'Navigation' : 'Navigation'}
                >
                  {navigationTabs.map((tab) => (
                    <ClayNavigationBar.Item
                      key={tab.id}
                      active={tab.id === activeTab}
                    >
                      <ClayButton 
                        displayType="unstyled" 
                        className="text-nowrap px-4 py-3"
                        onClick={() => onNavigationClick?.(tab.id)}
                      >
                        {tab.label}
                        {tab.icon && (
                          <ClayIcon 
                            className="ml-1" 
                            symbol={tab.icon} 
                          />
                        )}
                      </ClayButton>
                    </ClayNavigationBar.Item>
                  ))}
                </ClayNavigationBar>
              </div>
            </div>
          </Col>
          
          {/* Desktop: Sign In/Create Account buttons - hidden below lg */}
          <Col xs="auto" className="d-none d-lg-block">
            <div className="mhc-action-buttons d-flex align-items-center">
              <ClayButton 
                className="me-3 px-3 py-3"
                displayType="secondary"
                onClick={onCreateAccount}
              >
                Create Account
              </ClayButton>
              <ClayButton 
                className="px-3 py-3"
                displayType="primary"
                onClick={onSignIn}
              >
                Sign In
              </ClayButton>
            </div>
          </Col>
          
          {/* Mobile/Tablet: Menu button - shown below lg, hidden on desktop */}
          <Col xs="auto" className="d-block d-lg-none">
            <ClayButton 
              className="d-flex align-items-center px-3 py-3"
              displayType="secondary"
              onClick={onMenuClick}
            >
              <ClayIcon className="me-1" symbol="bars" />
              Menu
            </ClayButton>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <Container fluid className="mhc-navbar p-0">
      {showUtilityBar && <UtilityBar />}
      <MainNavbar />
    </Container>
  );
};
