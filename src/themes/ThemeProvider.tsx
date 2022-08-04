import {
    ThemeProvider as MuiThemeProvider,
    StyledEngineProvider,
} from "@mui/material/styles";
import { ReactNode } from "react";
import type { DefaultTheme } from "styled-components";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

export interface ThemeProviderProps {
    children: ReactNode;
    theme: DefaultTheme;
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
    return (
        <StyledEngineProvider injectFirst={true}>
            <StyledComponentsThemeProvider theme={theme}>
                <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
            </StyledComponentsThemeProvider>
        </StyledEngineProvider>
    );
}
