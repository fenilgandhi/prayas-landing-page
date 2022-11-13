import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from 'mdb-react-ui-kit';


export default function SectionReferences() {
    const title = 'References';
    const members = [
        "Shree Kantibhai Kapasi ( Kapasi Handicraft )",
        "Shree Ashwinbhai Shah ( Kamal Leggings )",
        "Shree Rajeshbhai P Shah (Lokhandwala)",
        "Shree Pradipbhai Joisar ( DJ Toyota )",
    ];
    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='6' offsetMd={3}>
                        <MDBTypography className='display-3 text-success text-center my-5'>
                            <i>{title}</i>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                    <MDBRow>

                        {
                            members.map((member, index) =>
                                <MDBCol md='6' key={index}>
                                    <MDBCard shadow='0' border='info' background='white' className='mb-3'>
                                        {/* <MDBCardHeader></MDBCardHeader> */}
                                        <MDBCardBody>
                                            <MDBCardTitle>{member}</MDBCardTitle>
                                            <MDBCardText>

                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            )
                        }
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
        </section>
    );
}
