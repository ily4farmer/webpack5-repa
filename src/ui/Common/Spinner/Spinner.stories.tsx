import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  argTypes: {
    size: {
      description: 'Размер спиннера',
    },
  },
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'Компонент спиннера',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Ui/Spinner',
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const Medium: StoryObj<typeof meta> = {
  args: {
    size: 'medium',
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    size: 'large',
  },
};

export const Small: StoryObj<typeof meta> = {
  args: {
    size: 'small',
  },
};
