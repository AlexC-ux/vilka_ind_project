import Head from 'next/head'
import Image from 'next/image'
import { Rubik_Marker_Hatch, Bellota } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import anime from 'animejs'


export default function HomePage() {

  const divHider = React.createRef<HTMLDivElement>();

  useEffect(() => {
    let lettersSubtitle = document.querySelectorAll(".title-h3-main>.letter");
    lettersSubtitle.forEach((elem, key) => {
      if (key < 4 || key > 32) {
        elem.classList.add("yellowText")
      }
    })

    let lettersTitle = document.querySelectorAll(".title-h1-main>.letter");
    lettersTitle.forEach((elem, key) => {
      if (key > 3 && key < 7) {
        elem.classList.add("blueText")
      } else if (key > 6) {
        elem.classList.add("redText")
      }
    })
    divHider.current?.classList.remove("hidden")
    //анимация названия
    anime.timeline({ loop: false })
      .add({
        targets: '.title-h1-main>.letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 1200,
        easing: "easeOutExpo",
        delay: (el, i) => 200 * i
      });

    //анимация субзаголовка
    anime.timeline({ loop: false })
      .add({
        targets: '.title-h3-main>.letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 300 + 30 * i
      })

    //анимация кнопки
    anime.timeline({ loop: false })
      .add({
        targets: ".goBtn",
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 2300,
        delay: 1200
      })
  })


  return (
    <>
      <div ref={divHider}
        className="hidden">
        <Typography
          variant="h1"
          className={`title-h1-main RubikFont`}
          textAlign={"center"}
          sx={{
            color: "white",
            mt: "14vw",
            overflowY: "hidden",
          }}>
          {(() => {
            return Array.from("Арсепедия").map((value, index) => {
              return <div key={index} className='letter'
                style={{
                  display: "inline-flex",
                  color: "inherit"
                }}>{value}</div>
            })
          })()}
        </Typography>

        <Typography
          variant="h3"
          className={`title-h3-main BellotaFont`}
          textAlign={"center"}
          sx={{
            color: "white",
            mt: "3vw",
            overflow: "hidden",
            pt: 3
          }}>
          {(() => {
            let lettersArray = Array.from("Ваш путеводитель по миру");
            return lettersArray.map((value, index) => {
              return <div key={index} className='letter'
                style={{
                  display: "inline-flex",
                  color: "white",
                  fontSize: "4vw",
                  letterSpacing: `${value != " " && lettersArray[index + 1] == " " ? "0.6em" : "0.2em"}`
                }}>{value}</div>
            })
          })()}
        </Typography>

        <Typography
          variant="h3"
          className={`title-h3-main BellotaFont`}
          textAlign={"center"}
          sx={{
            color: "white",
            mt: "0px",
            overflow: "hidden",
            pb: "0.8vw"
          }}>
          {(() => {
            let lettersArray = Array.from("японской мультипликации");
            return lettersArray.map((value, index) => {
              return <div key={index} className='letter'
                style={{
                  display: "inline-flex",
                  color: "white",
                  fontSize: "3vw",
                  letterSpacing: `${value != " " && lettersArray[index + 1] == " " ? "0.6em" : "0.2em"}`
                }}>{value}</div>
            })
          })()}
        </Typography>


        <Box
          className={`goBtn  bgBtn1 BellotaFont`}
          sx={{
            boxShadow: "4px 3px 7px 1px #000000",
            border: 'solid #ffca28',
            minHeight: "60px",
            maxWidth: "300px",
            mx: "auto",
            p: 2,
            mt: "50px",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            cursor: "pointer",
            fontSize: "20px"
          }}>
          Вперёд!
        </Box>



        <Typography className={`BellotaFont`}
          variant='h3'
          sx={{
            mt: "30vh",
            p: 2,
            color: "white"
          }}>
          Что такое Арсепедия?
        </Typography>

        <Typography className={`BellotaFont`}
          variant='h5'
          sx={{
            p: 2,
            ml: "3vw",
            borderLeft: "4px dashed #ffca28",
            borderBottom: "4px dashed #ffca28",
            color: "white"
          }}>
          <div
            className='yellowText'
            style={{
              display: "inline-flex"
            }}
          >Арсепедия</div> - это портал, который позволит Вам ознакомиться с [придумать текст!]
        </Typography>


        <Typography className={`BellotaFont`}
          variant='h3'
          sx={{
            mt: "30vh",
            p: 2,
            color: "white"
          }}>
          Что можно найти на Арсепедии?
        </Typography>

        <Typography className={`BellotaFont`}
          variant='h5'
          sx={{
            p: 2,
            ml: "3vw",
            borderLeft: "4px dashed #ffca28",
            borderBottom: "4px dashed #ffca28",
            color: "white"
          }}>
          На <div
            className='yellowText'
            style={{
              display: "inline-flex"
            }}
          >Арсепедии</div> представлены [придумать текст!]
        </Typography>
      </div>
    </>
  )
}
