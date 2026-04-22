import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: { label: 'Label', placeholder: 'Placeholder text', helperText: 'Supporting description' },
};

export const Filled: Story = {
  args: { label: 'Label', defaultValue: 'Input value', helperText: 'Supporting description' },
};

export const WithError: Story = {
  args: { label: 'Label', defaultValue: 'Invalid value', error: 'This field is required' },
};

export const Disabled: Story = {
  args: { label: 'Label', placeholder: 'Disabled', helperText: 'Not editable', disabled: true },
};

export const NoLabel: Story = {
  args: { placeholder: 'Enter text...' },
};
