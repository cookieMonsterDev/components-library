import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateInput, DateInputProps } from '.';

export default {
  title: 'Components/DateInput',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args: DateInputProps) => {
  const [date, setDate] = useState(new Date())

  return (<DateInput {...args} value={date} onChange={(date) => setDate(date)}/>)
}

export const dateInput = Template.bind({});

dateInput.args = {
  placeholder: 'Some text',
  error: false,
  helperText: 'test'
};
