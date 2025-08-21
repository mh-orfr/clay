import React from 'react';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import classNames from 'classnames';

import './MhcMegaMenu.scss';

const { Container, Row, Col } = ClayLayout;

export interface MegaMenuLink {
  id: string;
  label: string;
  href?: string;
  description?: string;
  onClick?: () => void;
}

export interface MegaMenuSection {
  id: string;
  title?: string;
  links: MegaMenuLink[];
}

export interface MegaMenuCTA {
  icon?: React.ReactNode;
  title: string;
  description: string;
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
}

export interface MhcMegaMenuProps {
  /** The trigger element that opens the mega menu */
  trigger: React.ReactElement;
  /** Whether the mega menu is currently active/open */
  active?: boolean;
  /** Callback fired when the active state changes */
  onActiveChange?: (active: boolean) => void;
  /** Callback fired when the mega menu should be closed */
  onClose?: () => void;
  /** The heading section with title, description, and optional icon */
  heading?: {
    title: string;
    description?: string;
    icon?: React.ReactNode;
  };
  /** Array of navigation sections with links */
  sections?: MegaMenuSection[];
  /** Optional call-to-action card */
  cta?: MegaMenuCTA;
}

/**
 * MHC Mega Menu Component
 * 
 * A large dropdown menu component that displays multiple columns of navigation links,
 * built on top of Clay UI's DropDown component. Follows Bootstrap grid layout patterns
 * and integrates seamlessly with MHC design system styling.
 */
export const MhcMegaMenu: React.FC<MhcMegaMenuProps> = ({
  trigger,
  heading,
  sections,
  cta,
  active,
  onActiveChange,
  onClose,
}) => {
  return (
          <ClayDropDown
        active={active}
        onActiveChange={onActiveChange}
        trigger={trigger}
        alignmentPosition={10} // Full width positioning
        alignmentByViewport={false}
        closeOnClickOutside={true}
        className="mhc-mega-menu"
      >
      <div className="mhc-mega-menu-inner">
        {/* Close button */}
        <div className="mhc-mega-menu-close">
          <ClayButton
            displayType="unstyled"
            onClick={onClose}
            className="mhc-close-button"
          >
            <span className="mhc-close-text">CLOSE</span>
            <ClayIcon symbol="times" />
          </ClayButton>
        </div>

        <Container>
          {/* Main heading section */}
          {heading && (
            <Row className="mhc-mega-menu-header">
              <Col xs={12}>
                <div className="mhc-heading-section">
                  <div className="mhc-heading-content">
                    <h2 className="mhc-heading-title">
                      {heading.title}
                      {heading.icon && (
                        <span className="mhc-heading-icon">{heading.icon}</span>
                      )}
                    </h2>
                    {heading.description && (
                      <p className="mhc-heading-description">{heading.description}</p>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          )}

          {/* Content sections */}
          <Row className="mhc-mega-menu-body">
            {/* Navigation links grid */}
            <Col xs={12} lg={cta ? 8 : 12}>
              <Row className="mhc-menu-sections">
                {sections && sections.map((section) => (
                  <Col
                    key={section.id}
                    xs={12}
                    sm={6}
                    lg={sections.length > 6 ? 4 : 6}
                    className="mhc-menu-section"
                  >
                    {section.title && (
                      <h3 className="mhc-section-title">{section.title}</h3>
                    )}
                    <ul className="mhc-section-links">
                      {section.links.map((link) => (
                        <li key={link.id} className="mhc-link-item">
                          {link.href ? (
                            <ClayLink
                              href={link.href}
                              className="mhc-mega-link"
                              onClick={link.onClick}
                            >
                              <span className="mhc-link-label">{link.label}</span>
                              {link.description && (
                                <span className="mhc-link-description">
                                  {link.description}
                                </span>
                              )}
                            </ClayLink>
                          ) : (
                            <ClayButton
                              displayType="unstyled"
                              className="mhc-mega-link"
                              onClick={link.onClick}
                            >
                              <span className="mhc-link-label">{link.label}</span>
                              {link.description && (
                                <span className="mhc-link-description">
                                  {link.description}
                                </span>
                              )}
                            </ClayButton>
                          )}
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* CTA card */}
            {cta && (
              <Col xs={12} lg={4}>
                <div className="mhc-mega-cta">
                  {cta.icon && (
                    <div className="mhc-cta-icon">{cta.icon}</div>
                  )}
                  <div className="mhc-cta-content">
                    <h3 className="mhc-cta-title">{cta.title}</h3>
                    <p className="mhc-cta-description">{cta.description}</p>
                    <div className="mhc-cta-buttons">
                      {cta.primaryButton && (
                        <ClayButton
                          displayType="primary"
                          onClick={cta.primaryButton.onClick}
                          className="mhc-cta-primary"
                        >
                          {cta.primaryButton.label}
                        </ClayButton>
                      )}
                      {cta.secondaryButton && (
                        <ClayButton
                          displayType="secondary"
                          onClick={cta.secondaryButton.onClick}
                          className="mhc-cta-secondary"
                        >
                          {cta.secondaryButton.label}
                        </ClayButton>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </ClayDropDown>
  );
};

export default MhcMegaMenu;
