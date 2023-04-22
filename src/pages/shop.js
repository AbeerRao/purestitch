import Header from '@/components/Header'
import ShopHome from '@/components/ShopHome'
import React from 'react'

function shop() {

    const styles = {
        // main: "bg-[#FFFDEB] w-full overflow-x-hidden text-[#193333]",
        main: "min-h-screen bg-[#FFFDEB] w-full text-[#193333] flex flex-col items-center"
    }

    return (
        <div className={styles.main}>
            <Header />
            <ShopHome />
        </div>
    )
}

export default shop
