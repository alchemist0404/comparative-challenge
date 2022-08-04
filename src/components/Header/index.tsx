import React, { useState } from "react";
import {
    Avatar,
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
    StyledMobileLogo,
    StyledAvatar,
    StyledCommandText,
    StyledMobileMenu,
} from "./styled";
import LogoImg from "assets/logo.png";
import AvatarImg from "assets/avatar.jpg";
import { Link } from "react-router-dom";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const pages = [
    { title: "Reports", link: "/chart" },
    { title: "Users", link: "/blog" },
    { title: "Teams", link: "#" },
    { title: "Roles", link: "#" },
];

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

export default function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    const handleOpenNavMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    };

    return (
        <HideOnScroll>
            <StyledAppBar elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to="/">
                            <StyledLogo src={LogoImg} alt="" />
                        </Link>

                        <Box
                            sx={{
                                flexGrow: 1,
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
                                                    {page.title}
                                                </Typography>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </StyledMobileMenu>
                        <Link to="/">
                            <StyledMobileLogo src={LogoImg} alt="" />
                        </Link>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Comparative
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page, idx) => (
                                <Link to={page.link} key={idx}>
                                    <Button
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            textTransform: "none",
                                        }}
                                    >
                                        {page.title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 0,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                <StyledCommandText variant="caption">
                                    Press <kbd>Ctrl+K</kbd> for commands
                                </StyledCommandText>
                            </Box>
                            <StyledAvatar>
                                <Typography
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                    }}
                                >
                                    Primoz Bernard
                                </Typography>
                                <Box sx={{ p: 0 }}>
                                    <Avatar
                                        alt="Primoz Bernard"
                                        src={AvatarImg}
                                    />
                                </Box>
                            </StyledAvatar>
                        </Box>
                    </Toolbar>
                </Container>
            </StyledAppBar>
        </HideOnScroll>
    );
}
