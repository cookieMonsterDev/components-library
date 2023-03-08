import { render, screen } from '@testing-library/react';
import { Text, TextVariantsEnum } from '.';

describe('Text component tests', () => {

  it('should render a text componet with font "Heading_1" and tag "h1"', () => {
    render(<Text variant={TextVariantsEnum.Heading_1}>Heading_1</Text>);
    const textElement = screen.getByText('Heading_1');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H1');
    expect(textElement).toHaveClass('text_variant_Heading_1');
  });

  it('should render a text componet with font "Heading_2" and tag "h1"', () => {
    render(<Text variant={TextVariantsEnum.Heading_2}>Heading_2</Text>);
    const textElement = screen.getByText('Heading_2');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H1');
    expect(textElement).toHaveClass('text_variant_Heading_2');
  });

  it('should render a text componet with font "Heading_3" and tag "h1"', () => {
    render(<Text variant={TextVariantsEnum.Heading_3}>Heading_3</Text>);
    const textElement = screen.getByText('Heading_3');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H1');
    expect(textElement).toHaveClass('text_variant_Heading_3');
  });

  it('should render a text componet with font "Heading_4" and tag "h1"', () => {
    render(<Text variant={TextVariantsEnum.Heading_4}>Heading_4</Text>);
    const textElement = screen.getByText('Heading_4');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H1');
    expect(textElement).toHaveClass('text_variant_Heading_4');
  });

  it('should render a text componet with font "Heading_5" and tag "h1"', () => {
    render(<Text variant={TextVariantsEnum.Heading_5}>Heading_5</Text>);
    const textElement = screen.getByText('Heading_5');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H1');
    expect(textElement).toHaveClass('text_variant_Heading_5');
  });

  it('should render a text componet with font "Subtitle_M" and tag "h2"', () => {
    render(<Text variant={TextVariantsEnum.Subtitle_M}>Subtitle_M</Text>);
    const textElement = screen.getByText('Subtitle_M');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H2');
    expect(textElement).toHaveClass('text_variant_Subtitle_M');
  });

  it('should render a text componet with font "Subtitle_S" and tag "h3"', () => {
    render(<Text variant={TextVariantsEnum.Subtitle_S}>Subtitle_S</Text>);
    const textElement = screen.getByText('Subtitle_S');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H3');
    expect(textElement).toHaveClass('text_variant_Subtitle_S');
  });

  it('should render a text componet with font "Body_L" and tag "p"', () => {
    render(<Text variant={TextVariantsEnum.Body_L}>Body_L</Text>);
    const textElement = screen.getByText('Body_L');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveClass('text_variant_Body_L');
  });

  it('should render a text componet with font "Body_M" and tag "p"', () => {
    render(<Text variant={TextVariantsEnum.Body_M}>Body_M</Text>);
    const textElement = screen.getByText('Body_M');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveClass('text_variant_Body_M');
  });

  it('should render a text componet with font "Caption" and tag "p"', () => {
    render(<Text variant={TextVariantsEnum.Caption}>Caption</Text>);
    const textElement = screen.getByText('Caption');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveClass('text_variant_Caption');
  });
});
