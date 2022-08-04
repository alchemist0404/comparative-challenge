import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    transition: 0.5s;

    &:hover {
        transform: translateY(-20px);
    }

    a {
        text-decoration: none;
        width: 100%;
    }
`;

export const StyledCardImg = styled.img`
    width: 100%;
    height: 200px;

    border-radius: 8px;

    background: var(--color-gray-light) no-repeat 50%;
    object-fit: cover;
`;

export const StyledCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledCardHeader = styled.div`
    margin-top: 16px;
    margin-bottom: 8px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    p {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.17;

        color: #415fb8;
    }
    h5 {
        font-size: 1.5rem;
        color: #1c162e;
        margin: 0 0 8px;
        font-weight: 700;
        line-height: 1.17;
        transition: color .2s ease-in-out;
    }
`;

export const StyledExCerpt = styled(Typography)`
    margin-bottom: 12px;
    margin-top: 8px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.01em;
    color: #1c162e;
    display: -webkit-box;
    overflow-y: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
`;

export const StyledCardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const StyledPoster = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    h6 {
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1;
        color: #415fb8;
    }
    p {
        margin-top: 4px;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.17;
        color: #8b8b8b;
    }
`;
