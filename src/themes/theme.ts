import { createTheme } from '@mui/material/styles';
import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    ...createTheme({
        palette: {
            mode: 'dark',
        },
    }),

    intensity: 0.45
};
