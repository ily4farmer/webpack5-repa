import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('Рендер компонента', () => {
    render(<Button />);

    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__default');
    expect(screen.getByTestId('button')).toHaveClass('button__medium');
    expect(screen.getByTestId('button-loader')).toHaveClass('button__loading-not');
    expect(screen.getByTestId('button-loader')).toHaveClass('button__loading-not');
  });

  it('Контент компонета', () => {
    render(<Button>Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
  });

  // Варианты кнопки
  it('Вариант default', () => {
    render(<Button variant="default">Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__default');
  });

  it('Вариант primary', () => {
    render(<Button variant="primary">Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__primary');
  });

  it('Вариант ghost', () => {
    render(<Button variant="ghost">Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__ghost');
  });

  it('Вариант disabled', () => {
    render(<Button isDisabled>Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__disabled');
  });

  it('Вариант isLoading', () => {
    render(<Button isLoading>Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button-loader')).toHaveClass('button__loading');
  });

  // Размеры кнопки
  it('Вариант small', () => {
    render(<Button size="small">Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__small');
  });

  it('Вариант medium', () => {
    render(<Button size="medium">Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__medium');
  });

  it('Вариант large', () => {
    render(<Button size="large">Кнопка</Button>);

    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveClass('button__large');
  });
});
