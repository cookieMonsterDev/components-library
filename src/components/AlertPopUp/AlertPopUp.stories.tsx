import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertPopUp, AlertPopUpProps } from '.';

export default {
  title: 'Components/PopUp',
  component: AlertPopUp,
} as ComponentMeta<typeof AlertPopUp>;

const Template: ComponentStory<typeof AlertPopUp> = (args: AlertPopUpProps) => (
  <AlertPopUp {...args} />
);

export const popUp = Template.bind({});

popUp.args = {
  title: 'Вы  хотите увеличить количество?',
  message: 'Позиция уже существует в проекте.',
  acceptButtonText: 'Да, увеличить',
  rejectButtonText: 'Отменить',
  acceptButtonHandler: () => console.log('accept'),
  rejectButtonHandler: () => console.log('reject'),
  closeButtonHandler: () => console.log('close')
}
