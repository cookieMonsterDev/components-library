
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput, TextInputProps, TextInputVariantEnum } from '.';

export default {
  title: 'Components/Input',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => <TextInput {...args} />;

export const input = Template.bind({});

input.args = {
  type: TextInputVariantEnum.text,
  placeholder: 'Some text',
};
