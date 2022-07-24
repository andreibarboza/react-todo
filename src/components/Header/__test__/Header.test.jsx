import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import { Header } from "../index";

describe('Header::', () => {
  it('should render text title', () => {
    render(<Header />)

    const spanTitle = screen.getByText('Welcome to your To Do list!');
    expect(spanTitle).toBeInTheDocument();
  });

  it('should render textarea element', () => {
    render(<Header />)

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });

  it('should render add button element', () => {
    render(<Header />)

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});