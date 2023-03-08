import { SelectInputProps } from '@components/SelectInput';

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
    defaultValue: options[1],
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
    direction: 'rtl',
  },
];
