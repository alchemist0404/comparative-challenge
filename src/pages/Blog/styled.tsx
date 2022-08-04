import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledContainer = styled.div`
    padding-top: 128px;
`;

export const StyledSection = styled.section`
    position: relative;

    &:nth-child(2) {
        z-index: 1;
        margin-top: -80px;
        justify-content: center;

        overflow-x: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const StyledBigText = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: auto;

    position: relative;
    z-index: 1;

    padding: 34px 0 138px 0;

    h3 {
        background-image: linear-gradient(90deg, #df84ff, #9ed6ff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1.4;
    }

    p {
        color: white;
        font-size: 1.125rem;
        line-height: 1.78;
    }

    button {
        color: white;
        text-transform: none;
        border-color: white;
        border-radius: 12px;
        margin-top: 22px;
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

export const SectionBackground1 = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;

export const StyledCircleBody = styled.div`
    overflow: hidden;
    width: 250vw;
    flex: 0 0 auto;
    border-radius: 100%;

    background-color: white;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    .MuiBox-root {
        position: relative;
        padding: 130px 12px;

        width: 100vw;
        max-width: 1332px;

        margin: auto;
    }
`;
