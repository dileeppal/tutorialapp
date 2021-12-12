import React from 'react'
import {
    ServiceSection,
    ServiceContainer,
    ServiceH1,
    ServiceWrapper,
    ServicesColumn,
    ServicesCard,
    ServiceIcon,
    ServiceH2,
    ServiceP,
} from "./styles";

const ServiceCard = () => {
    return (
        <ServiceSection>
            <ServiceContainer>
                <ServiceH1>What We Offer</ServiceH1>
                <ServiceWrapper>
                    <ServicesColumn>
                        <ServicesCard>
                            <ServiceIcon src="/assets/images/learning3.svg" />
                            <ServiceH2>What We Offer</ServiceH2>
                            <ServiceP>What We Offer blah blah blah</ServiceP>
                        </ServicesCard>
                    </ServicesColumn>
                    <ServicesColumn>
                        <ServicesCard>
                            <ServiceIcon src="/assets/images/learning3.svg" />
                            <ServiceH2>What We Offer</ServiceH2>
                            <ServiceP>What We Offer blah blah blah</ServiceP>
                        </ServicesCard>
                    </ServicesColumn>
                    <ServicesColumn>
                        <ServicesCard>
                            <ServiceIcon src="/assets/images/learning3.svg" />
                            <ServiceH2>What We Offer</ServiceH2>
                            <ServiceP>What We Offer blah blah blah</ServiceP>
                        </ServicesCard>
                    </ServicesColumn>
                </ServiceWrapper>
            </ServiceContainer>
        </ServiceSection>
    );
}

export default ServiceCard
