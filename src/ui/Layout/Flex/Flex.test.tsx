import { fireEvent, render, screen } from '@testing-library/react';

import { Flex } from './Flex';

describe('Flex', () => {
  const mockFunc = jest.fn();

  it('Рендер компонента', () => {
    render(<Flex />);

    expect(screen.getByTestId('flex')).toBeInTheDocument();
  });

  it('Контент компонета', () => {
    render(<Flex>Flex</Flex>);

    expect(screen.getByTestId('flex')).toBeInTheDocument();
    expect(screen.getByText(/Flex/i)).toBeInTheDocument();
  });

  it('функция onClick', () => {
    render(<Flex onClick={mockFunc}>Flex</Flex>);

    fireEvent.click(screen.getByTestId('flex'));
    fireEvent.click(screen.getByTestId('flex'));
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  it('style компонета', () => {
    render(<Flex style={{ backgroundColor: 'gray' }}>Flex</Flex>);

    expect(screen.getByText(/Flex/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveStyle('background-color: gray');
  });

  it('className компонета', () => {
    render(<Flex className="test-class">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('test-class');
  });

  // варианты alignItems
  it('вариант alignItems: center', () => {
    render(<Flex alignItems="center">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__ai-center');
  });

  it('вариант alignItems: flex-end', () => {
    render(<Flex alignItems="flex-end">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__ai-end');
  });

  it('вариант alignItems: flex-start', () => {
    render(<Flex alignItems="flex-start">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__ai-start');
  });

  // варианты flexDirection
  it('вариант flexDirection: center', () => {
    render(<Flex flexDirection="column">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__fd-column');
  });

  it('вариант flexDirection: column-reverse', () => {
    render(<Flex flexDirection="column-reverse">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__fd-column-reverse');
  });

  it('вариант flexDirection: row', () => {
    render(<Flex flexDirection="row">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__fd-row');
  });

  it('вариант flexDirection: row-reverse', () => {
    render(<Flex flexDirection="row-reverse">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__fd-row-reverse');
  });

  // варианты justifyContent
  it('вариант justifyContent: flex-start', () => {
    render(<Flex justifyContent="flex-start">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__jc-flex-start');
  });

  it('вариант justifyContent: center', () => {
    render(<Flex justifyContent="center">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__jc-center');
  });

  it('вариант justifyContent: flex-end', () => {
    render(<Flex justifyContent="flex-end">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__jc-flex-end');
  });

  it('вариант justifyContent: space-between', () => {
    render(<Flex justifyContent="space-between">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__jc-space-between');
  });

  it('вариант justifyContent: space-around', () => {
    render(<Flex justifyContent="space-around">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__jc-space-around');
  });

  it('вариант justifyContent: space-evenly', () => {
    render(<Flex justifyContent="space-evenly">Заголовок</Flex>);

    expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    expect(screen.getByTestId('flex')).toHaveClass('flex__jc-space-evenly');
  });
});
