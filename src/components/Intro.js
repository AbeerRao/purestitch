import Image from 'next/image'
import React from 'react'
import AnimatedText from 'react-animated-text-content';

function Intro() {

    const styles = {
        main: "min-h-screen p-5 md:p-10 flex flex-col items-start justify-around md:justify-between overflow-x-hidden",
        headingDiv: "relative flex flex-col items-start w-full",
        headingTop: "absolute flex flex-row items-center space-x-10 w-full",
        heading: "whitespace-nowrap text-6xl md:text-[240px]/[220px] 2xl:text-[300px]/[240px] md:tracking-[10px] 2xl:tracking-[20px]",
        imgDiv: "hidden md:block w-full h-[240px] relative overflow-hidden",
        introImg: "absolute w-full h-full bg-intro bg-center bg-cover",
        headingBottom: "absolute top-[60px] md:top-[240px] 2xl:top-[260px]",
        logo: "z-20 mt-8 md:mt-0 md:ml-20 2xl:ml-48",
        bottomDiv: "w-full h-full flex flex-col items-start space-y-10 mb-10 md:mb-0",
        bottomHeading: "text-[#F15C53] font-semibold text-4xl md:text-[40px]",
        bottomDesc: "text-[20px] leading-[30px] w-full md:w-2/3 2xl:w-1/2"
    }

    return (
        <div className={styles.main}>
            <div className={styles.headingDiv}>
                <div className={styles.headingTop}>
                    <AnimatedText
                        className={styles.heading}
                        type="words"
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="block"
                        interval={0.06}
                        duration={2}
                        tag="h2"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%" >
                            PURE
                    </AnimatedText>
                    <div className={styles.imgDiv}>
                        <div className={styles.introImg} />
                    </div>
                </div>
                <div className={styles.headingBottom}>
                    <AnimatedText
                        className={styles.heading}
                        type="words"
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="block"
                        interval={0.06}
                        duration={2}
                        tag="h2"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%" >
                            STITCH.CO
                    </AnimatedText>
                </div>
                <Image
                    src="https://cdn.discordapp.com/attachments/896756725833678928/1098820872971751545/Artboard_1.png"
                    height={500}
                    width={500}
                    className={styles.logo} /> 
            </div>
            <div className={styles.bottomDiv}>
                <AnimatedText
                    className={styles.bottomHeading}
                    type="words"
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="wave"
                    interval={1}
                    duration={1}
                    tag="h2"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%" >
                        SUSTAINABLE STYLE
                </AnimatedText>
                <p className={styles.bottomDesc}>We understand that the fashion industry is a significant contributor to environmental problems, and we aim to reduce the industry&apos;s negative impact. The brand&apos;s products are made using recycled materials, bamboo fabrics, and other sustainable materials to minimize waste and reduce carbon emissions.</p>
            </div>
        </div>
    )
}

export default Intro
