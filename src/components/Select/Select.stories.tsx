import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Select } from './Select';

const options = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 320, paddingBottom: 160 }}><Story /></div>],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { options, label: 'Team', placeholder: 'Select a team', helperText: 'Choose your team' },
};

export const WithValue: Story = {
  args: { options, label: 'Team', value: 'design' },
};

export const Disabled: Story = {
  args: { options, label: 'Team', placeholder: 'Select a team', disabled: true },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        options={options}
        value={value}
        label="Team"
        placeholder="Select a team"
        helperText="Choose your team"
        onChange={setValue}
      />
    );
  },
};
