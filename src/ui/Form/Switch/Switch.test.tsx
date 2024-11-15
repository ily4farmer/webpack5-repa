import { fireEvent, render, screen } from '@testing-library/react';

import { Switch } from './Switch';

describe('Switch', () => {
  const mockFunc = jest.fn();

  it('Рендер компонента', () => {
    render(<Switch />);

    expect(screen.getByTestId('switch')).toBeInTheDocument();
    expect(screen.getByTestId('switch')).toHaveClass('switch');
  });

  it('className props', () => {
    render(<Switch className="test-class" />);

    expect(screen.getByTestId('switch')).toHaveClass('test-class');
    expect(screen.getByTestId('switch')).toHaveClass('switch');
  });

  // Варианты спиннера
  it('isActive props', () => {
    render(<Switch isActive />);

    expect(screen.getByTestId('switch')).toHaveClass('switch');
    expect(screen.getByTestId('switch')).toHaveClass('switch__active');
  });

  it('onClick props', () => {
    render(<Switch onClick={mockFunc} />);

    fireEvent.click(screen.getByTestId('switch'));
    fireEvent.click(screen.getByTestId('switch'));
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });
});
