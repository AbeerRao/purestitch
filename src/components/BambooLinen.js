import Image from 'next/image'
import React from 'react'
import AnimatedText from 'react-animated-text-content';

function BambooLinen() {

    const styles = {
        main: "md:min-h-screen flex flex-col items-center justify-center space-y-20 mt-20",
        centerDiv: "w-full h-full flex flex-col items-center justify-center",
        headingTop: "md:relative text-[#F15C53] text-5xl md:text-[200px]/[220px] 2xl:text-[260px]/[240px] tracking-[10px] 2xl:tracking-[10px]",
        heaginBottom: "md:relative text-[#F15C53] text-7xl md:text-[300px]/[220px] 2xl:text-[380px]/[300px] tracking-[15px] 2xl:tracking-[25px]",
        img: "md:absolute rounded-2xl border-2 border-white shadow-2xl mt-5 md:mt-0",
        infoDiv: "w-full h-full flex flex-col items-center justify-center",
        infoDesc: "w-4/5 md:w-1/3 text-center text-[20px] 2xl:w-1/4"
    }

    return (
        <div className={styles.main}>
            <div className={styles.centerDiv}>
                <AnimatedText
                    className={styles.headingTop}
                    type="words"
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="rifle"
                    interval={0.06}
                    duration={2}
                    tag="h2"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%" >
                        BAMBOO
                </AnimatedText>
                <AnimatedText
                    className={styles.heaginBottom}
                    type="words"
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="rifle"
                    interval={0.06}
                    duration={2}
                    tag="h2"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%" >
                        LINEN
                </AnimatedText>
                <Image
                    src="https://cdn.discordapp.com/attachments/896756725833678928/1098821567179391087/7143-031ST.png"
                    height={200}
                    width={200}
                    className={styles.img} /> 
            </div>
            <div className={styles.infoDiv}>
                <h2 className={styles.infoDesc}>Bamboo Fabric is considered to be the trendiest sustainable fabric in the fashion world.</h2>
            </div>
        </div>
    )
}

export default BambooLinen
