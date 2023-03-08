import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  CheckBox,
  CheckBoxProps,
  CheckBoxVariantEnum,
  CheckBoxTypesEnum,
} from '.';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['round', 'square', 'toggle'],
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['checkbox', 'radio'],
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args: CheckBoxProps) => (
  <CheckBox {...args} />
);

export const checkBox = Template.bind({});

checkBox.args = {
  id: 'test',
  name: 'check',
  defaultChecked: false,
  variant: CheckBoxVariantEnum.round,
  type: CheckBoxTypesEnum.checkbox,
};
