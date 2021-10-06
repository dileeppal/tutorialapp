import Head from "next/head";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import ServicesCard from "../components/ServiceCard"
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/MainSection/Data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baretutorials</title>
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <MainSection {...homeObjOne} />
        <ServicesCard />
        <MainSection {...homeObjTwo} />
        <MainSection {...homeObjThree} />
      </main>
    </>
  );
}
