import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

// Mock the components to avoid complex rendering in tests
jest.mock('@/components/sections/hero', () => ({
  HeroSection: () => <div data-testid="hero-section">Hero Section</div>,
}));

jest.mock('@/components/sections/services', () => ({
  ServicesSection: () => (
    <div data-testid="services-section">Services Section</div>
  ),
}));

jest.mock('@/components/sections/projects', () => ({
  ProjectsSection: () => (
    <div data-testid="projects-section">Projects Section</div>
  ),
}));

describe('Home Page', () => {
  it('renders hero section', () => {
    render(<HomePage />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });

  it('renders services section', () => {
    render(<HomePage />);
    expect(screen.getByTestId('services-section')).toBeInTheDocument();
  });

  it('renders projects section', () => {
    render(<HomePage />);
    expect(screen.getByTestId('projects-section')).toBeInTheDocument();
  });

  it('renders all sections in correct order', () => {
    render(<HomePage />);
    const sections = [
      screen.getByTestId('hero-section'),
      screen.getByTestId('services-section'),
      screen.getByTestId('projects-section'),
    ];

    sections.forEach((section) => {
      expect(section).toBeInTheDocument();
    });
  });
});
