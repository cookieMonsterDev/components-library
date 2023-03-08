import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputsPage } from './Inputs.page';

export default {
  title: 'Pages/SelectInputs',
  component: InputsPage,
} as ComponentMeta<typeof InputsPage>;

const Template: ComponentStory<typeof InputsPage> = () => <InputsPage />;

export const SelectInputs = Template.bind({});