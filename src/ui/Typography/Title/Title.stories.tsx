import { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta: Meta<typeof Title> = {
  argTypes: {
    children: {
      description: 'Контент компонента',
    },
    className: {
      description: 'кастомный класс для компонента',
    },
    onClick: {
      description: 'Клик по заголовку',
    },
    position: {
      description: 'позиция текста (слева, справа, центр)',
    },
    style: {
      description: 'inline style',
    },
    variant: {
      description: 'Вариант (h1, h2, h3)',
    },
  },
  component: Title,
  parameters: {
    docs: {
      description: {
        component: 'Компонент заголовка',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Ui/Typography/Title',
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Default',
    variant: 'h1',
  },
};

export const H1: StoryObj<typeof meta> = {
  args: {
    children: 'Вариант h1',
    variant: 'h1',
  },
};

export const H2: StoryObj<typeof meta> = {
  args: {
    children: 'Вариант h2',
    variant: 'h2',
  },
};

export const H3: StoryObj<typeof meta> = {
  args: {
    children: 'Вариант h3',
    variant: 'h3',
  },
};

export const Left: StoryObj<typeof meta> = {
  args: {
    children: 'Left',
    position: 'left',
  },
};

export const Right: StoryObj<typeof meta> = {
  args: {
    children: 'Right',
    position: 'right',
  },
};

export const Center: StoryObj<typeof meta> = {
  args: {
    children: 'Center',
    position: 'center',
  },
};
