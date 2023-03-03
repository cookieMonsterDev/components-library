import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputsPage } from './Inputs.page';

export default {
  title: 'Pages/Inputs',
  component: InputsPage,
} as ComponentMeta<typeof InputsPage>;

const Template: ComponentStory<typeof InputsPage> = (args) => <InputsPage />;

export const Inputs = Template.bind({});
