import styled from "styled-components";
import BgImg from "assets/cta-banner-bg.jpeg";
import { Box } from "@mui/material";

export const StyledFooter = styled.footer`
    position: relative;
`;

export const StyledSection = styled.section`
    background-image: url(${BgImg});
    background-position: 60% 0;
    background-size: 1440px;
    background-repeat: no-repeat;
`;

export const StyledContainer = styled(Box)`
    max-width: 1332px;

    padding: 172px 12px;
    margin: auto;

    @media (max-width: 479px) {
        padding-top: 86px;
        padding-bottom: 86px;
    }

    h4 {
        display: block;
        border-radius: 0;
        background-image: linear-gradient(90deg, #df84ff, #9ed6ff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;

        font-size: 3rem;
        line-height: 1.28;
        font-weight: 600;

        margin-bottom: 3.5rem;
        max-width: 80%;

        @media (max-width: 767px) {
            font-size: 3rem;
        }
        @media (max-width: 479px) {
            font-size: 2rem;
        }
        @media (max-width: 990px) {
            max-width: 100%;
        }
    }
`;

export const StyledBottomContainer = styled(Box)`
    max-width: 1332px;

    padding: 0 12px 64px 12px;
    margin: auto;
`;

export const StyledCTAWrap = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 64px;

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: flex-start;
    }

    a {
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
        max-width: 100%;
        padding: 17px 31px;
        flex: 0 auto;
        border: 1px solid #fff;
        border-radius: 12px;
        background-color: #fff;
        color: #1c162e;
        line-height: 1.75;
        font-weight: 600;
        text-align: center;
    }
`;

export const StyledLogos = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 60%;
    margin-left: 80px;
    flex: 1;
    grid-row-gap: 32px;
    grid-column-gap: 64px;
    opacity: 0.64;

    @media (max-width: 479px) {
        flex-wrap: wrap;
    }

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
    @media (max-width: 767px) {
        grid-row-gap: 32px;
    }
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 64px;
        margin-left: 0;
        grid-column-gap: 64px;
        justify-content: flex-start;
    }
`;

export const StyledCLogo = styled.img`
    width: 120px;
`;

export const StyledLogo = styled.img`
    max-width: 192px;
`;

export const StyledFooterLinkWrap = styled(Box)`
    display: flex;
    margin-top: 48px;
    margin-bottom: 48px;
    justify-content: flex-start;
    align-items: center;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    width: 100%;

    a {
        color: hsla(0, 0%, 100%, 0.6);
        font-size: 0.875rem;
        line-height: 1.71;
        font-weight: 600;

        text-decoration: none;
    }
`;
