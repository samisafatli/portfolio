import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import App from './App';

afterEach(() => { cleanup(); localStorage.clear(); });
it('switches all portfolio sections to Portuguese and remembers the choice', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'PT' }));
  expect(document.documentElement.lang).toBe('pt-BR');
  expect(localStorage.getItem('portfolio-language')).toBe('pt');
  expect(screen.getByRole('heading', { name: 'Experiência profissional' })).toBeInTheDocument();
  expect(screen.getByText('Jan. de 2025 — atual')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', { name: /Tecnologias/ }));
  expect(screen.getByText('Português (nativo)')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', { name: /Formação/ }));
  expect(screen.getByText('Bacharelado em Sistemas de Informação')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', { name: /Sobre e contato/ }));
  expect(screen.getByText('Quer trocar uma ideia ou falar sobre um projeto? Me chama.')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'EN' }));
  expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('en');
  fireEvent.click(screen.getByRole('button', { name: 'PT' }));
  cleanup();
  render(<App />);
  expect(screen.getByRole('button', { name: 'PT' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('heading', { name: 'Experiência profissional' })).toBeInTheDocument();
});
