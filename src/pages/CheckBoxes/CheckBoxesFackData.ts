import {
  CheckBoxProps
} from '@components/CheckBox';

export const fakeCheckBoxes: CheckBoxProps[] = [
  {
    type: "checkbox",
    variant: "round",
  },
  {
    type: "checkbox",
    variant: "round",
    defaultChecked: true,
  },
  {
    type: "checkbox",
    variant: "square",
  },
  {
    type: "checkbox",
    variant: "square",
    defaultChecked: true,
  },
];

export const fakeRadioRound: CheckBoxProps[] = [
  {
    id: 'test1',
    name: 'Round',
    value: 'test1',
    type: "radio",
    variant: "round",
    defaultChecked: true
  },
  {
    id: 'test2',
    name: 'Round',
    value: 'test2',
    type: "radio",
    variant: "round",
  },
  {
    id: 'test2',
    name: 'Round',
    value: 'test2',
    type: "radio",
    variant: "round",
  },
];

export const fakeRadioSquare: CheckBoxProps[] = [
  {
    id: 'test4',
    name: 'Square',
    value: 'test4',
    type: "radio",
    variant: "square",
    defaultChecked: true
  },
  {
    id: 'test5',
    name: 'Square',
    value: 'test5',
    type: "radio",
    variant: "square",
  },
  {
    id: 'test6',
    name: 'Square',
    value: 'test6',
    type: "radio",
    variant: "square",
  },
];

export const fakeRadioToggle: CheckBoxProps[] = [
  {
    id: 'test7',
    name: 'Toggle',
    value: 'test7',
    type: "radio",
    variant: "toggle",
    defaultChecked: true
  },
  {
    id: 'test8',
    name: 'Toggle',
    value: 'test8',
    type: "radio",
    variant: "toggle",
  },
  {
    id: 'test9',
    name: 'Toggle',
    value: 'test9',
    type: "radio",
    variant: "toggle",
  },
];