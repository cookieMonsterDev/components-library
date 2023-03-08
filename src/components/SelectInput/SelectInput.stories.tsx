import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectInput, SelectInputProps } from '.';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args: SelectInputProps) => (
  <SelectInput {...args} />
);

export const selectInput = Template.bind({});

selectInput.args = {
  options,
  helperText: 'Select your value',
  error: false,
};
