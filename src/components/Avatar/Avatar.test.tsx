import { fireEvent, render, screen } from '@testing-library/react';
import { Avatar } from '.';

describe('Button component tests', () => {
  it('should render an avatar component with text "AN" and size "md"', () => {
    render(<Avatar text="Anatolii" />);
    const avatar = screen.getByText('AN').closest('div');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('avatar_size_md');
  });

  it('should render an avatar component with text "AT" and size "sm"', () => {
    render(<Avatar text="Anatolii Toporkov" size="sm" />);
    const avatar = screen.getByText('AT').closest('div');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('avatar_size_sm');
  });

  it('should render an avatar component with text "GZ" and size "lg"', () => {
    render(<Avatar text="Good Zob)" size="lg" />);
    const avatar = screen.getByText('GZ').closest('div');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('avatar_size_lg');
  });

  it('avatar should display image when source passed', () => {
    const link =
      'https://lh3.googleusercontent.com/ogw/AAEL6sjuxRQiIx4N9uRQmooAbx6xtzkz0LsHq07qbZe8eA=s32-c-mo';
    render(<Avatar text="Anatolii Toporkov" src={link} alt="some-link" />);
    const avatar: HTMLImageElement = screen.getByAltText('some-link');
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain(link);
  });

  it('avatar should display text when source url incorrect', () => {
    const link = 'https://wrong-url';
    render(<Avatar text="Anatolii Toporkov" src={link} alt="some-link" />);
    setTimeout(() => {
      const avatar: HTMLImageElement = screen.getByAltText('some-link');
      const text = screen.getByText('AT');
      expect(avatar).not.toBeInTheDocument();
      expect(text).toBeInTheDocument();
    }, 500);
  });

  it('avatar component should fire handler onClick event', () => {
    const handler = jest.fn();
    render(<Avatar text="Anatolii Toporkov" onClick={handler} />);
    const avatar = screen.getByText('AT').closest('div')!;
    expect(avatar).toBeInTheDocument()
    fireEvent.click(avatar)
    expect(handler).toHaveBeenCalledTimes(1);
    fireEvent.click(avatar)
    fireEvent.click(avatar)
    expect(handler).toHaveBeenCalledTimes(3);
  });
});
