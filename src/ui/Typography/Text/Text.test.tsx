import { fireEvent, render, screen } from '@testing-library/react';

import { Text } from './Text';

describe('Title', () => {
  const mockFunc = jest.fn();

  it('Рендер компонента', () => {
    render(<Text />);

    expect(screen.getByTestId('text')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('text')).toHaveClass('text__left');
  });

  it('Контент компонета', () => {
    render(<Text>Заголовок</Text>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
  });

  it('className компонета', () => {
    render(<Text className="test-class" />);

    expect(screen.getByTestId('text')).toHaveClass('test-class');
    expect(screen.getByTestId('text')).toHaveClass('text__left');
  });

  it('style компонета', () => {
    render(<Text style={{ backgroundColor: 'gray' }} />);

    expect(screen.getByTestId('text')).toHaveStyle('background-color: gray');
    expect(screen.getByTestId('text')).toHaveClass('text__left');
  });

  it('функция onClick', () => {
    render(<Text onClick={mockFunc} />);

    fireEvent.click(screen.getByTestId('text'));
    fireEvent.click(screen.getByTestId('text'));
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  // Варианты заголовка
  it('Вариант text', () => {
    render(<Text variant="text" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('text')).toHaveClass('text__left');
  });

  it('Вариант paragraph', () => {
    render(<Text variant="paragraph" />);

    expect(screen.getByRole('paragraph')).toBeInTheDocument();
    expect(screen.getByTestId('text')).toHaveClass('text__left');
  });

  // Варианты позиции
  it('Вариант left', () => {
    render(<Text position="left" />);

    expect(screen.getByTestId('text')).toHaveClass('text__left');
  });

  it('Вариант right', () => {
    render(<Text position="right" />);

    expect(screen.getByTestId('text')).toHaveClass('text__right');
  });

  it('Вариант center', () => {
    render(<Text position="center" />);

    expect(screen.getByTestId('text')).toHaveClass('text__center');
  });
});
