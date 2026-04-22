import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Unselected: Story = {
  args: { label: 'Radio label', helperText: 'Helper text' },
};

export const Selected: Story = {
  args: { selected: true, label: 'Radio label', helperText: 'Helper text' },
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Radio label', helperText: 'Helper text' },
};

export const DisabledSelected: Story = {
  args: { disabled: true, selected: true, label: 'Radio label', helperText: 'Helper text' },
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <RadioButton name="group" value="a" selected label="Option A" helperText="First option" />
      <RadioButton name="group" value="b" label="Option B" helperText="Second option" />
      <RadioButton name="group" value="c" label="Option C" helperText="Third option" />
    </div>
  ),
};
