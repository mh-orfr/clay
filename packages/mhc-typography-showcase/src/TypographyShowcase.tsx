import React from 'react';
import ClayLayout from '@clayui/layout';
import './TypographyShowcase.scss';

const { Container, Row, Col } = ClayLayout;

export interface TypographyShowcaseProps {
  /**
   * Device variant to preview
   */
  device?: 'Desktop' | 'Tablet' | 'Mobile';
}

/**
 * Typography Showcase component for testing MHC SCSS overrides
 * Shows all heading levels and responsive behavior
 */
export const TypographyShowcase: React.FC<TypographyShowcaseProps> = ({ 
  device = 'Desktop' 
}) => {
  return (
    <div className="mhc-typography-showcase">
      <Container fluid>
        <div className="typography-section">
          <Container>
            <Row>
              <Col>
                <div className="mb-4">
                  <h6 className="text-muted mb-3">
                    MHC Typography System - {device} Preview
                  </h6>
                  <p className="text-muted small">
                    Resize your browser window to see responsive behavior. 
                    Desktop (992px+) | Tablet (768-991px) | Mobile (576px-)
                  </p>
                </div>
                
                <div className="typography-samples">
                  <div className="heading-sample mb-4">
                    <h1>Heading 1</h1>
                    <p className="text-muted small">
                      Desktop: 60px | Tablet: 44px | Mobile: 34px
                    </p>
                  </div>
                  
                  <div className="heading-sample mb-4">
                    <h2>Heading 2</h2>
                    <p className="text-muted small">
                      Desktop: 44px | Tablet: 34px | Mobile: 28px
                    </p>
                  </div>
                  
                  <div className="heading-sample mb-4">
                    <h3>Heading 3</h3>
                    <p className="text-muted small">
                      Desktop: 34px | Tablet: 28px | Mobile: 24px
                    </p>
                  </div>
                  
                  <div className="heading-sample mb-4">
                    <h4>Heading 4</h4>
                    <p className="text-muted small">
                      Desktop: 28px | Tablet: 24px | Mobile: 18px
                    </p>
                  </div>
                  
                  <div className="heading-sample mb-4">
                    <h5>Heading 5</h5>
                    <p className="text-muted small">
                      Desktop: 24px | Tablet: 18px
                    </p>
                  </div>
                  
                  <div className="heading-sample mb-4">
                    <h6>Heading 6</h6>
                    <p className="text-muted small">
                      Desktop: 18px (no responsive variants)
                    </p>
                  </div>
                </div>
                
                <div className="body-text-samples mt-5">
                  <h4 className="mb-3">Body Text Samples</h4>
                  
                  <div className="mb-3">
                    <p className="lead">
                      Body Large (18px) - This is lead text used for important introductory content.
                    </p>
                  </div>
                  
                  <div className="mb-3">
                    <p>
                      Body Base (16px) - This is the standard body text used throughout the application. 
                      It provides good readability and is the default text size for most content.
                    </p>
                  </div>
                  
                  <div className="mb-3">
                    <p className="small">
                      Body Small (14px) - This is smaller text used for captions, footnotes, 
                      and secondary information that doesn't need as much emphasis.
                    </p>
                  </div>
                </div>
                
                <div className="font-family-demo mt-5">
                  <h4 className="mb-3">Font Family Demo</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 style={{ fontWeight: 700 }}>Aller Bold (Headings)</h5>
                      <p style={{ fontWeight: 700 }}>
                        The quick brown fox jumps over the lazy dog. 
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h5 style={{ fontWeight: 400 }}>Aller Regular (Body)</h5>
                      <p style={{ fontWeight: 400 }}>
                        The quick brown fox jumps over the lazy dog. 
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default TypographyShowcase;
