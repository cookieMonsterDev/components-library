import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextProps, TextVariantsEnum } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'Heading_1',
        'Heading_2',
        'Heading_3',
        'Heading_4',
        'Heading_5',
        'Subtitle_M',
        'Subtitle_S',
        'Body_L',
        'Body_M',
        'Caption',
      ],
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: TextProps) => (
  <Text {...args} />
);

export const text = Template.bind({});

text.args = {
  children: 'Test text',
};
