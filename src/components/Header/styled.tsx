import { AppBar, Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledLogo = styled.img`
    height: 2rem;

    @media (min-width: 900px) {
        display: block;
    }

    @media (min-width: 0px) {
        display: none;
    }
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
`;

export const StyledAvatar = styled(Button)`
    border: 1px solid #4a4e60;
    background-color: #1f2937a1;

    display: flex;
    align-items: center;

    p {
        margin-right: 1rem;
        font-weight: 700;
        font-size: 0.9rem;

        color: white;

        text-transform: none;
    }

    .MuiAvatar-root {
        width: 30px;
        height: 30px;
    }

    @media (min-width: 0px) {
        padding: 0.5rem;
        border-radius: 50%;
        min-width: unset;
    }

    @media (min-width: 900px) {
        padding: 0.5rem 0.5rem 0.5rem 1.5rem;
        border-radius: 30px;
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
    backdrop-filter: blur(4px);
    background-color: rgb(28 22 46 / 65%);
    border-radius: 30px;

    .MuiCollapse-root {
        width: 100%;
    }
`;
