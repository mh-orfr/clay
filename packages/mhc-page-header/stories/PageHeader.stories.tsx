import React from 'react';
import {PageHeader} from '../src/PageHeader';

export default {
  title: 'Custom/MHC PageHeader',
  component: PageHeader,
};

export const Default = () => (
  <PageHeader
    headline="Welcome to Clay UI!"
    paragraph="This is a sample page header component using Clay UI and your custom theme."
    buttonText="Get Started"
    onButtonClick={() => alert('Button clicked!')}
  />
);
