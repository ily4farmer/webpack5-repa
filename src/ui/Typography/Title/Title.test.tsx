import { fireEvent, render, screen } from '@testing-library/react';

import { Title } from './Title';

describe('Title', () => {
  const mockFunc = jest.fn();

  it('Рендер компонента', () => {
    render(<Title />);

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('title__h1');
    expect(screen.getByTestId('title')).toHaveClass('title__left');
  });

  it('Контент компонета', () => {
    render(<Title>Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
  });

  it('className компонета', () => {
    render(<Title className="test-class">Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('test-class');
    expect(screen.getByTestId('title')).toHaveClass('title__h1');
    expect(screen.getByTestId('title')).toHaveClass('title__left');
  });

  it('style компонета', () => {
    render(<Title style={{ backgroundColor: 'gray' }}>Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveStyle('background-color: gray');
    expect(screen.getByTestId('title')).toHaveClass('title__h1');
    expect(screen.getByTestId('title')).toHaveClass('title__left');
  });

  it('функция onClick', () => {
    render(<Title onClick={mockFunc}>Заголовок</Title>);

    fireEvent.click(screen.getByTestId('title'));
    fireEvent.click(screen.getByTestId('title'));
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  // Варианты заголовка
  it('Вариант h1', () => {
    render(<Title variant="h1">Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('title__h1');
    expect(screen.getByTestId('title')).toHaveClass('title__left');
  });

  it('Вариант h2', () => {
    render(<Title variant="h2">Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('title__h2');
    expect(screen.getByTestId('title')).toHaveClass('title__left');
  });

  it('Вариант h3', () => {
    render(<Title variant="h3">Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('title__h3');
    expect(screen.getByTestId('title')).toHaveClass('title__left');
  });

  // Варианты позиции
  it('Вариант left', () => {
    render(<Title position="left">Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('title__h1');
    expect(screen.getByTestId('title')).toHaveClass('title__left');
  });

  it('Вариант right', () => {
    render(<Title position="right">Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('title__h1');
    expect(screen.getByTestId('title')).toHaveClass('title__right');
  });

  it('Вариант center', () => {
    render(<Title position="center">Заголовок</Title>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('title__h1');
    expect(screen.getByTestId('title')).toHaveClass('title__center');
  });
});
