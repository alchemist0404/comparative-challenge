import { Box, Button, Grid, Typography } from "@mui/material";
import {
    SectionBackground,
    SectionBackground1,
    StyledBigText,
    StyledCircleBody,
    StyledContainer,
    StyledSection,
} from "./styled";
import PostCard, { PostProps } from "components/PostCard";
import BgImg from "assets/bg.jpeg";
import BgImg1 from "assets/bg-gradient.png";

const posts: PostProps[] = [
    {
        img: "https://blog.comparative.ai/content/images/size/w1000/2022/05/Mino-Header.png",
        tag: "Case studies",
        title: "How Mino Games Improved their In-App Promotions and Rebounded from a 60% Revenue Drop Thanks to Comparative",
        excerpt:
            "In late-March the team at mobile game developer Mino Games opened one of their daily Comparative reports. They saw revenue had declined by a whopping 30% compared to the prior month resulting in a $100,000 loss. This was an emergency.",
        poster: {
            avatar: "https://blog.comparative.ai/content/images/size/w100/2022/02/Headshot-Feb-2022.jpg",
            name: "Jessica Rubin",
            time: "May 17, 2022 • 3 min read",
        },
    },
    {
        img: "https://blog.comparative.ai/content/images/size/w1000/2022/07/image001.jpg",
        tag: "Blog",
        title: "Inclusion is at the Heart of Comparative, from Product Development to Company Culture",
        excerpt:
            "Comparative's mission is to democratize data. We believe data should be inclusive, and so should our company. Inclusion drives everything at Comparative, from our product development, to our hiring strategy, to our culture.",
        poster: {
            avatar: "https://blog.comparative.ai/content/images/size/w100/2022/04/headshot-brielle--1-.jpg",
            name: "Brielle Perry",
            time: "Apr 11, 2022 • 3 min read",
        },
    },
    {
        img: "https://blog.comparative.ai/content/images/size/w1000/2022/02/Wombo-Feature-Image.png",
        tag: "Case studies",
        title: "How Wombo Prevented a Loss in over 330,000 Daily Active Users",
        excerpt:
            "WOMBO has millions of users, millions of app installs, and a lot of data. But using traditional BI tools to analyze the data meant critical insights were being missed. WOMBO turned to Comparative because they needed help taking their data and making it actionable, instantly.",
        poster: {
            avatar: "https://blog.comparative.ai/content/images/size/w100/2022/02/Headshot-Feb-2022.jpg",
            name: "Jessica Rubin",
            time: "Feb 23, 2022 • 3 min read",
        },
    },
    {
        img: "https://blog.comparative.ai/content/images/size/w1000/2022/05/Mino-Header.png",
        tag: "Case studies",
        title: "How Mino Games Improved their In-App Promotions and Rebounded from a 60% Revenue Drop Thanks to Comparative",
        excerpt:
            "In late-March the team at mobile game developer Mino Games opened one of their daily Comparative reports. They saw revenue had declined by a whopping 30% compared to the prior month resulting in a $100,000 loss. This was an emergency.",
        poster: {
            avatar: "https://blog.comparative.ai/content/images/size/w100/2022/02/Headshot-Feb-2022.jpg",
            name: "Jessica Rubin",
            time: "May 17, 2022 • 3 min read",
        },
    },
    {
        img: "https://blog.comparative.ai/content/images/size/w1000/2022/07/image001.jpg",
        tag: "Blog",
        title: "Inclusion is at the Heart of Comparative, from Product Development to Company Culture",
        excerpt:
            "Comparative's mission is to democratize data. We believe data should be inclusive, and so should our company. Inclusion drives everything at Comparative, from our product development, to our hiring strategy, to our culture.",
        poster: {
            avatar: "https://blog.comparative.ai/content/images/size/w100/2022/04/headshot-brielle--1-.jpg",
            name: "Brielle Perry",
            time: "Apr 11, 2022 • 3 min read",
        },
    },
    {
        img: "https://blog.comparative.ai/content/images/size/w1000/2022/02/Wombo-Feature-Image.png",
        tag: "Case studies",
        title: "How Wombo Prevented a Loss in over 330,000 Daily Active Users",
        excerpt:
            "WOMBO has millions of users, millions of app installs, and a lot of data. But using traditional BI tools to analyze the data meant critical insights were being missed. WOMBO turned to Comparative because they needed help taking their data and making it actionable, instantly.",
        poster: {
            avatar: "https://blog.comparative.ai/content/images/size/w100/2022/02/Headshot-Feb-2022.jpg",
            name: "Jessica Rubin",
            time: "Feb 23, 2022 • 3 min read",
        },
    },
];

export default function Blog() {
    return (
        <StyledContainer>
            <Box>
                <StyledSection>
                    <StyledBigText>
                        <Typography
                            variant="h3"
                            textAlign="center"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            Comparative Blog
                        </Typography>
                        <Typography variant="body1">
                            The Power of a Data Team
                        </Typography>
                        <Button variant="outlined">Subscribe</Button>
                    </StyledBigText>
                    <SectionBackground src={BgImg} alt="" />
                </StyledSection>
                <SectionBackground1 src={BgImg1} alt="" />
            </Box>
            <StyledSection>
                <StyledCircleBody>
                    <Box sx={{ width: "100vw" }}>
                        <Grid container spacing={4} justifyContent="center">
                            {posts.map((item: PostProps, idx: number) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    data-aos="fade-up"
                                    data-aos-delay={"100"}
                                    key={idx}
                                >
                                    <PostCard {...item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </StyledCircleBody>
            </StyledSection>
        </StyledContainer>
    );
}
