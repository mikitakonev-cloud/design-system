import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

declare const meta: Meta<typeof TextInput>;
export default meta;
type Story = StoryObj<typeof TextInput>;
export declare const Default: Story;
export declare const Filled: Story;
export declare const WithError: Story;
export declare const Disabled: Story;
export declare const NoLabel: Story;
