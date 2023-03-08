import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBoxesPage } from './CheckBoxes.page';

export default {
  title: 'Pages/CheckBoxes',
  component: CheckBoxesPage,
} as ComponentMeta<typeof CheckBoxesPage>;

const Template: ComponentStory<typeof CheckBoxesPage> = () => <CheckBoxesPage />;

export const CheckBoxes = Template.bind({});