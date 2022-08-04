import React from "react";
import { Avatar, Link, Typography } from "@mui/material";
import {
    StyledCard,
    StyledCardContent,
    StyledCardFooter,
    StyledCardHeader,
    StyledCardImg,
    StyledExCerpt,
    StyledPoster,
} from "./styled";

export interface PosterProps {
    avatar: string;
    name: string;
    time: string;
}

export interface PostProps {
    img: string;
    tag: string;
    title: string;
    excerpt: string;
    poster: PosterProps;
}

export default function PostCard(props: PostProps) {
    return (
        <StyledCard>
            <Link href="#">
                <StyledCardImg src={props.img} />
            </Link>
            <StyledCardContent>
                <Link href="#">
                    <StyledCardHeader>
                        <Typography variant="body1">{props.tag}</Typography>
                        <Typography variant="h5">{props.title}</Typography>
                    </StyledCardHeader>
                    <StyledExCerpt>{props.excerpt}</StyledExCerpt>
                </Link>
            </StyledCardContent>
            <StyledCardFooter>
                <Avatar src={props.poster.avatar} />
                <Link href="#">
                    <StyledPoster>
                        <Typography variant="h6">
                            {props.poster.name}
                        </Typography>
                        <Typography variant="body1">
                            {props.poster.time}
                        </Typography>
                    </StyledPoster>
                </Link>
            </StyledCardFooter>
        </StyledCard>
    );
}
