import React from 'react'

function Sustainable() {

    const styles = {
        main: "min-h-screen flex flex-col items-center justify-center p-10 mt-20",
        centerDiv: "relative w-full h-full flex flex-col items-center justify-center",
        headingTop: "text-[150px]/4 2xl:text-[170px]/4 tracking-[15px] 2xl:tracking-[25px]",
        headingBottom: "text-[200px] 2xl:text-[240px] tracking-[10px] 2xl:tracking-[10px]",
        imageDiv: "absolute flex flex-row space-x-10 items-center justify-around w-full h-full bottom-20 2xl:px-64",
        imageBox: "group w-[300px] h-1/2 flex items-center justify-center text-center relative overflow-hidden rounded-2xl cursor-pointer",
        img1: "bg-nylon img-sus",
        img2: "bg-cotton img-sus",
        imgText1: "img-text text-[#FFFDEB]",
        imgText2: "img-text",
    }

    return (
        <div className={styles.main}>
            <div className={styles.centerDiv}>
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
