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
   * The device variant of the navbar to display
   */
  device?: 'Desktop' | 'Tablet' | 'Mobile';
  
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
  }>;
  
  /**
   * ID of the currently active tab
   */
  activeTab?: string;
  
  /**
   * Callback when Sign In button is clicked
   */
  onSignIn?: () => void;
  
  /**
   * Callback when Create Account button is clicked
   */
  onCreateAccount?: () => void;
  
  /**
   * Callback when Menu button is clicked (for mobile/simplified variants)
   */
  onMenuClick?: () => void;
}

/**
 * MHC Navbar Component
 * 
 * A comprehensive navigation bar component based on Figma designs.
 * Integrates with Clay UI components while maintaining MHC design system styling.
 */
export const MhcNavbar: React.FC<MhcNavbarProps> = ({
  device = 'Desktop',
  clientName = 'Client Name',
  showUtilityBar = true,
  utilityLinks = [
    { id: 'english', label: 'English', icon: 'caret-bottom' },
    { id: 'crisis', label: 'Crisis Hotlines' },
    { id: 'help', label: 'Get Help' },
    { id: 'search', label: 'Search' },
    { id: 'account', label: 'My Account' }
  ],
  navigationTabs = [
    { id: 'home', label: 'Navbar Text' },
    { id: 'nav1', label: 'Navbar Text' },
    { id: 'nav2', label: 'Navbar Text', icon: 'caret-bottom' },
    { id: 'nav3', label: 'Navbar Text', icon: 'caret-bottom' },
    { id: 'nav4', label: 'Navbar Text', icon: 'caret-bottom' },
  ],
  activeTab = 'home',
  onSignIn,
  onCreateAccount,
  onMenuClick,
}) => {
  // Utility Bar Component (used in default and variant2)
  const UtilityBar = () => (
    <div className="mhc-navbar-utility-bar">
      <Container>
        <Row className="justify-content-between align-items-center">
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
    <div className="mhc-navbar-main bg-white border-top">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <div className="mhc-navbar-brand-section d-flex align-items-center">
              <div className="mhc-logo-placeholder">
                {/* Logo placeholder - matches Figma design */}
              </div>
              {device === 'Desktop' && (
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
                      <ClayButton displayType="unstyled" className="text-nowrap">
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
              )}
            </div>
          </Col>
          
          {device === 'Desktop' ? (
            <Col xs="auto">
              <div className="mhc-action-buttons d-flex align-items-center">
                <ClayButton 
                  className="mr-3"
                  displayType="secondary"
                  onClick={onCreateAccount}
                >
                  Create Account
                </ClayButton>
                <ClayButton 
                  displayType="primary"
                  onClick={onSignIn}
                >
                  Sign In
                </ClayButton>
              </div>
            </Col>
          ) : (
            <Col xs="auto">
              <ClayButton 
                className="d-flex align-items-center"
                displayType="secondary"
                onClick={onMenuClick}
              >
                <ClayIcon className="mr-1" symbol="plus" />
                Menu
              </ClayButton>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );

  // Render based on device
  if (device === 'Mobile') {
    return (
      <Container fluid className="mhc-navbar mhc-navbar--mobile p-0">
        {showUtilityBar && <UtilityBar />}
        <MainNavbar />
      </Container>
    );
  }

  if (device === 'Tablet') {
    return (
      <Container fluid className="mhc-navbar mhc-navbar--tablet p-0">
        {showUtilityBar && <UtilityBar />}
        <MainNavbar />
      </Container>
    );
  }

  // Default Desktop
  return (
    <Container fluid className="mhc-navbar mhc-navbar--desktop p-0">
      {showUtilityBar && <UtilityBar />}
      <MainNavbar />
    </Container>
  );
};
