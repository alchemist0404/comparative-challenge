import React from "react";
import { Typography } from "@mui/material";
import { AnimatedIcon, StyledCard, StyledCardBody } from "./styled";

export interface CardProps {
    icon?: React.ReactElement;
    title: string;
    description: string;
}

export default function Card(props: CardProps) {
    return (
        <StyledCard>
            <StyledCardBody>
                <AnimatedIcon>{props.icon}</AnimatedIcon>
                <Typography variant="h6" textAlign="center">
                    {props.title}
                </Typography>
                <Typography variant="body1" textAlign="center">
                    {props.description}
                </Typography>
            </StyledCardBody>
        </StyledCard>
    );
}
