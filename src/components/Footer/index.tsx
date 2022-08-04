import React from "react";
import {
    StyledBottomContainer,
    StyledContainer,
    StyledCTAWrap,
    StyledFooter,
    StyledLogo,
    StyledCLogo,
    StyledLogos,
    StyledSection,
    StyledFooterLinkWrap,
} from "./styled";
import { Link, Typography } from "@mui/material";
import WomboImg from "assets/wombo.png";
import ProductImg from "assets/product-hunt.png";
import MinoImg from "assets/mino-white.png";
import LogoImg from "assets/white-logo.svg";

export default function Footer() {
    return (
        <StyledFooter>
            <StyledSection>
                <StyledContainer>
                    <Typography variant="h4">
                        Join other leading companies automating their data
                        analysis with Comparative
                    </Typography>
                    <StyledCTAWrap>
                        <Link href="#">Schedule a demo</Link>
                        <StyledLogos>
                            <StyledCLogo src={WomboImg} alt="" />
                            <StyledCLogo src={ProductImg} alt="" />
                            <StyledCLogo src={MinoImg} alt="" />
                        </StyledLogos>
                    </StyledCTAWrap>
                </StyledContainer>
                <StyledBottomContainer>
                    <Link href="#">
                        <StyledLogo src={LogoImg} alt="" />
                    </Link>
                    <StyledFooterLinkWrap>
                        <Link href="#">Product</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Case Studies</Link>
                        <Link href="#">Careers</Link>
                    </StyledFooterLinkWrap>
                </StyledBottomContainer>
            </StyledSection>
        </StyledFooter>
    );
}
