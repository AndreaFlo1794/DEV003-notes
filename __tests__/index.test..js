import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Index } from '../src/pages/index';
import { withRouter } from 'next/router';

describe('Index page', () => {
    it('renders welcome text', () => {
        render(withRouter(<Index />));
        expect(screen.queryByText('Welcome to ')).toBeInTheDocument();
    });
});