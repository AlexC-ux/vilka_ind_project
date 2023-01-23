import { Box, Card, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Header from "../Modules/Header";

export default function SelectPage() {
    return (
        <>
            <Box sx={{
                minHeight: "100vh"
            }}>
                <Grid container spacing={2}
                    sx={{
                        p: 2,
                        mt: 3,
                        mx: "auto",
                        width: "100%",
                        height: "90vh"
                    }}>
                    <Grid item md={6} xs={12}>
                        <Card variant="outlined"
                            className="cardYellowBordered"
                            component={Box}
                            sx={{
                                boxShadow: "2px 2px 14px black",
                                backgroundImage: "url('/choosers/franxxx-chooser.jpg')",
                                height: "100%",
                                backgroundSize: "cover",
                                borderRadius: "30px",
                                backgroundPosition: "50% 0px",
                            }}
                            onClick={() => { document.location.assign("/franxx") }}
                        >
                            <div className=""
                                style={{
                                    height: "100%"
                                }}>
                                <div className=""
                                    style={{
                                        height: "60%",
                                        cursor: "pointer"
                                    }} />
                                <Typography
                                    variant="h5"
                                    className="cardTitle BellotaFont"
                                    textAlign="center"
                                    sx={{
                                        height: "40%",
                                        pt: 3,
                                        borderRadius: "50px 50px 0px 0px",
                                        cursor: "pointer",
                                        fontSize: "2rem"
                                    }}>
                                    Любимый во Франксе
                                </Typography>
                            </div>

                        </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card variant="outlined"
                            className="cardYellowBordered"
                            component={Box}
                            sx={{
                                boxShadow: "2px 2px 14px black",
                                backgroundImage: "url('/choosers/eva-chooser.jpg')",
                                height: "100%",
                                backgroundSize: "cover",
                                borderRadius: "30px",
                                backgroundPosition: "50% 35%",
                            }}
                            onClick={() => { document.location.assign("/evangelion") }}
                        >
                            <div className=""
                                style={{
                                    height: "100%"
                                }}>
                                <div className=""
                                    style={{
                                        height: "60%",
                                        cursor: "pointer"
                                    }} />
                                <Typography
                                    variant="h5"
                                    className="cardTitle BellotaFont"
                                    textAlign="center"
                                    sx={{
                                        height: "40%",
                                        pt: 3,
                                        borderRadius: "50px 50px 0px 0px",
                                        cursor: "pointer",
                                        fontSize: "2rem"
                                    }}>
                                    Евангелион
                                </Typography>
                            </div>

                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}