import Catalog from '@/components/Catalog'
import Header from '@/components/Header'
import ShopHome from '@/components/ShopHome'
import Head from 'next/head'
import React from 'react'

function shop() {

    const styles = {
        main: "min-h-screen bg-[#FFFDEB] w-full text-[#193333] flex flex-col items-center",
        container: "flex flex-row items-start justify-between w-full h-full"
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>Purestitch Shop</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <ShopHome />
            <Catalog />
        </div>
    )
}

export default shop
