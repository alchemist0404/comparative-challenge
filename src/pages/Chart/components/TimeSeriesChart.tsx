import { CalendarMonth } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { Line } from "react-chartjs-2";
import { StyledChartTooltip, StyledTooltipBox } from "../styled";

interface Props {
    range: string;
}

export const TimeSeriesChart = ({ range }: Props) => {
    const tooltipRef = useRef<any>();
    const getGradient = () => {
        const canvas = document.createElement("canvas");
        const myChartRef: any = canvas.getContext("2d");

        const gradientLine = myChartRef.createLinearGradient(0, 0, 0, 400);
        gradientLine.addColorStop(0, "rgba(124, 75, 168, 0.28)");
        //gradientLine.addColorStop(0.5, "rgba(25,185,128,0.3)");
        gradientLine.addColorStop(0.8, "rgba(255, 255, 255, 0)");
        return gradientLine;
    };

    const getTempData = () => {
        var start = new Date("2022/01/01");
        var end = new Date();

        var dates = [];

        while (start <= end) {
            dates.push({
                x: new Date(start),
                y: Math.floor(Math.random() * 1000),
            });
            start.setDate(start.getDate() + 1);
        }

        return dates.splice(Number(range) * -1);
    };

    const data = {
        labels: getTempData().map((item) => item.x),
        datasets: [
            {
                data: getTempData(),
                tension: 0.5,
                borderColor: "rgb(161, 92, 221)",
                borderWidth: 2,
                pointRadius: 0.5,
                fill: { target: "origin", above: getGradient() },
            },
        ],
    };

    return (
        <Box>
            <Line
                id="timeseries_chart"
                data={data}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        //@ts-ignore
                        tooltip: {
                            enabled: false,
                            callbacks: {
                                label: function (tooltipItem) {
                                    return `${
                                        data.datasets[0].data[
                                            tooltipItem.dataIndex
                                        ].y
                                    }`;
                                },
                            },
                            external: ({ chart, tooltip }) => {
                                let element = tooltipRef.current!;

                                if (tooltip.opacity === 0) {
                                    element.style.opacity = "0";
                                    return;
                                }

                                const datediv =
                                    document.getElementById("tooltip_date");
                                const valuediv =
                                    document.getElementById("tooltip_value");
                                const hry = document.getElementById("hry");

                                if (datediv && valuediv) {
                                    try {
                                        const i =
                                            tooltip.dataPoints[0].dataIndex;
                                        const item = data.datasets[0].data[i];

                                        const date = new Date(item.x);

                                        datediv.innerText = date
                                            .toDateString()
                                            .slice(3);

                                        valuediv.innerText = item.y.toString();
                                    } catch {}
                                }

                                if (hry) {
                                    hry.style.top =
                                        chart.scales.y.paddingTop + "px";
                                    hry.style.height =
                                        chart.scales.y.height + "px";
                                }

                                element.style.opacity = "1";
                                element.style.transform = `translateX(${tooltip.caretX}px)`;
                            },
                        },

                        legend: { display: false },
                    },
                    interaction: {
                        intersect: false,
                        mode: "index",
                    },
                    scales: {
                        x: {
                            offset: true,
                            ticks: {
                                display: true,
                                autoSkipPadding: 30,
                                callback: function (val, index) {
                                    let label = this.getLabelForValue(
                                        val as number
                                    );
                                    return new Date(label)
                                        .toDateString()
                                        .slice(3, -4);
                                },
                                color: "#b1a6cf",
                                maxRotation: 0,
                            },
                            grid: {
                                display: false,
                            },
                        },

                        y: {
                            beginAtZero: false,
                            ticks: {
                                display: true,
                                color: "#b1a6cf",
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                        },

                        //@ts-ignore
                    },
                }}
                height={320}
                width={"100%"}
                style={{ border: "none" }}
            />
            <StyledChartTooltip ref={tooltipRef} id="tt">
                <hr id="hry" />
                <StyledTooltipBox>
                    <Box>
                        <CalendarMonth sx={{ color: "#b4b4b4" }} />
                        <Typography
                            component="span"
                            id="tooltip_date"
                        ></Typography>
                        <Typography
                            component="p"
                            id="tooltip_value"
                        ></Typography>
                    </Box>
                </StyledTooltipBox>
            </StyledChartTooltip>
        </Box>
    );
};
