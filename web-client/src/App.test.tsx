import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockRooms = {
  room1: {
    name: 'room1',
    count: 5
  },
  room2: {
    name: 'room2',
    count: 15
  }
};

it('should renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // await waitForElementToBeRemoved(() => screen.getByText('Loading'));
  expect(linkElement).toBeInTheDocument();
});

it('displays rooms', () => {});
