import React from 'react';
import { render } from '@testing-library/react';
import ZipcodeDetails from './ZipcodeDetails';

describe('<ZipcodeDetails />', function () {
  const getComponent = (data) => {
    return <ZipcodeDetails details={data} />;
  };

  it('should render <ZipcodeDetails /> with data', () => {
    const data = {
      'post code': '90210',
      country: 'United States',
      'country abbreviation': 'US',
      places: [
        {
          'place name': 'Beverly Hills',
          longitude: '-118.4065',
          state: 'California',
          'state abbreviation': 'CA',
          latitude: '34.0901'
        }
      ]
    };

    const { container } = render(getComponent(data));

    expect(container).toMatchSnapshot();
  });

  it('should render <ZipcodeDetails /> with no data', () => {
    const { container } = render(getComponent());

    expect(container).toMatchSnapshot();
  });
});
