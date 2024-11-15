import { render, screen } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('Рендер компонента', () => {
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toHaveClass('spinner__default');
  });

  it('className компонета', () => {
    render(<Spinner className="test-class" />);

    expect(screen.getByTestId('spinner')).toHaveClass('test-class');
    expect(screen.getByTestId('spinner')).toHaveClass('spinner__default');
  });

  // Варианты спиннера
  it('Вариант medium', () => {
    render(<Spinner size="medium" />);

    expect(screen.getByTestId('spinner')).toHaveClass('spinner__default');
  });

  it('Вариант large', () => {
    render(<Spinner size="large" />);

    expect(screen.getByTestId('spinner')).toHaveClass('spinner__large');
  });

  it('Вариант small', () => {
    render(<Spinner size="small" />);

    expect(screen.getByTestId('spinner')).toHaveClass('spinner__small');
  });
});
