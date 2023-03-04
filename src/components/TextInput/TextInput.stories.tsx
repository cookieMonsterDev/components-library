
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput, TextInputProps } from '.';

export default {
  title: 'Components/Input',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => <TextInput {...args} />;

export const input = Template.bind({});

input.args = {
  type: 'text',
  placeholder: 'Some text',
};
