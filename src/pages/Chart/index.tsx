import React from "react";
import {
    FormControl,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Tooltip,
} from "@mui/material";
import { TimeSeriesChart } from "./components/TimeSeriesChart";
import {
    StyledChartContainer,
    StyledChartContent,
    StyledController,
    StyledSection,
} from "./styled";
import { Download, Info } from "@mui/icons-material";
import { saveAs } from "file-saver";

export default function Chart() {
    const [range, setRange] = React.useState("90");
    const exportPNG = () => {
        const graphy = document.getElementById("timeseries_chart");

        // @ts-ignore
        graphy.toBlob(function (blob) {
            saveAs(blob, "reports.png");
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRange((event.target as HTMLInputElement).value);
    };

    return (
        <StyledSection>
            <StyledChartContainer>
                <StyledChartContent>
                    <StyledController>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={range}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="30"
                                    control={
                                        <Radio
                                            sx={{
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 18,
                                                },
                                                color: "#a15cdd",
                                                "&.Mui-checked": {
                                                    color: "#ac68e8",
                                                },
                                            }}
                                        />
                                    }
                                    label="Last: 30d"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="90"
                                    control={
                                        <Radio
                                            sx={{
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 18,
                                                },
                                                color: "#a15cdd",
                                                "&.Mui-checked": {
                                                    color: "#ac68e8",
                                                },
                                            }}
                                        />
                                    }
                                    label="90d"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="120"
                                    control={
                                        <Radio
                                            sx={{
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 18,
                                                },
                                                color: "#a15cdd",
                                                "&.Mui-checked": {
                                                    color: "#ac68e8",
                                                },
                                            }}
                                        />
                                    }
                                    label="120d"
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                        </FormControl>
                        <Tooltip
                            title="A time series chart, also called a times series graph or time series plot, is a data visualization tool that illustrates data points at successive intervals of time."
                            placement="top"
                            sx={{ color: "#c7bad3", ml: 1 }}
                        >
                            <IconButton>
                                <Info sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title="Download png"
                            placement="top"
                            sx={{ color: "#c7bad3" }}
                        >
                            <IconButton onClick={exportPNG}>
                                <Download sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Tooltip>
                    </StyledController>
                    <TimeSeriesChart range={range} />
                </StyledChartContent>
            </StyledChartContainer>
        </StyledSection>
    );
}
