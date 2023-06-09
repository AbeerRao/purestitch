import Image from 'next/image'
import React from 'react'
import AnimatedText from 'react-animated-text-content';

function ShopNow() {

    const styles = {
        main: "min-h-screen flex flex-col items-center justify-center space-y-10 w-full px-5 md:px-20 mt-40",
        heading: "text-5xl w-full md:text-center",
        button: "text-[#FFFDEB] bg-[#F15C53] px-10 py-5 font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition transform duration-300 ease-out w-full md:w-min",
        bottomDiv: "w-full h-full flex-1 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-20 2xl:space-x-0 2xl:justify-around",
        imageDiv: "w-full md:w-1/3 2xl:w-1/4 h-[500px] 2xl:h-[700px] bg-red-400 relative rounded-2xl overflow-hidden group cursor-pointer",
        image: "absolute rounded-2xl group-hover:scale-110 transition transform duration-300 ease-out object-cover object-center"
    }

    return (
        <div className={styles.main}>
            <AnimatedText
                className={styles.heading}
                type="words"
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="wave"
                interval={0.06}
                duration={2}
                tag="h2"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%" >
                    SHOP NOW
            </AnimatedText>
            <button className={styles.button}>Catalog</button>
            <div className={styles.bottomDiv}>
                <div className={styles.imageDiv}>
                    <Image
                        src="https://cdn.discordapp.com/attachments/896756725833678928/1098822112250187837/photo-1615310748170-29d7088865ad.png"
                        fill={true}
                        className={styles.image} />
                </div>
                <div className={styles.imageDiv}>
                    <Image
                        src="https://cdn.discordapp.com/attachments/896756725833678928/1098822166537060392/photo-1532920161727-344adb090f7f.png"
                        fill={true}
                        className={styles.image} />
                </div>
                <div className={styles.imageDiv}>
                    <Image
                        src="https://cdn.discordapp.com/attachments/896756725833678928/1098822227199283241/premium_photo-1679430670295-688b3e0d599b.png"
                        fill={true}
                        className={styles.image} />
                </div>
            </div>
        </div>
    )
}

export default ShopNow
