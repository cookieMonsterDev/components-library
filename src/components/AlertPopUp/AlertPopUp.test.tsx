import { fireEvent, render, screen } from '@testing-library/react';
import { AlertPopUp } from '.';

describe('AlertPopUp component tests', () => {
  it(`should render a AlertPopUp component with title, message and without buttons`, () => {
    render(
      <AlertPopUp
        title="Test title"
        message="Test message"
      />
    );
    const button = screen.queryByRole('button');
    const title = screen.getByText('Test title');
    const message = screen.getByText('Test message');
    expect(button).not.toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it(`should render a AlertPopUp component with close button`, () => {
    const handler = jest.fn();
    render(
      <AlertPopUp
        title="Test title"
        message="Test message"
        closeButtonHandler={handler}
      />
    );
    const button = screen.queryByRole('closebutton')!;
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(1);
    fireEvent.click(button)
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(3);
  });

  it(`should render a AlertPopUp component with accept button`, () => {
    const handler = jest.fn();
    render(
      <AlertPopUp
        title="Test title"
        message="Test message"
        acceptButtonText='Accept'
        acceptButtonHandler={handler}
      />
    );
    const button = screen.getByRole('button', {name: 'Accept'});
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(1);
    fireEvent.click(button)
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(3);
  });

  it(`should render a AlertPopUp component with accept and reject buttons`, () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    render(
      <AlertPopUp
        title="Test title"
        message="Test message"
        acceptButtonText='Accept'
        acceptButtonHandler={handler1}
        rejectButtonText='Reject'
        rejectButtonHandler={handler2}
      />
    );
    const acceptButton = screen.getByRole('button', {name: 'Accept'});
    const rejectButton = screen.getByRole('button', {name: 'Reject'});
    expect(acceptButton).toBeInTheDocument();
    expect(rejectButton).toBeInTheDocument();
    fireEvent.click(acceptButton)
    expect(handler1).toHaveBeenCalledTimes(1);
    fireEvent.click(rejectButton)
    fireEvent.click(rejectButton)
    expect(handler2).toHaveBeenCalledTimes(2);
  });
});
