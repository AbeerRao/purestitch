import Image from 'next/image'
import React from 'react'

function ShopHome() {

    const styles = {
        main: "flex flex-col items-center text-[#FFFDEB] h-full w-full overflow-x-hidden",
        imgDiv: "w-full h-screen flex items-center justify-center text-center relative",
        img: "bg-shop img-shop",
        textDiv: "absolute flex flex-col items-center justify-between w-full h-full py-5",
        heading: "text-3xl",
        bottomDiv: "mb-40 2xl:mb-60 space-y-10",
        tag: "text-7xl md:text-8xl",
        button: "text-[#FFFDEB] bg-[#F15C53] px-10 py-5 font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition transform duration-300 ease-out",
    }

    return (
        <div className={styles.main}>
            <div className={styles.imgDiv}>
                <div className={styles.img}></div>
                <div className={styles.textDiv}>
                    <h2 className={styles.heading}>purestitch.co</h2>
                    <div className={styles.bottomDiv}>
                        <h2 className={styles.tag}>BAMBOO BUNDLE <br />20% OFF</h2>
                        <button className={styles.button}>New Arrivals</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopHome
