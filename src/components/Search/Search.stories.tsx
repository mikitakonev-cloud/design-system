import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: { placeholder: 'Search tasks...' },
};

export const Filled: Story = {
  args: { value: 'Design tokens', placeholder: 'Search tasks...' },
};

export const Disabled: Story = {
  args: { placeholder: 'Search tasks...', disabled: true },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Search
        value={value}
        placeholder="Search tasks..."
        onChange={setValue}
        onClear={() => setValue('')}
      />
    );
  },
};
