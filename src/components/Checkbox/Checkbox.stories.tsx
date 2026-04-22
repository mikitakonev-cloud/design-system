import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: { label: 'Checkbox label', helperText: 'Supporting description line' },
};

export const Checked: Story = {
  args: { checked: true, label: 'Checkbox label', helperText: 'Supporting description line' },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, label: 'Checkbox label', helperText: 'Supporting description line' },
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Checkbox label', helperText: 'Supporting description line' },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true, label: 'Checkbox label', helperText: 'Supporting description line' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox label="Unchecked" helperText="Default state" />
      <Checkbox checked label="Checked" helperText="Selected state" />
      <Checkbox indeterminate label="Indeterminate" helperText="Mixed state" />
      <Checkbox disabled label="Disabled" helperText="Not interactive" />
    </div>
  ),
};
