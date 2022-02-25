import type {FC} from "react";
import { Container } from "../../box/absolute-box";
import { BlockSubTitle, BlockTitle } from "../../text/text";
import { FlexSpaceBetween, FlexStartColumn } from "../../box/flex-box";
import {
  ContactInfoSection,
  ContactInfoWrapperLeft,
  ContactInfoText,
  ContactInfoSubtitleLogo,
  ContactInfoWrapperRight,
  ContactInfoContainer,
  ContactInfoTitle,
  ContactInfoDescription,
} from "./contact-info";

const contacts = [
  { id: 1, title: "Address:", info: "481 Creekside Lane Avila CA" },
  { id: 2, title: "Phone:", info: "+53 345 7953 32453" },
  { id: 3, title: "Email:", info: "yourmail@gmail" },
];

const ContactInfo:FC = () => {
  return (
    <ContactInfoSection>
      <Container>
        <BlockSubTitle>Contact Info</BlockSubTitle>
        <FlexSpaceBetween>
          <ContactInfoWrapperLeft>
            <ContactInfoText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti.
            </ContactInfoText>
            <BlockTitle>The Venue</BlockTitle>
            <ContactInfoSubtitleLogo>restaurant</ContactInfoSubtitleLogo>
          </ContactInfoWrapperLeft>
          <ContactInfoWrapperRight>
            <FlexStartColumn>
              {contacts.map((contact) => (
                <ContactInfoContainer key={contact.id}>
                  <ContactInfoTitle>{contact.title}</ContactInfoTitle>
                  <ContactInfoDescription href={contact.info}>
                    {contact.info}
                  </ContactInfoDescription>
                </ContactInfoContainer>
              ))}
            </FlexStartColumn>
          </ContactInfoWrapperRight>
        </FlexSpaceBetween>
      </Container>
    </ContactInfoSection>
  );
};

export default ContactInfo;
