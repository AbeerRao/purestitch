import React from 'react'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {

    const styles = {
        main: "bg-[#193333] w-full text-[#FFFDEB] flex flex-row items-center justify-between p-20 mt-40",
        footerLeft: "w-full flex flex-col items-start justify-around space-y-16",
        heading: "text-5xl",
        socials: "flex flex-row items-center w-full space-x-7",
        socialIcon: "text-3xl cursor-pointer hover:scale-110 transition transform duration-300 ease-in-out hover:skew-y-12",
        footerRight: "w-full h-full flex flex-col items-start space-y-16",
        rightTop: "w-full space-y-2",
        contact: "flex flex-col items-start text-sm font-light text-gray-500",
        rightBottom: "w-full h-full space-y-2 flex flex-col items-start",
        links: "w-full flex flex-row items-center space-x-10 text-sm font-light text-gray-500"
    }

    return (
        <div className={styles.main}>
            <div className={styles.footerLeft}>
                <div>
                    <h2 className={styles.heading}>purestitch.co</h2>
                </div>
                <div className={styles.socials}>
                    <AiFillYoutube className={styles.socialIcon} />
                    <AiOutlineTwitter className={styles.socialIcon} />
                    <FaLinkedinIn className={styles.socialIcon} />
                </div>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.rightTop}>
                    <div>
                        <h2>GET IN TOUCH</h2>
                    </div>
                    <div className={styles.contact}>
                        <p>xyz@gmail.com</p>
                        <p>000-000-000</p>
                    </div>
                </div>
                <div className={styles.rightBottom}>
                    <div>
                        <h2>EXPLORE</h2>
                    </div>
                    <div className={styles.links}>
                        <h1>HOME</h1>
                        <h1>SHOP</h1>
                        <h1>CONTACT</h1>
                        <h1>ACCOUNT</h1>
                        <h1>SETTINGS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
