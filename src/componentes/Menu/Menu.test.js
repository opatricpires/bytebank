import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);

  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
  render(<Menu />);

  const listaDeLinks = screen.getAllByRole('link');
  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve rendeziar um link oara Extrato', () => {
  render(<Menu />);

  const listaExtrato = screen.queryByText('Extrato');
  expect(listaExtrato).not.toBeInTheDocument();
});
