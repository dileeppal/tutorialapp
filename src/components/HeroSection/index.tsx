import React, { useState } from 'react'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles";

import { Button } from "../Button/styles"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src="" />
        </HeroBg>
        <HeroContent>
            <HeroH1>testing somethings</HeroH1>
            <HeroP>something else will go here</HeroP>
            <HeroBtnWrapper>
                <Button to="" onMouseEnter= {onHover} onMouseLeave={onHover} primary="true" dark="true">
                    get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection
