import { Grid, Tab, Tabs, TextField } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledContainer = styled.div`
    padding-top: 70px;
`;

export const StyledSection = styled.section`
    position: relative;

    padding-bottom: 80px;
    padding-left: 3rem;
    padding-right: 3rem;

    background-color: white;

    &:nth-child(1) {
        background-color: transparent;
        padding: 0;
    }
    &:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:last-child {
        background-color: transparent;
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
`;

export const SectionBackground = styled.img`
    position: absolute;
    left: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 0;
    width: 100%;
`;

export const StyledSearchBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: auto;

    position: relative;
    z-index: 1;

    padding: 100px 0 250px 0;

    h3 {
        background-image: linear-gradient(90deg, #df84ff, #9ed6ff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const StyledSearchInput = styled(TextField)`
    margin: 50px 0;

    .MuiInputBase-root {
        border-radius: 30px;
        background-color: white;
        color: #6b7280;
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: white;
        }
    }

    svg {
        color: #6b7280;
    }
`;

export const StyledCircleBody = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

export const StyledServices = styled(Grid)`
    max-width: 1440px;

    justify-content: center;

    margin-top: -120px;
`;

export const StyledTabs = styled(Tabs)`
    .MuiTabs-indicator {
        display: none;
    }
`;

export const StyledTab = styled(Tab)`
    color: black;
    text-transform: none;
    min-height: 20px;
    padding: 10px 16px;

    &.Mui-selected {
        color: white;
        background-color: ${indigo[600]};
        border-radius: 30px;
    }
`;

export const StyledTabContainer = styled(Box)`
    display: flex;
    justify-content: center;

    margin: 1rem 0;
`;

export const StyledSupportTitle = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0.5rem;

    h6 {
        font-size: 1.2rem;
        line-height: 1;
        color: white;
    }
    a {
        font-size: 0.9rem;
        color: ${indigo[300]};
    }
`;
