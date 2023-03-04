import {
  TextInputProps
} from '@components/TextInput';

export const data: TextInputProps[] = [
  {
    type: 'text',
    placeholder: 'Введіть пошту',
  },
  {
    type: 'text',
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
  },
  {
    type: 'text',
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
    errorText: 'Введіть коректну пошту',
  },
  {
    type: 'text',
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
    errorText: 'Введіть коректну пошту',
    direction: 'rtl',
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
    value: 'Test_123',
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
    value: 'Test_123',
    errorText: 'Пароль занадто короткий',
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
    value: 'Test_123',
    errorText: 'Пароль занадто короткий',
    direction: 'rtl'
  },
];
