import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import {
    SectionBackground,
    StyledCircleBody,
    StyledContainer,
    StyledSearchBox,
    StyledSearchInput,
    StyledSection,
    StyledServices,
    StyledTab,
    StyledTabContainer,
    StyledTabs,
} from "./styled";
import {
    BarChart,
    DisplaySettings,
    ManageHistory,
    PersonOutline,
    School,
    Search,
} from "@mui/icons-material";
import { blue, lightGreen, orange, purple, red } from "@mui/material/colors";
import BgImg from "assets/bg.jpeg";
import Card, { CardProps } from "components/Card";
import { useState } from "react";
import SupportOptions from "./components/SupportOptions";

const services: CardProps[] = [
    {
        icon: <DisplaySettings sx={{ color: purple[200] }} />,
        title: "Technology Stack",
        description:
            "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights.",
    },
    {
        icon: <BarChart sx={{ color: blue[200] }} />,
        title: "Reports",
        description:
            "The report consists of sections (metrics) showing the comparisons between two periods.",
    },
    {
        icon: <PersonOutline sx={{ color: lightGreen[200] }} />,
        title: "Account",
        description:
            "Here's everything you need to know: how to invite new team members, accept invite, set up notifications and more.",
    },
    {
        icon: <ManageHistory sx={{ color: red[200] }} />,
        title: "Features and use cases",
        description:
            "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights.",
    },
    {
        icon: <School sx={{ color: orange[200] }} />,
        title: "FAQs",
        description:
            "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights.",
    },
];

const mostViewed: string[] = [
    "Metrics definition",
    "Overview",
    "Visualization Section",
    "Metrics definition",
    "Overview",
    "Visualization Section",
];

export default function Home() {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
    return (
        <StyledContainer>
            <StyledSection>
                <StyledSearchBox
                    sx={{
                        width: { xs: "80%", md: "60%", lg: "50%" },
                    }}
                >
                    <Typography
                        variant="h3"
                        textAlign="center"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        Hi! How can we help you today?
                    </Typography>
                    <StyledSearchInput
                        placeholder="Search Comparative Knowledge Base"
                        variant="outlined"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </StyledSearchBox>
                <SectionBackground src={BgImg} alt="" />
            </StyledSection>
            <StyledSection>
                <StyledCircleBody>
                    <StyledServices container spacing={4}>
                        {services.map((item: CardProps, idx: number) => (
                            <Grid
                                key={idx}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                data-aos="fade-up"
                                data-aos-delay={200 + idx * 50}
                            >
                                <Card {...item} />
                            </Grid>
                        ))}
                    </StyledServices>
                </StyledCircleBody>
            </StyledSection>
            <StyledSection>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Most Viewed
                </Typography>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{
                        color: "#6b7280",
                        marginTop: "1rem",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    In Comparative, we are building a product that allows the
                    effortless turn the raw data into meaningful insights.
                </Typography>
                <StyledTabContainer>
                    <StyledTabs
                        value={activeTab}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                    >
                        <StyledTab label="Technology Stack" />
                        <StyledTab label="Reports" />
                        <StyledTab label="Account" />
                        <StyledTab label="Features and use cases" />
                        <StyledTab label="FAQs" />
                    </StyledTabs>
                </StyledTabContainer>
                <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
                    <Grid container spacing={4}>
                        {mostViewed.map((title, idx) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                data-aos="fade-up"
                                data-aos-delay={200 + idx * 50}
                                key={idx}
                            >
                                <Card
                                    title={title}
                                    description="In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights."
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </StyledSection>
            <StyledSection>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                    color="white"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Get in touch
                </Typography>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{
                        color: "#6b7280",
                        marginTop: "1rem",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    In Comparative, we are building a product that allows the
                    effortless turn the raw data into meaningful insights.
                </Typography>
                <SupportOptions />
            </StyledSection>
        </StyledContainer>
    );
}
