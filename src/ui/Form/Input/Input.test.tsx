import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
  const onBlurMock = jest.fn();
  const onChangeMock = jest.fn();
  const onFocusMock = jest.fn();

  it('Рендер компонента', () => {
    render(<Input />);

    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByTestId('input-disabled')).toBeInTheDocument();
    expect(screen.getByTestId('input-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('input-element')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toHaveClass('input__not-loading');
  });

  it('className props', () => {
    render(<Input className="test-className" />);

    expect(screen.getByTestId('input-wrapper')).toHaveClass('test-className');
  });

  it('isDisabled props', () => {
    render(<Input isDisabled />);

    expect(screen.getByTestId('input-disabled')).toHaveClass('input__wrapper-disabled');
  });

  it('isError props', () => {
    render(<Input isError />);

    expect(screen.getByTestId('input-wrapper')).toHaveClass('input__wrapper-error');
  });

  it('isLoading props', () => {
    render(<Input isError />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('label props', () => {
    render(<Input label="label" />);

    expect(screen.getByTestId('input-label')).toBeInTheDocument();
    expect(screen.getByText(/label/i)).toBeInTheDocument();
  });

  it('onBlur props', () => {
    render(<Input onBlur={onBlurMock} />);

    fireEvent.blur(screen.getByTestId('input-element'));
    fireEvent.blur(screen.getByTestId('input-element'));
    expect(onBlurMock).toHaveBeenCalledTimes(2);
  });

  it('onChange props', () => {
    render(<Input onChange={onChangeMock} value="" />);

    const inputElement = screen.getByTestId('input-element');

    fireEvent.change(inputElement, { target: { value: 'New value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);

    fireEvent.change(inputElement, { target: { value: 'value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });

  it('onFocus props', () => {
    render(<Input onFocus={onFocusMock} />);

    fireEvent.focus(screen.getByTestId('input-element'));
    fireEvent.focus(screen.getByTestId('input-element'));
    expect(onFocusMock).toHaveBeenCalledTimes(2);
  });

  it('Placeholder props', () => {
    render(<Input placeholder="placeholder" />);

    expect(screen.getByTestId('input-element')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });

  it('style props', () => {
    render(<Input style={{ backgroundColor: 'gray' }} />);

    expect(screen.getByTestId('input-wrapper')).toHaveStyle('background-color: gray');
  });

  // Варианты type
  it('type=text', () => {
    render(<Input type="text" />);

    expect(screen.getByTestId('input-element')).toHaveAttribute('type', 'text');
  });

  it('type=number', () => {
    render(<Input type="number" />);

    expect(screen.getByTestId('input-element')).toHaveAttribute('type', 'number');
  });

  it('type=password', () => {
    render(<Input type="password" />);

    expect(screen.getByTestId('input-element')).toHaveAttribute('type', 'password');
  });

  it('type=email', () => {
    render(<Input type="email" />);

    expect(screen.getByTestId('input-element')).toHaveAttribute('type', 'email');
  });
});
