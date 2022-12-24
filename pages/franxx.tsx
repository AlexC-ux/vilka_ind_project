import { Box, Typography } from "@mui/material";
import animejs from "animejs";
import React from "react";
import { useEffect } from "react";
import YellowText from "../Modules/YellowText";
import FranxxLogo from "../SVGR/franxx_logo_svg";
import FranxxText from "../SVGR/franxx_svg";
import Y from "../Modules/YellowText";

export default function FranksPage() {

    const divHider = React.createRef<HTMLDivElement>();

    useEffect(() => {
        divHider.current!.classList.remove("hidden");
        animejs({
            targets: ["div.franxxLogoBox path"],
            strokeDashoffset: [animejs.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 10000,
            delay: function (el, i) { return i * 50 },
            direction: 'normal',
        })
        animejs({
            targets: ["div.franxxLogo path"],
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
                    className="franxxLogoBox"
                    sx={{
                        svg: {
                            mx: "auto",
                            display: "block",
                            maxHeight: "10rem",
                            mt: 4,
                        }
                    }}>
                    <FranxxText />
                </Box>
                <Box
                    className="franxxLogo"
                    sx={{
                        svg: {
                            mx: "auto",
                            display: "block",
                            maxHeight: "10rem",
                            height: "40vw",
                            mt: 4,
                        }
                    }}>
                    <FranxxLogo />
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
                        mb:3,
                    }}>
                        {Y("Darling in the Franxx")} (яп. ダーリン・イン・ザ・フランキス Да:рин ин дза фуранкису, досл. «Милый во Франксе») — оригинальный {Y("аниме-сериал в жанре фантастики")}, выпущенный студиями Trigger, Clowerworks и A-1 Pictures 13 января 2018 года. Сериал анонсировали в июле на панели Trigger Anime Expo 2017.  транслировавшийся на различных телеканалах Японии в период с 13 января по 7 июля 2018 года. 
                    <br/>
                    {Y("14 января в журнале Shonen Jump+ была начата публикация манга-адаптации")} от иллюстратора Кэнтаро Ябуки. В этом же журнале в период трансляции сериала осуществлялась публикация комедийной ёнкомы от мангаки {Y("mato")}.
                    <br/>
                    <br/>
                    Режиссёр сериала — {Y("Ацуси Нисигори")}
                    <br/>
Сценарист — {Y("Наотака Хаяси")}
<br/>
Композиторы — {Y("Асами Татибана")} и {Y("Сугияма Кацухико")}
<br/>
Также вышла однотомная Ёнкома 14 января - 11 июля 2018 года за авторством {Y("Mato")}

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
                        mb:3,
                    }}>

                    {Y("Д")}ействие сериала разворачивается в недалёком будущем. Таинственная организация APE, занимающаяся разработкой магма-энергии, захватывает власть над миром. Благодаря разработкам доктора Вернера Франкса, работающего на APE, создаётся эликсир бессмертия, побочным эффектом которого является притупление эмоциональной сферы и потеря сексуального влечения. Тем временем интенсивная разработка магма-энергии приводит к опустыниванию планеты. Через некоторое время все оставшиеся люди переселяются в закрытые автоматизированные города-плантации.
                    <br/>
                    <br/>
                    {Y("О")}днако, вскоре на людей нападает подземная цивилизация керью, для борьбы с которой создаются биомеханоиды-Франксы, работающие на магма-топливе и сексуальной магии. Для управления ими создаются дети-солдаты, «паразиты», живущие в особых лагерях-садах.
                    <br />
                    <br />
                    {Y("С")}южет разворачивается вокруг отряда 13, а особенно вокруг главного героя - кода 016( Хиро ), который в детстве был подающим большие надежды пилотом, однако позже растерявшим таланты. Незадолго перед церемонией посвящения в полноценные пилоты на плантацию прибывает доктор Франкс вместе с особо мощным Франксом — Стрелицией, и загадочной девушкой-паразитом Зеро-Ту. Зеро-Ту, имеющая код 002, фактически является самым способным пилотом Франксов. Однако расплатой за это является то, что любой партнёр Зеро-Ту погибает после трёх вылетов с ней. Вскоре Зеро-Ту как бы случайно встречается с Хиро (встреча и последующие события, свёвшие вместе Зеро-Ту и Хиро, были слишком явно подстроены и разыграны начальcтвом), и когда её предыдущий партнёр погибает, то предлагает Хиро пилотировать вместе с ней. Внезапно Хиро оказывается не в меру живучим, и становится постоянным партнёром Зеро-Ту. Им предстоит пройти множество испытаний, чтобы обрести счастливый конец.
                </Typography>






                <Typography className={`BellotaFont`}
                    variant='h3'
                    sx={{
                        mt: "10vh",
                        p: 2,
                        color: "white"
                    }}>
                    Словарь терминов и определений
                </Typography>
                <Typography className={`BellotaFont`}
                    variant='h5'
                    sx={{
                        p: 2,
                        ml: "3vw",
                        borderLeft: "4px dashed #ffca28",
                        borderBottom: "4px dashed #ffca28",
                        color: "white",
                        mb:3,
                    }}>

{Y("Магма-топливо")} — источник энергии для всего и вся. Его масштабная разработка превратила землю в пустыню, и натравила на людей расу магмазавров.
<br/>
<br/>
{Y("Клаксосапиенс")} — Представитель древней расы разумных гуманоидов-рептилоидов, обитавших на Земле миллионы лет тому назад. Были почти полностью разгромлены в войне с Вирмами. Смогли тем не менее, отразить первое нападение, создав клаксозавров и машину судного дня, называемую «Звёздное Тело».
<br/>
<br/>
{Y("Клаксозавры")} (они же магмазавры, ревозавры, ревущие драконы, керью и т. д.) — Враждебные биомеханоиды. Действуют вроде бы инстинктивно, привлекаясь магма-топливом. Тело клаксозавра является видоизменённым телом самки клаксосапиенса, а его ядро — видоизменённым самцом, так случилось в процессе эволюции и долгих войн.
<br/>
<Box
sx={{
    pl:7
}}>
{Y("Классы клаксозавров")}:
<Box
sx={{
    pl:7
}}>
{Y("Класс Конрад")} — малый размер.
<br/>
{Y("Класс Мохо")} — средний размер.
<br/>
{Y("Класс Гутенберг")} — крупный размер.
<br/>
{Y("Класс Большой Леманн")} — гигантский размер.
<br/>
{Y("Червь")} — официально не совсем класс.
<br/>
Выглядит как червеобразное существо, перемещается в основном под землёй.
</Box>
</Box>
<br/>
<br/>
{Y("Звёздное Тело")} — машина судного дня клаксосапиенсов размером с небольшой планетоид. Зеро-Ту была выращена для воплощения одного из возможных планов её захвата. К сожалению (для Вирмов), всё пошло немного не так.
<br/>
<br/>
{Y("Гран Кривас")} — База клаксозавров, где было спрятано Звёздное Тело. Его поиском, а затем захватом APE занимались большую часть сериала и манги.
<br/>
<br/>
{Y("Франкс")} — меха-биомеханоид, выращиваемая из клаксозавров. Работает на магма-топливе и сексуальной магии, используется как основное оружие для их истребления клаксозавров. Из-за своего происхождения и принципов работы Франкс имеет вид кавайной куклы. Может пилотироваться паразитами.
<br/>
<br/>             
{Y("Плантация")} — мобильный город людей. Ездят на гусеницах по пустоши, в которую превратилась поверхность Земли. В качестве источника энергии используют магма-топливо.
<br/>
<br/>
{Y("Взрослые")} — Полноценные граждане плантаций. Отличаются биологическим бессмертием и поголовной наркоманией, лишены сексуального влечения и вообще отличаются деградировавшей эмоциональной сферой. Более дельные вкалывают на заводах и в офисах либо служат в местной полиции, остальные проводят большую часть жизни в аппаратах, где им стимулируют нервные центры удовольствия.
<br/>
<br/>
{Y("Дети")} — Выращиваемые на пушечное мясо пилоты Франксов. Проходят процедуру инъекции жёлтых кровяных телец, однако не получают бессмертия. Выжившие в ходе медицинских процедур и не забракованные в ходе испытаний при достижения подросткового возраста переводятся в пилотов Франксов, так называемых Паразитов, название видимо намекает на то, что они паразитируют на живых и некогда разумных клаксозаврах, переделанных в Франксы. Паразиты пилотируют Франксы вдвоём, юноши-пилоты называются тычинками, а девушки — пестиками. Немногие доживающие до взрослого возраста паразиты переводятся в офицеров, и занимают промежуточное положение между паразитами и взрослыми.
<br/>
<br/>
{Y("Мистилтейн")} или {Y("Птичья клетка")} — Отделения города для проживания паразитов, где для поддержания у них эмоциональной сферы им воссозданы более-менее природные условия.
<br/>
<br/>
{Y("Сад")} — Фабрика по выращиванию новых детей.
<br/>
<br/>
{Y("APE")}(эйп) — Мегакорпорация, захватившая власть над Землёй, и установившая над ней свои порядки.
<br/>
<br/>
{Y("Семь Мудрецов")}, они же {Y("Совет Ламарка")} — Лидеры APE. Носят полностью скрывающие тела белые мантии и металлические маски, золотого цвета, напоминающие обезьян. Вместо имён используют названия одного из видов обезьян. Название «Совет Ламарка», вероятно, отсылает к альтернативной теории эволюции Ламарка, и означает, что члены совета взяли эволюцию человечества в свои руки. Трое из них позже оказываются посланцами расы Вирм, чьей задачей является захват Звёздного Тела и подготовка человечества к поглощению Вирмами.
<br/>
<br/>
{Y("Протокол 32")} — Особый пункт идеологии APE, позволяющий жертвовать отдельными людьми (от отдельных паразитов до целых плантаций) ради сохранения человечества (как это понимают APE) и победы над клаксозаврами. На практике получается когда как.
<br/>
<br/>
{Y("Вирм")} — Раса бестелесных существ с коллективным разумом, желающая причинять всем счастье и наносить пользу, при этом не особо считаясь с методами и побочными эффектами. Клаксосапиенсы, а потом и люди-паразиты настолько не хотели их осчастливливания, что воевали с ними до последнего.</Typography>

                <Typography className={`BellotaFont`}
                    variant='h3'
                    sx={{
                        mt: "10vh",
                        p: 2,
                        color: "white"
                    }}>
                    Список Франксов
                </Typography>
                <Typography className={`BellotaFont`}
                    variant='h5'
                    sx={{
                        p: 2,
                        ml: "3vw",
                        borderLeft: "4px dashed #ffca28",
                        borderBottom: "4px dashed #ffca28",
                        color: "white",
                        mb:3,
                    }}>
{Y("Стрелиция")} — Пилотируется Зеро-Ту и её очередным Милым-смертником, которого обычно хватает максимум на 3 вылета. Является уникальным Франксом, который по-началу, возможно, был прикреплён к Отряду Девяток, и который потом возили от плантации к плантации в поисках особо сильных клаксозавров и очередного влюблённого камикадзе, готового умереть ради того, чтобы синхронизироваться с рогатой протагонисткой. Главный герой Хиро оказался слишком живучим, и потому использовался в качестве тычинки много раз, а Стрелицию было решено приставить к Отряду 13. В конце Стрелиция слилась со Звёздным Телом, превратившись в Стрелицию Апас .
<br/>
<br/>
{Y("Дельфиниум")} — Франкс отряда 13, пилотируется пестиком Ичиго (она же Код 015) и Горо (он же Код 056).
<br/>
<br/>
{Y("Хлорофитум")} — Франкс отряда 13, пилотируется пестиком Икуно (она же Код 196) и по-началу Мицуру (он же Код 326), а затем Футоси (он же Код 214). 
<br/>
<br/>
{Y("Гениста")} — Франкс отряда 13, (другой вариант перевода названия — Дрок) пилотируется пестиком Кокоро (она же Код 556) и по-началу Футоси (он же Код 214), а в последствии Мицуру (он же Код 326). Единственный Франкс, которая дерётся не сколько в рукопашную, а атакует врагов выстрелами на расстоянии. В манге после замены пилотов устраивает боевой стриптиз, избавляясь от мешающей не то одежды, не то части тела... попробуй разберись, чем было это недоплатье на биомеханоиде.
<br/>
<br/>
{Y("Аргента")} — Франкс отряда 13, пилотируется пестиком Мику (Код 390) и Зороме (Код 666).
<br/>
<br/>
{Y("Модель 9")} — Франксы отряда 9. В последних сериях получают неожиданный апгрейд со способностью летать в космос.
<br/>
<br/>
{Y("Стандартный Франкс")} — используется большинством отрядов паразитов. Отряды 13 и 9 являются особыми, и потому используют особые Франксы.
<br/>
<br/>
                    </Typography>
            </Box>
        </div>
    </>)
}