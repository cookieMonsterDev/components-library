import { fireEvent, render, screen } from '@testing-library/react';
import { CheckBox } from '.';

describe('CheckBox component tests', () => {
  it('should render a checkbox component with variant "round"', () => {
    render(<CheckBox variant="round" name="custom-checkbox" />);
    const checkBoxWrapper = screen.getByRole('checkbox').closest('div');
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass('checkBox_variant_round');
  });

  it('should render a checkbox component with variant "square"', () => {
    render(<CheckBox variant="square" name="custom-checkbox" />);
    const checkBoxWrapper = screen.getByRole('checkbox').closest('div');
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass('checkBox_variant_square');
  });

  it('should render a checkbox component with variant "toggle"', () => {
    render(<CheckBox variant="toggle" name="custom-checkbox" />);
    const checkBoxWrapper = screen.getByRole('checkbox').closest('div');
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass('checkBox_variant_toggle');
  });

  it('should render a checkbox with defaultChecked', () => {
    render(
      <CheckBox variant="round" name="custom-checkbox" defaultChecked={true} />
    );
    const checkBox: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBox.checked).toEqual(true);
  });

  it('checkbox component should change to "checked" after click', () => {
    render(<CheckBox variant="round" name="custom-checkbox" />);
    const checkBoxWrapper = screen.getByRole('checkbox').closest('div');
    const checkBox: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass('checkBox_variant_round');
    fireEvent.click(checkBox);
    expect(checkBox.checked).toEqual(true);
    fireEvent.click(checkBox);
    expect(checkBox.checked).toEqual(false);
  });
});
