import Catalog from '@/components/Catalog'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ShopHome from '@/components/ShopHome'
import Head from 'next/head'
import React from 'react'

function shop() {

    const styles = {
        main: "min-h-screen bg-[#FFFDEB] w-full text-[#193333] flex flex-col items-center overflow-x-hidden",
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
            <Footer />
        </div>
    )
}

export default shop
