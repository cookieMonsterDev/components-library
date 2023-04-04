import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToastNotification, ToastNotificationProps } from '.';

export default {
  title: 'Components/ToastNotification',
  component: ToastNotification,
} as ComponentMeta<typeof ToastNotification>;

const Template: ComponentStory<typeof ToastNotification> = (
  args: ToastNotificationProps
) => <ToastNotification {...args} />;

export const toastNotification = Template.bind({});

toastNotification.args = {
  title: 'В список позиций были внесены изменения, сформировать новую версию?',
  message: 'Добавлена новая позиция, замена позиции',
  closeButtonHandler: () => console.log('close'),
  variant: 'change'
};
