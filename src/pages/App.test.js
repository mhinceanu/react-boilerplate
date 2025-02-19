import React from 'react';
import { render } from '@testing-library/react';
import { WrapStore } from '../testsHelper';
import { initialState } from '../reducers/zipcode';
import App from './App';

describe('<App />', function () {
  const getComponent = () => {
    return (
      <WrapStore initialState={{ zipcode: initialState }}>
        <App />
      </WrapStore>
    );
  };

  it('should render <App />', () => {
    const { container } = render(getComponent());

    expect(container).toMatchSnapshot();
  });
});
