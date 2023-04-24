import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "firebase.js"
import { doc, getDoc, setDoc } from "firebase/firestore";
import AnimatedText from 'react-animated-text-content';

const provider = new GoogleAuthProvider();
let user = auth.currentUser

const signin = async () => {
    const result = await signInWithPopup(auth, provider);
    const userRef = doc(db, "users", result?.user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        console.log(".")
    } else {
        await setDoc(doc(db, "users", result?.user.uid), {
            name: result?.user.displayName,
            email: result?.user.email,
        })
    }
    
    user = result?.user
}

function Header() {

    const styles = {
        main: "fixed sticky top-0 z-50 w-screen bg-[#FFFDEB] flex items-center justify-between px-10 py-3 border-b-2 border-gray-500 text-[#193333]",
        button: "text-4xl cursor-pointer",
        hiddenDiv: "hidden w-full h-screen absolute top-0 left-0 z-50 overflow-hidden",
        container: "bg-[#FFFDEB] w-full h-full flex flex-col items-center",
        top: "flex flex-row items-center justify-between w-full px-10 py-3 border-b-2 border-gray-500",
        bottom: "w-full h-full flex flex-row items-center",
        right: "w-1/2 h-full relative hidden md:block",
        left: "w-full md:w-1/2 h-full flex flex-col items-start justify-center space-y-5 md:space-y-10 text-left text-7xl px-20",
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
                            <RxCross1 />
                        </button>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <Link href="/" onClick={() => toggleDiv()}>
                            <AnimatedText
                                className={styles.link}
                                type="words"
                                animation={{
                                    x: '200px',
                                    y: '-20px',
                                    scale: 0,
                                    ease: 'ease-in-out',
                                }}
                                animationType="wave"
                                interval={0.06}
                                duration={2}
                                tag="h2"
                                includeWhiteSpaces
                                threshold={0.1}
                                rootMargin="20%" >
                                    HOME
                            </AnimatedText>
                            </Link>
                            <Link href="/shop" onClick={() => toggleDiv()}>
                                <AnimatedText
                                    className={styles.link}
                                    type="words"
                                    animation={{
                                        x: '200px',
                                        y: '-20px',
                                        scale: 0,
                                        ease: 'ease-in-out',
                                    }}
                                    animationType="wave"
                                    interval={0.06}
                                    duration={2}
                                    tag="h2"
                                    includeWhiteSpaces
                                    threshold={0.1}
                                    rootMargin="20%" >
                                        SHOP
                                </AnimatedText>
                            </Link>
                            <Link href="/" onClick={() => toggleDiv()}>
                                <AnimatedText
                                    className={styles.link}
                                    type="words"
                                    animation={{
                                        x: '200px',
                                        y: '-20px',
                                        scale: 0,
                                        ease: 'ease-in-out',
                                    }}
                                    animationType="wave"
                                    interval={0.06}
                                    duration={2}
                                    tag="h2"
                                    includeWhiteSpaces
                                    threshold={0.1}
                                    rootMargin="20%" >
                                        SETTINGS
                                </AnimatedText>
                            </Link>
                            {user ? (
                                <Link href="/">
                                    <AnimatedText
                                        className={styles.link}
                                        type="words"
                                        animation={{
                                            x: '200px',
                                            y: '-20px',
                                            scale: 0,
                                            ease: 'ease-in-out',
                                        }}
                                        animationType="wave"
                                        interval={0.06}
                                        duration={2}
                                        tag="h2"
                                        includeWhiteSpaces
                                        threshold={0.1}
                                        rootMargin="20%" >
                                            ACCOUNT
                                    </AnimatedText>
                                </Link>
                            ) : (
                                <AnimatedText
                                    className={styles.link}
                                    type="words"
                                    animation={{
                                        x: '200px',
                                        y: '-20px',
                                        scale: 0,
                                        ease: 'ease-in-out',
                                    }}
                                    animationType="wave"
                                    interval={0.06}
                                    duration={2}
                                    tag="h2"
                                    includeWhiteSpaces
                                    threshold={0.1}
                                    rootMargin="20%"
                                    onClick={signin} >
                                        LOGIN
                                </AnimatedText>
                            )}
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
