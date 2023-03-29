import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertPopUpPage } from './AlertPopUp.page';

export default {
  title: 'Pages/AlertPopUp',
  component: AlertPopUpPage,
} as ComponentMeta<typeof AlertPopUpPage>;

const Template: ComponentStory<typeof AlertPopUpPage> = () => <AlertPopUpPage />;

export const AlertPopUp = Template.bind({});