import BambooLinen from '@/components/BambooLinen'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import ShopNow from '@/components/ShopNow'
import Sustainable from '@/components/Sustainable'
import Head from 'next/head'

export default function Home() {

  const styles = {
    main: "min-h-screen bg-[#FFFDEB] w-full text-[#193333] flex flex-col items-center",
  }

  return (
    <>
      <Head>
        <title>Purestitch.co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <Intro />
        <BambooLinen />
        <Sustainable />
        <ShopNow />
        <Footer />
      </div>
    </>
  )
}
