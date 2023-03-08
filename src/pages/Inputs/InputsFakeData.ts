import { SelectInputProps } from '@components/SelectInput';
import { TextInputProps } from '@components/TextInput';

export const dataInput: TextInputProps[] = [
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
    helperText: 'Введіть коректну пошту',
    error: true,
  },
  {
    type: 'text',
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
    helperText: 'Введіть коректну пошту',
    direction: 'rtl',
    error: true,
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
    helperText: 'Пароль занадто короткий',
    error: true,
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
    value: 'Test_123',
    helperText: 'Пароль занадто короткий',
    direction: 'rtl',
    error: true,
  },
];

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const dataSelect: SelectInputProps[] = [
  {
    id: '1',
    placeholder: 'Виберіть десерт',
    options,
  },
  {
    id: '2',
    placeholder: 'Виберіть десерт',
    helperText: 'Виберіть дисерт до чаю!',
    options,
    defaultValue: options[1]
  },
  {
    id: '3',
    placeholder: 'Виберіть десерт',
    helperText: 'Виберіть дисерт до чаю!',
    options,
    error: true,
  },
  {
    id: '4',
    placeholder: 'Виберіть десерт',
    helperText: 'Виберіть дисерт до чаю!',
    options,
    error: true,
    direction: 'ltr',
  },
];
