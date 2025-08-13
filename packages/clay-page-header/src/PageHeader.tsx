import React from 'react';
import ClayButton from '@clayui/button';
import ClayContainer from '@clayui/container';

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
  <ClayContainer className="page-header-container">
    <h1 className="page-header-headline">{headline}</h1>
    <p className="page-header-paragraph">{paragraph}</p>
    <ClayButton displayType="primary" onClick={onButtonClick}>
      {buttonText}
    </ClayButton>
  </ClayContainer>
);
