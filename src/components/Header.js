import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx"

function Header() {

    const styles = {
        main: "fixed sticky top-0 z-50 w-screen bg-[#FFFDEB] flex items-center justify-between px-10 py-3 border-b-2 border-gray-500 text-[#193333]",
        button: "text-4xl cursor-pointer",
        hiddenDiv: "hidden w-full h-screen absolute top-0 left-0 z-50 overflow-hidden",
        container: "bg-[#FFFDEB] w-full h-full flex flex-col items-center",
        top: "flex flex-row items-center justify-between w-full px-10 py-3 border-b-2 border-gray-500",
        bottom: "w-full h-full flex flex-row items-center",
        right: "w-1/2 h-full relative",
        left: "w-1/2 h-full flex flex-col items-start justify-center space-y-10 text-left text-7xl px-20",
        img: "object-cover object-right absolute",
        link: "text-4xl md:text-8xl font-semibold cursor-pointer hover:scale-110 hover:-skew-x-[20deg] transition transform duration-300 ease-in-out"
    }

    const toggleDiv = () => {
        document.getElementById("hiddenDiv").classList.toggle("hidden")
    }

    return (
        <div className={styles.main}>
            <Image
                src="https://cdn.discordapp.com/attachments/896756725833678928/1099189391127216219/As1set_2.png"
                height={40}
                width={40} />
            <button className={styles.button} onClick={() => toggleDiv()}>
                <RxHamburgerMenu />
            </button>
            <div className={styles.hiddenDiv} id="hiddenDiv">
                <div className={styles.container}>
                    <div className={styles.top}>
                        <Image
                            src="https://cdn.discordapp.com/attachments/896756725833678928/1099189391127216219/As1set_2.png"
                            height={40}
                            width={40} />
                        <button className={styles.button} onClick={() => toggleDiv()}>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <Link href="/" onClick={() => toggleDiv()} className={styles.link}>
                                <h2>HOME</h2>
                            </Link>
                            <Link href="/shop" onClick={() => toggleDiv()} className={styles.link}>
                                <h2>SHOP</h2>
                            </Link>
                            <Link href="/" onClick={() => toggleDiv()} className={styles.link}>
                                <h2>SETTINGS</h2>
                            </Link>
                            <Link href="/" onClick={() => toggleDiv()} className={styles.link}>
                                <h2>ACCOUNT</h2>
                            </Link>
                        </div>
                        <div className={styles.right}>
                            <Image
                                src="https://cdn.discordapp.com/attachments/896756725833678928/1098821352573632542/Rectangle_30.png"
                                fill={true}
                                className={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
