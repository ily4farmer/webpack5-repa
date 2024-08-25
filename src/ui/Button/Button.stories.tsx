import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  argTypes: {
    children: {
      description: 'Контент компонента',
    },
    size: {
      description: 'Размер',
    },
    variant: {
      description: 'Вариант',
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Компонент кнопки',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Ui/Form/Button',
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Default',
    size: 'medium',
    variant: 'default',
  },
};

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: 'Primary',
    size: 'medium',
    variant: 'primary',
  },
};

export const Ghost: StoryObj<typeof meta> = {
  args: {
    children: 'Ghost',
    size: 'medium',
    variant: 'ghost',
  },
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    children: 'Disabled',
    isDisabled: true,
    size: 'medium',
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    children: 'Large',
    size: 'large',
    variant: 'default',
  },
};

export const Medium: StoryObj<typeof meta> = {
  args: {
    children: 'Medium',
    size: 'medium',
    variant: 'default',
  },
};

export const Small: StoryObj<typeof meta> = {
  args: {
    children: 'Small',
    size: 'small',
    variant: 'default',
  },
};
