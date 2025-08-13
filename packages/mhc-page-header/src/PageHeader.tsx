import React from 'react';
import ClayButton from '@clayui/button';

interface PageHeaderProps {
  headline: string;
  paragraph: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  headline,
  paragraph,
  buttonText,
  onButtonClick,
}) => (
  <div
    className="mhc-page-header-container p-6"
    style={{
      background:
        "radial-gradient(72.08% 71.67% at 50% 22.17%, rgba(0, 60, 122, 0) 60.42%, rgba(0, 60, 122, 0.07) 100%)",
    }}
  >
    <h1 className="mhc-page-header-headline">{headline}</h1>
    <p className="mhc-page-header-paragraph">{paragraph}</p>
    <ClayButton displayType="primary" onClick={onButtonClick}>
      {buttonText}
    </ClayButton>
  </div>
);
