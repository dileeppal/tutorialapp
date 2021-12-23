import React from 'react'
import NextImage from "next/image";

import LeftSideBar from '../Dashboard/LeftSideBar'
import SmallFooter from '../Dashboard/SmallFooter'
import Topbar from '../Dashboard/TopBar'
import Button from '../Auth/Button'
import {
    PageContainer,
    InnerContainer,
    PageRightSide,
    PageHeading,
    // PageWrapper,
} from "../../styles/common.styles";
import {
    ContactUsWrapper,
    ContactUsColumn,
    ContactUsForm,
    ContactUsDetail,
    ContactUsGroup,
    ContactUsLabel,
    ContactUsInput,
    ContactUsTextarea,
    ContactUsRow,
    PageSubHeading,
    ContactUsDetailGroup,
} from "./contact.styles";

import { MapMarker } from "../../../public/assets/icons/MapMarker";
import { Phone } from "../../../public/assets/icons/Phone";
import { Employee } from "../../../public/assets/icons/Employee";


function ContactUsPage() {
    return (
        <>
            <PageContainer>
                <LeftSideBar />
                <InnerContainer>
                    <Topbar />
                    <PageHeading>Contact Us</PageHeading>
                    <ContactUsWrapper>
                        <ContactUsColumn>
                            <ContactUsForm>
                                <PageSubHeading>Fill the form It's easy</PageSubHeading>
                                <ContactUsRow>
                                    <ContactUsGroup>
                                        <ContactUsLabel>First name</ContactUsLabel>
                                        <ContactUsInput type="text" placeholder='First name' />
                                    </ContactUsGroup>
                                    <ContactUsGroup>
                                        <ContactUsLabel>Last name</ContactUsLabel>
                                        <ContactUsInput type="text" placeholder='Last name' />
                                    </ContactUsGroup>
                                    <ContactUsGroup style={{ width: "100%"}}>
                                        <ContactUsLabel>Email address</ContactUsLabel>
                                        <ContactUsInput type="email" placeholder='Email address' />
                                    </ContactUsGroup>
                                    <ContactUsGroup style={{ width: "100%"}}>
                                        <ContactUsLabel>Comment</ContactUsLabel>
                                        <ContactUsTextarea placeholder='Comment' />
                                    </ContactUsGroup>
                                    <ContactUsGroup style={{ width: "100%", marginBottom: "0"}}>
                                        <Button content="Submit" />
                                    </ContactUsGroup>
                                </ContactUsRow>
                            </ContactUsForm>
                        </ContactUsColumn>
                        <ContactUsColumn>
                            <ContactUsDetail>
                                <NextImage
                                    src="/assets/images/my_location.svg"
                                    alt="404 image"
                                    width={600}
                                    height={620}
                                    layout="responsive"
                                    />
                                {/* <PageSubHeading>Contact information</PageSubHeading>
                                <ContactUsDetailGroup>
                                    <MapMarker />
                                    <div className='detail'>
                                        <h2>Address</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </ContactUsDetailGroup>
                                <ContactUsDetailGroup>
                                    <Phone />
                                    <div className='detail'>
                                        <h2>Phone</h2>
                                        <p>(+800)5454812548</p>
                                    </div>
                                </ContactUsDetailGroup>
                                <ContactUsDetailGroup>
                                    <Employee />
                                    <div className='detail'>
                                        <h2>Phone</h2>
                                        <p>(+800)5454812548</p>
                                    </div>
                                </ContactUsDetailGroup> */}
                            </ContactUsDetail>
                        </ContactUsColumn>
                    </ContactUsWrapper>
                    <SmallFooter />
                </InnerContainer>
                {/* <PageRightSide>Live Forever Young</PageRightSide> */}
            </PageContainer>
        </>
    );
}

export default ContactUsPage
