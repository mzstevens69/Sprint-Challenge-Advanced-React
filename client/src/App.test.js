import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// integration test
it('App renders without crashing ', () => {
//Does it render 
const component =
  render(<App />);
  console.log(component)
});
test('headline rendering to card', () => {
  const { getByText } = render(<App/>);
  getByText(/players/i);
  getByText(/women/i);
});

