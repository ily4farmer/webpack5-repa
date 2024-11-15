import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  argTypes: {
    className: {
      description: 'className компонента',
    },
    isActive: {
      description: 'Активирован спиннер или нет',
    },
    onClick: {
      description: 'Клик покомпоненту',
    },
  },
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Компонент Switch',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Ui/Form/Switch',
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
