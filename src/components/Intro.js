import Image from 'next/image'
import React from 'react'

function Intro() {

    const styles = {
        main: "min-h-screen p-10 flex flex-col items-start justify-between",
        headingDiv: "relative flex flex-col items-start w-full",
        headingTop: "absolute flex flex-row items-center space-x-10 w-full",
        heading: "whitespace-nowrap text-[240px]/[220px] 2xl:text-[300px]/[240px] tracking-[10px] 2xl:tracking-[20px]",
        imgDiv: "w-full h-[240px] relative overflow-hidden",
        introImg: "absolute w-full h-full bg-intro bg-center bg-cover",
        headingBottom: "absolute top-[240px] 2xl:top-[260px]",
        logo: "z-20 ml-20 2xl:ml-48",
        bottomDiv: "w-full h-full flex flex-col items-start space-y-10",
        bottomHeading: "text-[#F15C53] font-semibold text-[40px]",
        bottomDesc: "text-[20px] leading-[30px] w-2/3 2xl:w-1/2"
    }

    return (
        <div className={styles.main}>
            <div className={styles.headingDiv}>
                <div className={styles.headingTop}>
                    <h2 className={styles.heading}>PURE</h2>
                    <div className={styles.imgDiv}>
                        <div className={styles.introImg} />
                    </div>
                </div>
                <div className={styles.headingBottom}>
                    <h2 className={styles.heading}>STITCH.CO</h2>
                </div>
                <Image
                    src="https://cdn.discordapp.com/attachments/896756725833678928/1098820872971751545/Artboard_1.png"
                    height={500}
                    width={500}
                    className={styles.logo} /> 
            </div>
            <div className={styles.bottomDiv}>
                <h1 className={styles.bottomHeading}>SUSTAINABLE STYLE</h1>
                <p className={styles.bottomDesc}>We understand that the fashion industry is a significant contributor to environmental problems, and we aim to reduce the industry&apos;s negative impact. The brand&apos;s products are made using recycled materials, bamboo fabrics, and other sustainable materials to minimize waste and reduce carbon emissions.</p>
            </div>
        </div>
    )
}

export default Intro
