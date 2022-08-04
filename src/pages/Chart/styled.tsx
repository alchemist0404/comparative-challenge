import styled from "styled-components";

export const StyledSection = styled.section`
    padding-top: 70px;

    .MuiBox-root {
        position: relative;
    }
`;

export const StyledChartContainer = styled.div`
    padding: 12px;
`;

export const StyledChartContent = styled.div`
    position: relative;
    padding: 12px;
    padding-top: 50px;
    border-radius: 12px;
    border: 1px solid #2f2548;
`;

export const StyledController = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    position: absolute;
    right: 12px;
    top: 12px;

    .MuiFormControlLabel-label {
        color: #b1a6cf;
        font-size: 0.9rem;
    }
`;

export const StyledChartTooltip = styled.div`
    position: absolute;
    pointer-events: none;
    opacity: 0;
    left: 0;
    top: 0;

    transition: opacity 0.1s ease-out, transform 0.2s ease-in-out;

    #hry {
        position: absolute;
        left: 0;
        top: 0;
        border: 0;
        border-left: 1px dashed #ffe5fa;
        width: 1px;
    }
`;

export const StyledTooltipBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    transform: translateX(-50%);

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 3px;
        min-width: 40px;
        background-color: rgb(58, 52, 56);
        backdrop-filter: blur(4px);
        color: white;
        padding: 10px 20px;
        border-radius: 14px;
        font-size: 12px;

        svg {
            font-size: 1rem;
            margin-right: 5px;
        }
        span {
            color: #b4b4b4;
        }
        p {
            margin-left: 10px;
            color: white;
        }
    }
`;
