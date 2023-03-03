import {
  TextInputProps,
  TextInputVariantEnum,
  TextInputDirectionEnum,
} from '@components/TextInput';

export const data: TextInputProps[] = [
  {
    type: TextInputVariantEnum.text,
    placeholder: 'Введіть пошту',
  },
  {
    type: TextInputVariantEnum.text,
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
  },
  {
    type: TextInputVariantEnum.text,
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
    errorText: 'Введіть коректну пошту',
  },
  {
    type: TextInputVariantEnum.text,
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
    errorText: 'Введіть коректну пошту',
    direction: TextInputDirectionEnum.rtl,
  },
  {
    type: TextInputVariantEnum.password,
    placeholder: 'Введіть пароль',
  },
  {
    type: TextInputVariantEnum.password,
    placeholder: 'Введіть пароль',
    value: 'Test_123',
  },
  {
    type: TextInputVariantEnum.password,
    placeholder: 'Введіть пароль',
    value: 'Test_123',
    errorText: 'Пароль занадто короткий',
  },
  {
    type: TextInputVariantEnum.password,
    placeholder: 'Введіть пароль',
    value: 'Test_123',
    errorText: 'Пароль занадто короткий',
    direction: TextInputDirectionEnum.rtl,
  },
];
