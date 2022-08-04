import { ContactSupport, QueryStats, SupportAgent } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";
import { cyan, deepOrange, purple } from "@mui/material/colors";
import { StyledSupportTitle } from "../styled";

export default function SupportOptions() {
    return (
        <Grid
            container
            spacing={4}
            justifyContent="center"
            mt="0.5rem"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <Grid
                item
                xs={12}
                sm={6}
                md={3}
                container
                alignItems="center"
                justifyContent="center"
            >
                <ContactSupport sx={{ color: purple[200], fontSize: "3rem" }} />
                <StyledSupportTitle>
                    <Typography variant="h6">Technical Support</Typography>
                    <Link href="#" underline="always">
                        Contact our support team.
                    </Link>
                </StyledSupportTitle>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={3}
                container
                alignItems="center"
                justifyContent="center"
            >
                <QueryStats sx={{ color: cyan[200], fontSize: "3rem" }} />
                <StyledSupportTitle>
                    <Typography variant="h6">Analytical Support</Typography>
                    <Link href="#" underline="always">
                        Contact our support team.
                    </Link>
                </StyledSupportTitle>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={3}
                container
                alignItems="center"
                justifyContent="center"
            >
                <SupportAgent
                    sx={{ color: deepOrange[200], fontSize: "3rem" }}
                />
                <StyledSupportTitle>
                    <Typography variant="h6">Admin Support</Typography>
                    <Link href="#" underline="always">
                        Contact our support team.
                    </Link>
                </StyledSupportTitle>
            </Grid>
        </Grid>
    );
}
