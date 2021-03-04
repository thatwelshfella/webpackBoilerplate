import React from 'react';
import App from 'Src/App';
import { render } from 'Tests/utils';

describe('<App />', () => {
  it('should render by default', () => {
    const { getByText } = render(<App />, {
      initialState: { uiState: { title: 'webpack boilerplate' } },
    });

    expect(getByText('webpack boilerplate')).toBeInTheDocument();
  });
});
