import Evangelion_svg from "../SVGR/evangelion_svg";
import EvangelionLogo_svg from "../SVGR/evangelion_logo_svg";
import animejs from "animejs";
import { useEffect } from "react";
import { Box } from "@mui/material";
import React from "react";

export default function EvangelionPage() {

    const divHider = React.createRef<HTMLDivElement>();

    useEffect(() => {
        divHider.current!.classList.remove("hidden");

        animejs({
            targets: ["div.evangelionTextBox path"],
            strokeDashoffset: [animejs.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 10000,
            delay: function (el, i) { return i * 750 },
            direction: 'normal',
        })
        animejs({
            targets: ["div.evangelionImage path"],
            strokeDashoffset: [animejs.setDashoffset, 0],
            easing: 'cubicBezier(0.92,0.08,0.71,0.87);',
            duration: 2500,
            delay: function (el, i) { return i * 20 },
            direction: 'normal',
        })
    })

    return (<>
        <div ref={divHider}
            className="hidden">
            <Box>
                <Box
                    className="evangelionTextBox"
                    sx={{
                        svg: {
                            mx: "auto",
                            display: "block",
                            maxHeight: "10rem",
                            mt: 4,
                        }
                    }}>
                    <Evangelion_svg />
                </Box>

                <Box
                    className="evangelionImage"
                    sx={{
                        svg: {
                            mx: "auto",
                            display: "block",
                            maxHeight: "15rem",
                            height: "40vw",
                            mt: 4,
                        }
                    }}>
                    <EvangelionLogo_svg />
                </Box>
            </Box>
        </div>
    </>)
}