import type { Meta, StoryObj } from '@storybook/react';
import SelectSearch  from './index';

const meta: Meta<typeof SelectSearch> = {
  title: 'SelectSearch',
  component: SelectSearch,
};

export default meta;
type Story = StoryObj<typeof SelectSearch>;

export const Primary: Story = {
  args: {
    placeholder: 'Select',
    label: 'Select',
    data: [
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erik'},
        {name: 'Erikss'},
        {name: 'Jack'},
    ],
  },
  render: (args) => (<SelectSearch {...args}/>)
};


