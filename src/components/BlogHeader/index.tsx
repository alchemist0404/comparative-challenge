import React, { useState } from "react";
import {
    Box,
    Button,
    Collapse,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
    StyledLogo,
    StyledAppBar,
    StyledMobileMenu,
    StyledButtons,
} from "./styled";
import LogoImg from "assets/white-logo.svg";
import { Link } from "react-router-dom";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const pages = ["Blog", "Case Studies"];

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={true} direction="down" in={!trigger}>
            {React.cloneElement(children, {
                style: {
                    backgroundColor: trigger ? "#1c162e" : "transparent",
                },
            })}
        </Slide>
    );
}

export default function BlogHeader() {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    const handleOpenNavMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    };

    return (
        <HideOnScroll>
            <StyledAppBar elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{ justifyContent: "space-between" }}
                    >
                        <Link to="/">
                            <StyledLogo src={LogoImg} alt="" />
                        </Link>

                        <StyledMobileMenu
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            <Collapse
                                in={openMobileMenu}
                                orientation="vertical"
                            >
                                <List>
                                    {pages.map((page, idx) => (
                                        <ListItem
                                            key={idx}
                                            onClick={handleOpenNavMenu}
                                        >
                                            <ListItemButton>
                                                <Typography textAlign="center">
                                                    {page}
                                                </Typography>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    <ListItem>
                                        <StyledButtons>
                                            <Button variant="outlined">
                                                Sign in
                                            </Button>
                                        </StyledButtons>
                                    </ListItem>
                                    <ListItem>
                                        <StyledButtons>
                                            <Button variant="contained">
                                                Schedule a demo
                                            </Button>
                                        </StyledButtons>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </StyledMobileMenu>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleOpenNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                        textTransform: "none",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                                position: "relative",
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <StyledButtons
                            sx={{ display: { xs: "none", md: "flex" } }}
                        >
                            <Button variant="outlined">Sign in</Button>
                            <Button variant="contained">Schedule a Demo</Button>
                        </StyledButtons>
                    </Toolbar>
                </Container>
            </StyledAppBar>
        </HideOnScroll>
    );
}
