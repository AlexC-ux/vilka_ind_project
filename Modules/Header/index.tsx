import { Grid, Paper, Typography } from "@mui/material";

export default function Header() {
    return (<Paper
        className="bg1_grey"
        square={false}
        sx={{
            borderRadius: "0px",
            p: 1,
            m: 0,
        }}
    >
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Typography
                    className="textColor1 textFont1"
                    variant="h3"
                    align="center"
                    textAlign="center"
                    sx={{
                        height:"100%",
                        width:"100%",
                        m: 0,
                        p: 0,
                        textShadow:"9px -1px 12px #fcc828",
                    }}
                >
                    Арсепедия
                </Typography>
            </Grid>
            <Grid item xs={8}>
            </Grid>

        </Grid>

    </Paper>)
}