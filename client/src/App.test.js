import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// integration test
it('renders data to App', () => {
//Does it render 
const component =
  render(<App />);
  console.log(component)
});
