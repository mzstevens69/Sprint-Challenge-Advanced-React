import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// integration test
it('renders data to App(dom)', () => {
  
  render(<App />);
});
