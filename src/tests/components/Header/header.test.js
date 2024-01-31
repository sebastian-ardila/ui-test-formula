import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header/index';
import { AppProvider } from '../../../AppProvider';

const mockScreenWidth = (width) => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width
    });
    window.dispatchEvent(new Event('resize'));
};

test('renders with correct title', () => {
    render(<AppProvider><Header /></AppProvider>);
    expect(screen.getByText('Previous Rulings')).toBeInTheDocument();
});

describe('font size changes based on screen size', () => {
    test('font size is correct for small screen', () => {
        mockScreenWidth(800);
        render(<AppProvider><Header /></AppProvider>);
        const titleElement = screen.getByText('Previous Rulings');
        expect(titleElement).toHaveStyle(`fontSize: 24px`);
    });

    test('font size is correct for large screen', () => {
        mockScreenWidth(1200);
        render(<AppProvider><Header /></AppProvider>);
        const titleElement = screen.getByText('Previous Rulings');
        expect(titleElement).toHaveStyle(`fontSize: 45px`);
    });
});
