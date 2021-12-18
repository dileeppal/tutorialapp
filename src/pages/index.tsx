import Head from "next/head";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import ServicesCard from "../components/ServiceCard"
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/MainSection/Data";
import { withApollo } from "utils/withApollo";
import NavDropDown from 'components/NavDropDown';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import { useState } from 'react';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle: any = () => {
    setIsOpen(!isOpen);
  };
  
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
        <NavDropDown toggle={toggle} isOpen={isOpen} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <MainSection {...homeObjOne} />
        <ServicesCard />
        <MainSection {...homeObjTwo} />
        <MainSection {...homeObjThree} />
        <Footer />
      </main>
    </>
  );
}
export default withApollo({ ssr: false })(Home);
