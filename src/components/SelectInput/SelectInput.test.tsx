import { fireEvent, render, screen } from '@testing-library/react';
import { SelectInput } from '.';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

describe('Select component tests', () => {
  it(`should render a SelectInput component with placeholder`, () => {
    render(<SelectInput options={options} placeholder="Test Placeholder" />);
    const placeholder = screen.getByText('Test Placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it(`should render a SelectInput component with default value`, () => {
    render(<SelectInput options={options} defaultValue={options[0]} />);
    const placeholder = screen.getByText('Chocolate');
    expect(placeholder).toBeInTheDocument();
  });

  it(`should change value on change event`, () => {
    render(<SelectInput options={options} placeholder="Test Placeholder" />);
    const placeholder = screen.getByText('Test Placeholder');
    expect(placeholder).toBeInTheDocument();

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'strawberry' },
    });

    const value = screen.getByText('Strawberry');
    expect(value).toBeInTheDocument();
  });
});
