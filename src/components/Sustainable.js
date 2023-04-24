import React from 'react'

function Sustainable() {

    const styles = {
        main: "min-h-screen flex flex-col items-center justify-center p-10 md:mt-20 mt-64",
        centerDiv: "relative w-full md:h-full h-[700px] flex flex-col items-center justify-center",
        phoneHeading: "mb-[900px] text-5xl md:hidden",
        headingTop: "hidden md:block md:text-[150px]/4 2xl:text-[170px]/4 md:tracking-[15px] 2xl:tracking-[25px]",
        headingBottom: "hidden md:block md:text-[200px] 2xl:text-[240px] md:tracking-[10px] 2xl:tracking-[10px]",
        imageDiv: "absolute flex md:flex-row flex-col md:space-x-10 space-y-10 md:space-y-0 items-center justify-around w-full h-full md:bottom-20 2xl:px-64",
        imageBox: "group w-[300px] h-1/2 flex items-center justify-center text-center relative overflow-hidden rounded-2xl cursor-pointer",
        img1: "bg-nylon img-sus",
        img2: "bg-cotton img-sus",
        imgText1: "img-text text-[#FFFDEB]",
        imgText2: "img-text",
    }

    return (
        <div className={styles.main}>
            <div className={styles.centerDiv}>
                <h2 className={styles.phoneHeading}>SUSTAINABLE MATERIALS</h2>
                <h2 className={styles.headingTop}>SUSTAINABLE</h2>
                <h2 className={styles.headingBottom}>MATERIALS</h2>
                <h2 className={styles.headingTop}>SUSTAINABLE</h2>
                <h2 className={styles.headingBottom}>MATERIALS</h2>
                <div className={styles.imageDiv}>
                    <div className={styles.imageBox}>
                        <div className={styles.img1}></div>
                        <div className={styles.imgText1}><h2>Plant based Nylon</h2></div>
                    </div>
                    <div className={styles.imageBox}>
                        <div className={styles.img2}></div>
                        <div className={styles.imgText2}><h2>Recycled Cotton</h2></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sustainable
