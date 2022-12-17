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
                    <Grid item xs={6}>
                        <Card variant="outlined"
                            className="cardYellowBordered"
                            component={Box}
                            sx={{
                                boxShadow: "2px 2px 14px black",
                                backgroundImage: "url('https://images.alphacoders.com/111/thumb-1920-1115213.jpg')",
                                height: "100%",
                                backgroundSize: "cover",
                                borderRadius: "30px",
                                backgroundPosition: "50% 0px",
                            }}
                            onClick={()=>{document.location.assign("/franks")}}
                        >
                            <div className=""
                                style={{
                                    height: "100%"
                                }}>
                                <div className=""
                                    style={{
                                        height: "80%",
                                        cursor:"pointer"
                                    }} />
                                <Typography
                                    variant="h5"
                                    className="cardTitle BellotaFont"
                                    textAlign="center"
                                    sx={{
                                        height: "20%",
                                        p: 4,
                                        borderRadius: "50px 50px 0px 0px",
                                        cursor:"pointer"
                                    }}>
                                    Любимый во Франксе
                                </Typography>
                            </div>

                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined"
                            className="cardYellowBordered"
                            component={Box}
                            sx={{
                                boxShadow: "2px 2px 14px black",
                                backgroundImage: "url('https://s0.smartresize.com/wallpaper/431/580/HD-wallpaper-eva-01-berserk-01-eva-evangelion.jpg')",
                                height: "100%",
                                backgroundSize: "cover",
                                borderRadius: "30px",
                                backgroundPosition: "50% 0px",
                            }}
                            onClick={()=>{document.location.assign("/evangelion")}}
                        >
                            <div className=""
                                style={{
                                    height: "100%"
                                }}>
                                <div className=""
                                    style={{
                                        height: "80%",
                                        cursor:"pointer"
                                    }} />
                                <Typography
                                    variant="h5"
                                    className="cardTitle BellotaFont"
                                    textAlign="center"
                                    sx={{
                                        height: "20%",
                                        p: 4,
                                        borderRadius: "50px 50px 0px 0px",
                                        cursor:"pointer"
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