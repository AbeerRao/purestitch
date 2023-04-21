import Intro from '@/components/Intro'
import Head from 'next/head'

export default function Home() {

  const styles = {
    main: "bg-[#FFFDEB] w-full overflow-x-hidden text-[#193333]"
  }

  return (
    <>
      <Head>
        <title>Purestitch.co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Intro />
      </div>
    </>
  )
}
