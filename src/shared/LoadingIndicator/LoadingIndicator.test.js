import React from 'react';
import { render } from '@testing-library/react';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', function () {
  const getComponent = () => {
    return <LoadingIndicator />;
  };

  it('should render <LoadingIndicator />', () => {
    const { container } = render(getComponent());

    expect(container).toMatchSnapshot();
  });
});
