import {
  CheckBoxProps,
  CheckBoxTypesEnum,
  CheckBoxVariantEnum,
} from '@components/CheckBox';

export const fakeCheckBoxes: CheckBoxProps[] = [
  {
    type: CheckBoxTypesEnum.checkbox,
    variant: CheckBoxVariantEnum.round,
  },
  {
    type: CheckBoxTypesEnum.checkbox,
    variant: CheckBoxVariantEnum.round,
    defaultChecked: true,
  },
  {
    type: CheckBoxTypesEnum.checkbox,
    variant: CheckBoxVariantEnum.square,
  },
  {
    type: CheckBoxTypesEnum.checkbox,
    variant: CheckBoxVariantEnum.square,
    defaultChecked: true,
  },
];

export const fakeRadioRound: CheckBoxProps[] = [
  {
    id: 'test1',
    name: 'Round',
    value: 'test1',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.round,
    defaultChecked: true
  },
  {
    id: 'test2',
    name: 'Round',
    value: 'test2',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.round,
  },
  {
    id: 'test2',
    name: 'Round',
    value: 'test2',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.round,
  },
];

export const fakeRadioSquare: CheckBoxProps[] = [
  {
    id: 'test4',
    name: 'Square',
    value: 'test4',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.square,
    defaultChecked: true
  },
  {
    id: 'test5',
    name: 'Square',
    value: 'test5',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.square,
  },
  {
    id: 'test6',
    name: 'Square',
    value: 'test6',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.square,
  },
];

export const fakeRadioToggle: CheckBoxProps[] = [
  {
    id: 'test7',
    name: 'Toggle',
    value: 'test7',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.toggle,
    defaultChecked: true
  },
  {
    id: 'test8',
    name: 'Toggle',
    value: 'test8',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.toggle,
  },
  {
    id: 'test9',
    name: 'Toggle',
    value: 'test9',
    type: CheckBoxTypesEnum.radio,
    variant: CheckBoxVariantEnum.toggle,
  },
];