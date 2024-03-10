import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
  // Test 1: Check if the navigation menu is rendered correctly
  test('renders navigation menu', () => {
    render(<Home />);
    const navMenu = screen.getByRole('navigation');
    expect(navMenu).toBeInTheDocument();
  });

  // Test 2: Check if the main introduction section is rendered correctly
  test('renders main introduction section', () => {
    render(<Home />);
    const introSection = screen.getByTestId('main-intro');
    expect(introSection).toBeInTheDocument();
  });

  // Test 3: Check if the QR code section is rendered correctly
  test('renders QR code section', () => {
    render(<Home />);
    const qrSection = screen.getByTestId('qr-section');
    expect(qrSection).toBeInTheDocument();
  });

  // Test 4: Check if the product section is rendered correctly
  test('renders product section', () => {
    render(<Home />);
    const productSection = screen.getByTestId('product-section');
    expect(productSection).toBeInTheDocument();
  });

  // Test 5: Check if the footer section is rendered correctly
  test('renders footer section', () => {
    render(<Home />);
    const footerSection = screen.getByRole('contentinfo');
    expect(footerSection).toBeInTheDocument();
  });
});
