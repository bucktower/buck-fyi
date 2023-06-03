import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ContactCard } from '@/components/ContactCard';

describe('ContactCard', () => {
  it('renders', () => {
    render(<ContactCard />);

    const myText = screen.getByText('Software Engineer');

    expect(myText).toBeInTheDocument();
  });
});
