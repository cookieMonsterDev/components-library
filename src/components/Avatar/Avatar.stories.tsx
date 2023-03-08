import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const avatar = Template.bind({});

avatar.args = {
  text: 'My Name',
  src: "https://sth"
};
