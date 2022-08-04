import styled from "styled-components";
import { CardActionArea } from "@mui/material";

export const StyledCard = styled(CardActionArea)`
    background-color: white;

    border-radius: 20px;
    padding: 2rem;
    height: 100%;

    transition: 0.5s;

    &:hover {
        transform: translateY(-20px);
    }

    box-shadow: 1.3em 1.3em 2em rgb(0 0 0 / 10%);
`;

export const StyledCardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #6b7280;
    }
`;

export const AnimatedIcon = styled.div`
    svg {
        font-size: 5rem;
    }
`;
