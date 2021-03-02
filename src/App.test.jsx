import React from 'react';
import App from './App';
import { render } from '../tests/utils';

describe('<App />', () => {
  it('should render by default', () => {
    const { getByText } = render(<App />, {
      initialState: { title: 'webpack boilerplate' },
    });

    expect(getByText('webpack boilerplate')).toBeInTheDocument();
  });
});
