import { AppBar, Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledLogo = styled.img`
    /* height: 2rem; */
    max-width: 192px;
`;

export const StyledMobileLogo = styled.img`
    height: 2rem;
    margin-right: 2rem;

    @media (min-width: 900px) {
        display: none;
    }

    @media (min-width: 0px) {
        display: block;
    }
`;

export const StyledAppBar = styled(AppBar)`
    background-color: transparent;

    padding: 30px 12px;

    .MuiContainer-root {
        max-width: 1332px;
    }
`;

export const StyledButtons = styled(Box)`
    flex-grow: 0;
    align-items: center;

    button {
        text-transform: none;
    }

    .MuiButton-outlined {
        color: white;
        border-color: white;
        border-radius: 12px;

        margin-right: 1rem;
    }
    .MuiButton-contained {
        background-color: white;

        border-radius: 12px;
    }
`;

export const StyledCommandText = styled(Typography)`
    color: #6b7280;

    font-size: 0.875rem;
    line-height: 1.25rem;

    margin-right: 1.5rem;

    kbd {
        color: #9ca3af;
        border: 1px solid #4b5563;
        border-radius: 0.25rem;

        padding: 0.25rem;
    }
`;

export const StyledMobileMenu = styled(Box)`
    position: absolute;
    width: 100%;
    left: 0;
    top: 65px;
    background-color: rgba(28, 22, 46, 0.8);
    backdrop-filter: blur(12px);
    border-radius: 12px;

    .MuiCollapse-root {
        width: 100%;
    }
`;
