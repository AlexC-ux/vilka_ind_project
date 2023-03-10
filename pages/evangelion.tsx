import Evangelion_svg from "../SVGR/evangelion_svg";
import EvangelionLogo_svg from "../SVGR/evangelion_logo_svg";
import animejs from "animejs";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import React from "react";
import Y from "../Modules/YellowText";

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

                <Typography className={`BellotaFont`}
                    variant='h3'
                    sx={{
                        mt: "20vh",
                        p: 2,
                        color: "white"
                    }}>
                    Краткое описание
                </Typography>
                <Typography className={`BellotaFont`}
                    variant='h5'
                    sx={{
                        p: 2,
                        ml: "3vw",
                        borderLeft: "4px dashed #ffca28",
                        borderBottom: "4px dashed #ffca28",
                        color: "white",
                        mb: 3,
                    }}>
                    {Y("Евангелион")} (яп. 新世紀エヴァンゲリオン Синсэйки Эвангэрион, букв. «Евангелие нового столетия», международное название — Neon Genesis Evangelion), или сокращённо «Ева», — аниме-сериал в жанре «меха», снятый режиссёром Хидэаки Анно на студии Gainax и выходивший с 4 октября 1995 по 27 марта 1996 года. Сопродюсерами сериала выступили TV Tokyo и Nihon Ad Systems (NAS). Впоследствии выходило множество произведений по мотивам франшизы, таких как аниме, игры и манга.
                    <br />
                    <br />
                    Режиссёр - {Y("Хидэаки Анно")}<br />
                    Сценарист - {Y("Хидэаки Анно")}<br />
                    Композитор - {Y("Сагису Сиро")}<br />
                </Typography>


                <Typography className={`BellotaFont`}
                    variant='h3'
                    sx={{
                        mt: "10vh",
                        p: 2,
                        color: "white"
                    }}>
                    Сюжетная линия
                </Typography>
                <Typography className={`BellotaFont`}
                    variant='h5'
                    sx={{
                        p: 2,
                        ml: "3vw",
                        borderLeft: "4px dashed #ffca28",
                        borderBottom: "4px dashed #ffca28",
                        color: "white",
                        mb: 3,
                    }}>
                    2015 год, Токио-3. 15 лет назад произошёл Второй удар, в результате чего Антарктида растаяла, Землю накрыла глобальная катастрофа, и большая часть человечества погибла. Теперь планету атакуют Ангелы — загадочные существа, противостоять которым могут только созданные с помощью биотехнологий гигантские роботы серии «Евангелион».
                    <br /><br />
                    14-летний Синдзи Икари направлялся на встречу с отцом, руководителем влиятельной организации NERV, когда Токио-3 подвергся нападению Ангела. С помощью капитана Мисато Кацураги парень добирается до подземной штаб-квартиры NERV и единственное, что он хочет сказать отцу — как сильно его ненавидит. Но на месте выясняется, что Синдзи должен прямо сейчас залезть в робота и сражаться с Ангелом.
                </Typography>



                <Typography className={`BellotaFont`}
                    variant='h3'
                    sx={{
                        mt: "10vh",
                        p: 2,
                        color: "white"
                    }}>
                    Основные персонажи
                </Typography>
                <Typography className={`BellotaFont`}
                    variant='h5'
                    sx={{
                        p: 2,
                        ml: "3vw",
                        borderLeft: "4px dashed #ffca28",
                        borderBottom: "4px dashed #ffca28",
                        color: "white",
                        mb: 3,
                    }}>
                    {Y("Синдзи Икари")} — главный герой «Neon Genesis Evangelion» и назначенный пилот Евангелиона: Модуля-01, третье дитя. На протяжении сериала он страдает от комплекса неполноценности, депрессии, посттравматического расстройства и страха близости. Он сын «погибшего» биоинженера Gehirn Юи Икари и командующего Nerv (а ранее шефа Gehirn) Гэндо Икари. После смерти матери Синдзи был брошен отцом.
                    <br />
                    <br />
                    {Y("Рей Аянами")} ( 綾波レイ, Аянами Рэй) — первое дитя и назначенный пилот Евангелиона: Модуля-00. Нелюдимая и эмоционально холодная девочка, психологически привязанная к людям через вещи (на примере собственной Евы и треснутых очков командующего Nerv).
                    <br />
                    <br />
                    {Y("Аска Лэнгли Сорью")} (яп. 惣流・アスカ・ラングレー ; рус. Сорю Асука Рангурэ) — второе дитя и назначенный пилот Евангелиона: Модуля-02. По сюжету, сформированный к четырнадцати годам комплекс полноценности и пик пубертатного периода нередко доставляют девочке разнообразные проблемы. Трагичное прошлое, сложный характер и противоречивые отношения с немногочисленными товарищами в военной организации Nerv, в частности, с Синдзи Икари, медленно, но верно приводят её к состоянию тяжелой депрессии.
                    <br />
                    <br />
                    {Y("Мисато Кацураги")} (葛城ミサト, Катсураги Мисато) — капитан, а затем майор в Nerv. Она руководит отделением тактических операций в штаб-квартире Nerv, является ответственной за координацию Евангелионов в реальных боевых действиях (в отличие от научного отдела, который возглавляет старая подруга Мисато доктор Рицуко Акаги). Она дочь доктора Кацураги и единственная выжившая из его экспедиции, уничтоженной во время Второго удара.
                    <br />
                    <br />
                    {Y("Гэндо Икари")} (碇 ゲンドウ, Икари Гэндо) — командующий Nerv, муж «погибшей» Юи Икари и эмоционально далёкий от сына отец Синдзи Икари. Первоначально известный как Гэндо Рокубунги, он изменил свою фамилию на Икари после женитьбы на Юи, а затем был назначен главой Gehirn, а позже Nerv, организацией Seele.

                </Typography>




                <Typography className={`BellotaFont`}
                    variant='h3'
                    sx={{
                        mt: "10vh",
                        p: 2,
                        color: "white"
                    }}>
                    Справочник терминов и определений
                </Typography>
                <Typography className={`BellotaFont`}
                    variant='h5'
                    sx={{
                        p: 2,
                        ml: "3vw",
                        borderLeft: "4px dashed #ffca28",
                        borderBottom: "4px dashed #ffca28",
                        color: "white",
                        mb: 3,
                    }}>
                    {Y("Евангелион")} (エヴァンゲリオン, Эвангерион), или Ева для краткости, — гигантская кибернетически модифицированная гуманоидная сущность, созданная организацией Gehirn и её приемником Nerv. И хотя основная цель этого оружия — борьба с Ангелами и предотвращение третьего удара, на самом деле существует более зловещая и скрытая цель их существования.
                    <br />
                    <br />
                    {Y("Ангелы")} (使徒, сито) — неоднозначный термин, который в мифологии «Евангелиона» имеет разные значения в зависимости от контекста. В сериале и других медиа обычно Ангелами называют пятнадцать детей Адама, которых в ходе повествования Nerv систематически уничтожает. Самого Адама, называемого «первым Ангелом», также включают в список его потомков, когда говорят об Ангелах в общем.
                    <br />
                    <br />
                    {Y("Второй удар")} (яп. セカンドインパクト, Секандоинпак:то) — глобальный катаклизм, произошедший 13 сентября 2000 года. Во время этого события в Антарктиде произошёл мощный взрыв, вызвавший таянье полярной ледяной шапки и даже изменивший наклон земной оси. Взрыв привёл к массовым цунами, за которыми последовал резкий рост уровня мирового океана, который затопил большинство прибрежных городов и вызвал катастрофическое изменение глобальных погодных условий.
                    <br />
                    <br />
                    {Y("Nerv")} (ネルフ, Неруфу, с нем. «нерв») — военизированное специальное учреждение, номинально находящимся под контролем Организации Объединённых Наций. Официальная цель Nerv состоит в том, чтобы возглавить защиту человечества против Ангелов и остановить их от инициирования Третьего удара после разрушений, вызванных Адамом во время Второго удара в 2000 году, с помощью Евангелионов, которые были построены этой организацией. Nerv возглавляет командующий Гэндо Икари. Однако, основная задача Nerv состоит в инициации проекта совершенствования человечества.
                    <br />
                    <br />
                    {Y("ГеоФронт")} — публично используемый термин для описания массивной подземной полости, в частности ГеоФронта под Токио-3 (место, где располагался Хаконэ до Второго удара). Однако общественности неизвестно, что ГеоФронт — это на самом деле не естественная структура, а Чёрная Луна Ангела Лилит. Также нераскрытым для общественности было то, что на самом деле в Антарктиде был обнаружен ещё один ГеоФронт, идентичный первому: Белая Луна Адама. Комплекс зданий штаб-квартиры Nerv был построен в центре ГеоФронта, и в действительности вся штаб-квартира Nerv и Токио-3 были построены в Хаконэ вокруг ГеоФронта с Лилит внутри.

                </Typography>




                <Typography className={`BellotaFont`}
                    variant='h3'
                    sx={{
                        mt: "10vh",
                        p: 2,
                        color: "white"
                    }}>
                    Список Евангелионов (Основных)
                </Typography>
                <Typography className={`BellotaFont`}
                    variant='h5'
                    sx={{
                        p: 2,
                        ml: "3vw",
                        borderLeft: "4px dashed #ffca28",
                        borderBottom: "4px dashed #ffca28",
                        color: "white",
                        mb: 3,
                    }}>
                    {Y("Евангелион: Модуль-00")} — первый оперативный Евангелион. Будучи прототипом, Ева-00 первоначально не предназначалась для боёв, но позднее она была усовершенствована и использована против Ангелов.
                    <br />
                    <br />
                    {Y("Евангелион: Модуль-01")} (エヴァンゲリオン初号機, Эвангэрион Сёго:ки),[1] также известный как Ева-01 — флагманская меха саги «Евангелион». Еву-01 пилотирует главный герой сериала Синдзи Икари, а внутри находится душа его матери, Юи Икари.
                    <br />
                    <br />
                    {Y("Евангелион: Модуль-02")}（エヴァンゲリオン弐号機, Эвангерион Ниго:ки）— третий завершённый Евангелион и первая производственная модель. Конструкция Евы-02 якобы исправляет ошибки, допущенные при строительстве прототипа Евы-00 и тестового типа Евы-01, что делает её первым Евангелионом, построенным специально для борьбы с Ангелами.
                    <br />
                    <br />
                    {Y("Евангелионы массового производства")} (エヴァンゲリオン量産機, Эвангерион Рё:санки ) — последние произведённые единицы Евангелионов. Были изготовлены в условиях секретности под наблюдением Seele на семи различных объектах Nerv по всему миру, в том числе в Германии и Китае.
                </Typography>
            </Box>
        </div>
    </>)
}