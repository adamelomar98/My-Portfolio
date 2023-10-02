import React from "react";

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
// import { Tailwind } from "@react-email/tailwind";
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>

      <Body>
        <Container>
          <Section>
            <Heading style={{ fontSize: "16px" }}>
              You received the following message from the contact form
            </Heading>
            <Text style={{ fontSize: "24px" }}>{message}</Text>
            <Hr />
            <Text>The sender email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
      {/* </Tailwind> */}
    </Html>
  );
}
