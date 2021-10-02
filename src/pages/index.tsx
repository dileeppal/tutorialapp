import Head from 'next/head'
import HeroSection from "../components/HeroSection"


export default function Home() {
  return (
    <>
      <Head>
        <title>Baretutorials</title>
        <meta name="description" content="Tutorial site for learning web and software development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <HeroSection />
      </main>

      
    </>
  )
}
