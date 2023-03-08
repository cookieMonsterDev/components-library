import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TypographyPage } from './Typography.page';

export default {
  title: 'Pages/Typography',
  component: TypographyPage,
} as ComponentMeta<typeof TypographyPage>;

const Template: ComponentStory<typeof TypographyPage> = () => <TypographyPage />;

export const typography = Template.bind({});