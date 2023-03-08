import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput, TextInputProps } from '.';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
  <TextInput {...args} />
);

export const textInput = Template.bind({});

textInput.args = {
  type: 'text',
  placeholder: 'Some text',
  error: false,
  helperText: 'test'
};
