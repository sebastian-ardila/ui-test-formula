import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../../../components/Dropdown';

describe('Dropdown Component', () => {
    const mockOptions = ['List', 'Grid'];
    const defaultOption = 'List';
    const mockOnSelect = jest.fn();

    test('renders with default option', () => {
        render(<Dropdown options={mockOptions} onSelect={mockOnSelect} defaultOption={defaultOption} />);
        expect(screen.getByText(mockOptions[0])).toBeInTheDocument();
    });

    test('toggles dropdown on header click', () => {
        render(<Dropdown options={mockOptions} onSelect={mockOnSelect} />);
        const dropdownHeader = screen.getByTestId('dropdown-header');
        fireEvent.click(dropdownHeader);
        expect(screen.getByRole('list')).toBeInTheDocument();
        fireEvent.click(dropdownHeader);
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    test('selects option on click', () => {
        render(<Dropdown options={mockOptions} onSelect={mockOnSelect} />);
        fireEvent.click(screen.getByTestId('dropdown-header'));
        const option = screen.getByText(mockOptions[1]);
        fireEvent.click(option);
        expect(mockOnSelect).toHaveBeenCalledWith(mockOptions[1]);
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
});
