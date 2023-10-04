import React from 'react';
import CapOneTheme from '../src/theme';
import { ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/react';
import '../src/App.css';
import { BrowserRouter } from 'react-router-dom';

export const withMuiTheme = (Story) => (
    <ThemeProvider theme={CapOneTheme}>
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    </ThemeProvider>
);

export const decorators = [withMuiTheme];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;
