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
  <div className="page-header-container">
    <h1 className="page-header-headline">{headline}</h1>
    <p className="page-header-paragraph">{paragraph}</p>
    <ClayButton displayType="primary" onClick={onButtonClick}>
      {buttonText}
    </ClayButton>
  </div>
);
