import { fireEvent, render, screen } from '@testing-library/react';
import { Button, ButtonVariantEnum } from '.';

describe('Button component tests', () => {
  it(`should render a button component with variant "primary", 
    size "md", width "content", iconPosition "left" by default`, () => {
    render(<Button text="Some Button" />);
    const button = screen.getByRole('button', { name: 'Some Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'button button_variant_primary button_size_md button_width_content button_icon_position_left'
    );
  });

  it(`should render a button component with variant "secondary", 
    size "sm", width "full", iconPosition "rigth"`, () => {
    render(
      <Button
        text="Some Button"
        variant={ButtonVariantEnum.secondary}
        size="sm"
        width="full"
        iconPosition="right"
      />
    );
    const button = screen.getByRole('button', { name: 'Some Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'button button_variant_secondary button_size_sm button_width_full button_icon_position_right'
    );
  });

  it(`should render a button component with variant "outlined", 
    size "lg"`, () => {
    render(
      <Button
        text="Some Button"
        variant={ButtonVariantEnum.outlined}
        size="lg"
      />
    );
    const button = screen.getByRole('button', { name: 'Some Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'button button_variant_outlined button_size_lg button_width_content button_icon_position_left'
    );
  });

  it(`should render a button component with variant "text"`, () => {
    render(<Button text="Some Button" variant={ButtonVariantEnum.text} />);
    const button = screen.getByRole('button', { name: 'Some Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'button button_variant_text button_size_md button_width_content button_icon_position_left'
    );
  });


  it(`button component should fire handler onClick event`, () => {
    const handler = jest.fn();
    render(<Button text="Some Button" onClick={handler} />);
    const button = screen.getByRole('button', { name: 'Some Button' });
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(1);
    fireEvent.click(button)
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(3);
  });
});
